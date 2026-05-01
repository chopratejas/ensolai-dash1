import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlowBackground from '../components/GlowBackground';

const faqs = [
  {
    q: 'What is EnsolAI?',
    a: 'EnsolAI is a platform designed to help professionals elevate their careers by providing access to speaking opportunities at conferences, judging positions at hackathons, and tools to streamline the application process.'
  },
  {
    q: 'How does EnsolAI help me become a thought leader?',
    a: "EnsolAI curates opportunities for you to speak at conferences, judge hackathons, and contribute to media like podcasts. By leveraging these high-impact engagements, you can enhance your visibility in your field and build a reputation as an expert in your area of expertise."
  },
  {
    q: 'What are the main features of EnsolAI?',
    a: (
      <ul className="list-disc pl-6 space-y-2 text-zinc-400">
        <li>Find speaking engagements at top conferences.</li>
        <li>Discover hackathons looking for judges and apply with one click.</li>
        <li>Create AI-powered abstracts to streamline applications.</li>
        <li>Access judging positions, media opportunities, and advanced analytics (Pro Plan).</li>
      </ul>
    )
  },
  {
    q: 'How does the one-click apply for hackathons work?',
    a: "The one-click apply feature simplifies the process of applying for judging positions at hackathons. Once you find an event you're interested in, you can apply with a single click, saving you time and effort. Your profile and expertise are automatically matched to the opportunities that fit best."
  },
  {
    q: 'How do AI-powered abstracts work?',
    a: 'Our AI-powered tool helps you generate professional abstracts for speaking engagements based on your expertise and the event requirements. This feature ensures that your application is polished and compelling, improving your chances of being selected to speak.'
  },
  {
    q: 'What is the difference between the Basic and Pro Plans?',
    a: 'The Basic Plan gives you access to all essential features, including speaking opportunities, hackathon judging positions, and AI-powered abstracts. The Pro Plan offers additional benefits including monthly 1:1 30-minute sessions to guide you on your EB1A/O1/EB2NIW path, exclusive advanced opportunities, group sessions on specific topics, and specialized workshops for niche identification and journal reviews.'
  },
  {
    q: 'How do I know which conferences and hackathons are relevant to me?',
    a: "EnsolAI tailors its recommendations based on your professional profile and interests. You'll see opportunities that match your expertise and industry, ensuring you apply for the events that are most relevant to you."
  },
  {
    q: 'Is there a free trial available?',
    a: "Yes! EnsolAI offers a limited free trial of 7 days for users to explore the platform before committing to a subscription. You can experience some of our core features and decide if it's the right fit for your professional growth."
  },
  {
    q: 'Do I need to provide credit card information during sign-up?',
    a: 'Yes, credit card information is required during the sign-up process to activate your 7-day free trial. This ensures a seamless transition to your chosen subscription plan after the trial period ends. You will not be charged during the trial period, and you can cancel anytime before the trial expires.'
  },
  {
    q: 'How can I join the Elite Plan?',
    a: "Due to high demand, our Elite Plan currently has limited availability. You can join the waitlist on our homepage. Elite Plan members receive monthly 1:1 sessions for EB1A/O1/EB2NIW guidance, exclusive opportunities not available in the Essential Plan, and access to group sessions on topics like niche identification and journal reviews. We'll notify you as soon as a spot becomes available."
  },
  {
    q: 'What happens if I accidentally subscribe?',
    a: 'Due to the immediate access nature of our service, we cannot provide refunds for subscription payments, including accidental subscriptions. This policy applies to all monthly subscriptions — no refunds are available once you have subscribed for the month. Please review your subscription choice carefully before confirming. You can cancel your subscription at any time to prevent future charges.'
  },
  {
    q: 'Are the opportunities guaranteed?',
    a: 'EnsolAI is an opportunity aggregation platform. While we strive to provide high-quality opportunities, we cannot guarantee acceptance, participation, or outcomes. We recommend thoroughly reviewing each opportunity and conducting your own due diligence before applying.'
  },
  {
    q: 'What happens when I cancel my subscription?',
    a: "When you cancel your subscription, you'll continue to have access to premium features until the end of your current billing period. After that, your account will revert to the basic plan. No partial refunds are provided for unused time."
  },
];

const FAQItem = ({ q, a, isOpen, onToggle }) => (
  <div className="glass rounded-xl overflow-hidden hover:border-white/15 transition-colors">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between text-left p-6 group"
    >
      <span className="text-base md:text-lg font-medium text-white pr-6">{q}</span>
      <ChevronDown
        className={`h-5 w-5 text-indigo-300 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 text-zinc-400 leading-relaxed text-sm md:text-base">{a}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <div className="min-h-screen flex flex-col bg-surface-0">
      <Header />
      <main className="relative flex-grow pt-16 pb-24">
        <GlowBackground variant="ambient" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1 mb-5">
              <HelpCircle className="h-3.5 w-3.5 text-indigo-300" />
              <span className="text-xs font-medium tracking-wide uppercase text-zinc-400">Help Center</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-zinc-400">Everything you need to know about EnsolAI.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
