import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { signOut } from '@/app/auth/actions'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function ProfilePage() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // Fetch active subscription
    const { data: subscription, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .in('status', ['trialing', 'active'])
        .maybeSingle()

    return (
        <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative isolate">
            {/* Background Gradients */}
            <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl opacity-30" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="glass rounded-3xl p-8 sm:p-10">
                    <div className="flex items-center space-x-5 mb-8">
                        <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-blue-500/30">
                            {user.email?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white">Your Profile</h1>
                            <p className="text-slate-400">Manage your account settings and subscriptions.</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                            <h3 className="text-lg font-medium text-white mb-4">Account Information</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Email Address</p>
                                    <p className="text-white font-medium">{user.email}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">User ID</p>
                                    <p className="text-white font-medium truncate" title={user.id}>{user.id}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                            <h3 className="text-lg font-medium text-white mb-4">Subscription Plan</h3>
                            {subscription ? (
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex items-center justify-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                                            <span className="text-sm font-medium text-emerald-400 capitalize">{subscription.status}</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-300 mb-6">
                                        You are currently subscribed to Premium. You have full access to all AI features.
                                    </p>
                                    <form action="/api/portal" method="POST">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center px-4 py-2 border border-slate-600 text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
                                        >
                                            Manage Subscription
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div>
                                    <p className="text-slate-300 mb-6">You currently do not have an active Premium subscription. Subscribe to unlock the paid AI versions of all present and future apps.</p>
                                    <Link
                                        href="/#pricing"
                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors shadow-lg shadow-violet-600/30"
                                    >
                                        Get Premium
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <form action={signOut}>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-4 py-2 border border-red-500/30 text-sm font-medium rounded-md text-red-400 bg-red-500/10 hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                                >
                                    Sign Out
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
