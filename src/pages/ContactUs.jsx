import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { emailConfig } from '../email';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all fields');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: `
Message from: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`,
                to_email: 'goeb1app@gmail.com'
            };

            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                templateParams,
                emailConfig.publicKey
            );

            toast.success('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-gray-100">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto bg-white rounded-lg p-10 shadow-lg border border-gray-200">
                    <h1 className="text-5xl font-bold mb-8 text-center text-gray-900">
                        Contact Us
                    </h1>
                    <p className="text-xl text-center mb-12 text-gray-600">
                        Have questions? We're here to help.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                                <div className="flex items-center mb-4">
                                    <Mail className="h-6 w-6 text-blue-600 mr-3" />
                                    <h2 className="text-2xl font-semibold text-gray-900">Email</h2>
                                </div>
                                <p className="text-gray-600">
                                    <a href="mailto:goeb1app@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium">
                                        goeb1app@gmail.com
                                    </a>
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                                <div className="flex items-center mb-4">
                                    <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                                    <h2 className="text-2xl font-semibold text-gray-900">Company</h2>
                                </div>
                                <p className="text-gray-600">
                                    GoEB1 L.L.C.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send us a message</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        placeholder="Your name"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        placeholder="Your email"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32"
                                        placeholder="Your message"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full ${
                                        isSubmitting 
                                            ? 'bg-blue-400 cursor-not-allowed' 
                                            : 'bg-blue-600 hover:bg-blue-700'
                                    } text-white py-3 px-6 rounded-lg transition-colors duration-300 font-semibold`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
