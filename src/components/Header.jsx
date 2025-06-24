import React, { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 py-4 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Zap className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">
              EnsolAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Home</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Privacy Policy</Link></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
            <ul className="px-4 py-2">
              <li>
                <Link 
                  to="/" 
                  className="block py-3 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="block py-3 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block py-3 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="block py-3 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;