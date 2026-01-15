"use client";

import { use } from 'react';
import Link from 'next/link';
import { units, Lesson } from '@/data/units';
import { ChevronLeft, Volume2, NotebookPen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useWordNotes } from '@/hooks/useWordNotes';
import NoteModal from '@/components/NoteModal';
import { useState } from 'react';

export default function LessonDetailPage({ params }: { params: Promise<{ lessonId: string }> }) {
    const { lessonId } = use(params);
    const router = useRouter();
    const { getNote, saveNote } = useWordNotes();
    
    // State for Note Modal
    const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
    const [selectedWordText, setSelectedWordText] = useState("");
    const [currentNote, setCurrentNote] = useState("");

    console.log('LessonDetailPage params:', lessonId);

    // Find the lesson and its parent unit
    let lesson: Lesson | undefined;
    let unitId: string | undefined;

    for (const u of units) {
        const found = u.lessons.find(l => l.id === lessonId);
        if (found) {
            lesson = found;
            unitId = u.id;
            break;
        }
    }

    if (!lesson || !unitId) return null;

    const playAudio = (url: string) => {
        const audio = new Audio(url);
        audio.play().catch(console.error);
    };

    const handleOpenNote = (e: React.MouseEvent, wordText: string) => {
        e.stopPropagation(); // Prevent audio play when clicking note button
        setSelectedWordText(wordText);
        setCurrentNote(getNote(wordText));
        setIsNoteModalOpen(true);
    };

    const handleSaveNote = (wordText: string, note: string) => {
        saveNote(wordText, note);
    };

    return (
        <div className="min-h-screen bg-white pb-32">
            
            <NoteModal 
                isOpen={isNoteModalOpen}
                onClose={() => setIsNoteModalOpen(false)}
                wordText={selectedWordText}
                initialNote={currentNote}
                onSave={handleSaveNote}
            />

            {/* Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 px-4 py-4 border-b border-slate-100 flex items-center justify-between">
                <Link href={`/unit/${unitId}`} className="p-2 -ml-2 hover:bg-slate-100 rounded-xl transition-colors">
                    <ChevronLeft size={28} className="text-slate-400" />
                </Link>
                <div className="h-2 flex-1 mx-4 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 w-1/3 rounded-full" />
                </div>
                <div className="w-8" />
            </div>

            <div className="p-6 text-center">
                <div className="inline-block px-4 py-1.5 rounded-xl bg-blue-100 text-blue-600 text-sm font-extrabold uppercase tracking-wide mb-4">
                    Lesson
                </div>
                <h1 className="text-3xl font-black text-slate-700 mb-2">
                    {lesson.title}
                </h1>
                <p className="text-slate-400 font-bold">Tap to listen, then practice.</p>
            </div>

            <div className="px-4 space-y-4">
                {lesson.words.map((word, idx) => {
                    const hasNote = !!getNote(word.text);
                    return (
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
                                        <div className="flex items-center gap-2">
                                            <div className="text-xl font-black text-slate-700">{word.text}</div>
                                            {hasNote && (
                                                <div className="bg-yellow-100 text-yellow-600 p-1 rounded-md">
                                                    <NotebookPen size={14} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-sm font-bold text-slate-400">{word.phoneticUK}</div>
                                    </div>
                                </div>
                                
                                <button
                                    onClick={(e) => handleOpenNote(e, word.text)}
                                    className={`p-3 rounded-xl transition-colors ${hasNote ? 'bg-blue-100 text-blue-500' : 'bg-slate-50 text-slate-300 hover:bg-slate-100 hover:text-slate-400'}`}
                                >
                                    <NotebookPen size={20} />
                                </button>
                            </div>
                            
                            {/* Preview Note inline if exists */}
                            {hasNote && (
                                <div className="mt-3 text-sm text-slate-500 bg-yellow-50 p-2 rounded-lg border border-yellow-100 italic">
                                    "{getNote(word.text)}"
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Floating CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-100 z-30 max-w mx-auto">
                <button
                    onClick={() => router.push(`/practice/${lessonId}`)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-extrabold text-lg py-4 rounded-2xl border-b-4 border-green-600 active:border-b-0 active:translate-y-1 transition-all uppercase tracking-widest"
                >
                    START PRACTICE
                </button>
            </div>

        </div>
    );
}
