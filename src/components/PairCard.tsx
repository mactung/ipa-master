import Link from 'next/link';
import { Lesson } from '@/data/units';

export default function PairCard({ pair }: { pair: Lesson }) {
    const sound1 = pair.targetSounds[0];
    const sound2 = pair.targetSounds[1];
    return (
        <Link href={`/practice/${pair.id}`} className="block group">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-blue-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-2xl font-bold text-blue-700">
                            /{sound1}/
                        </div>
                        <span className="text-slate-400 font-medium">vs</span>
                        <div className="w-16 h-16 bg-pink-50 rounded-xl flex items-center justify-center text-2xl font-bold text-pink-700">
                            /{sound2}/
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-slate-500 text-sm">
                    Practice {pair.words.length} words
                </div>
            </div>
        </Link>
    );
}
