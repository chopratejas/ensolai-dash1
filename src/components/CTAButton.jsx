import React from 'react';

const CTAButton = ({ children }) => {
  return (
    <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-4 px-8 transition-all duration-200 flex items-center">
      {children}
    </button>
  );
};

export default CTAButton;