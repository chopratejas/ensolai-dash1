import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import StatsCounter from '../components/StatsCounter';
import TestimonialCard from '../components/TestimonialCard';
import GlowBackground from '../components/GlowBackground';
import {
  ArrowRight, Mic, Award, FileText, Users, PenTool, BarChart2, Share2,
  Star, TrendingUp, Target, Globe, CheckCircle, Shield, Sparkles, Clock, Trophy
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const features = [
  { icon: Mic,      title: 'Speaking Opportunities', desc: 'Curated database of speaking slots at conferences worldwide.', tag: '4,000+ Listed', tone: 'indigo' },
  { icon: Award,    title: 'Judging & Reviews',      desc: 'Judge hackathons, competitions, and peer-review papers in one click.', tag: '1,000+ Secured', tone: 'violet' },
  { icon: FileText, title: 'Visa Evaluations',       desc: 'Expert evaluations and guidance for EB1A, O1, and EB2-NIW petitions.', tag: 'Expert Assessment', tone: 'indigo' },
  { icon: Users,    title: 'Law Firm Connections',   desc: 'Connect with vetted immigration attorneys to build strong cases.', tag: 'Vetted Partners', tone: 'violet' },
];

const logos = ['Netflix', 'Google', 'Meta', 'Apple', 'Cisco', 'Visa'];

const testimonials = [
  { name: 'Sharma',  role: 'Senior Software Engineer', company: 'Google',   content: "EnsolAI helped me discover speaking opportunities I never knew existed. Within 3 months, I spoke at 4 major conferences, significantly boosting my visibility in the AI community. This organic brand building has been invaluable for my EB1A petition and overall career growth." },
  { name: 'Arjun',   role: 'Data Science Manager',     company: 'Netflix',  content: "I initially joined for EB1A support, but EnsolAI became so much more. The platform connected me with judging opportunities at top hackathons and got me featured in TechCrunch. My professional network has grown exponentially, opening doors I never imagined." },
  { name: 'Kavya',   role: 'Product Manager',          company: 'Meta',     content: "The AI-powered abstract generator is a game-changer! I've been accepted to speak at 8 conferences this year. Beyond immigration benefits, this has positioned me as a thought leader in my field and led to amazing career opportunities." },
  { name: 'Rohith',  role: 'Machine Learning Engineer',company: 'Apple',    content: "EnsolAI made it incredibly easy to find relevant opportunities. I've judged 12 hackathons and reviewed papers for top journals. The platform streamlined everything — from applications to tracking my contributions for my extraordinary ability case." },
  { name: 'Yuzho',   role: 'Security Architect',       company: 'Cisco',    content: "What started as help for my O1 visa became a career transformation. Through EnsolAI, I've spoken at RSA Conference, and built a personal brand that opened doors to executive opportunities. The ROI has been incredible." },
  { name: 'Vikram',  role: 'Fintech Director',         company: 'Visa',     content: "The platform's comprehensive approach to thought leadership is unmatched. I've spoken at 15+ events, judged startup competitions, and been quoted in major publications. This organic visibility has been crucial for both my EB2-NIW case and career advancement." },
];

const FeatureCard = ({ icon: Icon, title, desc, tag, tone }) => {
  const isIndigo = tone === 'indigo';
  return (
    <motion.div variants={fadeUp} className="group relative h-full">
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br transition-all duration-500 blur-sm ${
        isIndigo
          ? 'from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-400/40 group-hover:to-violet-500/20'
          : 'from-violet-500/0 to-indigo-500/0 group-hover:from-violet-500/40 group-hover:to-indigo-500/20'
      }`} />
      <div className="relative h-full glass rounded-2xl p-7 lift hover:border-white/10">
        <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
          isIndigo
            ? 'bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-glow-indigo-sm'
            : 'bg-gradient-to-br from-violet-500 to-violet-600 shadow-glow-violet'
        }`}>
          <Icon className="h-6 w-6 text-white" strokeWidth={2.2} />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4">{desc}</p>
        <div className={`text-xs font-semibold tracking-wide uppercase ${isIndigo ? 'text-indigo-300' : 'text-violet-300'}`}>{tag}</div>
      </div>
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface-0 text-zinc-100">
      <Header />

      <main className="flex-grow">
        {/* ============================== HERO ============================== */}
        <section className="relative pt-12 pb-32 md:pt-20 md:pb-40 overflow-hidden">
          <GlowBackground variant="hero" />

          <div className="container mx-auto px-4 text-center">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              {/* Trust pill */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
                </span>
                <span className="text-xs font-medium tracking-wide text-zinc-300">
                  Trusted by 200+ Professionals Worldwide
                </span>
              </motion.div>

              {/* Headline — tighter floor for narrow phones */}
              <motion.h1 variants={fadeUp} className="font-serif text-[2.6rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-white mb-7">
                Become a Global<br />
                <span className="text-gradient">Thought Leader</span>
              </motion.h1>

              {/* Subhead */}
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
                The premier platform connecting professionals with{' '}
                <span className="text-zinc-100">speaking opportunities</span>,{' '}
                <span className="text-zinc-100">judging positions</span>, and{' '}
                <span className="text-zinc-100">visa guidance</span>. Build your brand while advancing your immigration goals.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-14">
                <a href="https://app.ensol.ai">
                  <CTAButton>
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </CTAButton>
                </a>
                <button className="group inline-flex items-center rounded-full glass px-7 py-4 font-semibold text-zinc-200 hover:text-white hover:border-white/20 transition-all">
                  <Globe className="mr-2 h-5 w-5 text-indigo-300" />
                  Watch Success Stories
                </button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-3 text-zinc-400 text-sm">
                {[
                  { icon: CheckCircle, label: '4,000+ Opportunities' },
                  { icon: Trophy,      label: '1,000+ Positions Secured' },
                  { icon: Shield,      label: 'Visa Evaluation Included' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5">
                    <Icon className="h-3.5 w-3.5 text-indigo-300" />
                    <span>{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ============================== STATS ============================== */}
        <section className="relative py-16 border-y border-white/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center"
            >
              {[
                { end: 200,  suffix: '+', label: 'Active Professionals', sub: 'Growing Community' },
                { end: 4000, suffix: '+', label: 'Opportunities Listed', sub: 'Total on Platform' },
                { end: 1000, suffix: '+', label: 'Positions Secured',    sub: 'Via EnsolAI' },
                { end: 25,   suffix: '%', label: 'Success Rate',         sub: 'Opportunities Secured' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className={`relative group ${i < 3 ? 'md:border-r md:border-white/5' : ''} md:px-2`}
                >
                  <div className="text-5xl md:text-6xl mb-2">
                    <StatsCounter end={s.end} suffix={s.suffix} />
                  </div>
                  <p className="text-zinc-200 font-medium">{s.label}</p>
                  <p className="text-zinc-500 text-xs mt-1">{s.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ============================== FEATURES ============================== */}
        <section className="relative py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}
              className="text-center mb-14"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1 mb-5">
                <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
                <span className="text-xs font-medium tracking-wide uppercase text-zinc-400">Platform</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-white mb-4">
                Everything You Need to Excel
              </motion.h2>
              <motion.p variants={fadeUp} className="text-zinc-400 max-w-2xl mx-auto">
                From speaking opportunities to career advancement — the tools and connections to amplify your professional impact.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {features.map(f => <FeatureCard key={f.title} {...f} />)}
            </motion.div>
          </div>
        </section>

        {/* ============================== LOGOS MARQUEE ============================== */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-zinc-500 text-xs uppercase tracking-[0.25em] mb-8">
              Trusted by professionals from leading companies
            </p>
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="flex w-max animate-marquee">
                {[...logos, ...logos, ...logos].map((logo, i) => (
                  <div key={`${logo}-${i}`} className="flex items-center justify-center min-w-[160px] mx-6">
                    <span className="text-2xl font-serif text-zinc-500 hover:text-white transition-colors">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================== TESTIMONIALS ============================== */}
        <section className="relative py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}
              className="text-center mb-14"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1 mb-5">
                <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                <span className="text-xs font-medium tracking-wide uppercase text-zinc-400">Loved by 200+</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-white mb-4">
                Real Success Stories
              </motion.h2>
              <motion.p variants={fadeUp} className="text-zinc-400 max-w-2xl mx-auto">
                See how professionals are building their personal brands, advancing their careers, and securing their futures with EnsolAI.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {testimonials.map(t => (
                <motion.div key={t.name} variants={fadeUp}>
                  <TestimonialCard {...t} rating={5} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ============================== PRICING ============================== */}
        <section className="relative py-24">
          <GlowBackground variant="ambient" />
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}
              className="text-center mb-14"
            >
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-white mb-4">
                Invest in Your Future
              </motion.h2>
              <motion.p variants={fadeUp} className="text-zinc-400 max-w-2xl mx-auto">
                Choose the plan that matches your ambitions. Every dollar invested returns exponentially.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Essential */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
                <div className="relative glass-strong rounded-2xl p-9 h-full lift hover:border-white/15">
                  <div className="absolute top-6 right-6 inline-flex items-center gap-1 rounded-full bg-indigo-400/15 border border-indigo-400/30 px-3 py-1 text-xs font-medium text-indigo-300">
                    Popular
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3">Essential Plan</h3>
                  <div className="flex items-baseline mb-7">
                    <span className="text-5xl font-serif text-white">$49</span>
                    <span className="text-zinc-500 ml-2">/month</span>
                  </div>
                  <ul className="space-y-3.5 mb-7">
                    {[
                      'Access to 2,500+ monthly speaking opportunities',
                      '1,200+ judging positions and peer-review opportunities',
                      'AI-powered abstract and proposal generation',
                      'Exclusive EnsolAI member-only opportunities',
                      'Profile optimization and brand building tools',
                    ].map(item => (
                      <li key={item} className="flex items-start text-sm">
                        <CheckCircle className="h-5 w-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6 rounded-lg p-4 bg-indigo-400/5 border border-indigo-400/15">
                    <div className="text-xs font-medium text-indigo-300 uppercase tracking-wide">Average member results</div>
                    <div className="text-zinc-300 text-sm mt-1">4–6 speaking engagements per year · 89% success rate</div>
                  </div>
                  <a href="https://app.ensol.ai" className="block">
                    <CTAButton className="w-full">
                      Start Building Your Brand <ArrowRight className="ml-2 h-5 w-5" />
                    </CTAButton>
                  </a>
                </div>
              </motion.div>

              {/* Elite */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
                <div className="border-conic rounded-2xl">
                  <div className="relative rounded-2xl p-9 h-full">
                    <div className="absolute top-6 right-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-violet-500 px-3 py-1 text-xs font-semibold text-surface-0 shadow-glow-amber-sm">
                      <Sparkles className="h-3 w-3" /> Premium
                    </div>
                    <h3 className="text-xl font-serif text-white mb-3">Elite Plan</h3>
                    <div className="flex items-baseline mb-7">
                      <span className="text-5xl font-serif text-gradient">$199</span>
                      <span className="text-zinc-500 ml-2">/month</span>
                    </div>
                    <ul className="space-y-3.5 mb-7">
                      {[
                        { txt: 'Everything in Essential Plan', emphasis: true },
                        { txt: 'Monthly 1:1 30min EB1A/O1/EB2-NIW consultation' },
                        { txt: 'Priority access to high-profile opportunities' },
                        { txt: 'Direct law firm introductions and consultations' },
                        { txt: 'Comprehensive visa profile building support' },
                        { txt: 'Dedicated account management and support' },
                      ].map(item => (
                        <li key={item.txt} className="flex items-start text-sm">
                          <CheckCircle className="h-5 w-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className={item.emphasis ? 'text-white font-medium' : 'text-zinc-300'}>{item.txt}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mb-6 rounded-lg p-4 bg-gradient-to-br from-amber-400/10 to-violet-500/10 border border-white/10">
                      <div className="text-xs font-medium text-amber-300 uppercase tracking-wide">Elite member benefits</div>
                      <div className="text-zinc-300 text-sm mt-1">Personal guidance · Enhanced visa support</div>
                    </div>
                    <button
                      onClick={() => document.getElementById('waitlist-section').scrollIntoView({ behavior: 'smooth' })}
                      className="btn-shimmer w-full inline-flex items-center justify-center rounded-full py-4 px-8 font-semibold text-white bg-gradient-to-r from-amber-500/20 to-violet-500/20 border border-white/15 hover:border-white/30 transition-all"
                    >
                      Join Elite Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <p className="mt-3 text-xs text-zinc-500 text-center">Limited to 100 members globally</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <p className="text-zinc-200 font-medium mb-4">Average ROI: <span className="text-gradient font-semibold">300%</span> in first year</p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-zinc-500">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-indigo-300" /> Cancel anytime</div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-indigo-300" /> Secure payments</div>
                <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-amber-400" /> Proven results</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== WAITLIST ============================== */}
        <section id="waitlist-section" className="relative py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="max-w-md mx-auto text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Join the Elite Waitlist</h2>
              <p className="text-zinc-400 mb-8">Be among the first to access our exclusive Elite Plan features.</p>
              <div className="glass-strong rounded-2xl p-7 text-left">
                <form
                  name="waitlist"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="waitlist" />
                  <div style={{ display: 'none' }}><input name="bot-field" /></div>
                  <input
                    type="text" name="name" required placeholder="Your name"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/40 transition"
                  />
                  <input
                    type="email" name="email" required placeholder="Your email"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/40 transition"
                  />
                  <CTAButton className="w-full">Join Waitlist <ArrowRight className="ml-2 h-5 w-5" /></CTAButton>
                  <p className="text-xs text-zinc-500 text-center">We'll notify you when Elite Plan spots open up.</p>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================== COMING SOON ============================== */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl text-center text-white mb-12"
            >
              Coming Soon
            </motion.h2>
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {[
                { icon: Mic,      title: 'Podcast & Media',    desc: 'Expand your reach with podcast appearances and media features.' },
                { icon: Users,    title: 'Collaboration',      desc: 'Connect with peers to uncover thought leadership opportunities.' },
                { icon: PenTool,  title: 'Content Creation',   desc: 'Create and share blogs to boost your professional profile.' },
                { icon: BarChart2,title: 'Analytics Dashboard',desc: 'Monitor your progress with comprehensive analytics.' },
                { icon: Share2,   title: 'Social Integration', desc: 'Share your thought leadership across platforms effortlessly.' },
              ].map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp} className="glass rounded-xl p-5 lift hover:border-white/15 group">
                  <Icon className="h-5 w-5 text-indigo-300 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ============================== FINAL CTA ============================== */}
        <section className="relative pt-12 pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface-1 via-surface-2 to-surface-1 px-6 py-20 md:py-24 text-center"
            >
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-glow-indigo blur-3xl mobile-soft-blur animate-glow-pulse" />
                <div className="absolute -bottom-20 left-1/4 h-[300px] w-[400px] rounded-full bg-glow-violet blur-3xl mobile-soft-blur opacity-70" />
                <div className="hidden sm:block absolute top-10 right-10 h-[200px] w-[200px] rounded-full bg-glow-amber blur-3xl opacity-60" />
              </div>

              <h2 className="relative font-serif text-4xl md:text-6xl text-white mb-5 leading-tight">
                Ready to Become a<br />
                <span className="text-gradient">Global Thought Leader?</span>
              </h2>
              <p className="relative text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
                Join <span className="text-indigo-300 font-semibold">200+ professionals</span> from Netflix, Google, Meta, and Apple building their personal brands and advancing their immigration goals.
              </p>

              <div className="relative flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
                <a href="https://app.ensol.ai">
                  <CTAButton>
                    Transform Your Career Today <ArrowRight className="ml-2 h-5 w-5" />
                  </CTAButton>
                </a>
                <div className="text-zinc-400 text-sm">Free 7-day trial</div>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm text-zinc-400">
                <div className="flex items-center justify-center gap-2"><Target className="h-4 w-4 text-indigo-300" /> Start speaking within 30 days</div>
                <div className="flex items-center justify-center gap-2"><TrendingUp className="h-4 w-4 text-indigo-300" /> 300% average career ROI</div>
                <div className="flex items-center justify-center gap-2"><Star className="h-4 w-4 text-amber-400 fill-amber-400" /> 4.8/5 satisfaction rating</div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
