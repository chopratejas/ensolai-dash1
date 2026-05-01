import React from 'react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-surface-0/60 backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
      <div className="container mx-auto px-4 py-14">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400 via-violet-500 to-amber-400">
              <Sparkles className="h-4 w-4 text-surface-0" strokeWidth={2.5} />
            </span>
            <span className="text-xl font-serif text-white">
              Ensol<span className="text-gradient">AI</span>
            </span>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 px-4">
              <li><Link to="/privacy-policy" className="text-zinc-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-zinc-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/faq" className="text-zinc-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </nav>

          <div className="text-zinc-500 text-center text-xs">
            © 2025 GoEB1 L.L.C. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
