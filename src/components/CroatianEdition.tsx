import React from 'react';
import { IMAGES } from '../data/stores';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CroatianEditionProps {
  onOpenOrderModal: () => void;
}

export const CroatianEdition: React.FC<CroatianEditionProps> = ({ onOpenOrderModal }) => {
  const { t } = useLanguage();

  return (
    <section
      id="hrvatski"
      className="py-24 px-4 bg-[#EFF3E6] dark:bg-zinc-950 scroll-mt-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto bg-[#F8FAF4] dark:bg-slate-800/90 rounded-[2rem] shadow-xl overflow-hidden border border-[#DEE5D4] dark:border-slate-700">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left Column: Details & Ordering */}
          <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-14 flex flex-col justify-center">
            {/* Badges */}
            <div className="inline-flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-block bg-pink-50 dark:bg-pink-900/40 text-primary border border-pink-200 dark:border-pink-800/50 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                {t.croatianSection.badgeDirect}
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-slate-700/80 px-3.5 py-1.5 rounded-full border border-[#DEE5D4]/80 dark:border-slate-600">
                {t.croatianSection.badgeExclusive}
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl mb-3 leading-tight text-slate-900 dark:text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {t.croatianSection.title}
            </h2>

            <p
              className="text-3xl text-primary mb-6"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              {t.croatianSection.bookTitle}
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {t.croatianSection.description}
            </p>

            {/* Checkmark Highlights */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-200 font-medium text-base">
                  {t.croatianSection.feature1}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-200 font-medium text-base">
                  {t.croatianSection.feature3}
                </span>
              </div>
            </div>

            {/* CTA action */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                id="open-order-modal"
                onClick={onOpenOrderModal}
                className="bg-primary hover:bg-[#d84868] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2.5 font-semibold text-lg cursor-pointer w-full sm:w-auto"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{t.croatianSection.orderBtn}</span>
              </button>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {t.croatianSection.deliveryTime}
              </span>
            </div>
          </div>

          {/* Right Column: 3D Croatian Mockup */}
          <div className="w-full md:w-1/2 relative bg-[#EFF3E6]/70 dark:bg-slate-900/80 flex items-center justify-center p-8 sm:p-12 md:p-14 border-t md:border-t-0 md:border-l border-[#DEE5D4]/60 dark:border-slate-700">
            <div className="relative group flex items-center justify-center py-6">
              {/* Soft ambient background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-300/30 to-yellow-200/30 dark:from-pink-900/30 dark:to-yellow-900/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-700"></div>

              {/* 3D Perspective container */}
              <div
                className="relative transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]"
                style={{ perspective: '1200px' }}
              >
                <div
                  className="relative rounded-r-md rounded-l-sm overflow-hidden bg-white dark:bg-slate-800 book-shadow-3d"
                  style={{
                    transform: 'rotateY(-6deg) rotateX(2deg)',
                    transformStyle: 'preserve-3d',
                    width: '280px',
                    maxWidth: '85vw',
                  }}
                >
                  {/* Croatian Book Cover Image */}
                  <img
                    src={IMAGES.bookCroatian}
                    alt="To su samo sise - Hrvatsko izdanje"
                    className="w-full h-auto block select-none rounded-r-sm"
                    style={{ aspectRatio: '1600/2560', objectFit: 'cover' }}
                  />

                  {/* Spine gradient */}
                  <div className="absolute inset-y-0 left-0 w-5 pointer-events-none book-spine-gradient"></div>
                  <div className="absolute inset-y-0 left-0 w-[1.5px] bg-white/40 pointer-events-none"></div>

                  {/* Surface lighting glare */}
                  <div className="absolute inset-0 pointer-events-none book-glare"></div>

                  {/* Edge thickness shadow */}
                  <div
                    className="absolute top-0 bottom-0 right-0 w-[4px] pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to left, rgba(0,0,0,0.18), transparent)',
                    }}
                  ></div>
                </div>

                {/* Ground shadow */}
                <div className="absolute -bottom-3 left-4 right-2 h-4 pointer-events-none rounded-full blur-md bg-black/25 dark:bg-black/50 transform scale-95 group-hover:scale-100 group-hover:blur-lg transition-all duration-500"></div>

                {/* Ribbon Badge */}
                <div className="absolute -top-3 -right-3 z-10 bg-pink-100 text-primary font-bold px-4 py-1.5 rounded-lg shadow-lg transform rotate-6 border border-pink-200 tracking-wider text-xs uppercase select-none">
                  {t.croatianSection.ribbonBadge}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
