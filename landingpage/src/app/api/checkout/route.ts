import { NextResponse } from 'next/server'
import { createCheckoutSession } from '@luahana/payments'
import { createClient } from '@/lib/supabase/server'
import { getURL } from '@/lib/utils/url'

export async function POST(request: Request) {
    try {
        const { priceId } = await request.json()

        if (!priceId) {
            return NextResponse.json(
                { error: 'Price ID is required' },
                { status: 400 }
            )
        }

        // Attempt to get the logged-in user to associate the checkout session
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            // Secure the checkout route by forcing unauthenticated users to log in first
            return NextResponse.json({ url: '/login' })
        }

        // Example Stripe Success & Cancel URLs
        const baseUrl = getURL()
        const successUrl = `${baseUrl}profile?session_id={CHECKOUT_SESSION_ID}`
        const cancelUrl = `${baseUrl}#pricing`

        // Check if we already have a Stripe customer mapped for this user
        const { data: customerData } = await supabase
            .from('customers')
            .select('stripe_customer_id')
            .eq('id', user.id)
            .maybeSingle()

        const sessionOptions: any = {
            priceId,
            successUrl,
            cancelUrl,
            clientReferenceId: user.id,
            customerEmail: customerData?.stripe_customer_id ? undefined : user.email,
            customerId: customerData?.stripe_customer_id || undefined,
        }

        const session = await createCheckoutSession(sessionOptions)

        return NextResponse.json({ url: session.url })
    } catch (error: any) {
        console.error('Stripe checkout error:', error.message)
        return NextResponse.json(
            { error: 'Failed to create checkout session' },
            { status: 500 }
        )
    }
}
