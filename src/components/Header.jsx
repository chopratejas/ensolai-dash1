import React from 'react';
import { Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Zap className="h-8 w-8 text-blue-400 mr-2" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            EnsolAI
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;