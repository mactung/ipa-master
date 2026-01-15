import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="h-[100dvh] w-full flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-50 fixed inset-0">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 text-green-500 animate-spin" strokeWidth={3} />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
