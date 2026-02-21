import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 glass border-b-0 border-white/5 bg-slate-900/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                            Luahana
                        </Link>
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
                        <button className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
