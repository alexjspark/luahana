export default function EULA() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6 sm:px-8 lg:px-12 relative isolate">
            <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl opacity-30" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-br from-[#10b981] to-[#3b82f6] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-8">
                    End User License Agreement (EULA)
                </h1>

                <div className="glass rounded-3xl p-8 sm:p-12 space-y-8 text-slate-300">
                    <p className="text-sm">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. License Grant</h2>
                        <p>Luahana grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use our software strictly in accordance with the terms of this Agreement.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Restrictions</h2>
                        <p className="mb-4">You agree not to, and you will not permit others to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose, or otherwise commercially exploit the software.</li>
                            <li>Modify, make derivative works of, disassemble, decrypt, reverse compile, or reverse engineer any part of the software.</li>
                            <li>Remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) of Luahana or its affiliates, partners, suppliers, or licensors.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                        <p>The software, including without limitation all copyrights, patents, trademarks, trade secrets, and other intellectual property rights are, and shall remain, the sole and exclusive property of Luahana.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Termination</h2>
                        <p>This Agreement shall remain in effect until terminated by you or Luahana. We may, in our sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
