import React, { useState } from 'react';
import { X, CheckCircle, Package, Sparkles, Truck, ShieldAlert } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'pouzece' | 'racun'>('pouzece');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  if (!isOpen) return null;

  const pricePerCopy = 20;
  const shippingCost = quantity >= 3 ? 0 : 3.5;
  const totalCost = quantity * pricePerCopy + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `HR-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderRef(refCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setAddress('');
    setPhone('');
    setQuantity(1);
    setNotes('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all duration-300 animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-pink-100 dark:border-slate-800 relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Zatvori prozor"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-9 h-9" />
            </div>

            <span className="inline-block bg-pink-50 dark:bg-pink-900/30 text-primary border border-pink-100 dark:border-pink-900/50 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
              Narudžba zaprimljena!
            </span>

            <h3
              className="text-3xl text-slate-900 dark:text-white font-serif"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Hvala vam, {fullName.split(' ')[0] || 'dragi čitatelju'}!
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              Vaša narudžba za knjigu <strong className="text-primary">&ldquo;To su samo sise&rdquo;</strong> je uspješno zabilježena.
              Poslali smo potvrdu na vašu email adresu <strong className="underline">{email}</strong>.
            </p>

            <div className="bg-[#F8FAF4] dark:bg-slate-800 rounded-2xl p-4 text-left border border-[#DEE5D4] dark:border-slate-700 text-xs sm:text-sm space-y-2 mt-4">
              <div className="flex justify-between text-slate-500 dark:text-slate-400">
                <span>Broj narudžbe:</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{orderRef}</span>
              </div>
              <div className="flex justify-between text-slate-500 dark:text-slate-400">
                <span>Količina:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{quantity} {quantity === 1 ? 'primjerak' : 'primjerka'}</span>
              </div>
              <div className="flex justify-between text-slate-500 dark:text-slate-400">
                <span>Način plaćanja:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {paymentMethod === 'pouzece' ? 'Plaćanje pouzećem (pri preuzimanju)' : 'Uplata na račun'}
                </span>
              </div>
              <div className="flex justify-between border-t border-slate-200 dark:border-slate-700 pt-2 font-bold text-slate-900 dark:text-white">
                <span>Ukupno za platiti:</span>
                <span className="text-primary text-base">{totalCost.toFixed(2)} €</span>
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-1 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-primary" />
                <span>Očekivana dostava: 2–4 radna dana</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="w-full bg-primary hover:bg-[#d84868] text-white font-semibold py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
              >
                U redu, zatvori
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-block bg-pink-50 dark:bg-pink-900/30 text-primary border border-pink-100 dark:border-pink-900/40 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-2">
                Narudžba knjige
              </span>
              <h3
                className="text-3xl text-slate-900 dark:text-white mb-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                To su samo sise
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Ispunite podatke za narudžbu i dostavu hrvatskog izdanja (20,00 € + dostava).
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Ime i prezime *
                </label>
                <input
                  required
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="npr. Ana Horvat"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#fffdf2] dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Email adresa *
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ana@primjer.hr"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#fffdf2] dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Adresa za dostavu i grad *
                </label>
                <input
                  required
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Ulica i broj, Poštanski broj i Grad"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#fffdf2] dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Broj mobitela *
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+385 91 ..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#fffdf2] dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Količina
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#fffdf2] dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    <option value={1}>1 primjerak (20€)</option>
                    <option value={2}>2 primjerka (40€)</option>
                    <option value={3}>3 primjerka (60€ - Besplatna dostava!)</option>
                    <option value={4}>4 primjerka (80€)</option>
                    <option value={5}>5 primjeraka (100€)</option>
                  </select>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Način plaćanja *
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pouzece')}
                    className={`px-3 py-2.5 rounded-xl border text-xs font-medium transition-all text-left flex items-center justify-between cursor-pointer ${
                      paymentMethod === 'pouzece'
                        ? 'border-primary bg-pink-50/60 dark:bg-pink-900/30 text-primary font-semibold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <span>Pouzećem (pri preuzimanju)</span>
                    {paymentMethod === 'pouzece' && <CheckCircle className="w-3.5 h-3.5 text-primary" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('racun')}
                    className={`px-3 py-2.5 rounded-xl border text-xs font-medium transition-all text-left flex items-center justify-between cursor-pointer ${
                      paymentMethod === 'racun'
                        ? 'border-primary bg-pink-50/60 dark:bg-pink-900/30 text-primary font-semibold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <span>Uplata na račun / IBAN</span>
                    {paymentMethod === 'racun' && <CheckCircle className="w-3.5 h-3.5 text-primary" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Napomena / Poruka (neobavezno)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Dodatne upute za dostavljača ili posveta..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#fffdf2] dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors"
                ></textarea>
              </div>

              {/* Price summary badge */}
              <div className="bg-pink-50/70 dark:bg-slate-800/80 rounded-xl p-3 border border-pink-100 dark:border-slate-700 flex justify-between items-center text-xs">
                <span className="text-slate-600 dark:text-slate-300">
                  {quantity}x knjiga ({quantity * pricePerCopy}€) + dostava ({shippingCost === 0 ? 'Gratis' : `${shippingCost}€`})
                </span>
                <span className="font-bold text-sm text-primary">
                  Ukupno: {totalCost.toFixed(2)} €
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-[#d84868] text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Potvrdi narudžbu ({totalCost.toFixed(2)} €)</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
