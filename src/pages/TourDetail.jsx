import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tours } from '../data/tours';
import Accordion from '../components/Accordion';
import { Clock, Users, Calendar, Coins, CheckCircle, Phone, ArrowRight, Camera } from 'lucide-react';

export default function TourDetail() {
  const { slug } = useParams();
  
  // Find matching tour by slug
  const tour = tours.find(t => t.slug === slug);

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If tour does not exist
  if (!tour) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-6 text-center">
        <div className="absolute inset-0 bg-zellij opacity-5"></div>
        <div className="relative z-10 max-w-md bg-white p-10 rounded-3xl border border-sand-dark shadow-xl">
          <h2 className="text-3xl font-black text-charcoal mb-4">אופס! הטיול לא נמצא</h2>
          <p className="text-charcoal-light mb-8">המסלול שחיפשתם אינו קיים במערכת או שהוסר. נסו לחזור לדף הבית כדי לצפות בטיולים הפעילים שלנו.</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-sand px-6 py-3 rounded-xl font-bold transition-colors duration-200"
          >
            <ArrowRight className="h-5 w-5" />
            <span>חזרה לדף הבית</span>
          </Link>
        </div>
      </div>
    );
  }

  // Create WhatsApp URL
  const whatsappNumber = "972507654321";
  const messageText = `היי, אשמח לקבל פרטים ולהירשם לטיול ${tour.title}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <div className="bg-[#FDFBF7] min-h-screen text-[#2C2523] pt-[76px] pb-1">
      {/* Back Button Bar */}
      <div className="bg-sand/30 border-b border-sand-dark py-3.5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/#tours-section" 
            className="inline-flex items-center gap-2 text-charcoal-light hover:text-terracotta text-sm font-bold transition-colors duration-200"
          >
            <ArrowRight className="h-4.5 w-4.5" />
            <span>חזרה לרשימת הטיולים</span>
          </Link>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={tour.images.hero} 
            alt={tour.title} 
            className="w-full h-full object-cover brightness-75 scale-100 transition-transform duration-[8000ms] hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent"></div>
          <div className="absolute inset-0 bg-zellij opacity-5"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="max-w-4xl space-y-4">
            <div className="flex gap-2">
              {tour.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="bg-saffron text-charcoal px-3 py-1 rounded-full text-xs font-bold shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-md">
              {tour.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Key Details Stats Bar */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-sand-dark grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          <div className="space-y-1.5 flex flex-col items-center">
            <div className="bg-terracotta/10 p-2.5 rounded-full text-terracotta shrink-0">
              <Clock className="h-6 w-6" />
            </div>
            <span className="text-xs text-charcoal-light font-semibold">משך הטיול</span>
            <span className="text-base font-extrabold text-charcoal">{tour.duration}</span>
          </div>

          <div className="space-y-1.5 flex flex-col items-center">
            <div className="bg-terracotta/10 p-2.5 rounded-full text-terracotta shrink-0">
              <Users className="h-6 w-6" />
            </div>
            <span className="text-xs text-charcoal-light font-semibold">גודל הקבוצה</span>
            <span className="text-base font-extrabold text-charcoal">{tour.groupSize}</span>
          </div>

          <div className="space-y-1.5 flex flex-col items-center">
            <div className="bg-terracotta/10 p-2.5 rounded-full text-terracotta shrink-0">
              <Calendar className="h-6 w-6" />
            </div>
            <span className="text-xs text-charcoal-light font-semibold">מועד יציאה קרוב</span>
            <span className="text-base font-extrabold text-charcoal">{tour.nextDate}</span>
          </div>

        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Right Column: Descriptions & Itinerary (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-sand-dark shadow-sm space-y-4">
              <h2 className="text-2xl font-black text-charcoal">סקירת המסלול</h2>
              <p className="text-charcoal-light/95 leading-relaxed text-base md:text-lg">
                {tour.fullDescription}
              </p>
            </div>

            {/* Highlights ("מה כלול בטיול") */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-sand-dark shadow-sm space-y-6">
              <h2 className="text-2xl font-black text-charcoal">נקודות שיא בטיול (מה כלול)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5.5 w-5.5 text-terracotta shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-charcoal-light leading-relaxed font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary Timeline */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-charcoal pr-2">תוכנית הטיול יום אחר יום</h2>
              <Accordion itinerary={tour.itinerary} />
            </div>

          </div>

          {/* Left Column: Gallery & Sidebar Actions (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Sidebar CTA Box */}
            <div className="bg-charcoal text-sand rounded-3xl p-6 border border-saffron/20 shadow-lg relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-zellij-dark opacity-5 pointer-events-none"></div>
              
              <span className="text-saffron text-xs font-bold tracking-wider uppercase block mb-1">הבטיחו את מקומכם</span>
              <h3 className="text-2xl font-black mb-4">להרשמה ופרטים נוספים</h3>
              <p className="text-xs text-sand-dark/80 leading-relaxed mb-6">
                הטיולים שלנו מתמלאים במהירות בשל מספר המקומות המוגבל בקבוצות הבוטיק. צרו קשר ישיר לקבלת טופס רישום או ייעוץ.
              </p>
              
              <div className="space-y-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-terracotta hover:bg-terracotta-dark text-sand py-4 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2.5 shadow-md shadow-terracotta/10"
                >
                  <Phone className="h-5 w-5" />
                  <span>שיחה ב-WhatsApp להרשמה</span>
                </a>
              </div>
            </div>

            {/* Photo Gallery preview */}
            <div className="bg-white rounded-3xl p-6 border border-sand-dark shadow-sm space-y-4">
              <h4 className="font-extrabold text-charcoal text-base flex items-center gap-2">
                <Camera className="h-5 w-5 text-terracotta" />
                <span>גלריית רגעים מהטיול</span>
              </h4>
              <div className="grid grid-cols-1 gap-3.5">
                {tour.images.gallery.map((img, i) => (
                  <div key={i} className="h-44 rounded-xl overflow-hidden shadow-sm group">
                    <img 
                      src={img} 
                      alt={`Morocco preview ${i}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Catchy Call to Action (CTA) Banner Section */}
      <section id="contact-section-detail" className="py-20 bg-zellij border-t border-sand-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-sand-dark text-center relative overflow-hidden">
            
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-zellij opacity-5 rounded-bl-full pointer-events-none"></div>

            <span className="text-terracotta font-bold text-xs tracking-widest uppercase block mb-2">הבטיחו את מקומכם</span>
            <h2 className="text-3xl md:text-4xl font-black text-charcoal leading-tight mb-4">
              מצטרפים למסע: <span className="text-terracotta">{tour.title}</span>
            </h2>
            <p className="text-charcoal-light/90 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              ההרשמה לקבוצות הבוטיק שלנו בעיצומה ומספר המקומות מוגבל. לחצו כאן לשיחת WhatsApp ישירה עם שולה לבירור פרטים והבטחת מקומכם בטיול.
            </p>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-majorelle hover:bg-majorelle-light text-sand px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg shadow-majorelle/15"
            >
              <Phone className="h-5 w-5" />
              <span>שלחו הודעה ב-WhatsApp עכשיו</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
