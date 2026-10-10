/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AboutPlatform } from './components/AboutPlatform';
import { AboutAuthor } from './components/AboutAuthor';
import { BookHero } from './components/BookHero';
import { WhereToBuy } from './components/WhereToBuy';
import { CroatianEdition } from './components/CroatianEdition';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { ExcerptModal } from './components/ExcerptModal';
import { InfoModal, InfoModalType } from './components/InfoModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('milena_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isExcerptOpen, setIsExcerptOpen] = useState(false);
  const [infoModal, setInfoModal] = useState<InfoModalType>(null);

  // Sync dark class on document root and body
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('milena_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('milena_theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fffdf2] dark:bg-[#1a1a1a] text-slate-800 dark:text-slate-100 selection:bg-pink-200 selection:text-pink-900 transition-colors duration-300">
      {/* Top Navigation */}
      <Navbar
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
        onOpenCroatianOrder={() => setIsOrderOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: About the Platform / AkuruLab */}
        <AboutPlatform />

        {/* Section 2: Meet the Author */}
        <AboutAuthor onContactClick={() => setInfoModal('contact')} />

        {/* Section 3: Book Showcase Hero ("It's just tits") */}
        <BookHero onOpenExcerpt={() => setIsExcerptOpen(true)} />

        {/* Section 4: Global Availability - Amazon Stores */}
        <WhereToBuy />

        {/* Section 5: Croatian Edition ("To su samo sise") */}
        <CroatianEdition onOpenOrderModal={() => setIsOrderOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenInfo={(type) => setInfoModal(type)} />

      {/* Croatian Edition Order Modal */}
      <OrderModal isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />

      {/* Book Excerpt / Look Inside Modal */}
      <ExcerptModal
        isOpen={isExcerptOpen}
        onClose={() => setIsExcerptOpen(false)}
        onOrderClick={() => setIsOrderOpen(true)}
      />

      {/* Footer Info Modals (Privacy, Shipping, Terms, Contact) */}
      <InfoModal type={infoModal} onClose={() => setInfoModal(null)} />
    </div>
  );
}
