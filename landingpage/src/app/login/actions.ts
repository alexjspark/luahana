'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getURL } from '@/lib/utils/url'

export async function signInWithGoogle() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${getURL()}auth/callback`,
        },
    })

    if (error) {
        console.error('Error logging in with Google:', error.message)
        // You could also redirect to an error page or return the error
        return
    }

    // Return the URL to the client instead of doing a server-side redirect
    // This ensures cookies are properly propagated to the browser before redirection
    if (data.url) {
        return { url: data.url }
    }
}


