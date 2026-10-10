import React, { useState } from 'react';
import { EUROPE_STORES, WORLD_STORES, AmazonStore } from '../data/stores';
import { Globe, ArrowRight, ArrowDown, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhereToBuy: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  const filterStore = (store: AmazonStore) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      store.countryName.toLowerCase().includes(term) ||
      store.countryCode.toLowerCase().includes(term) ||
      store.storeName.toLowerCase().includes(term)
    );
  };

  const filteredEurope = EUROPE_STORES.filter(filterStore);
  const filteredWorld = WORLD_STORES.filter(filterStore);

  return (
    <section
      id="where-to-buy"
      className="py-24 px-4 bg-white dark:bg-zinc-900 scroll-mt-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-primary font-bold tracking-widest uppercase text-xs inline-block bg-pink-50 dark:bg-pink-900/30 border border-pink-100 dark:border-pink-900/40 px-3.5 py-1 rounded-full mb-3">
            {t.stores.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl mb-4 text-slate-900 dark:text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {t.stores.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {t.stores.description}
          </p>

          {/* Quick country search filter */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.stores.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-[#fffdf2] dark:bg-slate-800 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="space-y-12">
          {/* Europe Region */}
          {filteredEurope.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-pink-100 dark:border-slate-800 pb-3">
                <Globe className="w-5 h-5 text-primary" />
                <h3
                  className="text-2xl font-semibold text-slate-800 dark:text-slate-100"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {t.stores.europe}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 bg-[#fffdf2] dark:bg-slate-800 border border-pink-100 dark:border-slate-700 px-2.5 py-0.5 rounded-full ml-auto sm:ml-0">
                  {filteredEurope.length} {filteredEurope.length === 1 ? t.stores.storeCount : t.stores.storesCount}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredEurope.map((store) => (
                  <a
                    key={store.countryCode}
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-2xl bg-[#fffdf2] dark:bg-slate-800 border border-pink-100 dark:border-slate-700 hover:border-primary/50 hover:bg-pink-50/40 dark:hover:bg-slate-750 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-pink-100 dark:border-slate-600 flex items-center justify-center text-xl select-none flex-shrink-0">
                        {store.flag}
                      </span>
                      <div className="min-w-0">
                        <div className="font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors text-sm truncate">
                          {store.storeName}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {t.stores.formats}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Rest of the World Region */}
          {filteredWorld.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-pink-100 dark:border-slate-800 pb-3">
                <Globe className="w-5 h-5 text-primary" />
                <h3
                  className="text-2xl font-semibold text-slate-800 dark:text-slate-100"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {t.stores.world}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 bg-[#fffdf2] dark:bg-slate-800 border border-pink-100 dark:border-slate-700 px-2.5 py-0.5 rounded-full ml-auto sm:ml-0">
                  {filteredWorld.length} {filteredWorld.length === 1 ? t.stores.storeCount : t.stores.storesCount}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {filteredWorld.map((store) => (
                  <a
                    key={store.countryCode}
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-2xl bg-[#fffdf2] dark:bg-slate-800 border border-pink-100 dark:border-slate-700 hover:border-primary/50 hover:bg-pink-50/40 dark:hover:bg-slate-755 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-pink-100 dark:border-slate-600 flex items-center justify-center text-xl select-none flex-shrink-0">
                        {store.flag}
                      </span>
                      <div className="min-w-0">
                        <div className="font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors text-sm truncate">
                          {store.storeName}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {t.stores.formats}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Croatian Edition Prompt Banner */}
          <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-pink-50/90 via-white to-pink-50/90 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 border border-pink-100 dark:border-slate-700 text-center flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
            <div className="flex items-center gap-4 text-left">
              <span className="text-4xl select-none flex-shrink-0">🇭🇷</span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                  {t.stores.hrPromptTitle}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {t.stores.hrPromptDesc}
                </p>
              </div>
            </div>
            <a
              href="#hrvatski"
              className="inline-flex items-center gap-2 bg-primary hover:bg-[#d84868] text-white text-sm font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transition-all hover:scale-105 flex-shrink-0"
            >
              <span>{t.stores.hrPromptBtn}</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
