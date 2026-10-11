import React, { useState } from 'react';
import { IMAGES } from '../data/stores';
import { Instagram, Youtube, Mail, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutAuthorProps {
  onContactClick: () => void;
}

export const AboutAuthor: React.FC<AboutAuthorProps> = ({ onContactClick }) => {
  const { t } = useLanguage();
  const [journeyImageSrc, setJourneyImageSrc] = useState('./A Life Journey in Watercolour_v2.jpg');
  const [imageFailedToLoad, setImageFailedToLoad] = useState(false);

  const handleLocalFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setJourneyImageSrc(localUrl);
      setImageFailedToLoad(false);
    }
  };

  return (
    <section
      id="about-author"
      className="py-24 px-4 scroll-mt-24 overflow-hidden bg-white dark:bg-zinc-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top: Photo & Bio Columns */}
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Author Image Column */}
          <div className="w-full relative md:w-1/3">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-pink-100 dark:border-slate-700 transform hover:scale-[1.02] transition-transform duration-500 bg-slate-100 dark:bg-slate-800">
              <img
                src={IMAGES.author}
                alt="Milena - Author of It's Just Tits"
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </div>
          </div>

          {/* Author Story Column */}
          <div className="w-full bg-[#F8FAF4] dark:bg-slate-800/60 rounded-3xl p-8 md:p-12 border border-[#DEE5D4] dark:border-slate-700 shadow-sm md:w-2/3">
            <span className="text-primary font-bold tracking-widest uppercase text-xs inline-block bg-pink-50 dark:bg-pink-900/30 border border-pink-100 dark:border-pink-900/40 px-3.5 py-1 rounded-full mb-4">
              {t.author.badge}
            </span>
            <h2
              className="text-5xl sm:text-6xl text-primary mb-6"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              {t.author.title}
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
              <p>{t.author.p1}</p>
              <p>{t.author.p2}</p>
              <p>{t.author.p3}</p>
            </div>

            {/* Social & Contact Links */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-pink-100 dark:border-slate-700 hover:border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary bg-white dark:bg-slate-700 shadow-sm"
                aria-label="Instagram profile"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-pink-100 dark:border-slate-700 hover:border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary bg-white dark:bg-slate-700 shadow-sm"
                aria-label="YouTube channel"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-pink-100 dark:border-slate-700 hover:border-primary text-slate-700 dark:text-slate-200 hover:text-primary bg-white dark:bg-slate-700 font-medium text-sm transition-all shadow-sm cursor-pointer"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>{t.author.sendMessage}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Life Journey in Watercolour Showcase */}
        <div className="mt-14 sm:mt-18">
          <div className="bg-[#F8FAF4] dark:bg-slate-800/60 rounded-3xl p-6 sm:p-10 md:p-12 border border-[#DEE5D4] dark:border-slate-700 shadow-sm text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-xs inline-flex items-center gap-1.5 bg-pink-50 dark:bg-pink-900/30 border border-pink-100 dark:border-pink-900/40 px-3.5 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.author.journeyBadge}</span>
            </span>
            <h3
              className="text-3xl sm:text-4xl text-slate-900 dark:text-white mb-2 font-serif tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {t.author.journeyTitle}
            </h3>
            <p
              className="text-xl sm:text-2xl text-[#D96570] max-w-xl mx-auto italic mb-8"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              {t.author.journeySubtitle}
            </p>

            {/* Watercolor Infographic Artwork Container */}
            <div className="relative mx-auto max-w-3xl rounded-2xl overflow-hidden shadow-xl border-2 border-pink-100 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 sm:p-4 group">
              {!imageFailedToLoad ? (
                <img
                  src={journeyImageSrc}
                  onError={() => setImageFailedToLoad(true)}
                  alt="A Life Journey in Watercolour - Born in Pula, Migrated to UK, Germany, Belgium, Back to Croatia"
                  className="w-full h-auto object-contain block rounded-xl group-hover:scale-[1.01] transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <div className="p-8 sm:p-12 text-center space-y-4 bg-pink-50/40 dark:bg-slate-800/60 rounded-xl border border-dashed border-pink-200 dark:border-slate-700">
                  <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/40 text-primary rounded-full flex items-center justify-center mx-auto">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                    A Life Journey in Watercolour
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    The image is looking for <code className="bg-white dark:bg-slate-700 px-2 py-0.5 rounded text-xs font-mono text-primary font-bold">/public/A Life Journey in Watercolour_v3.jpg</code> in your repository.
                  </p>
                  <div className="pt-2">
                    <label
                      htmlFor="journey-file-picker"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-[#d84868] text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:shadow-lg transition-all cursor-pointer"
                    >
                      <ImageIcon className="w-4 h-4" />
                      <span>Select image from your computer to preview</span>
                    </label>
                    <input
                      id="journey-file-picker"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleLocalFileSelect}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
