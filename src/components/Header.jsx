import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy-policy', label: 'Privacy' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(v => !v);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-surface-0/70 border-b border-white/10 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]'
          : 'backdrop-blur-md bg-surface-0/40 border-b border-white/5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 via-violet-500 to-amber-400 shadow-glow-indigo-sm">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-400 via-violet-500 to-amber-400 blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
              <Sparkles className="relative h-5 w-5 text-surface-0" strokeWidth={2.5} />
            </span>
            <span className="text-2xl font-serif text-white tracking-tight">
              Ensol<span className="text-gradient">AI</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map(link => {
                const active = pathname === link.to;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                        active ? 'text-white' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
                      )}
                    </Link>
                  </li>
                );
              })}
              <li className="ml-3">
                <a
                  href="https://app.ensol.ai"
                  className="btn-shimmer inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-surface-0 bg-gradient-to-r from-amber-300 to-amber-500 shadow-glow-amber-sm hover:shadow-glow-amber transition-all"
                >
                  Launch App
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {isMenuOpen && (
          <nav className="md:hidden absolute left-0 right-0 top-full glass-strong border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="px-2 py-3">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={toggleMenu}
                    className="block px-4 py-3 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-2 pt-2 pb-1">
                <a
                  href="https://app.ensol.ai"
                  className="block w-full text-center rounded-full py-3 font-semibold text-surface-0 bg-gradient-to-r from-amber-300 to-amber-500"
                >
                  Launch App
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
