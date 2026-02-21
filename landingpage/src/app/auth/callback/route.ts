import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
    console.log("=== AUTH CALLBACK HIT ===")
    console.log("Request URL:", request.url)

    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    const next = searchParams.get('next') ?? '/'

    console.log("Code:", code ? "exists (hidden)" : "missing")
    console.log("Next:", next)

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (!error) {
            console.log("SUCCESS: Code exchanged for session successfully. Redirecting to:", `${origin}${next}`)
            // Successful auth, redirect back to home (or 'next')
            return NextResponse.redirect(`${origin}${next}`)
        } else {
            console.error("ERROR: Auth callback exchangeCodeForSession failed:", error.message)
        }
    } else {
        console.log("ERROR: No code provided in the URL params.")
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/login?error=auth-failed`)
}
