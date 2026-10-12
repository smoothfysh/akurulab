import React from 'react';
import { FlaskConical, Heart, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/stores';
import { useLanguage } from '../context/LanguageContext';

interface AboutPlatformProps {
  onOpenCreativeAlchemy: () => void;
  onOpenHealingExpression?: () => void;
}

export const AboutPlatform: React.FC<AboutPlatformProps> = ({
  onOpenCreativeAlchemy,
  onOpenHealingExpression,
}) => {
  const { t } = useLanguage();

  return (
    <section
      id="about-book"
      className="pt-28 pb-20 md:pt-36 md:pb-24 px-4 bg-white dark:bg-zinc-900 scroll-mt-24 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header & Quote */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-md border border-[#DEE5D4] dark:border-slate-700/60 flex items-center justify-center p-3.5 sm:p-4 transition-transform duration-300 hover:scale-105">
              <img
                src="./Flask Pouring Into Open Book Logo.png"
                alt="AkuruLab - Creative Laboratory by Milena Jayawardana"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h2
            className="text-4xl md:text-5xl mb-6 text-slate-900 dark:text-white font-serif tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {t.platform.title}
          </h2>
          <blockquote
            className="text-2xl sm:text-3xl md:text-4xl text-[#D96570] max-w-3xl mx-auto leading-snug tracking-wide italic mt-2"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {t.platform.quote}
          </blockquote>
        </div>

        {/* Central AkuruLab Lab Card */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16 bg-[#F8FAF4] dark:bg-slate-800/60 rounded-3xl p-8 md:p-12 border border-[#DEE5D4] dark:border-slate-700 shadow-sm transition-all duration-300">
          <div className="w-full md:w-1/3 flex justify-center flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-300/30 to-yellow-200/30 rounded-full blur-xl opacity-70 group-hover:opacity-90 transition duration-500"></div>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl bg-white flex items-center justify-center p-3">
                <img
                  src={IMAGES.logo}
                  alt="AkuruLab - The Creative Playground and Laboratory of Milena Jayawardana"
                  className="w-full h-full object-contain rounded-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
            <p>{t.platform.labP1}</p>
            <p>{t.platform.labP2}</p>
          </div>
        </div>

        {/* Two Feature Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {/* Card 1: Creative Alchemy (Clickable -> Opens Creative Alchemy Page) */}
          <div
            onClick={onOpenCreativeAlchemy}
            className="p-8 bg-white dark:bg-slate-800 rounded-2xl border-2 border-pink-200 dark:border-pink-900/60 shadow-sm hover:border-primary hover:shadow-xl hover:-translate-y-1.5 transition-all cursor-pointer group relative overflow-hidden"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenCreativeAlchemy();
              }
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform"></div>

            <div className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
              <FlaskConical className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">
                {t.platform.card1Title}
              </h3>
              <ArrowRight className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 opacity-80 leading-relaxed mb-4">
              {t.platform.card1Desc}
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline">
              {t.platform.card1Action}
            </span>
          </div>

          {/* Card 2: Support & Community (Clickable -> Opens Support & Community Page) */}
          <div
            onClick={onOpenHealingExpression}
            className="p-8 bg-white dark:bg-slate-800 rounded-2xl border-2 border-pink-200 dark:border-pink-900/60 shadow-sm hover:border-primary hover:shadow-xl hover:-translate-y-1.5 transition-all cursor-pointer group relative overflow-hidden"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenHealingExpression?.();
              }
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform"></div>

            <div className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
              <Heart className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">
                {t.platform.card2Title}
              </h3>
              <ArrowRight className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 opacity-80 leading-relaxed mb-4">
              {t.platform.card2Desc}
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline">
              {t.platform.card2Action}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
