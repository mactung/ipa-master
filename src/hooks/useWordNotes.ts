"use client";

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'ipa_word_notes';

export interface WordNotes {
  [wordText: string]: string;
}

export function useWordNotes() {
  const [notes, setNotes] = useState<WordNotes>({});

  // Load notes from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setNotes(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to load notes from localStorage", error);
    }
  }, []);

  const getNote = (wordText: string): string => {
    return notes[wordText] || '';
  };

  const saveNote = (wordText: string, noteContent: string) => {
    try {
      const updatedNotes = { ...notes };
      
      if (noteContent.trim()) {
        updatedNotes[wordText] = noteContent.trim();
      } else {
        // Remove empty notes
        delete updatedNotes[wordText];
      }
      
      setNotes(updatedNotes);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
    } catch (error) {
      console.error("Failed to save note to localStorage", error);
    }
  };

  return {
    notes,
    getNote,
    saveNote
  };
}
