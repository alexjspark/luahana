import { NextResponse } from 'next/server'
import { createPortalSession } from '@luahana/payments'
import { createClient } from '@/lib/supabase/server'
import { getURL } from '@/lib/utils/url'

export async function POST(request: Request) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            return NextResponse.json({ url: '/login' })
        }

        const { data: customerData } = await supabase
            .from('customers')
            .select('stripe_customer_id')
            .eq('id', user.id)
            .single()

        if (!customerData?.stripe_customer_id) {
            return NextResponse.json(
                { error: 'No active Stripe customer found.' },
                { status: 400 }
            )
        }

        const returnUrl = `${getURL()}profile`

        const session = await createPortalSession({
            customerId: customerData.stripe_customer_id,
            returnUrl,
        })

        if (!session.url) {
            throw new Error('Failed to create portal session URL')
        }

        return NextResponse.redirect(session.url, 303)
    } catch (error: any) {
        console.error('Stripe portal error:', error.message)
        // If an error happens during a form post, we can redirect back to an error page or back to profile 
        // with an error param, but for now throwing a 500 error is fine.
        return NextResponse.json(
            { error: 'Failed to create portal session' },
            { status: 500 }
        )
    }
}
