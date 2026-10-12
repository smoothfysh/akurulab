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
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full bg-white shadow-lg border-2 border-[#DEE5D4] dark:border-slate-700/60 flex items-center justify-center p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:scale-105">
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
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 mb-16 bg-[#F8FAF4] dark:bg-slate-800/60 rounded-3xl p-8 md:p-12 border border-[#DEE5D4] dark:border-slate-700 shadow-sm transition-all duration-300">
          {/* Left Column: Text Section */}
          <div className="w-full md:w-3/5 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
            <p>{t.platform.labP1}</p>
            <p>{t.platform.labP2}</p>
          </div>

          {/* Right Column: Torn Watercolor Paper Artwork Frame */}
          <div className="w-full md:w-2/5 flex justify-center flex-shrink-0">
            {/* The torn watercolor paper sheet with subtle drop shadow on hover */}
            <div className="relative group transition-all duration-500 ease-out hover:-translate-y-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.04)] hover:drop-shadow-[0_12px_22px_rgba(40,25,20,0.14)] dark:drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)] dark:hover:drop-shadow-[0_12px_22px_rgba(0,0,0,0.5)]">
              {/* SVG Definitions for Torn Watercolor Paper Edge & Rough Fiber Texture */}
              <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <defs>
                  {/* Rough cotton paper fiber noise texture */}
                  <filter id="torn-paper-fibers" x="0%" y="0%" width="100%" height="100%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" result="noise" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.18  0 0 0 0 0.15  0 0 0 0 0.12  0 0 0 0.18 0"
                      result="coloredNoise"
                    />
                    <feBlend mode="multiply" in="SourceGraphic" in2="coloredNoise" />
                  </filter>

                  {/* Outer Torn Watercolor Paper Frame Clip Path */}
                  <clipPath id="torn-paper-outer" clipPathUnits="objectBoundingBox">
                    <polygon points="0.0000 0.0095, 0.0313 0.0126, 0.0625 0.0130, 0.0938 0.0135, 0.1250 0.0143, 0.1563 0.0080, 0.1875 0.0093, 0.2188 0.0098, 0.2500 0.0136, 0.2813 0.0129, 0.3125 0.0174, 0.3438 0.0146, 0.3750 0.0128, 0.4063 0.0117, 0.4375 0.0092, 0.4688 0.0103, 0.5000 0.0119, 0.5313 0.0165, 0.5625 0.0171, 0.5938 0.0163, 0.6250 0.0114, 0.6563 0.0105, 0.6875 0.0097, 0.7188 0.0121, 0.7500 0.0119, 0.7813 0.0137, 0.8125 0.0148, 0.8438 0.0121, 0.8750 0.0107, 0.9063 0.0115, 0.9375 0.0081, 0.9688 0.0085, 1.0000 0.0141, 0.9929 0.0000, 0.9921 0.0313, 0.9851 0.0625, 0.9857 0.0938, 0.9864 0.1250, 0.9848 0.1563, 0.9915 0.1875, 0.9932 0.2188, 0.9898 0.2500, 0.9877 0.2813, 0.9848 0.3125, 0.9838 0.3438, 0.9867 0.3750, 0.9908 0.4063, 0.9905 0.4375, 0.9923 0.4688, 0.9860 0.5000, 0.9860 0.5313, 0.9835 0.5625, 0.9878 0.5938, 0.9897 0.6250, 0.9891 0.6563, 0.9899 0.6875, 0.9859 0.7188, 0.9858 0.7500, 0.9848 0.7813, 0.9841 0.8125, 0.9909 0.8438, 0.9883 0.8750, 0.9889 0.9063, 0.9905 0.9375, 0.9867 0.9688, 0.9866 1.0000, 1.0000 0.9895, 0.9688 0.9859, 0.9375 0.9846, 0.9063 0.9849, 0.8750 0.9857, 0.8438 0.9900, 0.8125 0.9900, 0.7813 0.9878, 0.7500 0.9886, 0.7188 0.9878, 0.6875 0.9832, 0.6563 0.9880, 0.6250 0.9890, 0.5938 0.9899, 0.5625 0.9896, 0.5313 0.9897, 0.5000 0.9871, 0.4688 0.9880, 0.4375 0.9856, 0.4063 0.9842, 0.3750 0.9857, 0.3438 0.9908, 0.3125 0.9914, 0.2813 0.9897, 0.2500 0.9865, 0.2188 0.9834, 0.1875 0.9862, 0.1563 0.9874, 0.1250 0.9870, 0.0938 0.9893, 0.0625 0.9894, 0.0313 0.9919, 0.0000 0.9868, 0.0103 1.0000, 0.0100 0.9688, 0.0129 0.9375, 0.0130 0.9063, 0.0151 0.8750, 0.0126 0.8438, 0.0087 0.8125, 0.0089 0.7813, 0.0108 0.7500, 0.0111 0.7188, 0.0136 0.6875, 0.0139 0.6563, 0.0128 0.6250, 0.0126 0.5938, 0.0071 0.5625, 0.0097 0.5313, 0.0108 0.5000, 0.0125 0.4688, 0.0140 0.4375, 0.0126 0.4063, 0.0101 0.3750, 0.0101 0.3438, 0.0088 0.3125, 0.0109 0.2813, 0.0162 0.2500, 0.0169 0.2188, 0.0138 0.1875, 0.0124 0.1563, 0.0088 0.1250, 0.0096 0.0938, 0.0126 0.0625, 0.0124 0.0313, 0.0157 0.0000" />
                  </clipPath>

                  {/* Inner Artwork Clip Path */}
                  <clipPath id="torn-paper-inner" clipPathUnits="objectBoundingBox">
                    <polygon points="0.0000 0.0215, 0.0313 0.0257, 0.0625 0.0287, 0.0938 0.0246, 0.1250 0.0227, 0.1563 0.0231, 0.1875 0.0235, 0.2188 0.0203, 0.2500 0.0246, 0.2813 0.0274, 0.3125 0.0251, 0.3438 0.0281, 0.3750 0.0222, 0.4063 0.0221, 0.4375 0.0205, 0.4688 0.0202, 0.5000 0.0239, 0.5313 0.0271, 0.5625 0.0247, 0.5938 0.0275, 0.6250 0.0218, 0.6563 0.0198, 0.6875 0.0204, 0.7188 0.0219, 0.7500 0.0231, 0.7813 0.0256, 0.8125 0.0289, 0.8438 0.0249, 0.8750 0.0244, 0.9063 0.0218, 0.9375 0.0206, 0.9688 0.0216, 1.0000 0.0225, 0.9786 0.0000, 0.9771 0.0313, 0.9774 0.0625, 0.9709 0.0938, 0.9740 0.1250, 0.9729 0.1563, 0.9800 0.1875, 0.9804 0.2188, 0.9785 0.2500, 0.9779 0.2813, 0.9740 0.3125, 0.9750 0.3438, 0.9754 0.3750, 0.9749 0.4063, 0.9806 0.4375, 0.9780 0.4688, 0.9784 0.5000, 0.9748 0.5313, 0.9718 0.5625, 0.9748 0.5938, 0.9778 0.6250, 0.9809 0.6563, 0.9777 0.6875, 0.9739 0.7188, 0.9752 0.7500, 0.9720 0.7813, 0.9744 0.8125, 0.9781 0.8438, 0.9764 0.8750, 0.9800 0.9063, 0.9777 0.9375, 0.9749 0.9688, 0.9729 1.0000, 1.0000 0.9779, 0.9688 0.9746, 0.9375 0.9746, 0.9063 0.9748, 0.8750 0.9745, 0.8438 0.9794, 0.8125 0.9805, 0.7813 0.9801, 0.7500 0.9746, 0.7188 0.9763, 0.6875 0.9707, 0.6563 0.9715, 0.6250 0.9773, 0.5938 0.9778, 0.5625 0.9814, 0.5313 0.9768, 0.5000 0.9778, 0.4688 0.9752, 0.4375 0.9724, 0.4063 0.9759, 0.3750 0.9759, 0.3438 0.9791, 0.3125 0.9788, 0.2813 0.9790, 0.2500 0.9783, 0.2188 0.9715, 0.1875 0.9738, 0.1563 0.9752, 0.1250 0.9761, 0.0938 0.9763, 0.0625 0.9798, 0.0313 0.9790, 0.0000 0.9737, 0.0234 1.0000, 0.0234 0.9688, 0.0243 0.9375, 0.0288 0.9063, 0.0250 0.8750, 0.0252 0.8438, 0.0202 0.8125, 0.0215 0.7813, 0.0195 0.7500, 0.0264 0.7188, 0.0289 0.6875, 0.0264 0.6563, 0.0254 0.6250, 0.0202 0.5938, 0.0228 0.5625, 0.0203 0.5313, 0.0225 0.5000, 0.0269 0.4688, 0.0271 0.4375, 0.0279 0.4063, 0.0218 0.3750, 0.0231 0.3438, 0.0206 0.3125, 0.0262 0.2813, 0.0280 0.2500, 0.0287 0.2188, 0.0237 0.1875, 0.0254 0.1563, 0.0221 0.1250, 0.0224 0.0938, 0.0220 0.0625, 0.0239 0.0313, 0.0265 0.0000" />
                  </clipPath>
                </defs>
              </svg>

              {/* Outer Torn Paper Frame with Rough Fiber Texture */}
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 p-2 sm:p-2.5 bg-[#FAF7F0] dark:bg-[#252321] flex items-center justify-center transition-all duration-300"
                style={{ clipPath: 'url(#torn-paper-outer)' }}
              >
                {/* Fiber grain texture layer */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-45 dark:opacity-25 mix-blend-multiply"
                  style={{ filter: 'url(#torn-paper-fibers)' }}
                />

                {/* Inner Artwork Image with Matching Torn Edge */}
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{ clipPath: 'url(#torn-paper-inner)' }}
                >
                  <img
                    src={IMAGES.logo}
                    alt="AkuruLab - The Creative Playground and Laboratory of Milena Jayawardana"
                    className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
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
