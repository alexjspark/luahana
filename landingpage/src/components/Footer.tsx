import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/5 py-12 mt-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/20 to-slate-950/80 -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                            Luahana
                        </Link>
                        <p className="mt-4 text-sm text-slate-400">
                            Building cutting-edge apps that make people interact with artificial intelligence easily.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                                    Products
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/eula" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                                    End User License Agreement (EULA)
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-8 flex items-center justify-between">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Luahana. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
