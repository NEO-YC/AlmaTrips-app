import React, { useState } from 'react';
import { tours } from '../data/tours';
import TourCard from '../components/TourCard';
import ContactForm from '../components/ContactForm';
import { Compass, Star, Award, ShieldCheck, Heart } from 'lucide-react';

export default function Home() {
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { id: 'all', name: 'כל הטיולים' },
    { id: 'מדבר', name: 'הרפתקאות מדבר' },
    { id: 'קולינרי', name: 'חוויות קולינריות' },
    { id: 'תרבות', name: 'תרבות והיסטוריה' }
  ];

  const filteredTours = filter === 'all' 
    ? tours 
    : tours.filter(tour => tour.tags.includes(filter));

  const testimonials = [
    {
      name: "רונית ואילן כהן",
      role: "טיילו בטיול הקולינרי, נובמבר 2025",
      text: "הטיול עם עלמה היה פשוט יוצא מן הכלל. לא מדובר בעוד טיול מאורגן סטנדרטי, אלא בחוויה אינטימית ועמוקה. סדנאות הבישול בריאדים המפוארים והמפגש עם המקומיים היו רגעי שיא שלא נשכח לעולם.",
      rating: 5
    },
    {
      name: "משפחת לוי",
      role: "טיילו בערים המלכותיות, אוקטובר 2025",
      text: "הגענו למקומות נסתרים שאף תייר רגיל לא מגיע אליהם. רמת האירוח הייתה בלתי מתפשרת - הריאדים הרגישו כמו ארמונות אלף לילה ולילה, וההדרכה הייתה מרתקת ומלאת ידע.",
      rating: 5
    },
    {
      name: "יובל גלעד",
      role: "טייל בחווית סהרה וג'יפים, מרץ 2026",
      text: "הגלמפינג בסהרה והנסיעה בג'יפים בהרי האטלס היו שילוב מנצח של אקסטרים ופינוק ברמות הכי גבוהות שיש. עלמה דאגה לכל פרט קטן מהלב והנשמה. מומלץ בחום רב!",
      rating: 5
    }
  ];

  const scrollToTours = () => {
    document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen text-[#2C2523] pb-1">
      {/* 1. Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay with parallax/slow fade vibe */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/sahara_hero.png" 
            alt="Moroccan Sahara Sunset" 
            className="w-full h-full object-cover brightness-75 scale-105 transition-transform duration-[10000ms] ease-out animate-pulse"
            style={{ animationDuration: '8s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-[#FDFBF7]"></div>
          {/* Zellij Overlay */}
          <div className="absolute inset-0 bg-zellij opacity-5"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12">
          <span className="inline-block text-saffron font-bold text-xs md:text-sm tracking-[0.25em] uppercase mb-4 bg-terracotta/20 px-4 py-1.5 rounded-full border border-saffron/30 backdrop-blur-sm">
            טיולי בוטיק יוקרתיים למרוקו
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-md mb-6">
            לגלות את מרוקו <br />
            <span className="text-saffron">מבעד לקסם האותנטי</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-sand max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-sm">
            מסעות ייחודיים בקבוצות קטנות, ריאדים מלכותיים, טעמים משכרים ומדבר סהרה המהפנט. תנו לנו לקחת אתכם אל הלב הפועם של צפון אפריקה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToTours}
              className="bg-terracotta hover:bg-terracotta-dark text-sand px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-terracotta/20"
            >
              גלו את הטיולים שלנו
            </button>
            <a 
              href="#contact-section"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-xl font-bold transition-all duration-300 text-center"
            >
              צרו קשר לייעוץ אישי
            </a>
          </div>
        </div>

        {/* Bottom curve details */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#FDFBF7] rounded-t-[50px] z-10 hidden md:block"></div>
      </section>

      {/* 2. Feature highlights / Value Props */}
      <section className="py-12 bg-[#FDFBF7] border-b border-sand-dark relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-sand-dark shadow-sm">
              <div className="bg-saffron/10 text-saffron p-3.5 rounded-xl shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-charcoal text-base">אירוח ברמת 5 כוכבים</h3>
                <p className="text-xs text-charcoal-light mt-0.5">לינה בריאדים מסורתיים מפוארים ומלונות בוטיק יוקרתיים</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-sand-dark shadow-sm">
              <div className="bg-terracotta/10 text-terracotta p-3.5 rounded-xl shrink-0">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-charcoal text-base">יחס אישי מובטח</h3>
                <p className="text-xs text-charcoal-light mt-0.5">קבוצות קטנות ואינטימיות של עד 12-16 מטיילים לכל היותר</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-sand-dark shadow-sm">
              <div className="bg-majorelle/10 text-majorelle p-3.5 rounded-xl shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-charcoal text-base">חוויה אותנטית ומעמיקה</h3>
                <p className="text-xs text-charcoal-light mt-0.5">סדנאות מקומיות, מסלולים נסתרים והיכרות בלתי אמצעית</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tours Grid Section */}
      <section id="tours-section" className="py-20 bg-zellij relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-terracotta font-bold text-xs tracking-widest uppercase">ההרפתקה הבאה שלכם</span>
            <h2 className="text-3xl md:text-5xl font-black text-charcoal mt-2 mb-4">המסלולים המיוחדים שלנו</h2>
            <p className="text-charcoal-light/80 text-sm md:text-base leading-relaxed">
              בחרנו ותפרנו כל יום בטיול בדיוק מירבי, כדי להבטיח לכם שילוב של הרפתקנות, תרבות ונוחות ללא פשרות.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setFilter(option.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                    filter === option.id
                      ? 'bg-terracotta text-sand shadow-md shadow-terracotta/20 scale-105'
                      : 'bg-white text-charcoal hover:bg-sand-dark border border-sand-dark'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="animate-fade-in">
                <TourCard tour={tour} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. About the Founder Section ("חברה של סבתא") */}
      <section id="about-section" className="py-24 bg-white border-t border-b border-sand-dark relative overflow-hidden">
        {/* Abstract terracotta arch outline on right side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-96 bg-sand-dark/30 rounded-l-full -z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm md:max-w-md">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 rounded-3xl border-2 border-saffron/40 rotate-3 -z-10"></div>
                <div className="absolute -inset-4 rounded-3xl bg-terracotta/5 -rotate-2 -z-20"></div>
                {/* Main image */}
                <img 
                  src="https://images.unsplash.com/photo-1597212618440-806262de474b?q=80&w=600&auto=format&fit=crop" 
                  alt="עלמה מרוקו" 
                  className="rounded-2xl w-full h-[450px] object-cover shadow-lg moroccan-border"
                />
                
                {/* Info Overlay Badge */}
                <div className="absolute bottom-4 right-4 bg-charcoal text-sand p-4 rounded-xl shadow-lg border border-saffron/20 max-w-xs">
                  <p className="text-xs text-saffron font-bold">החזון שלנו</p>
                  <p className="text-[11px] text-sand-dark/90 leading-relaxed mt-1">
                    "לחוות את מרוקו כאורחים רצויים בבית מקומי, ולא כתיירים חולפים."
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-terracotta font-bold text-xs tracking-widest uppercase">הכירו את המייסדת</span>
              <h2 className="text-3xl md:text-5xl font-black text-charcoal leading-tight">
                עלמה: <span className="text-saffron"></span> והמדריכה שלכם למרוקו
              </h2>
              
              <div className="space-y-4 text-charcoal-light/95 leading-relaxed text-sm md:text-base">
                <p>
                  נעים להכיר, אני עלמה. החברים קוראים לי "חברה של סבתא" בגלל החמימות, אהבת האדם והיכולת שלי לחבר בין אנשים. מרוקו בשבילי היא לא רק יעד תיירותי - היא פעימת הלב השנייה שלי, המולדת של הוריי ומקום שבו נשמתי מרגישה בבית.
                </p>
                <p>
                  במהלך עשרים השנים האחרונות חציתי את מרוקו לאורכה ולרוחבה. יצרתי קשרים אישיים עמוקים עם משפחות ברבריות בהרי האטלס, בעלי מלאכה מסורתיים בשווקים של פאס, ושפים מקומיים בריאדים של מרקש. הקשרים האלו הם המפתח שמאפשר לי לפתוח עבורכם דלתות שבפני תייר רגיל נשארות נעולות.
                </p>
                <p className="font-medium text-charcoal">
                  הטיולים שלי מיועדים למי שרוצים לטייל בראש שקט, ליהנות מאירוח מלכותי ללא פשרות, ובמקביל לגעת בצבעים, בריחות ובאנשים האמיתיים של מרוקו.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-saffron fill-saffron" />
                  <span className="font-bold text-charcoal text-sm">20+ שנות ניסיון</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-sand-dark"></div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-saffron fill-saffron" />
                  <span className="font-bold text-charcoal text-sm">100+ קבוצות מרוצות</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact-section"
                  className="inline-block bg-terracotta hover:bg-terracotta-dark text-sand px-6 py-3 rounded-xl font-bold text-sm shadow-md shadow-terracotta/10 transition-colors"
                >
                  בואו נדבר ונכיר מקרוב
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section id="testimonials-section" className="py-20 bg-zellij relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-terracotta font-bold text-xs tracking-widest uppercase">חוויות מטיילים</span>
            <h2 className="text-3xl md:text-5xl font-black text-charcoal mt-2 mb-4">מטיילים מספרים מהלב</h2>
            <p className="text-charcoal-light/80 text-sm md:text-base leading-relaxed">
              המדד הטוב ביותר להצלחה שלנו הוא החיוך והזיכרונות של המטיילים שחזרו איתנו ממרוקו.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 border border-sand-dark shadow-sm flex flex-col justify-between h-full relative"
              >
                <span className="absolute top-6 left-6 text-6xl text-saffron/25 font-serif pointer-events-none leading-none">”</span>
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 text-saffron">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-saffron shrink-0" />
                    ))}
                  </div>
                  <p className="text-charcoal-light text-sm md:text-base leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                </div>
                <div className="border-t border-sand-dark pt-4 mt-auto">
                  <h4 className="font-extrabold text-charcoal text-sm md:text-base">{t.name}</h4>
                  <p className="text-xs text-terracotta font-medium mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Contact & Consultation Section */}
      <section id="contact-section" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info details column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-terracotta font-bold text-xs tracking-widest uppercase">מתחילים לתכנן</span>
              <h2 className="text-3xl md:text-4xl font-black text-charcoal leading-tight">
                מוכנים לצאת למסע? <br />
                אנחנו כאן לכל שאלה
              </h2>
              <p className="text-charcoal-light/90 text-sm md:text-base leading-relaxed">
                רוצים להתייעץ לגבי מסלול מסוים? מתעניינים בטיול פרטי המותאם במיוחד למשפחה שלכם? פנו אלינו ישירות ב-WhatsApp או בטלפון, ונשמח לדבר על כוס תה מרוקאי מתוק.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2.5 rounded-lg border border-sand-dark text-terracotta">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-light font-medium">סגנון הטיול</p>
                    <p className="text-sm font-bold text-charcoal">טיולי בוטיק בקבוצות קטנות ואינטימיות</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2.5 rounded-lg border border-sand-dark text-terracotta">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-light font-medium">שעות מענה טלפוני</p>
                    <p className="text-sm font-bold text-charcoal">א'-ה' 09:00 - 18:00 | ו' 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
