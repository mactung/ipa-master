"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Accent = 'uk' | 'us';

interface SettingsContextType {
    accent: Accent;
    setAccent: (accent: Accent) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [accent, setAccent] = useState<Accent>('uk');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedAccent = localStorage.getItem('ipa-master-accent') as Accent;
        if (savedAccent && (savedAccent === 'uk' || savedAccent === 'us')) {
            setAccent(savedAccent);
        }
        setIsLoaded(true);
    }, []);

    const updateAccent = (newAccent: Accent) => {
        setAccent(newAccent);
        localStorage.setItem('ipa-master-accent', newAccent);
    };

    if (!isLoaded) {
        return null; // Or a loading spinner if preferred, to prevent hydration mismatch
    }

    return (
        <SettingsContext.Provider value={{ accent, setAccent: updateAccent }}>
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
