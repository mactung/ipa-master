"use client";

import { use } from 'react';
import { ipaPairs } from '@/data/ipa-pairs';
import PracticeSession from '@/components/PracticeSession';

export default function PracticePage({ params }: { params: Promise<{ pairId: string }> }) {
    const { pairId } = use(params);
    const pair = ipaPairs.find(p => p.id === pairId);

    if (!pair) return null;

    return (
        <>
            <PracticeSession words={pair.examples} pairId={pairId} />
        </>
    );
}
