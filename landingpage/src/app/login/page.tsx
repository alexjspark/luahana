'use client'

import { createClient } from '@/lib/supabase/client'
import { getURL } from '@/lib/utils/url'
import Link from 'next/link'

export default function LoginPage() {
    return (
        <div className="min-h-screen pt-32 pb-16 px-6 sm:px-8 lg:px-12 relative isolate flex flex-col justify-center items-center">
            {/* Background Gradients */}
            <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl opacity-30" aria-hidden="true">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8b5cf6] to-[#06b6d4]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="glass p-8 sm:p-12 max-w-md w-full rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />

                <div className="relative z-10 text-center mb-10">
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-3">Welcome to Luahana</h1>
                    <p className="text-slate-400 text-sm">Sign in to your account or create a new one to get started.</p>
                </div>

                <div className="relative z-10 flex flex-col gap-4">
                    <button
                        onClick={async () => {
                            const supabase = createClient()
                            await supabase.auth.signInWithOAuth({
                                provider: 'google',
                                options: {
                                    redirectTo: `${getURL()}auth/callback`,
                                },
                            })
                        }}
                        className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-slate-900 rounded-xl font-medium hover:bg-slate-100 transition-all active:scale-[0.98] shadow-md border border-slate-200 shadow-slate-900/10"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                            <path d="M1 1h22v22H1z" fill="none" />
                        </svg>
                        Continue with Google
                    </button>
                </div>

                <div className="relative z-10 mt-10 space-y-4 text-center">
                    <p className="text-xs text-slate-400">
                        By signing in, you agree to our{' '}
                        <Link href="/terms" className="text-primary hover:text-primary-glow underline underline-offset-2 transition-colors">
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-primary hover:text-primary-glow underline underline-offset-2 transition-colors">
                            Privacy Policy
                        </Link>.
                    </p>
                </div>
            </div>
        </div>
    )
}
