import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">What is EnsolAI?</h2>
            <p>EnsolAI is a platform that helps professionals become thought leaders by discovering opportunities to speak at conferences and judge hackathons.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">How does the one-click apply for hackathons work?</h2>
            <p>Our one-click apply feature streamlines the application process for judging hackathons, allowing you to quickly submit your application with minimal effort.</p>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;