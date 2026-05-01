import React from 'react';

const CTAButton = ({ children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`btn-shimmer group relative inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-surface-0
        bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500
        shadow-glow-amber-sm hover:shadow-glow-amber
        transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0
        ${className}`}
    >
      <span className="relative z-10 flex items-center">{children}</span>
    </button>
  );
};

export default CTAButton;
