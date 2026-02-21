import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function proxy(request: NextRequest) {
    // Intercept OAuth redirects that fall back to the root URL instead of the callback route
    const { searchParams, pathname } = request.nextUrl
    const code = searchParams.get('code')

    if (code && pathname === '/') {
        const url = request.nextUrl.clone()
        url.pathname = '/auth/callback'
        return NextResponse.redirect(url)
    }

    // update user's auth session
    return await updateSession(request)
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
