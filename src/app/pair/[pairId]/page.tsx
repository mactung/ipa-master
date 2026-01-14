"use client";

import { use } from 'react';
import Link from 'next/link';
import { ipaPairs } from '@/data/ipa-pairs';
import { ChevronLeft, Volume2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PairDetailPage({ params }: { params: Promise<{ pairId: string }> }) {
    const { pairId } = use(params);
    const router = useRouter();
    const pair = ipaPairs.find(p => p.id === pairId);

    if (!pair) return null;

    const playAudio = (url: string) => {
        const audio = new Audio(url);
        audio.play().catch(console.error);
    };

    return (
        <div className="min-h-screen bg-white pb-32">

            {/* Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 px-4 py-4 border-b border-slate-100 flex items-center justify-between">
                <Link href="/" className="p-2 -ml-2 hover:bg-slate-100 rounded-xl transition-colors">
                    <ChevronLeft size={28} className="text-slate-400" />
                </Link>
                <div className="h-2 flex-1 mx-4 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 w-1/3 rounded-full" />
                </div>
                <div className="w-8" />
            </div>

            <div className="p-6 text-center">
                <div className="inline-block px-4 py-1.5 rounded-xl bg-blue-100 text-blue-600 text-sm font-extrabold uppercase tracking-wide mb-4">
                    Lesson 1
                </div>
                <h1 className="text-3xl font-black text-slate-700 mb-2">
                    /{pair.sound1}/ vs /{pair.sound2}/
                </h1>
                <p className="text-slate-400 font-bold">Tap to listen, then practice.</p>
            </div>

            <div className="px-4 space-y-4">
                {pair.examples.map((word, idx) => (
                    <div
                        key={idx}
                        onClick={() => word.audioUK && playAudio(word.audioUK)}
                        className="group relative bg-white border-2 border-slate-200 border-b-4 rounded-3xl p-4 active:border-b-2 active:translate-y-[2px] active:bg-slate-50 transition-all cursor-pointer hover:border-blue-300"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <Volume2 size={24} />
                                </div>
                                <div className="text-left">
                                    <div className="text-xl font-black text-slate-700">{word.text}</div>
                                    <div className="text-sm font-bold text-slate-400">{word.phoneticUK}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Floating CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-100 z-30 max-w mx-auto">
                <button
                    onClick={() => router.push(`/practice/${pairId}`)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-extrabold text-lg py-4 rounded-2xl border-b-4 border-green-600 active:border-b-0 active:translate-y-1 transition-all uppercase tracking-widest"
                >
                    START PRACTICE
                </button>
            </div>

        </div>
    );
}
