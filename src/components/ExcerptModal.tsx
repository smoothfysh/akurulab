import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, BookOpen, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);

  if (!isOpen) return null;

  const pages = t.excerpt.pages;
  const current = pages[currentPage] || pages[0];

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
              {t.excerpt.modalTitle}
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
              {t.excerpt.page} {currentPage + 1} {t.excerpt.of} {pages.length}
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
              {t.excerpt.orderFullBook}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
