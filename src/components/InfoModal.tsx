import React, { useState } from 'react';
import { X, ShieldCheck, Truck, FileText, Mail, Send, CheckCircle2 } from 'lucide-react';

export type InfoModalType = 'privacy' | 'shipping' | 'terms' | 'contact' | null;

interface InfoModalProps {
  type: InfoModalType;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactSent, setContactSent] = useState(false);

  if (!type) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
  };

  const getTitle = () => {
    switch (type) {
      case 'privacy':
        return 'Privacy Policy';
      case 'shipping':
        return 'Shipping & Delivery Info';
      case 'terms':
        return 'Terms of Sale';
      case 'contact':
        return 'Get in Touch with Milena';
      default:
        return '';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'privacy':
        return <ShieldCheck className="w-6 h-6 text-primary" />;
      case 'shipping':
        return <Truck className="w-6 h-6 text-primary" />;
      case 'terms':
        return <FileText className="w-6 h-6 text-primary" />;
      case 'contact':
        return <Mail className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-pink-100 dark:border-slate-800 relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-900/30">
            {getIcon()}
          </div>
          <h3
            className="text-2xl font-serif text-slate-900 dark:text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {getTitle()}
          </h3>
        </div>

        <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
          {type === 'privacy' && (
            <>
              <p>
                At <strong>AkuruLab</strong> and the official &ldquo;It&apos;s Just Tits&rdquo; platform, we deeply respect your privacy and confidentiality.
              </p>
              <p>
                <strong>Information We Collect:</strong> When you place an order for the Croatian physical edition, we collect your name, shipping address, telephone number, and email strictly for the purpose of shipping and tracking fulfillment.
              </p>
              <p>
                <strong>Data Protection:</strong> Your personal information is never sold, rented, or shared with third parties, except trusted courier services (such as Hrvatska Pošta or GLS) for physical package delivery.
              </p>
              <p>
                You may request deletion or updates of your data at any time by emailing us at hello@milena-book.com.
              </p>
            </>
          )}

          {type === 'shipping' && (
            <>
              <p>
                <strong>English Edition:</strong> Printed and fulfilled globally via Amazon KDP. Shipping timeframes, prime benefits, and international delivery rates depend directly on your selected local Amazon store.
              </p>
              <p>
                <strong>Croatian Edition (&ldquo;To su samo sise&rdquo;):</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Delivery Area:</strong> Anywhere in the Republic of Croatia.</li>
                <li><strong>Delivery Time:</strong> 2 to 4 business days via courier or tracked postal package.</li>
                <li><strong>Packaging:</strong> Sturdy protective padded packaging to ensure your book arrives in pristine condition.</li>
                <li><strong>Payment:</strong> Cash on delivery (pouzećem) or bank wire transfer.</li>
              </ul>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                <strong>General:</strong> These terms govern direct orders of the book &ldquo;To su samo sise&rdquo; placed through this website.
              </p>
              <p>
                <strong>Price &amp; Currency:</strong> All prices are displayed in Euros (€). The standard retail price is 20,00 € per copy.
              </p>
              <p>
                <strong>Cancellation &amp; Returns:</strong> If your copy arrives damaged during transit, contact us within 14 days of receipt with photos of the damaged package, and a complimentary replacement will be dispatched promptly.
              </p>
            </>
          )}

          {type === 'contact' && (
            <>
              {contactSent ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                    Poruka je uspješno poslana!
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Hvala vam na javljanju. Milena ili tim AkuruLab će vam se javiti uskoro.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-4 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-[#d84868] transition-colors"
                  >
                    Zatvori
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Have questions about the book, community support, or speaking engagements? Send a message directly to Milena &amp; AkuruLab:
                  </p>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#fffdf2] dark:bg-slate-800 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="your.email@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#fffdf2] dark:bg-slate-800 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      placeholder="Write your note or question here..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#fffdf2] dark:bg-slate-800 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-[#d84868] text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 text-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
