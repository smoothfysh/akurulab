import React, { useState } from 'react';
import {
  Heart,
  Youtube,
  Play,
  ExternalLink,
  CheckCircle2,
  Package,
  Calendar,
  Stethoscope,
  Users,
  ChevronDown,
  Sparkles,
  Award,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HealingExpressionPageProps {
  onBackHome?: () => void;
}

export const HealingExpressionPage: React.FC<HealingExpressionPageProps> = () => {
  const { language, t } = useLanguage();
  const isHr = language === 'hr';

  const [activeFaqFilter, setActiveFaqFilter] = useState<'all' | 'hospital' | 'medical' | 'appointment' | 'support'>('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Podcasts and expert interviews (featured watercolor artwork cards)
  const podcastCards = [
    {
      id: 1,
      image: './MEDICAL INSIGHTS.jpg',
      pill: t.healingPage.podcast1Pill,
      title: t.healingPage.podcast1Title,
      accentDot: 'bg-[#34D399]',
      pillBg: 'bg-[#D1F7E5] dark:bg-emerald-950/80',
      pillText: 'text-[#046C4E] dark:text-emerald-200',
      pillBorder: 'border-[#A7F3D0]/80 dark:border-emerald-800/80',
      youtubeUrl: 'https://www.youtube.com/watch?v=o5UVKosD20M',
    },
    {
      id: 2,
      image: './SURVIVOR STORIES.jpg',
      pill: t.healingPage.podcast2Pill,
      title: t.healingPage.podcast2Title,
      accentDot: 'bg-[#F472B6]',
      pillBg: 'bg-[#FDE2EC] dark:bg-pink-950/80',
      pillText: 'text-[#9D174D] dark:text-pink-200',
      pillBorder: 'border-[#FBCFE8]/80 dark:border-pink-800/80',
      youtubeUrl: 'https://www.youtube.com/watch?v=XbIkhB0I4fw',
    },
    {
      id: 3,
      image: './PSYCHOLOGISTS & PHYSIOTHERAPISTS.jpg',
      pill: t.healingPage.podcast3Pill,
      title: t.healingPage.podcast3Title,
      accentDot: 'bg-[#38BDF8]',
      pillBg: 'bg-[#E0F2FE] dark:bg-sky-950/80',
      pillText: 'text-[#0369A1] dark:text-sky-200',
      pillBorder: 'border-[#BAE6FD]/80 dark:border-sky-800/80',
      youtubeUrl: 'https://www.youtube.com/watch?v=7I0K716_d9I',
    },
    {
      id: 4,
      image: './HEALTH & NUTRITION_2.jpg',
      pill: t.healingPage.podcast4Pill,
      title: t.healingPage.podcast4Title,
      accentDot: 'bg-[#FBBF24]',
      pillBg: 'bg-[#FEF3C7] dark:bg-amber-950/80',
      pillText: 'text-[#92400E] dark:text-amber-200',
      pillBorder: 'border-[#FDE68A]/80 dark:border-amber-800/80',
      youtubeUrl: 'https://www.youtube.com/watch?v=SPsZ-eAK2BM',
    },
  ];

  // Enhanced FAQ & newly diagnosed tips
  const tipsFaq = [
    {
      id: 1,
      category: 'hospital',
      categoryLabel: isHr ? 'Pakiranje za operaciju' : 'Hospital & Surgery Packing',
      question: isHr
        ? 'Što točno ponijeti u bolnicu za operaciju dojke (Mastektomija / Tumorektomija)?'
        : 'What should I pack for breast surgery (Mastectomy / Lumpectomy)?',
      icon: Package,
      answer: isHr ? (
        <div className="space-y-3">
          <p>Evo provjerenog popisa stvari osmišljenog kako bi vaš boravak u bolnici bio ugodan i siguran:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Pidžame ili gornji dijelovi koji se kopčaju s prednje strane:</strong> Izbjegavajte sve što se navlači preko glave. Pokretljivost ruku i prsnog koša nakon operacije bit će ograničena.</li>
            <li><strong>Mekani jastučić u obliku srca (opcionalno / dobrodošlo):</strong> Nježno sjeda ispod pazuha kako bi ublažio pritisak na kirurške rezove, područje limfnih čvorova i osjetljivo prsno tkivo. Iako je opcionalan, <em>običan jastuk iznimno je koristan za put kući</em> kako bi zaštitio prsa od pritiska sigurnosnog pojasa u automobilu.</li>
            <li><strong>Mogućnosti za nošenje drenova:</strong> Kako bi drenažne bočice bile sigurno učvršćene dok se krećete ili odlazite u toalet, možete koristiti specijaliziranu trakicu ili malu torbicu za drenove. No, <em>udoban kućni ogrtač s dubokim džepovima ili mala pamučna vrećica</em> obješena oko vrata funkcioniraju izvrsno kao alternativa.</li>
            <li><strong>Natikače (obuća bez vezanja):</strong> Udobne papuče s protukliznim potplatom koje ne zahtijevaju saginjanje niti vezanje vezica.</li>
            <li><strong>Ekstra dugačak kabel za punjač mobitela (cca 180 do 300 cm):</strong> Utičnice u bolničkim sobama često su smještene daleko od kreveta.</li>
            <li><strong>Balzam za usne i hidratantna krema bez mirisa:</strong> Zrak u bolničkim sobama može biti suh.</li>
            <li><strong>Vlažne maramice za tijelo i suhi šampon:</strong> Tuširanje može biti ograničeno sve dok se ne uklone kirurški drenovi i zavoji.</li>
          </ul>
        </div>
      ) : (
        <div className="space-y-3">
          <p>Here is a field-tested packing checklist curated to make your hospital stay comfortable and safe:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Front-buttoning tops and pajamas:</strong> Avoid anything that pulls over your head. Post-surgery mobility in your arms and chest will be limited.</li>
            <li><strong>Heart-shaped comfort pillow (Optional / Nice-to-have):</strong> Fits gently under your armpit to relieve pressure on incisions, lymph node sites, and tender chest tissue. While optional, <em>a regular pillow is very useful for the journey home</em> to cushion your chest against the seatbelt.</li>
            <li><strong>Drain management options:</strong> To keep surgical drain bulbs securely fastened when moving around or using the restroom, you can use a specialized drain carrier lanyard or small pouch. However, <em>a comfortable robe with deep pockets or a small cotton bag</em> hung around your neck works wonderfully as an alternative.</li>
            <li><strong>Slip-on footwear:</strong> Supportive non-slip slippers that don't require bending over or tying laces.</li>
            <li><strong>Extra-long phone charger cable (approx. 180 to 300 cm):</strong> Hospital power outlets are frequently located far from the bed.</li>
            <li><strong>Unscented lip balm &amp; moisturizer:</strong> Hospital room air can be dry.</li>
            <li><strong>Body wipes &amp; dry shampoo:</strong> Showering may be restricted until surgical drains and dressings are removed.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      category: 'appointment',
      categoryLabel: isHr ? 'Priprema za preglede' : 'Appointment Prep',
      question: isHr
        ? 'Kako se pripremiti za prve razgovore s kirurgom i onkologom?'
        : 'How do I prepare for my first oncology & surgical consultations?',
      icon: Calendar,
      answer: isHr ? (
        <div className="space-y-3">
          <p>Prvi posjeti liječnicima mogu djelovati preplavljujuće zbog mnoštva informacija. Preporučujemo:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Povedite pratnju od povjerenja:</strong> Druge uši čuju detalje koje u stanju stresa možete propustiti.</li>
            <li><strong>Zapišite sva pitanja unaprijed u bilježnicu:</strong> Nema glupih pitanja. Zabilježite sve od planiranih pretraga (MR, PET-CT) do nuspojava.</li>
            <li><strong>Pitajte liječnika smijete li snimati audio razgovor:</strong> Mnogi liječnici to rado dozvoljavaju kako biste kod kuće u miru poslušali upute.</li>
            <li><strong>Ključna pitanja koja vrijedi postaviti:</strong> Koji je točan patološki podtip tumora? Koji je cilj terapije (neoadjuvantna ili postoperativna)? Koje su opcije za rekonstrukciju i očuvanje plodnosti?</li>
          </ul>
        </div>
      ) : (
        <div className="space-y-3">
          <p>First consultations are high-stress environments where information overload is common. Recommended steps:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Bring a trusted friend or partner:</strong> An extra advocate to take notes and process complex medical discussions.</li>
            <li><strong>Write questions down in a dedicated notebook:</strong> Never rely on memory alone when cortisol and emotions are high.</li>
            <li><strong>Ask permission to voice-record the summary:</strong> Most oncologists are supportive so you can review instructions quietly at home.</li>
            <li><strong>Core questions to ask:</strong> What is my tumor's exact subtype (ER, PR, HER2, Ki-67)? What is the proposed sequencing (surgery first or chemo first)? What are my reconstruction options?</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      category: 'medical',
      categoryLabel: isHr ? 'Medicinske osnove' : 'Medical Essentials',
      question: isHr
        ? 'Njega drenova i sprječavanje limfedema nakon operacije'
        : 'Surgical drain management & lymphedema prevention basics',
      icon: Stethoscope,
      answer: isHr ? (
        <div className="space-y-3">
          <p>Drenovi sprječavaju nakupljanje seroma i omogućuju pravilno zacjeljivanje tkiva:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Praćenje količine i medicinska skrb:</strong> Moći ćete pratiti drenažnu tekućinu, no medicinsko osoblje bit će zaduženo za pražnjenje i vođenje drenova. Iz bolnice se obično otpuštate kada se 24-satna količina tekućine spusti ispod 30 ml.</li>
            <li><strong>Zaštitite operiranu ruku:</strong> Ubuduće izbjegavajte vađenje krvi, intravenozne kanile, mjerenje krvnog tlaka manžetom ili podizanje teških tereta na strani na kojoj su rađeni biopsija ili vađenje limfnih čvorova. (Napomena: ako imate obostranu mastektomiju, ova se mjera opreza na jednoj određenoj strani neće primjenjivati.)</li>
            <li><strong>Potražite stručnu manualnu limfnu drenažu:</strong> Specijalizirane ustanove i klubovi podrške poput Kluba GEA nude stručnu dekongestivnu terapiju i vježbe mobilnosti.</li>
          </ul>
        </div>
      ) : (
        <div className="space-y-3">
          <p>Drains prevent seroma accumulation and support clean tissue adhesion:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Monitor outputs and medical management:</strong> You will be able to keep an eye on your drain fluids, but the medical team will be emptying and managing them. You will typically be released from the hospital when your 24-hour collection falls below 30ml.</li>
            <li><strong>Protect the affected arm:</strong> Moving forward, avoid blood draws, IV lines, blood pressure cuffs, or heavy lifting on the side where lymph nodes were biopsied or dissected. (Note: If you are having a double mastectomy, this precaution on one specific side will not apply.)</li>
            <li><strong>Seek professional manual lymphatic drainage:</strong> Dedicated clinics and survivor clubs like Klub GEA provide specialized decongestive therapy and mobilization routines.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      category: 'support',
      categoryLabel: isHr ? 'Emocionalna podrška' : 'Emotional & Circle of Support',
      question: isHr
        ? 'Kako postaviti granice s okolinom i sačuvati vlastiti mir?'
        : 'How do I set emotional boundaries and handle well-meaning advice?',
      icon: Users,
      answer: isHr ? (
        <div className="space-y-3">
          <p>Mnogi ljudi žele pomoći, ali nespretni savjeti (poput "budi pozitivna" ili neprovjerene dijete) mogu stvoriti pritisak:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Imate pravo reći "ne":</strong> Ne morate odgovarati na poruke ili prepričavati nalaze svima. Odredite jednu osobu za obavještavanje rodbine.</li>
            <li><strong>Dopustite si sve osjećaje:</strong> Ljutnja, strah, tuga i smijeh podjednako su dobrodošli. Oporavak nije pravocrtan.</li>
            <li><strong>Povežite se sa ženama koje razumiju:</strong> Razgovor s nekim tko je već prošao isti put vrijedi više od tisuću generičkih savjeta.</li>
          </ul>
        </div>
      ) : (
        <div className="space-y-3">
          <p>Well-meaning people often inadvertently say overwhelming things (&quot;just stay positive!&quot; or unsolicited miracle diets):</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>You own your boundaries:</strong> You do not owe anyone health updates. Designate a trusted friend to manage group updates.</li>
            <li><strong>Feel whatever comes up:</strong> Fear, anger, fatigue, and sudden belly laughs are all valid. Healing is not a linear upward trajectory.</li>
            <li><strong>Find survivor sisterhood:</strong> Sharing a room or coffee with women who have lived this experience provides instant, unspoken understanding.</li>
          </ul>
        </div>
      ),
    },
  ];

  const filteredFaqs = tipsFaq.filter((faq) => {
    if (activeFaqFilter === 'all') return true;
    return faq.category === activeFaqFilter;
  });

  const handleFaqFilterChange = (tabId: 'all' | 'hospital' | 'medical' | 'appointment' | 'support') => {
    setActiveFaqFilter(tabId);
    if (tabId === 'all') {
      setExpandedFaq(null);
    } else {
      const targetFaq = tipsFaq.find((item) => item.category === tabId);
      setExpandedFaq(targetFaq ? targetFaq.id : null);
    }
  };

  return (
    <div className="pt-16 animate-in fade-in duration-300">
      {/* Section 1: Hero & Dedication to KLUB GEA Pula (Pale Olive Green) */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#F2F5EC] to-[#EFF3E6] dark:from-zinc-950 dark:to-zinc-900 border-b border-[#DEE5D4]/60 dark:border-slate-800 transition-colors duration-300">
        {/* Decorative subtle ambient blurs matching BookHero */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-yellow-100/30 dark:bg-yellow-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Hero Header */}
          <div className="max-w-5xl mx-auto text-center mb-14 md:mb-16">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white mb-6 font-serif tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {t.healingPage.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t.healingPage.subtitle}
            </p>
          </div>

          {/* Dedication to KLUB GEA Pula Card */}
          <div className="relative rounded-3xl overflow-hidden bg-white/95 dark:bg-slate-800/95 border-2 border-emerald-200/80 dark:border-emerald-800/60 shadow-xl p-8 sm:p-12 md:p-14">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-300/20 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
              {/* Left: Badge & Mission */}
              <div className="w-full lg:w-3/5 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800">
                  <Award className="w-3.5 h-3.5" />
                  <span>{t.healingPage.charityBadge}</span>
                </div>

                <div>
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {t.healingPage.charityTitle}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-emerald-700 dark:text-emerald-400">
                    {t.healingPage.charitySubtitle}
                  </p>
                </div>

                <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                  <p>{t.healingPage.charityBlurb1}</p>
                  <p>{t.healingPage.charityBlurb2}</p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://geapula.hr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-base cursor-pointer"
                  >
                    <Heart className="w-5 h-5 fill-current" />
                    <span>{t.healingPage.charityBtn}</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Right: Key Benefits Card */}
              <div className="w-full lg:w-2/5 bg-[#F8FAF4] dark:bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-emerald-100/90 dark:border-slate-700 shadow-md">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-5">
                  {t.healingPage.charityBeneficialTitle}
                </h3>

                <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                  {[
                    t.healingPage.charityBeneficial1,
                    t.healingPage.charityBeneficial2,
                    t.healingPage.charityBeneficial3,
                    t.healingPage.charityBeneficial4,
                  ].map((item, idx) => {
                    const colonIndex = item.indexOf(':');
                    if (colonIndex !== -1) {
                      const title = item.slice(0, colonIndex + 1);
                      const rest = item.slice(colonIndex + 1);
                      return (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">
                            <strong className="font-semibold text-slate-900 dark:text-white">
                              {title}
                            </strong>
                            {rest}
                          </span>
                        </div>
                      );
                    }
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Pula, Istra, Hrvatska</span>
                  <a
                    href="https://geapula.hr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    geapula.hr ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Podcasts & Conversations (YouTube) - White */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900 border-b border-[#DEE5D4]/60 dark:border-slate-800 transition-colors duration-300">
        <div className="w-full max-w-[1560px] mx-auto">
          <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 dark:bg-pink-900/30 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-pink-200 dark:border-pink-800">
            <Youtube className="w-4 h-4" />
            <span>{t.healingPage.podcastsBadge}</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl text-slate-900 dark:text-white font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {t.healingPage.podcastsTitle}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t.healingPage.podcastsSubtitle}
          </p>
        </div>

        {/* Watercolor Podcast Cards Single Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto">
          {podcastCards.map((card) => (
            <a
              key={card.id}
              href={card.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GEA Kafe Podcast: ${card.title} - ${t.healingPage.watchOnYoutube}`}
              className="group relative block rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FBF9F5] dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {/* Full Image Canvas with Overlays */}
              <div className="relative w-full aspect-[1696/2528] overflow-hidden bg-[#FBF9F5] dark:bg-slate-900">
                <img
                  src={card.image}
                  alt={`GEA Kafe Podcast - ${card.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle hover vignette */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />

                {/* Top-Left: Colored PILL + Title text below with matching dot */}
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-10 pointer-events-none space-y-1.5 sm:space-y-2">
                  {/* Pill badge based on filename */}
                  <span
                    className={`inline-block px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full ${card.pillBg} ${card.pillText} border ${card.pillBorder} text-xs sm:text-xs lg:text-sm font-bold shadow-sm`}
                  >
                    {card.pill}
                  </span>

                  {/* Title text with matching accent dot */}
                  <div className="flex items-start gap-1.5 sm:gap-2 max-w-[95%]">
                    <span
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${card.accentDot} flex-shrink-0 mt-1 shadow-sm`}
                    />
                    <span className="text-xs sm:text-xs lg:text-[13px] font-semibold text-slate-800 leading-snug drop-shadow-sm">
                      {card.title}
                    </span>
                  </div>
                </div>

                {/* Bottom Overlay: Watch on YouTube + Icon */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 lg:bottom-4 lg:left-4 lg:right-4 z-10 flex items-center justify-between gap-2 pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-red-600 dark:text-red-400 font-bold text-xs sm:text-xs lg:text-sm shadow-md border border-slate-200/80 dark:border-slate-700/80 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-100 dark:bg-red-950/60 flex items-center justify-center group-hover:bg-white text-red-600 transition-colors flex-shrink-0">
                      <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current ml-0.5" />
                    </div>
                    <span className="truncate">{t.healingPage.watchOnYoutube}</span>
                  </div>

                  <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-primary group-hover:scale-110 shadow-md border border-slate-200/80 dark:border-slate-700/80 transition-all duration-300 flex-shrink-0">
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Platforms & Channels CTAs (YouTube & Spotify) */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* YouTube Channel CTA */}
          <a
            href="https://www.youtube.com/@GeaKafePodcast"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#E07278] hover:bg-[#D46067] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all group"
          >
            <div className="w-8 h-8 rounded-full bg-white/95 text-[#E07278] flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs flex-shrink-0">
              <Youtube className="w-4 h-4 fill-current" />
            </div>
            <span>{t.healingPage.visitYoutubeChannel}</span>
            <ExternalLink className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-0.5" />
          </a>

          {/* Spotify Podcast CTA */}
          <a
            href="https://open.spotify.com/show/0340FjcnjSdtzmUWnG4361"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#52B77C] hover:bg-[#43A66C] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all group"
          >
            <div className="w-8 h-8 rounded-full bg-white/95 text-[#52B77C] flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs flex-shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.497 17.306c-.215.352-.676.464-1.028.249-2.817-1.722-6.363-2.111-10.54-1.157-.402.092-.801-.16-.893-.562-.092-.403.16-.802.562-.894 4.571-1.044 8.492-.598 11.65 1.336.352.215.464.676.249 1.028zm1.468-3.264c-.27.44-.848.58-1.288.31-3.225-1.982-8.142-2.557-11.958-1.399-.499.152-1.03-.135-1.181-.634-.152-.499.135-1.03.634-1.181 4.364-1.325 9.791-.684 13.483 1.586.44.27.58.848.31 1.288zm.126-3.41c-3.867-2.296-10.248-2.508-13.941-1.387-.593.18-1.22-.16-1.4-.753-.18-.593.16-1.22.753-1.4 4.246-1.289 11.295-1.042 15.753 1.604.533.316.708 1.011.392 1.544-.316.533-1.011.708-1.544.392z" />
              </svg>
            </div>
            <span>{t.healingPage.listenOnSpotify}</span>
            <ExternalLink className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-0.5" />
          </a>
        </div>
      </div>
    </section>

    {/* Section 3: Practical Essentials & Surgery Guide (Pale Olive Green) */}
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#EFF3E6] dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 dark:bg-pink-900/30 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-pink-200 dark:border-pink-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.healingPage.tipsBadge}</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl text-slate-900 dark:text-white font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {t.healingPage.tipsTitle}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t.healingPage.tipsSubtitle}
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {[
            { id: 'all', label: t.healingPage.filterAll },
            { id: 'hospital', label: t.healingPage.filterHospital },
            { id: 'appointment', label: t.healingPage.filterAppointment },
            { id: 'medical', label: t.healingPage.filterMedical },
            { id: 'support', label: t.healingPage.filterSupport },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleFaqFilterChange(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFaqFilter === tab.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white/90 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-[#DEE5D4] dark:border-slate-700 hover:border-primary/50 shadow-xs'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isExpanded = expandedFaq === faq.id;
            const Icon = faq.icon;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : faq.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/60 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-900/30 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary block mb-1">
                        {faq.categoryLabel}
                      </span>
                      <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                        {faq.question}
                      </h4>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 mt-2 ${
                      isExpanded ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base border-t border-slate-100 dark:border-slate-700/80 leading-relaxed text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom encouragement message */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-pink-200/70 dark:border-pink-900/40 text-center space-y-3 shadow-xs">
          <p
            className="text-2xl sm:text-3xl text-primary"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {isHr
              ? '„Nisi sama. Svaki korak, ma koliko malen bio, vodi k iscjeljenju.”'
              : '“You are not alone. Every step, no matter how small, is a step towards healing.”'}
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            {isHr
              ? 'S ljubavlju, Milena & AkuruLab'
              : 'With warmth & solidarity, Milena & AkuruLab'}
          </p>
        </div>
      </div>
    </section>
  </div>
);
};
