import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlowBackground from '../components/GlowBackground';
import CTAButton from '../components/CTAButton';
import { Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { emailConfig } from '../email';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }
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
        message: `Message from: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
        to_email: 'goeb1app@gmail.com'
      };
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, templateParams, emailConfig.publicKey);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/40 transition disabled:opacity-50";

  return (
    <div className="min-h-screen flex flex-col bg-surface-0">
      <Header />
      <main className="relative flex-grow pt-16 pb-24">
        <GlowBackground variant="ambient" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1 mb-5">
                <MessageCircle className="h-3.5 w-3.5 text-indigo-300" />
                <span className="text-xs font-medium tracking-wide uppercase text-zinc-400">Get in touch</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl text-white mb-3">
                Contact <span className="text-gradient">Us</span>
              </h1>
              <p className="text-zinc-400">Have questions? We're here to help.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="glass rounded-xl p-6 lift hover:border-white/15">
                  <div className="flex items-center mb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-600 mr-3 shadow-glow-indigo-sm">
                      <Mail className="h-4 w-4 text-white" />
                    </span>
                    <h2 className="text-lg font-semibold text-white">Email</h2>
                  </div>
                  <a href="mailto:goeb1app@gmail.com" className="text-indigo-300 hover:text-indigo-200 transition-colors font-medium">
                    goeb1app@gmail.com
                  </a>
                </div>

                <div className="glass rounded-xl p-6 lift hover:border-white/15">
                  <div className="flex items-center mb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 mr-3 shadow-glow-violet">
                      <MapPin className="h-4 w-4 text-white" />
                    </span>
                    <h2 className="text-lg font-semibold text-white">Company</h2>
                  </div>
                  <p className="text-zinc-300">GoEB1 L.L.C.</p>
                </div>

                <div className="glass rounded-xl p-6">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Typical response within <span className="text-white font-medium">24 hours</span>. For urgent matters, please mention it in your message.
                  </p>
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-7">
                <h2 className="text-xl font-serif text-white mb-5">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-zinc-400 mb-1.5 text-sm font-medium">Name</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange}
                      className={inputClass} placeholder="Your name" required disabled={isSubmitting} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-zinc-400 mb-1.5 text-sm font-medium">Email</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange}
                      className={inputClass} placeholder="your@email.com" required disabled={isSubmitting} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-zinc-400 mb-1.5 text-sm font-medium">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                      className={`${inputClass} h-32 resize-none`} placeholder="What's on your mind?" required disabled={isSubmitting} />
                  </div>
                  <CTAButton type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Sending…' : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                  </CTAButton>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
