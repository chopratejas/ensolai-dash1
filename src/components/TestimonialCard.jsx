import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, role, company, content, rating = 5 }) => {
  return (
    <div className="group relative h-full lift">
      {/* Hover gradient border */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/0 via-violet-500/0 to-indigo-500/0 group-hover:from-indigo-400/40 group-hover:via-violet-500/15 group-hover:to-indigo-500/40 transition-all duration-500 blur-sm" />
      <div className="relative h-full glass rounded-2xl p-7 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex text-amber-400">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <Quote className="h-5 w-5 text-indigo-400/70" />
        </div>

        <p className="text-zinc-300 leading-relaxed mb-6 flex-grow">
          "{content}"
        </p>

        <div className="flex items-center pt-5 border-t border-white/5">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white font-semibold text-sm mr-4 shadow-glow-indigo-sm">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">{name}</h4>
            <p className="text-zinc-500 text-xs">{role} · <span className="text-zinc-400">{company}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
