import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  const whatsappNumber = "972506789303";
  const encodedText = encodeURIComponent("היי, אשמח לקבל פרטים ולהתייעץ לגבי טיול בוטיק מותאם אישית למרוקו! 🇲🇦");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-sand-dark relative overflow-hidden text-center md:text-right">
      {/* Decorative Zellij corner details */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-zellij opacity-10 rounded-br-full pointer-events-none"></div>

      <div className="relative z-10 space-y-6">
        <span className="inline-block text-terracotta font-bold text-xs tracking-widest uppercase bg-terracotta/10 px-3 py-1 rounded-full">
          בואו נדבר בגובה העיניים
        </span>
        
        <h3 className="text-2xl md:text-3xl font-black text-charcoal">
         מעוניינים לסגור טיול?
        </h3>
        
        <p className="text-charcoal-light/90 text-sm md:text-base leading-relaxed">
          במקום למלא טפסים ארוכים ולחכות, אנחנו מזמינים אתכם ליצור איתנו קשר ישיר. נשמח לשמוע על סגנון הטיול שאתם חולמים עליו, לייעץ לכם על העונות המומלצות, ולענות על כל שאלה באהבה.
        </p>

        {/* Primary Action: WhatsApp */}
        <div className="pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-majorelle hover:bg-majorelle-light text-sand py-4 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-majorelle/25 flex items-center justify-center gap-3 text-base shadow-md"
          >
            <MessageCircle className="h-6 w-6 fill-current" />
            <span>דברו איתנו ישירות ב-WhatsApp</span>
          </a>
        </div>

        {/* Secondary Contact Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-sand-dark mt-6 text-sm text-charcoal-light font-medium">
          <a
            href="tel:0506789303"
            className="flex items-center justify-center md:justify-start gap-2.5 hover:text-terracotta transition-colors py-2"
          >
            <Phone className="h-5 w-5 text-terracotta shrink-0" />
            <span>התקשרו אלינו: 050-6789303</span>
          </a>
          <a
            href="mailto:info@kesem-morocco.co.il"
            className="flex items-center justify-center md:justify-start gap-2.5 hover:text-terracotta transition-colors py-2"
          >
            <Mail className="h-5 w-5 text-terracotta shrink-0" />
            <span>כתבו לנו: info@kesem-morocco.co.il</span>
          </a>
        </div>
      </div>
    </div>
  );
}
