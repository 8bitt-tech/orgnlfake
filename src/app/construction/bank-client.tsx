'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import BlockReveal from '@/components/BlockReveal';
import { login } from '@/app/auth/actions';
import './bank.css';

const TrailContainer = dynamic(() => import('@/components/TrailContainer'), { ssr: false });

export default function BankClient() {
    const brandRef = useRef<HTMLDivElement>(null);
    const [showLogin, setShowLogin] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // "Anti-gravity" floating animation for the brand name
    useGSAP(() => {
        gsap.to(brandRef.current, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    });

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setError(null);

        const result = await login(formData);

        if (result?.error) {
            setError(result.error);
            setLoading(false);
        }
        // On success, the server action will redirect automatically
    }

    return (
        <main className="no-reveal bank-page min-h-screen text-white flex flex-col justify-between p-10 md:p-24 overflow-hidden relative">
            {/* The Trail Container running in the background */}
            <TrailContainer />

            {/* Top Section: Header & Auth */}
            <div className="flex items-center justify-between relative z-[9999] mt-8 md:mt-0 pointer-events-auto">
                <div ref={brandRef} className="flex items-center gap-3">
                    <div className="h-[1px] w-12 bg-cyan-500 opacity-50" />
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyan-400">
                        Engineered on <span className="font-bold text-white">OrgnlFake</span>
                    </p>
                </div>
                <div className="flex items-center gap-4 relative z-[9999]">
                    <button
                        onClick={() => setShowLogin(true)}
                        className="text-[10px] font-mono tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                        Sign In
                    </button>
                    <a href="/join" className="text-[10px] font-mono tracking-[0.2em] uppercase text-black bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-sm transition-colors cursor-pointer">
                        Sign Up
                    </a>
                </div>
            </div>

            {/* Sign In Modal Overlay */}
            {showLogin && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-auto">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={() => { setShowLogin(false); setError(null); }}
                    />

                    {/* Modal Card */}
                    <div className="relative z-10 w-full max-w-md mx-4 rounded-2xl border border-cyan-500/20 bg-[#03050C]/95 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(6,182,212,0.1)]">
                        {/* Close button */}
                        <button
                            onClick={() => { setShowLogin(false); setError(null); }}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors text-lg font-mono"
                        >
                            ✕
                        </button>

                        {/* Header */}
                        <div className="mb-8 text-center">
                            <h2 className="text-2xl font-bold tracking-tight text-white mb-1">
                                ORGNL<span className="text-cyan-400">FAKE</span>
                            </h2>
                            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-500">
                                Developer Access
                            </p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center font-mono">
                                {error}
                            </div>
                        )}

                        {/* Login Form */}
                        <form action={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="construction-email"
                                    className="block text-[10px] font-mono tracking-[0.2em] uppercase text-gray-400 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="construction-email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    autoComplete="email"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-all font-mono text-sm"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="construction-password"
                                    className="block text-[10px] font-mono tracking-[0.2em] uppercase text-gray-400 mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="construction-password"
                                    name="password"
                                    placeholder="••••••••"
                                    required
                                    minLength={6}
                                    autoComplete="current-password"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-all font-mono text-sm"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-lg py-3.5 font-mono text-sm tracking-[0.1em] uppercase font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {loading ? "Authenticating..." : "Sign In"}
                            </button>
                        </form>

                        <p className="mt-6 text-center text-[10px] font-mono tracking-[0.15em] text-gray-600 uppercase">
                            Authorized personnel only
                        </p>
                    </div>
                </div>
            )}

            {/* Center Section: Main Content — pointer-events-none so giant titles don't block auth links */}
            <div className="flex flex-col gap-16 relative z-10 pointer-events-none">
                <div>
                    <BlockReveal color="#ffffff" delay={0.2}>
                        <h1 className="nabla-title text-6xl md:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter">
                            Something
                        </h1>
                        <h1 className="nabla-title text-6xl md:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter">
                            Original
                        </h1>
                        <h1 className="nabla-title text-6xl md:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter">
                            Coming!!
                        </h1>
                    </BlockReveal>
                </div>

                <div className="max-w-xl">
                    <BlockReveal color="#22d3ee" delay={1.2} stagger={0.08}>
                        <p className="text-lg md:text-xl font-medium text-gray-300">
                            Arriving with purpose. This isn't a launch,
                        </p>
                        <p className="text-lg md:text-xl font-medium text-gray-300">
                            it's a culture shift in motion.
                        </p>
                        <p className="text-xl md:text-2xl font-bold text-white mt-4 uppercase tracking-widest italic">
                            Raw. Real. Original.
                        </p>
                    </BlockReveal>
                </div>
            </div>

            {/* Bottom Section: Footer Metadata */}
            <div className="flex justify-between items-end border-t border-white/20 pt-6 relative z-10 mb-8 md:mb-0">
                <div className="text-[10px] font-mono text-gray-400 uppercase">
                    001 // Core v.1.0.4
                </div>
                <div className="text-[10px] font-mono text-gray-400 uppercase text-right">
                    <a href="mailto:info@orgnlfake.agency" className="hover:text-white transition-colors">Contact us: info@orgnlfake.agency</a>
                </div>
            </div>
        </main>
    );
}
