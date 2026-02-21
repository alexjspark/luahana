export default function About() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6 sm:px-8 lg:px-12 relative isolate">
            {/* Background Gradients */}
            <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl opacity-30" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-8">
                    About <span className="text-gradient">Luahana</span>
                </h1>

                <div className="glass rounded-3xl p-8 sm:p-12 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            At Luahana, we believe that artificial intelligence is the most profound technological shift in our lifetime. However, interacting with AI can often feel rigid, overly technical, or disconnected from human intuition. Our mission is to bridge that gap. We build applications that make interacting with AI feel effortless, creative, and completely natural.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            We are a general software company specializing in consumer and enterprise applications built around large language models and intelligent systems. By focusing intensely on UX/UI design, performance, and privacy, we ensure that every product we release isn't just a wrapper around an API—it's a crafted experience designed for human-AI symbiosis.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Values</h2>
                        <ul className="list-disc pl-6 text-lg text-slate-300 space-y-2">
                            <li><strong className="text-white">Design Excellence:</strong> If it doesn't look stunning and act intuitively, it's not ready.</li>
                            <li><strong className="text-white">User Privacy:</strong> Conversations with AI are personal. We protect your data rigidly.</li>
                            <li><strong className="text-white">Invisible Complexity:</strong> We handle the tough engineering so your experience remains simple.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
