import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';

function AccordionItem({ item, isLast }) {
  const [isOpen, setIsOpen] = useState(item.day === 1); // Open day 1 by default

  return (
    <div className="relative flex gap-6 md:gap-8 group">
      {/* Timeline Visuals */}
      <div className="flex flex-col items-center shrink-0">
        {/* Glow Node */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
            isOpen
              ? 'bg-terracotta border-terracotta text-sand shadow-lg shadow-terracotta/20 scale-110'
              : 'bg-sand border-saffron text-charcoal hover:border-terracotta hover:scale-105'
          }`}
        >
          {item.day}
        </button>
        {/* Vertical line connecting nodes */}
        {!isLast && (
          <div className="w-0.5 grow bg-gradient-to-b from-saffron to-sand-dark my-2 min-h-[50px]"></div>
        )}
      </div>

      {/* Accordion Content Block */}
      <div className="grow pb-8">
        <div className="bg-white rounded-2xl border border-sand-dark overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Header */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full text-right px-6 py-5 flex justify-between items-center gap-4 hover:bg-sand/30 transition-colors focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-terracotta bg-terracotta/10 px-2 py-0.5 rounded uppercase">
                יום {item.day}
              </span>
              <h4 className="text-base md:text-lg font-bold text-charcoal group-hover:text-terracotta transition-colors duration-200">
                {item.title}
              </h4>
            </div>
            <div className="text-charcoal-light/70 shrink-0">
              {isOpen ? (
                <ChevronUp className="h-5 w-5 text-terracotta" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
          </button>

          {/* Description Section */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[500px] border-t border-sand-dark' : 'max-h-0'
          }`}>
            <div className="p-6 text-charcoal-light text-sm md:text-base leading-relaxed bg-sand/10 space-y-3">
              <p>{item.desc}</p>
              <div className="flex items-center gap-1.5 text-xs text-saffron-dark font-semibold">
                <MapPin className="h-3.5 w-3.5" />
                <span>מרוקו</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ itinerary }) {
  if (!itinerary || itinerary.length === 0) return null;

  return (
    <div className="relative py-4">
      {/* Background timeline line */}
      <div className="absolute right-5 top-8 bottom-8 w-0.5 bg-sand-dark -z-0 hidden md:block"></div>
      
      <div className="flex flex-col">
        {itinerary.map((item, idx) => (
          <AccordionItem 
            key={idx} 
            item={item} 
            isLast={idx === itinerary.length - 1} 
          />
        ))}
      </div>
    </div>
  );
}
