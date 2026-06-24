import React from 'react';
import { Mail, Phone, Instagram, Facebook, Compass } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "972507654321";
  const encodedText = encodeURIComponent("היי, אשמח לקבל פרטים לגבי טיולי הבוטיק למרוקו!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  return (
    <footer className="bg-charcoal text-sand-dark border-t-4 border-saffron relative overflow-hidden">
      {/* Subtle Zellij background overlay */}
      <div className="absolute inset-0 bg-zellij-dark opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: About & Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="bg-terracotta text-sand p-2 rounded-lg">
                <Compass className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider text-sand">עלמרוקו</span>
                <span className="text-[10px] tracking-[0.2em] text-saffron uppercase">Maghrib Boutique</span>
              </div>
            </div>
            <p className="text-sand-dark/80 text-sm leading-relaxed max-w-sm">
              חברת בוטיק המתמחה ביצירת חוויות נסיעה בלתי נשכחות לממלכת מרוקו. אנו מציעים מסלולים מעמיקים בקבוצות קטנות המשלבים אירוח יוקרתי, פולקלור מקומי, וליווי צמוד.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-terracotta hover:text-sand transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-terracotta hover:text-sand transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-terracotta hover:text-sand transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 2.019 14.113.996 11.488.996 6.05 10.024 4.382 10.02 9.81c0 1.637.5 3.22 1.454 4.82L10.447 16l-3.26.854.87-3.18z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Contact details */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-saffron border-r-2 border-terracotta pr-3">יצירת קשר</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-terracotta shrink-0" />
                <a href="tel:0507654321" className="hover:text-saffron transition-colors">050-7654321</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-terracotta shrink-0" />
                <a href="mailto:info@kesem-morocco.co.il" className="hover:text-saffron transition-colors">info@kesem-morocco.co.il</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-saffron border-r-2 border-terracotta pr-3">ניווט מהיר</h3>
            <ul className="grid grid-cols-2 gap-2.5 text-sm">
              <li>
                <a href="/" className="hover:text-saffron transition-colors">דף הבית</a>
              </li>
              <li>
                <a href="/#tours-section" className="hover:text-saffron transition-colors">הטיולים שלנו</a>
              </li>
              <li>
                <a href="/#about-section" className="hover:text-saffron transition-colors">על המייסדת</a>
              </li>
              <li>
                <a href="/#testimonials-section" className="hover:text-saffron transition-colors">חוות דעת</a>
              </li>
              <li>
                <a href="/#contact-section" className="hover:text-saffron transition-colors">יצירת קשר</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & credit */}
        <div className="mt-16 pt-8 border-t border-sand-dark/10 flex flex-col md:flex-row justify-between items-center text-xs text-sand-dark/50 gap-4">
          <p>© {currentYear} עלמרוקו - טיולי בוטיק יוקרתיים. כל הזכויות שמורות.</p>
          <p>
            נבנה באהבה ע״י <span className="text-saffron font-bold">נהוראי</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
