import React from 'react';

const CTAButton = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
      {children}
    </button>
  );
};

export default CTAButton;