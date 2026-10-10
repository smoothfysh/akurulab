import React from 'react';
import { FlaskConical, Heart } from 'lucide-react';
import { IMAGES } from '../data/stores';

export const AboutPlatform: React.FC = () => {
  return (
    <section
      id="about-book"
      className="pt-28 pb-20 md:pt-36 md:pb-24 px-4 bg-white dark:bg-zinc-900 scroll-mt-24 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header & Quote */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs inline-block bg-pink-50 dark:bg-pink-900/30 border border-pink-100 dark:border-pink-900/50 px-3.5 py-1 rounded-full mb-4">
            About the Platform
          </span>
          <h2
            className="text-4xl md:text-5xl mb-6 text-slate-900 dark:text-white font-serif tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Milena's AkuruLab
          </h2>
          <blockquote
            className="text-2xl sm:text-3xl md:text-4xl text-[#D96570] max-w-3xl mx-auto leading-snug tracking-wide italic mt-2"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            “I didn't start writing to be an author; I started writing to find my way back to myself.”
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
                  alt="AkuruLab Logo"
                  className="w-full h-full object-contain rounded-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
            <p>
              This is my digital playground and creative laboratory. It’s the space where I began
              tinkering with my own experiences, using writing as a way to process my feelings until
              those thoughts eventually evolved into my first self-published book.
            </p>
            <p>
              Feel free to poke around the experiments; you might just find the spark to begin your
              own.
            </p>
          </div>
        </div>

        {/* Two Feature Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-pink-100 dark:border-slate-700 shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center text-primary mb-5">
              <FlaskConical className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-slate-800 dark:text-slate-100">
              Creative Alchemy
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 opacity-80 leading-relaxed">
              Nurturing raw, unfiltered human experiences into beautifully crafted works of
              literature and inspiring art.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-pink-100 dark:border-slate-700 shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center text-primary mb-5">
              <Heart className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-slate-800 dark:text-slate-100">
              Healing &amp; Expression
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 opacity-80 leading-relaxed">
              A welcoming lab where personal resilience is transformed into strength, shared
              understanding, and empathy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
