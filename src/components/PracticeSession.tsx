"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Mic, ArrowRight, X } from 'lucide-react';
import { Word } from '@/data/ipa-pairs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useSettings } from '@/context/SettingsContext';

interface PracticeSessionProps {
    words: Word[];
    lessonId: string;
}

export default function PracticeSession({ words, lessonId }: PracticeSessionProps) {
    const { accent, setLastPracticedUnitId, markUnitComplete } = useSettings();

    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [status, setStatus] = useState<'idle' | 'playing' | 'waiting' | 'user_turn' | 'completed'>('idle');
    const [repeatCount, setRepeatCount] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const currentWord = words[currentIndex];
    const progress = ((currentIndex) / words.length) * 100;

    useEffect(() => {
        setLastPracticedUnitId(lessonId);
    }, [lessonId, setLastPracticedUnitId]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = playbackRate;
        }
    }, [playbackRate]);

    useEffect(() => {
        // Reset playback rate on audio element when src changes (browser implementation detail sometimes resets it)
        if (audioRef.current) {
            audioRef.current.playbackRate = playbackRate;
        }
    }, [currentWord]);

    useEffect(() => {
        if (status === 'playing' && audioRef.current) {
            setTimeout(() => {
                audioRef.current?.play().catch(console.error);
            }, 500);
        }
    }, [status, repeatCount, currentIndex]);

    const startPractice = () => {
        setRepeatCount(0);
        setStatus('playing');
    };

    const handleAudioEnded = () => {
        setStatus('user_turn');

        // Simulate listening time
        setTimeout(() => {
            if (repeatCount < 2) {
                setStatus('playing');
                setRepeatCount(prev => prev + 1);
            } else {
                finishWord();
            }
        }, 2000);
    };

    const finishWord = () => {
        setStatus('waiting');
        setTimeout(() => {
            if (currentIndex < words.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setRepeatCount(0);
                setStatus('playing');
            } else {
                markUnitComplete(lessonId);
                setStatus('completed');
            }
        }, 1000);
    };

    if (status === 'completed') {
        return (
            <div className="h-[100dvh] bg-white flex flex-col items-center justify-center p-8 text-center">
                <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mb-6 border-4 border-yellow-500 shadow-xl">
                    <span className="text-6xl">🎉</span>
                </div>
                <h2 className="text-3xl font-black text-slate-700 mb-4">Lesson Complete!</h2>
                <div className="flex gap-2 text-yellow-500 mb-8">
                    <StarIcon filled />
                    <StarIcon filled />
                    <StarIcon filled />
                </div>

                <Link
                    href={`/lesson/${lessonId}`}
                    className="w-full bg-green-500 text-white py-4 rounded-2xl font-extrabold text-lg border-b-4 border-green-600 hover:bg-green-600 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center"
                >
                    CONTINUE
                </Link>
            </div>
        );
    }

    return (
        <div className="h-[100dvh] bg-white flex flex-col overflow-hidden">

            {/* Header */}
            <div className="px-6 pt-6 pb-2 flex-none flex items-center gap-4">
                <Link href={`/lesson/${lessonId}`} className="text-slate-300 hover:text-slate-400">
                    <X size={28} strokeWidth={3} />
                </Link>
                <div className="h-4 flex-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-green-500 transition-all duration-500 rounded-full"
                        style={{ width: `${Math.max(5, progress)}%` }}
                    />
                </div>
            </div>

            {/* Main Content Area - Expandable */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 w-full relative">

                {/* Speech Bubble / Card */}
                <div className="relative w-full aspect-square max-h-[350px] max-w-[320px] border-2 border-slate-200 border-b-[6px] rounded-[32px] p-6 flex flex-col items-center justify-center mb-8 bg-white shadow-sm">
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-700 mb-3 text-center break-words w-full">
                        {currentWord.text}
                    </h1>
                    <div className="bg-slate-100 px-4 py-2 rounded-xl text-slate-500 font-bold font-mono text-lg">
                        {accent === 'uk' ? currentWord.phoneticUK : (currentWord.phoneticUS || currentWord.phoneticUK)}
                    </div>

                    {/* Status Badge */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full border-2 border-slate-200 font-bold text-xs sm:text-sm text-slate-400 uppercase tracking-widest whitespace-nowrap shadow-sm">
                        {status === 'playing' && <span className="text-blue-500 animate-pulse">Listening...</span>}
                        {status === 'user_turn' && <span className="text-green-500">Your Turn!</span>}
                        {status === 'idle' && <span>Tap Start</span>}
                        {status === 'waiting' && <span>Next...</span>}
                    </div>
                </div>

                {/* Speed Controls */}
                <div className="flex gap-2 mb-6">
                    {[0.5, 0.75, 1].map((rate) => (
                        <button
                            key={rate}
                            onClick={() => setPlaybackRate(rate)}
                            className={`px-3 py-1 rounded-lg text-sm font-bold transition-all ${playbackRate === rate
                                ? 'bg-slate-700 text-white shadow-md'
                                : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                                }`}
                        >
                            {rate}x
                        </button>
                    ))}
                </div>


                {/* Feedback Dots */}
                <div className="flex gap-3 h-6 items-center">
                    {[0, 1, 2].map(i => (
                        <div
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${i < repeatCount
                                ? 'bg-green-500 scale-110'
                                : (i === repeatCount && status === 'playing' ? 'bg-blue-400 animate-pulse' : 'bg-slate-200')
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Footer Controls - Fixed at bottom */}
            <div className="p-6 pt-0 flex-none pb-8 sm:pb-6 bg-white w-full max-w-md mx-auto">
                {status === 'idle' ? (
                    <button
                        onClick={startPractice}
                        className="w-full bg-sky-400 text-white py-4 rounded-2xl font-extrabold text-lg border-b-4 border-sky-500 hover:bg-sky-500 active:border-b-0 active:translate-y-1 transition-all uppercase tracking-widest"
                    >
                        START
                    </button>
                ) : (
                    <div className="h-16 flex items-center justify-center text-slate-300 font-bold tracking-widest uppercase bg-slate-50 rounded-2xl border-2 border-slate-100">
                        Session in progress...
                    </div>
                )}
            </div>

            <audio
                ref={audioRef}
                src={accent === 'uk' ? (currentWord.audioUK || currentWord.audioUS) : (currentWord.audioUS || currentWord.audioUK)}
                onEnded={handleAudioEnded}
                className="hidden"
            />
        </div>
    );
}

function StarIcon({ filled }: { filled?: boolean }) {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
    )
}
