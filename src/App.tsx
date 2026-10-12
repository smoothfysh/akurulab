/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { AboutPlatform } from './components/AboutPlatform';
import { AboutAuthor } from './components/AboutAuthor';
import { CreativeAlchemyPage } from './pages/CreativeAlchemyPage';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { ExcerptModal } from './components/ExcerptModal';
import { InfoModal, InfoModalType } from './components/InfoModal';
import { HealingExpressionPage } from './pages/HealingExpressionPage';

export type PageType = 'home' | 'creative-alchemy' | 'healing-expression';

function AppContent() {
  const { language } = useLanguage();
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('milena_theme');
      if (saved) return saved === 'dark';
    }
    return false; // Default to light mode
  });

  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (
        hash.includes('support-community') ||
        hash.includes('support') ||
        hash.includes('healing-expression') ||
        hash.includes('healing')
      ) {
        return 'healing-expression';
      }
      if (hash.includes('creative-alchemy') || hash.includes('where-to-buy') || hash.includes('hrvatski')) {
        return 'creative-alchemy';
      }
    }
    return 'home';
  });

  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isExcerptOpen, setIsExcerptOpen] = useState(false);
  const [infoModal, setInfoModal] = useState<InfoModalType>(null);

  // Sync dynamic SEO page title, meta description, and html lang
  useEffect(() => {
    let title = '';
    let description = '';

    if (currentPage === 'creative-alchemy') {
      if (language === 'hr') {
        title = 'To su samo sise — Milena Jayawardana | Knjiga na hrvatskom & Amazon';
        description = 'Naručite hrvatsko izdanje knjige "To su samo sise" autorice Milene Jayawardana ili kupite na Amazonu. Memoar o raku dojke, kreativnosti i oporavku.';
      } else {
        title = "It's Just Tits by Milena Jayawardana | Breast Cancer Memoir & Art — AkuruLab";
        description = "Discover 'It's Just Tits' by Milena Jayawardana. A raw, artistic memoir of breast cancer recovery and creative alchemy. Available worldwide on Amazon.";
      }
    } else if (currentPage === 'healing-expression') {
      if (language === 'hr') {
        title = 'GEA Kafe Podcast & Podrška | Milena Jayawardana & Klub GEA Pula';
        description = 'Službene epizode podcasta GEA Kafe (Gea Cafe) o raku dojke s onkolozima i borkinjama, posveta Klubu GEA Pula i vodič za operaciju.';
      } else {
        title = 'GEA Kafe Podcast & Community Support | Milena Jayawardana — AkuruLab';
        description = 'Listen to the GEA Kafe (Gea Cafe) podcast featuring oncologists, therapists, and breast cancer survivors. Practical hospital packing guide and survivor community.';
      }
    } else {
      if (language === 'hr') {
        title = 'AkuruLab | Milena Jayawardana — Kreativna alkemija, "To su samo sise" & GEA Kafe';
        description = 'Službena web stranica Milene Jayawardana i AkuruLaba. Knjiga o raku dojke "To su samo sise", GEA Kafe podcast, akvareli i priče iz Hrvatske i Šri Lanke.';
      } else {
        title = 'AkuruLab | Milena Jayawardana — "It\'s Just Tits", Creative Alchemy & GEA Kafe Podcast';
        description = 'Official website of Milena Jayawardana & AkuruLab. Author of breast cancer memoir "It\'s Just Tits", host of GEA Kafe podcast, artist blending Mediterranean Croatia and Sri Lanka.';
      }
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
    document.documentElement.lang = language;
  }, [currentPage, language]);

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

  // Listen to hash changes (browser back/forward support)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (
        hash.includes('support-community') ||
        hash.includes('support') ||
        hash.includes('healing-expression') ||
        hash.includes('healing')
      ) {
        setCurrentPage('healing-expression');
      } else if (hash.includes('creative-alchemy') || hash.includes('where-to-buy') || hash.includes('hrvatski')) {
        setCurrentPage('creative-alchemy');
      } else if (!hash || hash === '#' || hash.includes('about-book') || hash.includes('about-author')) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    if (page === 'healing-expression') {
      window.location.hash = '#/support-community';
    } else if (page === 'creative-alchemy') {
      window.location.hash = '#/creative-alchemy';
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        currentPage={currentPage}
        onNavigateHome={() => navigateTo('home')}
        onNavigateCreativeAlchemy={() => navigateTo('creative-alchemy')}
        onNavigateHealingExpression={() => navigateTo('healing-expression')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div>
            {/* Section 1: About the Platform / AkuruLab (with clickable Creative Alchemy & Healing cards) */}
            <AboutPlatform
              onOpenCreativeAlchemy={() => navigateTo('creative-alchemy')}
              onOpenHealingExpression={() => navigateTo('healing-expression')}
            />

            {/* Section 2: Meet the Author */}
            <AboutAuthor onContactClick={() => setInfoModal('contact')} />
          </div>
        )}

        {currentPage === 'creative-alchemy' && (
          /* Separate Page for Creative Alchemy: Book Showcase, Amazon Stores & Croatian Edition */
          <CreativeAlchemyPage
            onBackHome={() => navigateTo('home')}
            onOpenExcerpt={() => setIsExcerptOpen(true)}
            onOpenCroatianOrder={() => setIsOrderOpen(true)}
          />
        )}

        {currentPage === 'healing-expression' && (
          /* Separate Page for Healing & Expression: Podcasts, Surgery Guide & Klub GEA Dedication */
          <HealingExpressionPage
            onBackHome={() => navigateTo('home')}
          />
        )}
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

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
