import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import StatsCounter from '../components/StatsCounter';
import TestimonialCard from '../components/TestimonialCard';
import {ArrowRight, Mic, Award, FileText, MousePointer, Zap, Users, PenTool, BarChart2, Share2, Star, TrendingUp, Target, Globe, CheckCircle, Shield, Sparkles, Clock, Trophy, Crown} from 'lucide-react';

const Index = () => {

    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Header/>

                <main className="flex-grow container mx-auto px-4 py-8">
                    {/* Hero Section - Editorial Style */}
                    <section className="text-center mb-24 pt-8">
                        <div className="inline-flex items-center border-2 border-black px-6 py-2 mb-10">
                            <span className="text-gray-900 text-sm font-medium tracking-wide uppercase">Trusted by 200+ Professionals Worldwide</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 text-gray-900 leading-[1.1] tracking-tight">
                            Become a Global<br />
                            <span className="relative inline-block">
                                Thought Leader
                                <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-amber-500"></div>
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-10 text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                            The premier platform connecting professionals with speaking opportunities, judging positions, and visa guidance.
                            <span className="text-gray-900 font-medium">Build your brand while advancing your immigration goals.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <a href="https://app.ensol.ai" className="inline-block">
                                <CTAButton>
                                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5"/>
                                </CTAButton>
                            </a>
                            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center font-medium">
                                <Globe className="mr-2 h-5 w-5" />
                                Watch Success Stories
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 text-sm">
                            <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 text-amber-600" />
                                4000+ Opportunities Listed
                            </div>
                            <div className="flex items-center">
                                <Trophy className="h-4 w-4 mr-2 text-amber-600" />
                                1000+ Positions Secured
                            </div>
                            <div className="flex items-center">
                                <Shield className="h-4 w-4 mr-2 text-amber-600" />
                                Visa Evaluation Included
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="mb-24 border-y border-gray-200 py-16">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div className="group">
                                <div className="text-5xl md:text-6xl font-serif text-gray-900 mb-2">
                                    <StatsCounter end={200} suffix="+" />
                                </div>
                                <p className="text-gray-900 text-lg font-medium">Active Professionals</p>
                                <p className="text-gray-500 text-sm mt-1">Growing Community</p>
                            </div>
                            <div className="group">
                                <div className="text-5xl md:text-6xl font-serif text-gray-900 mb-2">
                                    <StatsCounter end={4000} suffix="+" />
                                </div>
                                <p className="text-gray-900 text-lg font-medium">Opportunities Listed</p>
                                <p className="text-gray-500 text-sm mt-1">Total on Platform</p>
                            </div>
                            <div className="group">
                                <div className="text-5xl md:text-6xl font-serif text-gray-900 mb-2">
                                    <StatsCounter end={1000} suffix="+" />
                                </div>
                                <p className="text-gray-900 text-lg font-medium">Positions Secured</p>
                                <p className="text-gray-500 text-sm mt-1">Via EnsolAI</p>
                            </div>
                            <div className="group">
                                <div className="text-5xl md:text-6xl font-serif text-amber-600 mb-2">
                                    <StatsCounter end={25} suffix="%" />
                                </div>
                                <p className="text-gray-900 text-lg font-medium">Success Rate</p>
                                <p className="text-gray-500 text-sm mt-1">Opportunities Secured</p>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
                                Everything You Need to Excel
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                                From speaking opportunities to career advancement, we provide the tools and connections to amplify your professional impact.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="group bg-white p-8 border border-gray-200 hover:border-gray-900 transition-all duration-200">
                                <div className="w-12 h-12 bg-amber-500 flex items-center justify-center mb-6">
                                    <Mic className="h-6 w-6 text-white"/>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Speaking Opportunities</h3>
                                <p className="text-gray-600 mb-4">Access our curated database of speaking opportunities at conferences worldwide.</p>
                                <div className="text-amber-600 text-sm font-semibold">4000+ Listed Total</div>
                            </div>

                            <div className="group bg-white p-8 border border-gray-200 hover:border-gray-900 transition-all duration-200">
                                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center mb-6">
                                    <Award className="h-6 w-6 text-white"/>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Judging & Reviews</h3>
                                <p className="text-gray-600 mb-4">Judge hackathons, competitions, and peer-review academic papers with streamlined applications.</p>
                                <div className="text-gray-900 text-sm font-semibold">1000+ Secured</div>
                            </div>

                            <div className="group bg-white p-8 border border-gray-200 hover:border-gray-900 transition-all duration-200">
                                <div className="w-12 h-12 bg-amber-500 flex items-center justify-center mb-6">
                                    <FileText className="h-6 w-6 text-white"/>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Visa Evaluations</h3>
                                <p className="text-gray-600 mb-4">Get professional visa evaluations and guidance for EB1A, O1, and EB2-NIW applications.</p>
                                <div className="text-amber-600 text-sm font-semibold">Expert Assessment</div>
                            </div>

                            <div className="group bg-white p-8 border border-gray-200 hover:border-gray-900 transition-all duration-200">
                                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center mb-6">
                                    <Users className="h-6 w-6 text-white"/>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Law Firm Connections</h3>
                                <p className="text-gray-600 mb-4">Connect with experienced immigration attorneys to build strong petition profiles.</p>
                                <div className="text-gray-900 text-sm font-semibold">Vetted Partners</div>
                            </div>
                        </div>
                    </section>

                    {/* Company Logos Section */}
                    <section className="mb-24">
                        <div className="text-center">
                            <p className="text-gray-500 text-sm uppercase tracking-widest mb-10">Trusted by professionals from leading companies</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                                <div className="flex items-center justify-center">
                                    <div className="text-xl font-serif text-gray-400">Netflix</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="text-xl font-serif text-gray-400">Google</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="text-xl font-serif text-gray-400">Meta</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="text-xl font-serif text-gray-400">Apple</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="text-xl font-serif text-gray-400">Cisco</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="text-xl font-serif text-gray-400">Visa</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
                                Real Success Stories
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                                See how professionals are using EnsolAI to build their personal brands, advance their careers, and achieve their immigration goals.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <TestimonialCard 
                                name="Sharma"
                                role="Senior Software Engineer"
                                company="Google"
                                content="EnsolAI helped me discover speaking opportunities I never knew existed. Within 3 months, I spoke at 4 major conferences, significantly boosting my visibility in the AI community. This organic brand building has been invaluable for my EB1A petition and overall career growth."
                                rating={5}
                            />
                            
                            <TestimonialCard 
                                name="Arjun"
                                role="Data Science Manager"
                                company="Netflix"
                                content="I initially joined for EB1A support, but EnsolAI became so much more. The platform connected me with judging opportunities at top hackathons and got me featured in TechCrunch. My professional network has grown exponentially, opening doors I never imagined."
                                rating={5}
                            />
                            
                            <TestimonialCard 
                                name="Kavya"
                                role="Product Manager"
                                company="Meta"
                                content="The AI-powered abstract generator is a game-changer! I've been accepted to speak at 8 conferences this year. Beyond immigration benefits, this has positioned me as a thought leader in my field and led to amazing career opportunities."
                                rating={5}
                            />
                            
                            <TestimonialCard 
                                name="Rohith"
                                role="Machine Learning Engineer"
                                company="Apple"
                                content="EnsolAI made it incredibly easy to find relevant opportunities. I've judged 12 hackathons and reviewed papers for top journals. The platform streamlined everything - from applications to tracking my contributions for my extraordinary ability case."
                                rating={5}
                            />
                            
                            <TestimonialCard 
                                name="Yuzho"
                                role="Security Architect"
                                company="Cisco"
                                content="What started as help for my O1 visa became a career transformation. Through EnsolAI, I've spoken at RSA Conference, and built a personal brand that opened doors to executive opportunities. The ROI has been incredible."
                                rating={5}
                            />
                            
                            <TestimonialCard 
                                name="Vikram"
                                role="Fintech Director"
                                company="Visa"
                                content="The platform's comprehensive approach to thought leadership is unmatched. I've spoken at 15+ events, judged startup competitions, and been quoted in major publications. This organic visibility has been crucial for both my EB2-NIW case and career advancement."
                                rating={5}
                            />
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <section className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
                                Invest in Your Future
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                                Choose the plan that matches your ambitions. Every dollar invested returns exponentially in career growth and opportunities.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-10 border-2 border-gray-200 hover:border-gray-900 transition-all duration-200 relative">
                                <div className="absolute top-6 right-6 bg-amber-500 text-white px-4 py-1 text-sm font-medium">
                                    Popular
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-serif mb-4 text-gray-900">Essential Plan</h3>
                                    <div className="flex items-baseline">
                                        <span className="text-5xl font-serif text-gray-900">$49</span>
                                        <span className="text-gray-500 ml-2">/month</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">Access to 2,500+ monthly speaking opportunities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">1,200+ judging positions and peer-review opportunities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">AI-powered abstract and proposal generation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">Exclusive EnsolAI member-only opportunities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">Profile optimization and brand building tools</span>
                                    </li>
                                </ul>

                                <div className="mb-6 p-4 bg-amber-50 border border-amber-200">
                                    <div className="text-sm text-gray-900 font-medium">Average member results:</div>
                                    <div className="text-gray-700 text-sm mt-1">4-6 speaking engagements per year | 89% success rate</div>
                                </div>

                                <a href="https://app.ensol.ai" className="block">
                                    <CTAButton>
                                        Start Building Your Brand <ArrowRight className="ml-2 h-5 w-5"/>
                                    </CTAButton>
                                </a>
                            </div>

                            <div className="bg-gray-900 p-10 text-white relative">
                                <div className="absolute top-6 right-6 bg-amber-500 text-white px-4 py-1 text-sm font-medium">
                                    Premium
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-serif mb-4 text-white">Elite Plan</h3>
                                    <div className="flex items-baseline">
                                        <span className="text-5xl font-serif text-white">$199</span>
                                        <span className="text-gray-400 ml-2">/month</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-white font-medium">Everything in Essential Plan</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-300">Monthly 1:1 30min EB1A/O1/EB2NIW consultation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-300">Priority access to high-profile opportunities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-300">Direct law firm introductions and consultations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-300">Comprehensive visa profile building support</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-300">Dedicated account management and support</span>
                                    </li>
                                </ul>

                                <div className="mb-6 p-4 bg-gray-800 border border-gray-700">
                                    <div className="text-sm text-white font-medium">Elite member benefits:</div>
                                    <div className="text-gray-400 text-sm mt-1">Personal guidance | Enhanced visa support</div>
                                </div>

                                <button
                                    onClick={() => document.getElementById('waitlist-section').scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-4 px-8 transition-all duration-200 flex items-center justify-center">
                                    Join Elite Waitlist <ArrowRight className="ml-2 h-5 w-5"/>
                                </button>
                                <p className="mt-4 text-sm text-gray-400 text-center">Limited to 100 members globally</p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-gray-900 font-medium mb-4">Average ROI: 300% in first year</p>
                            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
                                <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-2 text-amber-600"/>
                                    Cancel anytime
                                </div>
                                <div className="flex items-center">
                                    <Shield className="h-4 w-4 mr-2 text-amber-600"/>
                                    Secure payments
                                </div>
                                <div className="flex items-center">
                                    <Trophy className="h-4 w-4 mr-2 text-amber-600"/>
                                    Proven results
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="waitlist-section" className="text-center mb-24 pt-8">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">Join the Elite Plan Waitlist</h2>
                        <div className="max-w-md mx-auto bg-white p-8 border-2 border-gray-200">
                            <p className="text-gray-600 mb-6">Be among the first to access our exclusive Elite Plan features. Enter your details below to join the waitlist.</p>
                            <form
                                name="waitlist"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                className="space-y-4"
                            >
                                <input type="hidden" name="form-name" value="waitlist" />
                                <div style={{display: 'none'}}>
                                    <input name="bot-field" />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full p-3 bg-white border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-gray-900"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full p-3 bg-white border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-gray-900"
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 transition-colors duration-200 font-semibold">
                                    Join Waitlist
                                </button>
                                <p className="text-xs text-gray-500 mt-2">We'll notify you when Elite Plan spots become available.</p>
                            </form>
                        </div>
                    </section>

                    <section className="mb-24">
                        <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center text-gray-900">Coming Soon</h2>
                        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                            <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-all duration-200">
                                <Mic className="h-6 w-6 text-amber-600 mb-4"/>
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Podcast & Media</h3>
                                <p className="text-gray-600 text-sm">Expand your reach with podcast appearances and media features.</p>
                            </div>
                            <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-all duration-200">
                                <Users className="h-6 w-6 text-gray-900 mb-4"/>
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Collaboration</h3>
                                <p className="text-gray-600 text-sm">Connect with peers to uncover more thought leadership opportunities.</p>
                            </div>
                            <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-all duration-200">
                                <PenTool className="h-6 w-6 text-amber-600 mb-4"/>
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Content Creation</h3>
                                <p className="text-gray-600 text-sm">Create and share blogs to boost your professional profile.</p>
                            </div>
                            <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-all duration-200">
                                <BarChart2 className="h-6 w-6 text-gray-900 mb-4"/>
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Analytics Dashboard</h3>
                                <p className="text-gray-600 text-sm">Monitor your progress and success with comprehensive analytics.</p>
                            </div>
                            <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-all duration-200">
                                <Share2 className="h-6 w-6 text-amber-600 mb-4"/>
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Social Integration</h3>
                                <p className="text-gray-600 text-sm">Share your thought leadership across social platforms effortlessly.</p>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA Section */}
                    <section className="text-center mb-16 bg-gray-900 py-20 px-8 -mx-4">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
                            Ready to Become a Global Thought Leader?
                        </h2>
                        <p className="text-xl mb-10 text-gray-400 max-w-3xl mx-auto font-light">
                            Join <span className="text-amber-500 font-medium">200+ professionals</span> from Netflix, Google, Meta, and Apple who are building their personal brands and advancing their immigration goals with EnsolAI.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                            <a href="https://app.ensol.ai" className="inline-block">
                                <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-4 px-8 transition-all duration-200 flex items-center">
                                    Transform Your Career Today <ArrowRight className="ml-2 h-5 w-5"/>
                                </button>
                            </a>
                            <div className="text-gray-400 text-sm font-medium">
                                Free 7-day trial
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm text-gray-400">
                            <div className="flex items-center justify-center">
                                <Target className="h-4 w-4 mr-2 text-amber-500"/>
                                Start speaking within 30 days
                            </div>
                            <div className="flex items-center justify-center">
                                <TrendingUp className="h-4 w-4 mr-2 text-amber-500"/>
                                300% average career ROI
                            </div>
                            <div className="flex items-center justify-center">
                                <Star className="h-4 w-4 mr-2 text-amber-500"/>
                                4.8/5 satisfaction rating
                            </div>
                        </div>
                    </section>
                </main>

            <Footer/>
        </div>
    );
};

export default Index;
