"use client";

import Link from 'next/link';
import { units } from '@/data/units';
import { getSmartPracticeUnit } from '@/lib/practiceUtils';
import { Star, Trophy, Zap, ChevronRight, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useSettings } from "@/context/SettingsContext";

export default function Home() {
  const { accent, setAccent, lastPracticedUnitId, completedUnits } = useSettings();

  return (
    <div className="min-h-screen bg-slate-50 pb-20">

      {/* App Header */}
      <header className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10 border-b border-slate-100 backdrop-blur-md bg-white/80">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-slate-800">IPA Master</h1>
            <div className="flex items-center gap-2 mt-1">
              <button
                onClick={() => setAccent('uk')}
                className={`text-xs font-bold px-2 py-1 rounded-lg transition-all ${accent === 'uk' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'text-slate-400 hover:bg-slate-100'}`}
              >
                🇬🇧 UK
              </button>
              <button
                onClick={() => setAccent('us')}
                className={`text-xs font-bold px-2 py-1 rounded-lg transition-all ${accent === 'us' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'text-slate-400 hover:bg-slate-100'}`}
              >
                🇺🇸 US
              </button>
            </div>
          </div>
          <div className="w-10 h-10 bg-yellow-400 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
            <Trophy size={20} className="text-yellow-700" />
          </div>
        </div>
      </header>




      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Hero Banner - Green-500 */}
        <Link
          href={`/practice/${getSmartPracticeUnit(completedUnits, lastPracticedUnitId, units)}`}
          className="block bg-green-500 rounded-3xl p-6 text-white shadow-lg shadow-green-600/20 hover:translate-y-1 transition-all cursor-pointer active:translate-y-1 border-b-4 border-green-600 hover:border-b-0 active:border-b-0 active:mt-1"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold mb-1">Start Practice</h2>
              <p className="font-bold opacity-90 text-sm">
                {lastPracticedUnitId && !completedUnits.includes(lastPracticedUnitId)
                  ? "Resume your session"
                  : "Start next lesson"}
              </p>
            </div>
            <Zap size={32} className="fill-current text-yellow-300" />
          </div>
        </Link>

        <div className="flex items-center justify-between mt-8 mb-2">
          <h3 className="font-extrabold text-slate-700 text-lg uppercase tracking-wider">Curriculum</h3>
        </div>

        <div className="space-y-4">
          {units.map((unit, index) => {
            // Alternating colors for list items
            const colors = [
              'border-blue-200 bg-blue-50 text-blue-600',
              'border-purple-200 bg-purple-50 text-purple-600',
              'border-pink-200 bg-pink-50 text-pink-600'
            ];
            const theme = colors[index % colors.length];

            return (
              <Link href={`/unit/${unit.id}`} key={unit.id} className="block group">
                <div className={`
                            relative bg-white rounded-3xl p-4 border-2 border-b-4 transition-all active:border-b-2 active:translate-y-[2px] 
                            ${index % 2 === 0 ? 'border-slate-200 hover:border-blue-400' : 'border-slate-200 hover:border-purple-400'}
                        `}>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black border-2 ${theme} shadow-sm`}>
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <h4 className="font-extrabold text-slate-700 text-lg">{unit.title}</h4>
                      <p className="text-slate-400 text-sm font-bold flex items-center gap-1">
                        <BookOpen size={14} /> {unit.lessons.length} Lessons
                      </p>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index === 0 ? 'bg-yellow-400 text-yellow-800' : 'bg-slate-200 text-slate-400'}`}>
                      {index === 0 ? <Star size={16} className="fill-current" /> : <div className="w-3 h-3 bg-slate-400 rounded-full" />}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}
