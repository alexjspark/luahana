'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function signInWithGoogle() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        },
    })

    if (error) {
        console.error('Error logging in with Google:', error.message)
        // You could also redirect to an error page or return the error
        return
    }

    // Redirect to Supabase's Google OAuth portal
    if (data.url) {
        redirect(data.url)
    }
}

export async function signInWithApple() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'apple',
        options: {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        },
    })

    if (error) {
        console.error('Error logging in with Apple:', error.message)
        return
    }

    // Redirect to Supabase's Apple OAuth portal
    if (data.url) {
        redirect(data.url)
    }
}
