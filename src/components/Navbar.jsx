import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Compass } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event to change background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'דף הבית', path: '/' },
    { name: 'הטיולים שלנו', path: '/#tours-section' },
    { name: 'על המייסדת', path: '/#about-section' },
    { name: 'חוות דעת', path: '/#testimonials-section' },
    { name: 'צור קשר', path: '/#contact-section' }
  ];

  const handleNavClick = (path) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If not on home page, redirect to home page and scroll will happen via URL hash
        window.location.href = path;
      }
    }
  };

  const whatsappNumber = "972507654321"; // Dummy boutique number
  const encodedText = encodeURIComponent("היי, אשמח לקבל פרטים ולהתייעץ לגבי טיול בוטיק מותאם אישית למרוקו! 🇲🇦");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-terracotta text-sand p-2 rounded-lg transition-transform duration-300 group-hover:rotate-12">
              <Compass className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold tracking-wider text-charcoal group-hover:text-terracotta transition-colors duration-300">
                קסם מרוקו
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-saffron font-medium -mt-1 uppercase">
                Maghrib Boutique
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  if (link.path.includes('#')) {
                    e.preventDefault();
                    handleNavClick(link.path);
                  }
                }}
                className="text-charcoal hover:text-terracotta font-medium transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-saffron after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Consultation CTA (WhatsApp) */}
          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-majorelle hover:bg-majorelle-light text-sand px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-majorelle/20"
            >
              <Phone className="h-4 w-4" />
              <span>ייעוץ ב-WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal hover:text-terracotta focus:outline-none p-1.5 rounded-md hover:bg-sand-dark transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div className={`md:hidden fixed inset-0 top-[64px] bg-sand/98 backdrop-blur-md transition-all duration-300 z-40 ${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="px-6 py-8 flex flex-col space-y-6 h-full bg-zellij">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => {
                setIsOpen(false);
                if (link.path.includes('#')) {
                  e.preventDefault();
                  // Short delay to allow menu animation to complete
                  setTimeout(() => handleNavClick(link.path), 300);
                }
              }}
              className="text-xl font-semibold text-charcoal hover:text-terracotta border-r-4 border-transparent hover:border-saffron pr-4 py-2 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          
          <div className="pt-6 border-t border-charcoal/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-majorelle hover:bg-majorelle-light text-sand py-4 rounded-xl font-bold shadow-md shadow-majorelle/15 transition-all duration-200"
            >
              <Phone className="h-5 w-5" />
              <span>ייעוץ ב-WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
