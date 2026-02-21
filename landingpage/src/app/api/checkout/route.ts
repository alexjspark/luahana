import { NextResponse } from 'next/server'
import { createCheckoutSession } from '@luahana/payments'
import { createClient } from '@/lib/supabase/server'

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

        // Example Stripe Success & Cancel URLs
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
        const successUrl = `${baseUrl}/dashboard?session_id={CHECKOUT_SESSION_ID}`
        const cancelUrl = `${baseUrl}/#pricing`

        const sessionOptions: any = {
            priceId,
            successUrl,
            cancelUrl,
        }

        if (user) {
            // Attach the existing user's ID so we can wire it up via Stripe Webhooks later
            sessionOptions.clientReferenceId = user.id
            sessionOptions.customerEmail = user.email
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
