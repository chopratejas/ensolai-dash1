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
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center text-gray-900">
                        Contact Us
                    </h1>
                    <p className="text-xl text-center mb-12 text-gray-600 font-light">
                        Have questions? We're here to help.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                                <div className="flex items-center mb-4">
                                    <Mail className="h-5 w-5 text-amber-600 mr-3" />
                                    <h2 className="text-xl font-semibold text-gray-900">Email</h2>
                                </div>
                                <p className="text-gray-600">
                                    <a href="mailto:goeb1app@gmail.com" className="text-gray-900 hover:text-amber-600 font-medium transition-colors">
                                        goeb1app@gmail.com
                                    </a>
                                </p>
                            </div>

                            <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                                <div className="flex items-center mb-4">
                                    <MapPin className="h-5 w-5 text-amber-600 mr-3" />
                                    <h2 className="text-xl font-semibold text-gray-900">Company</h2>
                                </div>
                                <p className="text-gray-600">
                                    GoEB1 L.L.C.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 border-2 border-gray-200">
                            <h2 className="text-xl font-semibold mb-6 text-gray-900">Send us a message</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-white border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-gray-900"
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
                                        className="w-full p-3 bg-white border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-gray-900"
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
                                        className="w-full p-3 bg-white border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-gray-900 h-32"
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
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-gray-900 hover:bg-gray-800'
                                    } text-white py-3 px-6 transition-colors duration-200 font-semibold`}
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
