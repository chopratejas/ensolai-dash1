import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-10 shadow-lg">
                    <h1 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                        Contact Us
                    </h1>
                    <p className="text-xl text-center mb-12 text-gray-300">
                        Have questions? We're here to help.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                                <div className="flex items-center mb-4">
                                    <Mail className="h-6 w-6 text-blue-400 mr-3" />
                                    <h2 className="text-2xl font-semibold">Email</h2>
                                </div>
                                <p className="text-gray-300">
                                    <a href="mailto:goeb1app@gmail.com" className="text-blue-400 hover:text-blue-300">
                                        goeb1app@gmail.com
                                    </a>
                                </p>
                            </div>

                            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                                <div className="flex items-center mb-4">
                                    <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                                    <h2 className="text-2xl font-semibold">Company</h2>
                                </div>
                                <p className="text-gray-300">
                                    GoEB1 L.L.C.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-6">
                            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-400"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-400"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">Message</label>
                                    <textarea
                                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-400 h-32"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactUs;