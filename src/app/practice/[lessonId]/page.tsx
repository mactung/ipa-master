"use client";

import { use } from 'react';
import { units, Lesson } from '@/data/units';
import PracticeSession from '@/components/PracticeSession';
import { useRouter } from 'next/navigation';

export default function PracticePage({ params }: { params: Promise<{ lessonId: string }> }) {
    const { lessonId } = use(params);
    const router = useRouter();

    // Find the lesson
    let lesson: Lesson | undefined;

    for (const u of units) {
        const found = u.lessons.find(l => l.id === lessonId);
        if (found) {
            lesson = found;
            break;
        }
    }

    if (!lesson) return null;

    return (
        <>
            <PracticeSession words={lesson.words} lessonId={lesson.id} />
        </>
    );
}
