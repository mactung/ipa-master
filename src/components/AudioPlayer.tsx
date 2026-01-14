"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
    word: string;
    phonetic: string;
    audioUrl: string;
    onComplete?: () => void;
    autoPlay?: boolean;
}

export default function AudioPlayer({ word, phonetic, audioUrl, onComplete, autoPlay = false }: AudioPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [status, setStatus] = useState<'idle' | 'playing' | 'waiting'>('idle');
    const [repeatCount, setRepeatCount] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Reset state when word changes
        setRepeatCount(0);
        setStatus('idle');
        setIsPlaying(false);
    }, [word]);

    const startPractice = () => {
        if (!audioRef.current || !audioUrl) return;
        setIsPlaying(true);
        setRepeatCount(0);
        playCycle();
    };

    const playCycle = () => {
        if (!audioRef.current) return;

        // Play audio
        setStatus('playing');
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(e => console.error("Playback failed", e));
    };

    const handleAudioEnded = () => {
        // Audio finished, now wait for user repetition
        setStatus('waiting');

        // Calculate wait time based on duration (simple heuristic: same duration as audio)
        const duration = audioRef.current?.duration || 1;
        const waitTime = Math.max(duration * 1000, 1500); // Minimum 1.5s wait

        setTimeout(() => {
            const nextCount = repeatCount + 1;
            setRepeatCount(nextCount);

            if (nextCount < 3) {
                playCycle();
            } else {
                setIsPlaying(false);
                setStatus('idle');
                onComplete?.();
            }
        }, waitTime);
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg w-full max-w-sm mx-auto border-2 border-slate-100">
            <div className="text-4xl font-bold mb-2 text-slate-800">{word}</div>
            <div className="text-xl text-slate-500 mb-8 font-mono">{phonetic}</div>

            <div className="mb-8 flex gap-2">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i < repeatCount ? 'bg-green-500' :
                                (i === repeatCount && isPlaying) ? 'bg-blue-500 animate-pulse' : 'bg-slate-200'
                            }`}
                    />
                ))}
            </div>

            <div className="text-center mb-4 min-h-[1.5rem] font-medium text-blue-600">
                {status === 'playing' && "Listen..."}
                {status === 'waiting' && "Your turn!"}
            </div>

            <audio
                ref={audioRef}
                src={audioUrl}
                onEnded={handleAudioEnded}
            />

            <button
                onClick={startPractice}
                disabled={isPlaying}
                className={`
          flex items-center justify-center w-16 h-16 rounded-full 
          transition-all transform hover:scale-105 active:scale-95
          ${isPlaying
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-blue-600 text-white shadow-blue-200 shadow-xl'
                    }
        `}
            >
                {isPlaying ? <Volume2 className="animate-pulse" /> : <Play className="ml-1" />}
            </button>

            {isPlaying && (
                <p className="mt-4 text-xs text-slate-400">Repeating 3 times...</p>
            )}
        </div>
    );
}
