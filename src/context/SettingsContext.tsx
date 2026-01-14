"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Accent = 'uk' | 'us';

interface SettingsContextType {
    accent: Accent;
    setAccent: (accent: Accent) => void;
    lastPracticedUnitId: string | null;
    setLastPracticedUnitId: (id: string) => void;
    completedUnits: string[];
    markUnitComplete: (id: string) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [accent, setAccent] = useState<Accent>('uk');
    const [lastPracticedUnitId, setLastPracticedUnitIdState] = useState<string | null>(null);
    const [completedUnits, setCompletedUnits] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedAccent = localStorage.getItem('ipa-master-accent') as Accent;
        if (savedAccent && (savedAccent === 'uk' || savedAccent === 'us')) {
            setAccent(savedAccent);
        }

        const savedLastUnit = localStorage.getItem('ipa-master-last-unit');
        if (savedLastUnit) setLastPracticedUnitIdState(savedLastUnit);

        const savedCompleted = localStorage.getItem('ipa-master-completed-units');
        if (savedCompleted) {
            try {
                setCompletedUnits(JSON.parse(savedCompleted));
            } catch (e) {
                console.error("Failed to parse completed units", e);
            }
        }

        setIsLoaded(true);
    }, []);

    const updateAccent = (newAccent: Accent) => {
        setAccent(newAccent);
        localStorage.setItem('ipa-master-accent', newAccent);
    };

    const setLastPracticedUnitId = (id: string) => {
        setLastPracticedUnitIdState(id);
        localStorage.setItem('ipa-master-last-unit', id);
    };

    const markUnitComplete = (id: string) => {
        if (!completedUnits.includes(id)) {
            const newCompleted = [...completedUnits, id];
            setCompletedUnits(newCompleted);
            localStorage.setItem('ipa-master-completed-units', JSON.stringify(newCompleted));
        }
    };

    if (!isLoaded) {
        return null;
    }

    return (
        <SettingsContext.Provider value={{
            accent,
            setAccent: updateAccent,
            lastPracticedUnitId,
            setLastPracticedUnitId,
            completedUnits,
            markUnitComplete
        }}>
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
}
