export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6 sm:px-8 lg:px-12 relative isolate">
            <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl opacity-30" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-8">
                    Privacy Policy
                </h1>

                <div className="glass rounded-3xl p-8 sm:p-12 space-y-8 text-slate-300">
                    <p className="text-sm">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p className="mb-4">At Luahana, we believe in collecting only what is strictly necessary to run our software and provide you with seamless AI interactions.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Account Information:</strong> Name, email address, and authentication credentials when you create an account.</li>
                            <li><strong>Usage Data:</strong> Anonymous telemetry regarding app performance and crash reports to improve application stability.</li>
                            <li><strong>AI Interaction Data:</strong> Prompts and context provided to our AI models are processed transiently. We do not use your personal prompts to train our baseline models unless explicitly opted-in.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Data</h2>
                        <p className="mb-4">Your data is used exclusively to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Deliver, maintain, and improve our services.</li>
                            <li>Process transactions and send related information.</li>
                            <li>Provide customer support and respond to requests.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Data Sharing</h2>
                        <p>We do not sell your personal data. We only share information with third-party service providers (such as cloud hosting and LLM API providers) necessary strictly to operate our software, under binding confidentiality agreements.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Your Rights</h2>
                        <p>You have the right to access, update, or delete your personal information at any time through your account settings or by contacting our explicit support channels.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
