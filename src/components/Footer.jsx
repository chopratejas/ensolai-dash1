import React from 'react';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center">
            <Zap className="h-5 w-5 text-amber-500 mr-2" />
            <span className="text-xl font-serif text-gray-900">
              EnsolAI
            </span>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4">
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Terms of Service</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Contact</Link></li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-gray-500 text-center text-sm">
            © 2025 GoEB1 L.L.C. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;