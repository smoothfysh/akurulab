import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, BookOpen, Quote } from 'lucide-react';
import { IMAGES } from '../data/stores';

interface ExcerptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderClick: () => void;
}

export const ExcerptModal: React.FC<ExcerptModalProps> = ({
  isOpen,
  onClose,
  onOrderClick,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  if (!isOpen) return null;

  const pages = [
    {
      title: 'Prologue: Finding The Colors Again',
      quote: 'When the diagnosis hit, everything became medical terminology and black-and-white scan results. But the soul cannot heal in greyscale.',
      content: [
        'I held the cold manila folder with trembling hands. In a single second, the rhythm of my everyday life shattered into a thousand jagged pieces.',
        'Nobody prepares you for the silence that follows. The kind of silence where every breath sounds loud, and your own heartbeat feels like a ticking countdown.',
        'That evening, instead of drowning in despair, I picked up an old brush and dipping water into pink and gold pigments. The water blossomed on the paper. For the first time in weeks, I could exhale.',
      ],
    },
    {
      title: 'Chapter 1: "It’s Just Tits"',
      quote: 'They are soft, they are fragile, they are human. But they do not hold the deed to who I am.',
      content: [
        'People tiptoed around the word. They whispered it in hospital waiting rooms like a curse. But humor and truth became my armor.',
        'One morning in front of the bathroom mirror, looking at the surgical marks mapped across my chest like constellations, I said it out loud: "It’s just tits."',
        'Saying it wasn’t diminishing the pain; it was disarming the monster. It was reminding myself that dignity, laughter, passion, and love lived so much deeper than flesh and bone.',
      ],
    },
    {
      title: 'A Message to Every Warrior',
      quote: 'You are allowed to be tired. You are allowed to be angry. And you are allowed to rebuild yourself with gold in the cracks.',
      content: [
        'To every woman standing before an uncertain path: you are not walking alone. Thousands of hands reach out across miles and oceans.',
        'This book is a letter, a mirror, and an embrace. May its pages give you permission to breathe, to paint outside the lines, and to reclaim every radiant piece of yourself.',
      ],
    },
  ];

  const current = pages[currentPage];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4 animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-9 shadow-2xl border border-pink-100 dark:border-slate-800 relative flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-pink-100 dark:border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <span
              className="text-xl font-bold text-primary"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              It's Just Tits — Excerpt
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close excerpt"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Excerpt Body */}
        <div className="overflow-y-auto flex-1 pr-2 space-y-5 text-slate-700 dark:text-slate-200">
          <h3
            className="text-2xl sm:text-3xl text-slate-900 dark:text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {current.title}
          </h3>

          <div className="p-4 rounded-2xl bg-[#fffdf2] dark:bg-slate-800/80 border-l-4 border-primary text-slate-600 dark:text-slate-300 italic flex gap-3">
            <Quote className="w-6 h-6 text-primary flex-shrink-0 opacity-70" />
            <p className="text-sm sm:text-base leading-relaxed">{current.quote}</p>
          </div>

          <div className="space-y-4 text-base leading-relaxed font-sans text-slate-600 dark:text-slate-300">
            {current.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Pagination & Actions */}
        <div className="border-t border-pink-100 dark:border-slate-800 pt-5 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span>
              Page {currentPage + 1} of {pages.length}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1))}
              disabled={currentPage === pages.length - 1}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOrderClick();
              }}
              className="bg-primary hover:bg-[#d84868] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow hover:shadow-md transition-all cursor-pointer"
            >
              Order Full Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
