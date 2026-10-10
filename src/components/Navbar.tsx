import React, { useState } from 'react';
import { Moon, Sun, Menu, X, BookHeart, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../data/stores';

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
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-black/80 backdrop-blur-md border-b border-[#DEE5D4] dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand - Flask Pouring Into Open Book Logo */}
          <a
            href="#"
            className="flex-shrink-0 flex items-center group focus:outline-none py-1"
            aria-label="AkuruLab"
            title="AkuruLab"
          >
            <img
              src="./Flask Pouring Into Open Book Logo.png"
              alt="AkuruLab Logo"
              className="h-12 sm:h-14 w-auto max-h-full object-contain dark:brightness-0 dark:invert transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-7 items-center text-slate-700 dark:text-slate-200 font-medium text-sm lg:text-base">
            <a
              href="#about-book"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {t.nav.aboutPlatform}
            </a>
            <a
              href="#about-author"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {t.nav.theAuthor}
            </a>
            <a
              href="#where-to-buy"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {t.nav.whereToBuy}
            </a>
            <a
              href="#hrvatski"
              className="bg-pink-50 dark:bg-pink-900/30 text-primary border border-pink-200 dark:border-pink-800/50 hover:bg-primary hover:text-white px-4 py-2 rounded-full font-medium transition-all shadow-xs hover:shadow"
            >
              {t.nav.croatianEdition}
            </a>
          </div>

          {/* Right actions: Language selector, Theme switcher, Mobile menu */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Selector (EN | HR) */}
            <div className="flex items-center rounded-full bg-slate-100 dark:bg-slate-800 p-0.5 border border-pink-100 dark:border-slate-700 shadow-xs">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                }`}
                aria-label="Switch to English"
                title="English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hr')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  language === 'hr'
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                }`}
                aria-label="Prebaci na hrvatski"
                title="Hrvatski"
              >
                HR
              </button>
            </div>

            {/* Dark / Light Mode Switcher */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={isDark ? t.nav.switchToLight : t.nav.switchToDark}
              title={isDark ? t.nav.switchToLight : t.nav.switchToDark}
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
          <div className="flex items-center gap-3 px-3 py-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <img
              src="./Flask Pouring Into Open Book Logo.png"
              alt="AkuruLab Logo"
              className="h-10 w-auto object-contain dark:brightness-0 dark:invert"
            />
          </div>
          <a
            href="#about-book"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-primary transition-colors"
          >
            {t.nav.aboutPlatform}
          </a>
          <a
            href="#about-author"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-primary transition-colors"
          >
            {t.nav.theAuthor}
          </a>
          <a
            href="#where-to-buy"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-primary transition-colors"
          >
            {t.nav.whereToBuy}
          </a>

          <div className="pt-2 flex flex-col gap-2.5">
            {/* Language row in mobile */}
            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm">
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>{language === 'hr' ? 'Jezik' : 'Language'}</span>
              </span>
              <div className="flex items-center rounded-full bg-slate-200 dark:bg-slate-700 p-0.5 text-xs font-bold">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full ${
                    language === 'en' ? 'bg-primary text-white' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('hr')}
                  className={`px-3 py-1 rounded-full ${
                    language === 'hr' ? 'bg-primary text-white' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Hrvatski
                </button>
              </div>
            </div>

            {/* Dark mode row in mobile */}
            <button
              onClick={() => {
                toggleDarkMode();
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm transition-colors cursor-pointer"
            >
              <span>{isDark ? t.nav.lightMode : t.nav.darkMode}</span>
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <a
              href="#hrvatski"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-pink-50 dark:bg-pink-900/40 text-primary border border-pink-200 dark:border-pink-800 px-4 py-2.5 rounded-full font-medium"
            >
              {t.nav.croatianEdition}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCroatianOrder();
              }}
              className="w-full text-center bg-primary hover:bg-[#d84868] text-white px-4 py-2.5 rounded-full font-semibold shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookHeart className="w-4 h-4" />
              <span>{t.nav.orderCopy}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
