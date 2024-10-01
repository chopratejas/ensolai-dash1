import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Last updated: [Date]</p>
        <p className="mb-4">
          This Privacy Policy describes how EnsolAI ("we", "us", or "our") collects, uses, and shares your personal information when you use our website and services.
        </p>
        {/* Add more sections as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;