import React from 'react';
import { InfoModalType } from './InfoModal';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenInfo: (type: InfoModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInfo }) => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-black/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span
            className="text-3xl text-primary font-bold block"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            AKURU♦LAB
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t.footer.allRights}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            onClick={() => onOpenInfo('privacy')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t.footer.privacyPolicy}
          </button>
          <button
            onClick={() => onOpenInfo('shipping')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t.footer.shippingInfo}
          </button>
          <button
            onClick={() => onOpenInfo('terms')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t.footer.termsOfSale}
          </button>
          <button
            onClick={() => onOpenInfo('contact')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t.footer.contact}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400 italic">
            {t.footer.createdWithLove}
          </span>
        </div>
      </div>
    </footer>
  );
};
