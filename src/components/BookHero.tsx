import React from 'react';
import { IMAGES } from '../data/stores';
import { ShoppingCart, BookOpen, Sparkles, Eye, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BookHeroProps {
  onOpenExcerpt: () => void;
  onOpenCroatianOrder: () => void;
}

export const BookHero: React.FC<BookHeroProps> = ({ onOpenExcerpt, onOpenCroatianOrder }) => {
  const { language, t } = useLanguage();

  return (
    <header className="hero-section py-20 md:py-28 px-4 relative overflow-hidden bg-gradient-to-b from-[#F2F5EC] to-[#EFF3E6] dark:from-zinc-950 dark:to-zinc-900 border-y border-[#DEE5D4]/60 dark:border-slate-800 transition-colors duration-300">
      {/* Decorative watercolor background ambient blurs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-pink-200/30 dark:bg-pink-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-yellow-100/40 dark:bg-yellow-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16 relative z-10">
        {/* 3D Realistic Book Mockup */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group flex items-center justify-center py-6">
            {/* Ambient colorful glow under the book */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-300/30 to-yellow-200/30 dark:from-pink-900/30 dark:to-yellow-900/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-85 transition duration-700"></div>

            {/* 3D Perspective Container */}
            <div
              className="relative transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]"
              style={{ perspective: '1200px' }}
            >
              <div
                className="relative rounded-r-md rounded-l-sm overflow-hidden bg-white dark:bg-slate-800 book-shadow-3d transition-transform duration-500 w-[290px] sm:w-[330px] md:w-[340px] lg:w-[370px] xl:w-[390px] max-w-[85vw]"
                style={{
                  transform: 'rotateY(-8deg) rotateX(2deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Book Cover Image - adaptive to language */}
                <img
                  src={language === 'hr' ? IMAGES.bookCroatian : IMAGES.bookEnglish}
                  alt={language === 'hr' ? 'To su samo sise - Knjiga o raku dojke autorice Milene Jayawardana' : "It's Just Tits - Breast Cancer Memoir by Milena Jayawardana"}
                  className="w-full h-auto block select-none rounded-r-sm transition-opacity duration-300"
                  style={{ aspectRatio: '1600/2560', objectFit: 'cover' }}
                />

                {/* Spine lighting & crease simulation */}
                <div className="absolute inset-y-0 left-0 w-5 pointer-events-none book-spine-gradient"></div>
                <div className="absolute inset-y-0 left-0 w-[1.5px] bg-white/40 pointer-events-none"></div>

                {/* Surface book glossy glare effect */}
                <div className="absolute inset-0 pointer-events-none book-glare"></div>

                {/* Right page thickness edge simulation */}
                <div
                  className="absolute top-0 bottom-0 right-0 w-[4px] pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to left, rgba(0,0,0,0.18), transparent)',
                  }}
                ></div>
              </div>

              {/* Realistic Ground Shadow */}
              <div className="absolute -bottom-3 left-4 right-2 h-4 pointer-events-none rounded-full blur-md bg-black/25 dark:bg-black/50 transform scale-95 group-hover:scale-100 group-hover:blur-lg transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Text & Call-To-Actions */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-wider bg-pink-50 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800/60 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.hero.badge}</span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-primary mb-4 leading-tight"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {t.hero.title}
          </h1>

          <h2
            className="text-2xl sm:text-3xl italic mb-6 text-slate-700 dark:text-slate-200"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {t.hero.subtitle}
          </h2>

          <p className="text-base sm:text-lg mb-8 max-w-xl mx-auto md:mx-0 text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {/* CTA 1: BUY ENGLISH VERSION FROM AMAZON */}
            <a
              href="#where-to-buy"
              className="bg-primary hover:bg-[#d84868] text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2.5 font-semibold text-sm sm:text-base cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>{t.hero.buyKindle}</span>
            </a>

            {/* CTA 2: KNJIGA NA HRVATSKOM */}
            <a
              href="#hrvatski"
              className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-2 border-pink-100 dark:border-slate-700 hover:border-primary px-7 py-3.5 sm:px-8 sm:py-4 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2.5 font-semibold text-sm sm:text-base cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-primary" />
              <span>{t.hero.orderPaperback}</span>
            </a>

            {/* CTA 3: PREVIEW EXCERPT - Temporarily hidden until excerpt content is finalized
            <button
              onClick={onOpenExcerpt}
              className="px-6 py-3.5 rounded-full text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary border border-slate-300 dark:border-slate-700 hover:border-primary/50 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm transition-all flex items-center gap-2 text-sm font-medium cursor-pointer"
            >
              <Eye className="w-4 h-4 text-primary" />
              <span>{t.hero.previewExcerpt}</span>
            </button>
            */}
          </div>
        </div>
      </div>
    </header>
  );
};
