import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import GlowBackground from './GlowBackground';

const LegalPage = ({ title, accent, lastUpdated, intro, sections }) => (
  <div className="min-h-screen flex flex-col bg-surface-0">
    <Header />
    <main className="relative flex-grow pt-16 pb-24">
      <GlowBackground variant="ambient" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1 mb-5">
              <ScrollText className="h-3.5 w-3.5 text-indigo-300" />
              <span className="text-xs font-medium tracking-wide uppercase text-zinc-400">Legal</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-2">
              {title} <span className="text-gradient">{accent}</span>
            </h1>
            <p className="text-sm text-zinc-500">Last updated: {lastUpdated}</p>
          </div>

          {intro && <p className="text-zinc-400 mb-8 leading-relaxed">{intro}</p>}

          <div className="space-y-4">
            {sections.map((s, i) => (
              <section key={i} className="glass rounded-xl p-6 hover:border-white/12 transition-colors">
                <h2 className="text-lg md:text-xl font-semibold text-white mb-3">{s.title}</h2>
                <div className="text-zinc-400 leading-relaxed text-sm md:text-base space-y-3">{s.body}</div>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default LegalPage;
