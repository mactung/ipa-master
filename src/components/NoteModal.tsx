"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Save } from 'lucide-react';

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  wordText: string;
  initialNote: string;
  onSave: (wordText: string, note: string) => void;
}

export default function NoteModal({ isOpen, onClose, wordText, initialNote, onSave }: NoteModalProps) {
  const [note, setNote] = useState(initialNote);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setNote(initialNote);
  }, [initialNote, isOpen]);

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      // Focus textarea when modal opens
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(wordText, note);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl p-6 transform transition-all scale-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-black text-slate-700">
            Note for "<span className="text-blue-500">{wordText}</span>"
          </h3>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <textarea
          ref={textareaRef}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a cue, translation, or reminder..."
          className="w-full h-32 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-lg font-medium text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-0 resize-none mb-6 placeholder:text-slate-300"
        />

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <Save size={20} />
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
}
