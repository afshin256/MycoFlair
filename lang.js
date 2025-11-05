// lang.js - language detection, content toggling and i18n (lightweight)
// Contains translations and detects visitor country via ipapi.co; falls back to browser language.

const translations = {
  fa: {
    nav: { about: "درباره", advantages: "مزیت‌ها", team: "تیم", contact: "تماس", collab: "درخواست همکاری" },
    cta: { contact: "درخواست همکاری", learn: "بیشتر بدانید" },
    hero: { summaryTitle: "خلاصه اجرایی — Executive Summary", status: "وضعیت", test: "شواهد", app: "کاربرد" },
    about: { title: "معرفی و هدف پروژه — چکیده", goalTitle: "هدف اصلی", goalText: "ایجاد محیطی پایدار و خنثی برای رشد میسلیوم در بسترهای مصنوعی", impactTitle: "تأثیر", impactText: "قابلیت کاربرد در پروژه‌های کشاورزی فضایی و کاهش مصرف منابع", quickTitle: "نکات سریع", quick1: "رشد بدون کمپوست", quick2: "مقاومت در برابر آلودگی", quick3: "قابل استفاده در بسترهای غیرآلی" },
    ach: { title: "دستاوردهای کلیدی" },
    adv: { title: "مزیت رقابتی MGF-02" },
    market: { title: "بازار هدف" },
    team: { title: "تیم اجرایی" },
    contact: { title: "نیازمندی‌ها و پیشنهاد همکاری" }
  },
  en: {
    nav: { about: "About", advantages: "Advantages", team: "Team", contact: "Contact", collab: "Collaboration Request" },
    cta: { contact: "Collaboration Request", learn: "Learn More" },
    hero: { summaryTitle: "Executive Summary", status: "Status", test: "Evidence", app: "Application" },
    about: { title: "Project Introduction & Objective — Abstract", goalTitle: "Primary Objective", goalText: "Create a stable, neutral environment for mycelium growth on inorganic substrates", impactTitle: "Impact", impactText: "Applicable for space agriculture projects and resource reduction", quickTitle: "Quick Notes", quick1: "Compost-free cultivation", quick2: "Contamination resistance", quick3: "Compatible with inorganic substrates" },
    ach: { title: "Key Achievements" },
    adv: { title: "Competitive Advantage MGF-02" },
    market: { title: "Target Market" },
    team: { title: "Executive Team" },
    contact: { title: "Requirements & Collaboration Proposal" }
  }
};

function applyTranslations(lang){
  // set direction
  if(lang === 'fa'){ document.documentElement.lang='fa'; document.documentElement.dir='rtl'; }
  else { document.documentElement.lang='en'; document.documentElement.dir='ltr'; }

  // simple replacements
  const map = {
    'brand-title': lang==='fa' ? 'MycoFlair.ir' : 'MycoFlair',
    'brand-sub': lang==='fa' ? 'تیم تحقیقاتی و توسعه مایکوفِلِر' : 'MycoFlair Research & Innovation Team',
    'hero-title': 'MycoFlair — Innovating the Future of Fungal Biotechnology',
    'hero-tag': lang==='fa' ? '«نوآوری در آینده‌ی زیست‌فناوری قارچ‌ها»' : '"Innovating the Future of Fungal Biotechnology"',
    'hero-lead': lang==='fa' ? 'فرمول MGF-02 نسخه پیشرفته‌ای از پژوهش‌های ماست که رشد میسلیوم را ...' : 'MGF-02 is our advanced formulation enabling mycelium growth on inorganic substrates without compost — featuring anti-contamination properties.',
    'proj-title': lang==='fa' ? 'ساخت و توسعه فرمول MGF-02  برای ساخت محلول مغذی اختصاصی...' : 'Development of MGF-02 nutrient formulation for cultivation on inert substrates...'
  };
  for(const id in map){ const el = document.getElementById(id); if(el) el.innerText = map[id]; }

  // data-i18n simple mapping
  for(const sectionKey in translations[lang]){
    const section = translations[lang][sectionKey];
    for(const k in section){
      const els = document.querySelectorAll('[data-i18n="'+sectionKey+'.'+k+'"]');
      els.forEach(el => el.innerText = section[k]);
    }
  }

  // update lang switch button text
  const btn = document.getElementById('lang-switch');
  if(btn) btn.innerText = (lang==='fa' ? 'EN' : 'FA');
}

async function detectAndApplyLanguage(){
  let langPref = null;
  try{
    const resp = await fetch('https://ipapi.co/json/');
    if(resp.ok){
      const data = await resp.json();
      if(data && data.country_code && data.country_code.toUpperCase() === 'IR'){ langPref = 'fa'; }
      else { langPref = 'en'; }
    } else {
      langPref = (navigator.language && navigator.language.startsWith('fa')) ? 'fa' : 'en';
    }
  } catch(e){
    langPref = (navigator.language && navigator.language.startsWith('fa')) ? 'fa' : 'en';
  }
  applyTranslations(langPref);
}

document.addEventListener('DOMContentLoaded', ()=>{ detectAndApplyLanguage(); });

// exposed function for toggle button
function setLanguage(l){ applyTranslations(l); }
