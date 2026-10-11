import React, { useState } from 'react';
import { X, ShieldCheck, Truck, FileText, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export type InfoModalType = 'privacy' | 'shipping' | 'terms' | 'contact' | null;

interface InfoModalProps {
  type: InfoModalType;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose }) => {
  const { language, t } = useLanguage();
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactSent, setContactSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!type) return null;

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messagePayload = {
      _subject: `New Message from ${contactName} - AkuruLab`,
      'Sender Name': contactName,
      'Email': contactEmail,
      'Message': contactMsg,
      _replyto: contactEmail,
      _template: 'table',
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/milenajayawardana@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(messagePayload),
      });

      if (response.ok) {
        setContactSent(true);
      } else {
        setContactSent(true);
      }
    } catch {
      setContactSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setContactSent(false);
    setIsSubmitting(false);
    setContactName('');
    setContactEmail('');
    setContactMsg('');
    onClose();
  };

  const getTitle = () => {
    switch (type) {
      case 'privacy':
        return t.infoModal.privacyTitle;
      case 'shipping':
        return t.infoModal.shippingTitle;
      case 'terms':
        return t.infoModal.termsTitle;
      case 'contact':
        return t.infoModal.contactTitle;
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
        if (e.target === e.currentTarget) handleReset();
      }}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-pink-100 dark:border-slate-800 relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
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
            language === 'hr' ? (
              <>
                <p>
                  Na platformi <strong>AkuruLab</strong> i službenim stranicama knjige &ldquo;To su samo sise&rdquo;, iznimno poštujemo vašu privatnost i povjerenje.
                </p>
                <p>
                  <strong>Prikupljanje podataka:</strong> Prilikom narudžbe hrvatskog izdanja knjige prikupljamo ime, adresu dostave, broj telefona i email adresu isključivo u svrhu sigurne isporuke i obavijesti o pošiljci.
                </p>
                <p>
                  <strong>Zaštita podataka:</strong> Vaši osobni podaci nikada se ne prodaju, ne dijele niti ustupaju trećim stranama, osim ovlaštenim dostavnim službama (GLS, Hrvatska Pošta) radi isporuke paketa.
                </p>
              </>
            ) : (
              <>
                <p>
                  At <strong>AkuruLab</strong> and the official &ldquo;It&apos;s Just Tits&rdquo; platform, we deeply respect your privacy and confidentiality.
                </p>
                <p>
                  <strong>Information We Collect:</strong> When you place an order for the Croatian edition, we collect your name, shipping address, telephone number, and email strictly for package delivery and order updates.
                </p>
                <p>
                  <strong>Data Protection:</strong> Your personal information is never sold, rented, or shared with third parties, except trusted courier services for physical package delivery.
                </p>
              </>
            )
          )}

          {type === 'shipping' && (
            language === 'hr' ? (
              <>
                <p>
                  <strong>Hrvatsko izdanje (&ldquo;To su samo sise&rdquo;):</strong>
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Područje dostave:</strong> Cijela Republika Hrvatska.</li>
                  <li><strong>Plaćanje i slanje:</strong> Nakon što ispunite obrazac za narudžbu, primit ćete podatke za uplatu putem e-maila. Slanje paketa započinje TEK NAKON zaprimljene uplate.</li>
                  <li><strong>Vrijeme dostave:</strong> Pošiljka se šalje putem pošte čim uplata bude evidentirana (vrijeme isporuke ovisi o poštanskoj službi).</li>
                </ul>
                <p className="pt-2">
                  <strong>Englesko izdanje:</strong> Tiska se i isporučuje diljem svijeta putem platforme Amazon s lokalnim opcijama dostave.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>English Edition:</strong> Printed and fulfilled globally via Amazon with local store delivery options.
                </p>
                <p>
                  <strong>Croatian Edition (&ldquo;To su samo sise&rdquo;):</strong>
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Delivery Area:</strong> Anywhere in the Republic of Croatia.</li>
                  <li><strong>Payment &amp; Dispatch:</strong> After filling out the order form, you will receive payment details via email. Delivery will only commence AFTER payment has been received.</li>
                  <li><strong>Delivery Time:</strong> Orders are dispatched via post once payment is confirmed (transit time depends on the postal service).</li>
                </ul>
              </>
            )
          )}

          {type === 'terms' && (
            language === 'hr' ? (
              <>
                <p>
                  <strong>Opći uvjeti:</strong> Ovi uvjeti uređuju izravnu narudžbu i kupnju knjige &ldquo;To su samo sise&rdquo; putem ove web stranice.
                </p>
                <p>
                  <strong>Cijene i plaćanje:</strong> Sve cijene su izražene u eurima (€). Cijena primjerka iznosi 12,50 € (+ 3,00 € dostava unutar Hrvatske). Slanje knjige započinje isključivo nakon zaprimljene uplate.
                </p>
                <p>
                  <strong>Politika konačne prodaje (Bez prava na povrat):</strong> Ova knjiga je neovisno, samostalno objavljeno djelo i osobni memoar koji dijeli intimnu životnu priču autorice. Iako autorica iskreno cijeni vašu podršku i interes za njezino djelo, sve kupnje su konačne. Iz tog razloga ne prihvaćamo povrate, otkaze narudžbi niti odobravamo povrat novca. Slanjem obrasca za narudžbu i izvršenjem uplate, kupac izričito i neopozivo potvrđuje i prihvaća ove uvjete kupnje.
                </p>
                <p>
                  <strong>Oštećenja u transportu:</strong> U rijetkom slučaju da pošiljka stigne fizički oštećena tijekom dostave, kupac je dužan javiti se putem kontakt obrasca unutar 7 dana od preuzimanja s priloženim jasnim fotografijama oštećene pošiljke i ambalaže radi provjere i procjene slanja zamjenskog primjerka.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>General:</strong> These terms govern direct orders and purchases of the book &ldquo;To su samo sise&rdquo; placed through this website.
                </p>
                <p>
                  <strong>Price &amp; Payment:</strong> All prices are displayed in Euros (€). The book price is €12.50 (+ €3.00 shipping within Croatia). Delivery will commence only after full payment has been received.
                </p>
                <p>
                  <strong>All Sales Final &amp; No-Returns Policy:</strong> This book is an independent, self-published personal memoir sharing the author&apos;s authentic lived experience and artistic expression. While your support of this story is deeply valued, please note that all sales are strictly final. We do not accept returns, order cancellations, or issue refunds under any circumstances once payment has been received. By submitting an order and completing payment, the purchaser expressly and irrevocably acknowledges and agrees to these terms.
                </p>
                <p>
                  <strong>Transit Damage:</strong> In the unlikely event that your package arrives demonstrably damaged in transit, please contact us within 7 days of delivery with clear photographs of the damaged package and book so a replacement copy may be evaluated.
                </p>
              </>
            )
          )}

          {type === 'contact' && (
            <>
              {contactSent ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                    {t.infoModal.contactSentTitle}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                    {t.infoModal.contactSentDesc}
                  </p>

                  {/* Summary of sent message */}
                  <div className="bg-slate-50 dark:bg-slate-800/80 rounded-xl p-4 text-left border border-slate-200 dark:border-slate-700 text-xs sm:text-sm space-y-2 max-w-sm mx-auto">
                    <div className="flex justify-between text-slate-600 dark:text-slate-300">
                      <span>{t.infoModal.sentName}</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{contactName}</span>
                    </div>
                    <div className="flex justify-between text-slate-600 dark:text-slate-300">
                      <span>{t.infoModal.sentEmail}</span>
                      <span className="font-semibold text-slate-900 dark:text-white underline">{contactEmail}</span>
                    </div>
                    <div className="pt-1.5 border-t border-slate-200 dark:border-slate-700">
                      <span className="text-slate-500 dark:text-slate-400 block mb-1">{t.infoModal.sentMessage}</span>
                      <p className="text-slate-800 dark:text-slate-200 italic line-clamp-3 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm whitespace-pre-wrap">
                        &ldquo;{contactMsg}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center max-w-sm mx-auto">
                    <button
                      onClick={handleReset}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-5 rounded-full text-sm shadow transition-all cursor-pointer"
                    >
                      {t.infoModal.close}
                    </button>
                    <a
                      href={`mailto:milenajayawardana@gmail.com?subject=Poruka za Milenu - ${encodeURIComponent(contactName)}&body=Ime: ${encodeURIComponent(contactName)}%0D%0AEmail: ${encodeURIComponent(contactEmail)}%0D%0APoruka: ${encodeURIComponent(contactMsg)}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium py-2.5 px-4 rounded-full text-xs transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{t.infoModal.sendCopyEmail}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.infoModal.contactIntro}
                  </p>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      {t.infoModal.yourName}
                    </label>
                    <input
                      required
                      type="text"
                      disabled={isSubmitting}
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#fffdf2] dark:bg-slate-800 text-sm focus:outline-none focus:border-primary disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      {t.infoModal.yourEmail}
                    </label>
                    <input
                      required
                      type="email"
                      disabled={isSubmitting}
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#fffdf2] dark:bg-slate-800 text-sm focus:outline-none focus:border-primary disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      {t.infoModal.yourMessage}
                    </label>
                    <textarea
                      required
                      rows={3}
                      disabled={isSubmitting}
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#fffdf2] dark:bg-slate-800 text-sm focus:outline-none focus:border-primary disabled:opacity-60"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-[#d84868] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 text-sm transition-all cursor-pointer shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{t.infoModal.sendingMessage}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.infoModal.sendMessage}</span>
                      </>
                    )}
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
