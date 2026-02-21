import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { signOut } from '@/app/auth/actions'

export default async function Navbar() {
    const supabase = await createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    let isPremium = false
    if (user) {
        const { data: subscription } = await supabase
            .from('subscriptions')
            .select('status')
            .eq('user_id', user.id)
            .in('status', ['trialing', 'active'])
            .maybeSingle()

        isPremium = !!subscription
    }

    return (
        <header className="fixed top-0 w-full z-50 glass border-b-0 border-white/5 bg-slate-900/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                            Luahana
                        </Link>
                        {isPremium && (
                            <span className="px-2 py-0.5 text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 text-yellow-950 rounded shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                                Premium
                            </span>
                        )}
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
                            Home
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
                            About
                        </Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <Link
                                href="/profile"
                                className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-blue-500/30 text-sm font-medium rounded-md text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                Profile
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
