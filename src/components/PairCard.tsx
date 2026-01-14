import Link from 'next/link';
import { IPAPair } from '@/data/ipa-pairs';

export default function PairCard({ pair }: { pair: IPAPair }) {
    return (
        <Link href={`/practice/${pair.id}`} className="block group">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-blue-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-2xl font-bold text-blue-700">
                            /{pair.sound1}/
                        </div>
                        <span className="text-slate-400 font-medium">vs</span>
                        <div className="w-16 h-16 bg-pink-50 rounded-xl flex items-center justify-center text-2xl font-bold text-pink-700">
                            /{pair.sound2}/
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-slate-500 text-sm">
                    Practice {pair.examples.length} words
                </div>
            </div>
        </Link>
    );
}
