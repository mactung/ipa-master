"use client";

import { use } from 'react';
import Link from 'next/link';
import { units } from '@/data/units';
import { ChevronLeft, PlayCircle, BookOpen, Volume2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function UnitDetailPage({ params }: { params: Promise<{ unitId: string }> }) {
    const { unitId } = use(params);
    const router = useRouter();
    const unit = units.find(u => u.id === unitId);

    if (!unit) return null;

    return (
        <div className="min-h-screen bg-slate-50 pb-32">

            {/* Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 px-4 py-4 border-b border-slate-100 flex items-center justify-between">
                <Link href="/" className="p-2 -ml-2 hover:bg-slate-100 rounded-xl transition-colors">
                    <ChevronLeft size={28} className="text-slate-400" />
                </Link>
                <h1 className="text-lg font-extrabold text-slate-700 truncate max-w-[200px]">
                    {unit.title}
                </h1>
                <div className="w-8" />
            </div>

            <div className="p-6">
                <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
                    <BookOpen className="text-blue-500" />
                    Lessons
                </h2>

                <div className="space-y-4">
                    {unit.lessons.map((lesson, index) => (
                        <Link href={`/lesson/${lesson.id}`} key={lesson.id} className="block group">
                            <div className="bg-white rounded-2xl p-4 border-2 border-slate-200 border-b-4 hover:border-blue-400 active:border-b-2 active:translate-y-[2px] transition-all">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-slate-500 font-bold bg-slate-100
                                        ${lesson.type === 'single' ? 'group-hover:bg-blue-100 group-hover:text-blue-600' : 'group-hover:bg-purple-100 group-hover:text-purple-600'}
                                    `}>
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-extrabold text-slate-700 text-lg">{lesson.title}</h3>
                                        <p className="text-slate-400 text-sm font-semibold">{lesson.words.length} words</p>
                                    </div>
                                    <ArrowRight className="text-slate-300 group-hover:text-blue-400" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
}
