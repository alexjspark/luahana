import Link from 'next/link';
import CheckoutButton from '@/components/CheckoutButton';

export default function Home() {
  return (
    <div className="relative isolate min-h-screen">
      {/* Background Gradients */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl opacity-30" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      <main className="flex flex-col items-center justify-center px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center py-24 sm:py-32 lg:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-300 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300">
              Announcing our latest AI companion app.{' '}
              <Link href="#" className="font-semibold text-blue-400"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></Link>
            </div>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            Software designed for <span className="text-gradient drop-shadow-lg">Human & AI</span> Symbiosis
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Luahana builds cutting-edge applications that make people interact with artificial intelligence seamlessly, naturally, and beautifully.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/30 hover:bg-blue-500 hover:scale-105 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              View Our Apps
            </button>
            <Link href="/about" className="group text-sm font-semibold leading-6 text-white flex items-center gap-2">
              Learn more <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Feature grid glass cards */}
        <div className="w-full max-w-6xl mx-auto py-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="glass rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Lightning Fast UX</h3>
            <p className="text-slate-400">Our apps are built with performance in mind to ensure your interactions with AI feel instantaneous.</p>
          </div>
          <div className="glass rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Seamless AI Models</h3>
            <p className="text-slate-400">We integrate top-tier LLMs directly into intuitive interfaces, hiding the complexity behind elegant design.</p>
          </div>
          <div className="glass rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Privacy First</h3>
            <p className="text-slate-400">Your data is yours. We implement industry-leading standards to ensure conversations with AI stay private.</p>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="w-full max-w-5xl mx-auto py-24 sm:py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Transparent, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">simple pricing</span></h2>
            <p className="mt-4 text-lg text-slate-400">Everything you need to boost your productivity with absolute zero hidden fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="glass rounded-3xl p-8 xl:p-10 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Basic</h3>
                <p className="text-slate-400 text-sm mb-6">Perfect for individual creators just getting started.</p>
                <div className="flex items-baseline gap-x-2 mb-8">
                  <span className="text-4xl font-bold tracking-tight text-white">$15</span>
                  <span className="text-sm font-semibold leading-6 text-slate-400">/month</span>
                </div>
                <ul className="space-y-4 text-sm text-slate-300 mb-8">
                  <li className="flex gap-x-3"><svg className="w-5 h-5 text-blue-400 flex-none" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg> 1,000 AI interactions per month</li>
                  <li className="flex gap-x-3"><svg className="w-5 h-5 text-blue-400 flex-none" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg> Standard response speeds</li>
                  <li className="flex gap-x-3"><svg className="w-5 h-5 text-blue-400 flex-none" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg> Community support</li>
                </ul>
              </div>
              <CheckoutButton priceId={process.env.NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID || 'price_basic_dummy'} planName="basic" />
            </div>

            {/* Pro Plan */}
            <div className="glass rounded-3xl p-8 xl:p-10 flex flex-col justify-between relative overflow-hidden bg-white/5 border border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.15)] transform md:-translate-y-4">
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">Pro</h3>
                  <span className="rounded-full bg-violet-500/20 px-2.5 py-1 text-xs font-semibold leading-5 text-violet-300 ring-1 ring-inset ring-violet-500/30">Most popular</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">For power users who need the absolute best performance.</p>
                <div className="flex items-baseline gap-x-2 mb-8">
                  <span className="text-4xl font-bold tracking-tight text-white">$45</span>
                  <span className="text-sm font-semibold leading-6 text-slate-400">/month</span>
                </div>
                <ul className="space-y-4 text-sm text-slate-300 mb-8">
                  <li className="flex gap-x-3"><svg className="w-5 h-5 text-violet-400 flex-none" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg> Unlimited AI interactions</li>
                  <li className="flex gap-x-3"><svg className="w-5 h-5 text-violet-400 flex-none" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg> Priority <span className="text-violet-300 font-medium">Turbo</span> response speeds</li>
                  <li className="flex gap-x-3"><svg className="w-5 h-5 text-violet-400 flex-none" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg> Access to experimental models</li>
                  <li className="flex gap-x-3"><svg className="w-5 h-5 text-violet-400 flex-none" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg> 24/7 dedicated support</li>
                </ul>
              </div>
              <CheckoutButton priceId={process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || 'price_pro_dummy'} planName="pro" />
            </div>
          </div>
        </div>

      </main>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl opacity-30 sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80b5ff] to-[#9089fc] sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
    </div>
  );
}
