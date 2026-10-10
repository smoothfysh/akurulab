import React from 'react';
import { IMAGES } from '../data/stores';
import { Instagram, Youtube, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutAuthorProps {
  onContactClick: () => void;
}

export const AboutAuthor: React.FC<AboutAuthorProps> = ({ onContactClick }) => {
  const { t } = useLanguage();

  return (
    <section
      id="about-author"
      className="py-24 px-4 scroll-mt-24 overflow-hidden bg-white dark:bg-zinc-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
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
      </div>
    </section>
  );
};
