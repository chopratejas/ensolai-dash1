import React from 'react';

const GlowBackground = ({ variant = 'hero' }) => {
  if (variant === 'hero') {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        {/* Indigo carries the hero. */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-glow-indigo blur-3xl mobile-soft-blur animate-glow-pulse" />
        {/* Violet on the right. */}
        <div className="absolute top-20 -right-32 h-[420px] w-[420px] rounded-full bg-glow-violet blur-3xl mobile-soft-blur animate-glow-pulse [animation-delay:1.5s]" />
        {/* Tiny amber spark — warm kiss only, hidden on small screens. */}
        <div className="hidden sm:block absolute top-40 -left-24 h-[280px] w-[280px] rounded-full bg-glow-amber blur-3xl opacity-70 animate-glow-pulse [animation-delay:3s]" />
      </div>
    );
  }
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="absolute -top-20 left-1/4 h-[400px] w-[600px] rounded-full bg-glow-indigo blur-3xl mobile-soft-blur opacity-70" />
    </div>
  );
};

export default GlowBackground;
