import React, { useState } from 'react';
import { Moon, Sun, Menu, X, BookHeart } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleDarkMode: () => void;
  onOpenCroatianOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  toggleDarkMode,
  onOpenCroatianOrder,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/75 backdrop-blur-md border-b border-[#DEE5D4] dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex-shrink-0 flex items-center gap-2 group focus:outline-none"
          >
            <span
              className="text-2xl sm:text-3xl font-bold text-primary group-hover:scale-105 transition-transform"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Milena
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center text-slate-700 dark:text-slate-200 font-medium text-sm lg:text-base">
            <a
              href="#about-book"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              About AkuruLab
            </a>
            <a
              href="#about-author"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              The Author
            </a>
            <a
              href="#where-to-buy"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Where to Buy
            </a>
            <a
              href="#hrvatski"
              className="bg-pink-50 dark:bg-pink-900/30 text-primary border border-pink-200 dark:border-pink-800/50 hover:bg-primary hover:text-white px-4 py-2 rounded-full font-medium transition-all shadow-sm hover:shadow"
            >
              Knjiga na hrvatskom
            </a>
          </div>

          {/* Right actions: Theme switcher & Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg border-b border-pink-100 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#about-book"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-primary transition-colors"
          >
            About AkuruLab
          </a>
          <a
            href="#about-author"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-primary transition-colors"
          >
            The Author
          </a>
          <a
            href="#where-to-buy"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-primary transition-colors"
          >
            Where to Buy
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                toggleDarkMode();
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm transition-colors"
            >
              <span>{isDark ? 'Svijetli način (Light mode)' : 'Tamni način (Dark mode)'}</span>
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <a
              href="#hrvatski"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-pink-50 dark:bg-pink-900/40 text-primary border border-pink-200 dark:border-pink-800 px-4 py-2.5 rounded-full font-medium"
            >
              Knjiga na hrvatskom
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCroatianOrder();
              }}
              className="w-full text-center bg-primary hover:bg-[#d84868] text-white px-4 py-2.5 rounded-full font-semibold shadow flex items-center justify-center gap-2"
            >
              <BookHeart className="w-4 h-4" />
              Naruči primjerak (20€)
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
