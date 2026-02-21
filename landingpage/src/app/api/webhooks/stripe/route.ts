import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { stripe } from '@luahana/payments'
import { createAdminClient } from '@/lib/supabase/admin'
import Stripe from 'stripe'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
    try {
        const body = await req.text()
        const signature = (await headers()).get('stripe-signature')

        if (!signature || !webhookSecret) {
            return NextResponse.json(
                { error: 'Missing stripe-signature or STRIPE_WEBHOOK_SECRET' },
                { status: 400 }
            )
        }

        let event: Stripe.Event

        try {
            event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
        } catch (err: any) {
            console.error('Webhook signature verification failed:', err.message)
            return NextResponse.json({ error: err.message }, { status: 400 })
        }

        const supabase = createAdminClient()

        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object as Stripe.Checkout.Session

                if (session.client_reference_id) {
                    const userId = session.client_reference_id
                    const customerId = session.customer as string

                    // Insert or update the customer mapping
                    const { error } = await supabase.from('customers').upsert({
                        id: userId,
                        stripe_customer_id: customerId,
                    })

                    if (error) {
                        console.error('Error inserting customer:', error)
                        throw new Error('Supabase customer upsert failed')
                    }
                }
                break
            }
            case 'customer.subscription.created':
            case 'customer.subscription.updated':
            case 'customer.subscription.deleted': {
                const subscription = event.data.object as Stripe.Subscription
                const customerId = subscription.customer as string

                // Get the user UUID mapped to this Stripe Customer
                const { data: customerData, error: customerError } = await supabase
                    .from('customers')
                    .select('id')
                    .eq('stripe_customer_id', customerId)
                    .single()

                if (customerError || !customerData) {
                    console.error('No customer mapping found for stripe_customer_id:', customerId)
                    // If we can't find a user, we skip syncing this subscription.
                    break
                }

                const userId = customerData.id

                // Helper to safely parse Stripe UNIX timestamps
                const safeDate = (timestamp: number | null | undefined) => {
                    if (!timestamp) return null;
                    try {
                        return new Date(timestamp * 1000).toISOString();
                    } catch (e) {
                        console.warn('Failed to parse date:', timestamp);
                        return null;
                    }
                }

                const subscriptionData = {
                    id: subscription.id,
                    user_id: userId,
                    metadata: subscription.metadata,
                    status: subscription.status,
                    price_id: subscription.items.data[0].price.id,
                    quantity: subscription.items.data[0].quantity,
                    cancel_at_period_end: subscription.cancel_at_period_end,
                    cancel_at: safeDate(subscription.cancel_at),
                    canceled_at: safeDate(subscription.canceled_at),
                    current_period_start: safeDate(subscription.current_period_start) || new Date().toISOString(),
                    current_period_end: safeDate(subscription.current_period_end) || new Date().toISOString(),
                    created: safeDate(subscription.created) || new Date().toISOString(),
                    ended_at: safeDate(subscription.ended_at),
                    trial_start: safeDate(subscription.trial_start),
                    trial_end: safeDate(subscription.trial_end),
                }

                const { error: subError } = await supabase
                    .from('subscriptions')
                    .upsert(subscriptionData)

                if (subError) {
                    console.error('Error upserting subscription:', subError)
                    throw new Error('Supabase subscription upsert failed')
                }
                break
            }
            default:
                console.log(`Unhandled event type: ${event.type}`)
        }

        return NextResponse.json({ received: true })
    } catch (err: any) {
        console.error('Webhook payload parsing error:', err.message)
        return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
    }
}
