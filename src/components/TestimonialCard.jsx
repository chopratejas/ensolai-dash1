import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, role, company, content, rating = 5, image }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500/30 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>
      
      <Quote className="h-8 w-8 text-blue-400 mb-4 opacity-50" />
      <p className="text-gray-300 mb-6 leading-relaxed italic">
        "{content}"
      </p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{role} at {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 