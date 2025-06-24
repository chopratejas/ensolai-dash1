import React from 'react';

const CTAButton = ({ children }) => {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center">
      {children}
    </button>
  );
};

export default CTAButton;