import React, { useState } from 'react';
import {
  ArrowLeft,
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
  ShieldCheck,
  Award,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HealingExpressionPageProps {
  onBackHome: () => void;
}

export const HealingExpressionPage: React.FC<HealingExpressionPageProps> = ({ onBackHome }) => {
  const { language, t } = useLanguage();
  const isHr = language === 'hr';

  const [activeFaqFilter, setActiveFaqFilter] = useState<'all' | 'hospital' | 'medical' | 'appointment' | 'support'>('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Podcasts and expert interviews
  const podcasts = [
    {
      id: 1,
      title: isHr
        ? 'Razgovor s onkologom: Što očekivati nakon biopsije i dijagnoze'
        : 'Conversations with an Oncologist: Navigating Biopsy & Initial Diagnosis',
      guest: isHr ? 'Dr. med. specijalist onkologije' : 'Clinical Oncology Specialist',
      category: isHr ? 'Medicinski savjeti' : 'Medical Insights',
      duration: '42 min',
      description: isHr
        ? 'Detaljan pregled medicinskih nalaza, hormonskog statusa (ER/PR/HER2) i kako pristupiti planiranju liječenja bez panike.'
        : 'Demystifying pathology reports, receptor status (ER/PR/HER2), staging, and building an individualized treatment timeline without panic.',
      youtubeUrl: 'https://www.youtube.com/@KlubGeaPula',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
    },
    {
      id: 2,
      title: isHr
        ? 'Priče borkinja: Snaga humora i akvarela u najtežim danima'
        : 'Warrior Journeys: Finding Humor, Watercolors & Dignity in Recovery',
      guest: isHr ? 'Milena & članice udruge Klub GEA' : 'Milena & Breast Cancer Survivors',
      category: isHr ? 'Priča preživjelih' : 'Survivor Story',
      duration: '38 min',
      description: isHr
        ? 'Iskreni, nefiltrirani razgovor o tome kako prihvatiti novo tijelo, razbiti tabue i pronaći kreativni izraz usred terapija.'
        : 'An authentic, unfiltered discussion on body neutrality, reclaiming identity, laughter as therapy, and expressing emotions through creative art.',
      youtubeUrl: 'https://www.youtube.com/@KlubGeaPula',
      badgeColor: 'bg-pink-100 text-pink-800 dark:bg-pink-950/60 dark:text-pink-300',
    },
    {
      id: 3,
      title: isHr
        ? 'Kirurška priprema i limfna drenaža: Savjeti fizioterapeuta'
        : 'Surgical Preparation & Lymphatic Care: Physiotherapy After Mastectomy',
      guest: isHr ? 'Fizioterapeut i limfoterapeut' : 'Certified Lymphatic Specialist',
      category: isHr ? 'Rehabilitacija' : 'Physical Therapy',
      duration: '35 min',
      description: isHr
        ? 'Kako prevenirati limfedem, pravilne vježbe razgibavanja nakon operacije i važnost redovitih manualnih drenaža.'
        : 'Practical guidance on lymphedema prevention, safe arm mobilization post-surgery, compression garments, and professional manual lymphatic drainage.',
      youtubeUrl: 'https://www.youtube.com/@KlubGeaPula',
      badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300',
    },
    {
      id: 4,
      title: isHr
        ? 'Mentalno zdravlje i podrška obitelji: Kako reći bližnjima'
        : 'Psycho-Oncology: Managing Fear, Boundaries & Talking to Loved Ones',
      guest: isHr ? 'Psiho-onkolog i savjetnik' : 'Psycho-Oncologist & Counselor',
      category: isHr ? 'Emocionalna podrška' : 'Emotional Care',
      duration: '45 min',
      description: isHr
        ? 'Alati za suočavanje s anksioznošću, postavljanje granica s okolinom i pronalazak unutrašnjeg mira tijekom oporavka.'
        : 'Evidence-based strategies for scanxiety, setting boundaries with well-wishers, and nurturing mental resilience during active therapy.',
      youtubeUrl: 'https://www.youtube.com/@KlubGeaPula',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
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
          <p>Evo provjerenog popisa stvari koje čine boravak i prve sate nakon operacije znatno ugodnijima:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Pidžame ili košulje koje se kopčaju s prednje strane:</strong> Izbjegavajte majice koje se navlače preko glave jer podizanje ruku nakon operacije nije preporučljivo niti ugodno.</li>
            <li><strong>Mekani jastučić u obliku srca (srcoliki jastuk):</strong> Posebno dizajniran za postavljanje ispod pazuha koji ublažava pritisak kirurških rezova i štiti ruku.</li>
            <li><strong>Mala torbica ili vezica za drenove:</strong> Pomaže držati drenažne bočice uz tijelo dok hodate ili odlazite u kupaonicu.</li>
            <li><strong>Udobne natikače (slip-on) s gumenim potplatom:</strong> Obuća bez vezanja kako se ne biste morali saginjati.</li>
            <li><strong>Ekstra dugačak kabel za punjač mobitela:</strong> Utičnice u bolničkim sobama često su udaljene od kreveta.</li>
            <li><strong>Balzam za usne i hidratantna krema:</strong> Zrak u bolničkim sobama izuzetno isušuje kožu.</li>
            <li><strong>Vlažne maramice i suhi šampon:</strong> Tuširanje cijelog tijela s drenovima može biti ograničeno prvih nekoliko dana.</li>
          </ul>
        </div>
      ) : (
        <div className="space-y-3">
          <p>Here is a field-tested packing checklist curated to make your hospital stay comfortable and safe:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Front-buttoning tops and pajamas:</strong> Avoid anything that pulls over your head. Post-surgery mobility in your arms and chest will be limited.</li>
            <li><strong>Heart-shaped comfort pillow:</strong> Fits gently under your armpit to relieve pressure on incisions, lymph node sites, and tender chest tissue.</li>
            <li><strong>Drain carrier lanyard or small pouch:</strong> Keeps surgical drain bulbs securely fastened to your body when moving around or using the restroom.</li>
            <li><strong>Slip-on footwear:</strong> Supportive non-slip slippers that don’t require bending over or tying laces.</li>
            <li><strong>Extra-long phone charger cable (6-10 ft):</strong> Hospital power outlets are frequently located far from the bed.</li>
            <li><strong>Unscented lip balm &amp; moisturizer:</strong> Hospital room air is notoriously dry.</li>
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
          <p>Drenovi odvode limfnu tekućinu kako bi tkivo pravilno zacijelilo:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Bilježite količinu:</strong> Svaki dan u isto vrijeme ispraznite dren u mjernu posudicu i zapišite mililitre u tablicu.</li>
            <li><strong>Čuvajte ruku na operiranoj strani:</strong> Izbjegavajte vađenje krvi, mjerenje tlaka ili nošenje teških tereta (iznad 2 kg) tom rukom ako su uklonjeni limfni čvorovi.</li>
            <li><strong>Započnite s blagom drenažom:</strong> Klub GEA nudi besplatne manualne limfne drenaže s licenciranim fizioterapeutima koji vas uče pravilnom disanju i vježbama.</li>
          </ul>
        </div>
      ) : (
        <div className="space-y-3">
          <p>Drains prevent seroma accumulation and support clean tissue adhesion:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Empty and log outputs regularly:</strong> Measure drain fluids at identical times each day to track when the volume safely falls below removal criteria (usually &lt;30ml/24h).</li>
            <li><strong>Protect the affected arm:</strong> No blood draws, IV lines, blood pressure cuffs, or heavy lifting on the side where lymph nodes were biopsied or dissected.</li>
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

  return (
    <div className="pt-20 md:pt-24 pb-20 animate-in fade-in duration-300">
      {/* Back to Home Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-[#d84868] transition-colors py-2 px-4 rounded-full bg-pink-50 dark:bg-pink-900/30 border border-pink-100 dark:border-pink-900/50 cursor-pointer hover:shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.healingPage.backHome}</span>
        </button>
      </div>

      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest bg-pink-50 dark:bg-pink-900/40 border border-pink-200 dark:border-pink-800/60 px-4 py-1.5 rounded-full mb-4">
          <Heart className="w-3.5 h-3.5 fill-current" />
          <span>{t.healingPage.badge}</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white mb-6 font-serif tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {t.healingPage.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {t.healingPage.subtitle}
        </p>
      </section>

      {/* Section 1: Dedication to KLUB GEA Pula (Prominent & Heartfelt) */}
      <section className="max-w-6xl mx-auto px-4 mb-20 md:mb-24">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#EFF3E6] via-white to-[#F8FAF4] dark:from-slate-900 dark:via-slate-800/90 dark:to-slate-900 border-2 border-emerald-200/70 dark:border-emerald-800/50 shadow-xl p-8 sm:p-12 md:p-14">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-300/20 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

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
            <div className="w-full lg:w-2/5 bg-white/90 dark:bg-slate-800/95 rounded-2xl p-6 sm:p-8 border border-emerald-100 dark:border-slate-700 shadow-md">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>{t.healingPage.charityBeneficialTitle}</span>
              </h3>

              <div className="space-y-3.5 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{t.healingPage.charityBeneficial1}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{t.healingPage.charityBeneficial2}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{t.healingPage.charityBeneficial3}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{t.healingPage.charityBeneficial4}</span>
                </div>
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
      </section>

      {/* Section 2: Podcasts & Conversations (YouTube) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-24">
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

        {/* Podcast Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {podcasts.map((pod) => (
            <div
              key={pod.id}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${pod.badgeColor}`}>
                    {pod.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {pod.duration}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {pod.title}
                </h3>

                <p className="text-xs font-medium text-primary mb-3">
                  {pod.guest}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {pod.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <a
                  href={pod.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-red-600 dark:text-red-400 hover:text-red-700 group-hover:underline"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{t.healingPage.watchOnYoutube}</span>
                </a>

                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel Banner */}
        <div className="mt-8 text-center">
          <a
            href="https://www.youtube.com/@KlubGeaPula"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
          >
            <span>{t.healingPage.visitYoutubeChannel}</span>
          </a>
        </div>
      </section>

      {/* Section 3: Tips for Newly Diagnosed & Surgery Packing Guide */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              onClick={() => setActiveFaqFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFaqFilter === tab.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-700'
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
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-pink-50/70 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900/40 text-center space-y-3">
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
      </section>
    </div>
  );
};
