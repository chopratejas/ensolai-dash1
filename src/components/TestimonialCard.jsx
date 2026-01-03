import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, role, company, content, rating = 5, image }) => {
  return (
    <div className="bg-white p-8 border border-gray-200 hover:border-gray-900 transition-all duration-200">
      <div className="flex items-center mb-4">
        <div className="flex text-amber-500">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>

      <Quote className="h-6 w-6 text-amber-500 mb-4" />
      <p className="text-gray-700 mb-6 leading-relaxed">
        "{content}"
      </p>

      <div className="flex items-center border-t border-gray-100 pt-6">
        <div className="w-10 h-10 bg-gray-900 flex items-center justify-center text-white font-semibold text-sm mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{role} at {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 