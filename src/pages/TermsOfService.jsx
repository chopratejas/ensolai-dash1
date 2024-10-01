import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">Last updated: [Date]</p>
        <p className="mb-4">
          These Terms of Service ("Terms") govern your access to and use of EnsolAI's website and services. By accessing or using our services, you agree to be bound by these Terms.
        </p>
        {/* Add more sections as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;