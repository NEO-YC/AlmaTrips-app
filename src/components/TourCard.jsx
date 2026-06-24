import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, ArrowLeft, Clock } from 'lucide-react';

export default function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-sand-dark flex flex-col h-full group hover:-translate-y-1">
      {/* Tour Image Container */}
      <div className="relative h-64 overflow-hidden shrink-0">
        <img 
          src={tour.images.card} 
          alt={tour.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
        
        {/* Duration Badge */}
        <div className="absolute top-4 right-4 bg-terracotta text-sand px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
          <Clock className="h-3.5 w-3.5" />
          <span>{tour.duration}</span>
        </div>

        {/* Primary Tag */}
        {tour.tags && tour.tags.length > 0 && (
          <div className="absolute bottom-4 right-4 flex gap-1.5 flex-wrap">
            {tour.tags.slice(0, 2).map((tag, idx) => (
              <span 
                key={idx} 
                className="bg-saffron text-charcoal px-2.5 py-0.5 rounded-md text-[11px] font-bold shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Tour Body */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-extrabold text-charcoal mb-2.5 group-hover:text-terracotta transition-colors duration-200 line-clamp-1">
          {tour.title}
        </h3>
        
        <p className="text-charcoal-light/90 text-sm leading-relaxed mb-6 line-clamp-3">
          {tour.shortDescription}
        </p>

        {/* Quick Tour details */}
        <div className="grid grid-cols-2 gap-3.5 py-3 border-t border-b border-sand-dark mb-6 text-xs text-charcoal-light font-medium">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-terracotta shrink-0" />
            <span>{tour.groupSize}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-terracotta shrink-0" />
            <span>{tour.nextDate}</span>
          </div>
        </div>

        {/* Action */}
        <div className="mt-auto pt-2">
          <Link 
            to={`/tour/${tour.slug}`} 
            className="w-full flex items-center justify-center gap-2 bg-majorelle hover:bg-majorelle-light text-sand py-3 rounded-xl text-sm font-bold transition-colors duration-200 hover:shadow-md hover:shadow-majorelle/15 group/btn"
          >
            <span>פרטים ומסלול הטיול</span>
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover/btn:-translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
