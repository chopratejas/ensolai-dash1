import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import StatsCounter from '../components/StatsCounter';
import TestimonialCard from '../components/TestimonialCard';
import {ArrowRight, Mic, Award, FileText, MousePointer, Zap, Users, PenTool, BarChart2, Share2, Star, TrendingUp, Target, Globe, CheckCircle, Shield, Sparkles, Clock, Trophy, Crown} from 'lucide-react';

const Index = () => {

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-gray-100 text-gray-900">
            <Header/>

                <main className="flex-grow container mx-auto px-4 py-8">
                    {/* Enhanced Hero Section */}
                    <section className="text-center mb-20 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl blur-3xl transform -rotate-6"></div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center bg-white border border-gray-200 shadow-sm rounded-full px-6 py-2 mb-8">
                                <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
                                <span className="text-gray-700 text-sm font-medium">Trusted by 200+ Professionals Worldwide</span>
                            </div>
                            
                            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                                Become a Global<br />
                                <span className="relative text-blue-600">
                                    Thought Leader
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-600 rounded-full"></div>
                                </span>
                            </h1>
                            
                            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                The premier platform connecting professionals with speaking opportunities, judging positions, and visa guidance. 
                                <span className="text-blue-600 font-semibold">Build your brand while advancing your immigration goals.</span>
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                                <a href="https://app.ensol.ai" className="inline-block">
                                    <CTAButton>
                                        <Trophy className="mr-2 h-5 w-5" />
                                        Start Your Journey <ArrowRight className="ml-2 h-5 w-5"/>
                                    </CTAButton>
                                </a>
                                <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center">
                                    <Globe className="mr-2 h-5 w-5" />
                                    Watch Success Stories
                                </button>
                            </div>
                            
                            {/* Trust Indicators */}
                            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
                                <div className="flex items-center">
                                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                                    4000+ Opportunities Listed
                                </div>
                                <div className="flex items-center">
                                    <Trophy className="h-4 w-4 mr-2 text-amber-600" />
                                    1000+ Positions Secured
                                </div>
                                <div className="flex items-center">
                                    <Shield className="h-4 w-4 mr-2 text-blue-600" />
                                    Visa Evaluation Included
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="mb-20 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div className="group">
                                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                    <StatsCounter end={200} suffix="+" />
                                </div>
                                <p className="text-gray-900 text-lg font-medium">Active Professionals</p>
                                <p className="text-gray-500 text-sm mt-1">Growing Community</p>
                            </div>
                            <div className="group">
                                <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                                    <StatsCounter end={4000} suffix="+" />
                                </div>
                                <p className="text-gray-900 text-lg font-medium">Opportunities Listed</p>
                                <p className="text-gray-500 text-sm mt-1">Total on Platform</p>
                            </div>
                            <div className="group">
                                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                                    <StatsCounter end={1000} suffix="+" />
                                </div>
                                <p className="text-gray-900 text-lg font-medium">Positions Secured</p>
                                <p className="text-gray-500 text-sm mt-1">Via EnsolAI</p>
                            </div>
                            <div className="group">
                                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                                    <StatsCounter end={25} suffix="%" />
                                </div>
                                <p className="text-gray-900 text-lg font-medium">Success Rate</p>
                                <p className="text-gray-500 text-sm mt-1">Opportunities Secured</p>
                            </div>
                        </div>
                    </section>

                    {/* Enhanced Features Section */}
                    <section className="mb-20">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                Everything You Need to Excel
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                From speaking opportunities to career advancement, we provide the tools and connections to amplify your professional impact.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="group bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                                    <Mic className="h-8 w-8 text-blue-600"/>
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-gray-900">Speaking Opportunities</h3>
                                <p className="text-gray-600 mb-4">Access our curated database of speaking opportunities at conferences worldwide.</p>
                                <div className="text-blue-600 text-sm font-medium">4000+ Listed Total</div>
                            </div>
                            
                            <div className="group bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300">
                                <div className="bg-indigo-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                                    <Award className="h-8 w-8 text-indigo-600"/>
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-gray-900">Judging & Reviews</h3>
                                <p className="text-gray-600 mb-4">Judge hackathons, competitions, and peer-review academic papers with streamlined applications.</p>
                                <div className="text-indigo-600 text-sm font-medium">1000+ Secured</div>
                            </div>
                            
                            <div className="group bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300">
                                <div className="bg-green-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                                    <FileText className="h-8 w-8 text-green-600"/>
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-gray-900">Visa Evaluations</h3>
                                <p className="text-gray-600 mb-4">Get professional visa evaluations and guidance for EB1A, O1, and EB2-NIW applications.</p>
                                <div className="text-green-600 text-sm font-medium">Expert Assessment</div>
                            </div>
                            
                            <div className="group bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-300">
                                <div className="bg-amber-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                                    <Users className="h-8 w-8 text-amber-600"/>
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-gray-900">Law Firm Connections</h3>
                                <p className="text-gray-600 mb-4">Connect with experienced immigration attorneys to build strong petition profiles.</p>
                                <div className="text-amber-600 text-sm font-medium">Vetted Partners</div>
                            </div>
                        </div>
                    </section>

                    {/* Company Logos Section */}
                    <section className="mb-20">
                        <div className="text-center mb-12">
                            <p className="text-gray-400 text-lg mb-8">Trusted by professionals from leading companies worldwide</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-80 transition-opacity">
                                <div className="flex items-center justify-center">
                                    <div className="text-2xl font-bold text-gray-500">Netflix</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="text-2xl font-bold text-gray-500">Google</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="text-2xl font-bold text-gray-500">Meta</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="text-2xl font-bold text-gray-500">Apple</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="text-2xl font-bold text-gray-500">Cisco</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="text-2xl font-bold text-gray-500">Visa</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section className="mb-20">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                Real Success Stories
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

                    {/* Enhanced Pricing Section */}
                    <section className="mb-20">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                Invest in Your Future
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Choose the plan that matches your ambitions. Every dollar invested returns exponentially in career growth and opportunities.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 relative">
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Popular
                                </div>
                                
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">Essential Plan</h3>
                                    <div className="text-5xl font-bold text-blue-600 mb-2">$49</div>
                                    <p className="text-gray-500">per month</p>
                                    <div className="text-sm text-blue-600 mt-2 font-medium">Most Popular Choice</div>
                                </div>
                                
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">Access to 2,500+ monthly speaking opportunities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">1,200+ judging positions and peer-review opportunities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">AI-powered abstract and proposal generation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">Exclusive EnsolAI member-only opportunities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">Profile optimization and brand building tools</span>
                                    </li>
                                </ul>
                                
                                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="text-sm text-blue-900 font-medium">Average member results:</div>
                                    <div className="text-blue-700 text-sm mt-1">4-6 speaking engagements per year • 89% success rate</div>
                                </div>
                                
                                <a href="https://app.ensol.ai" className="block">
                                    <CTAButton>
                                        Start Building Your Brand <ArrowRight className="ml-2 h-5 w-5"/>
                                    </CTAButton>
                                </a>
                            </div>
                            
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200 relative overflow-hidden">
                                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Premium
                                </div>
                                
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">Elite Plan</h3>
                                    <div className="text-5xl font-bold text-indigo-600 mb-2">$199</div>
                                    <p className="text-gray-500">per month</p>
                                    <div className="text-sm text-indigo-600 mt-2 font-medium">For Serious Professionals</div>
                                </div>
                                
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-900"><strong>Everything in Essential Plan</strong></span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">Monthly 1:1 30min EB1A/O1/EB2NIW consultation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">Priority access to high-profile opportunities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">Direct law firm introductions and consultations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">Comprehensive visa profile building support</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span className="text-gray-700">Dedicated account management and support</span>
                                    </li>
                                </ul>
                                
                                <div className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="text-sm text-indigo-900 font-medium">Elite member benefits:</div>
                                    <div className="text-indigo-700 text-sm mt-1">Personal guidance • Enhanced visa support</div>
                                </div>
                                
                                <button
                                    onClick={() => document.getElementById('waitlist-section').scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center">
                                    <Crown className="mr-2 h-5 w-5"/>
                                    Join Elite Waitlist
                                </button>
                                <p className="mt-4 text-sm text-gray-600 text-center">Limited to 100 members globally</p>
                            </div>
                        </div>
                        
                        <div className="text-center mt-12">
                            <p className="text-gray-600 mb-4">📈 Average ROI: 300% in first year</p>
                            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
                                <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-2 text-green-600"/>
                                    Cancel anytime
                                </div>
                                <div className="flex items-center">
                                    <Shield className="h-4 w-4 mr-2 text-blue-600"/>
                                    Secure payments
                                </div>
                                <div className="flex items-center">
                                    <Trophy className="h-4 w-4 mr-2 text-amber-600"/>
                                    Proven results
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="waitlist-section" className="text-center mb-16 pt-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Join the Elite Plan Waitlist</h2>
                        <div className="max-w-md mx-auto bg-white rounded-lg p-8 shadow-lg border border-gray-200">
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
                                        className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 font-semibold">
                                    Join Waitlist
                                </button>
                                <p className="text-xs text-gray-500 mt-2">We'll notify you when Elite Plan spots become available.</p>
                            </form>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">Coming Soon</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                <Mic className="h-8 w-8 text-blue-600 mb-4"/>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Podcast & Media Opportunities</h3>
                                <p className="text-gray-600">Expand your reach with podcast appearances and media
                                    features.</p>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                <Users className="h-8 w-8 text-indigo-600 mb-4"/>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">User Collaboration</h3>
                                <p className="text-gray-600">Connect with peers to uncover more thought leadership
                                    opportunities.</p>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                <PenTool className="h-8 w-8 text-green-600 mb-4"/>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Content Creation</h3>
                                <p className="text-gray-600">Create and share blogs to boost your professional
                                    profile.</p>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                <BarChart2 className="h-8 w-8 text-amber-600 mb-4"/>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Tracking Dashboard</h3>
                                <p className="text-gray-600">Monitor your progress and success with comprehensive
                                    analytics.</p>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                <Share2 className="h-8 w-8 text-blue-600 mb-4"/>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Social Media Integration</h3>
                                <p className="text-gray-600">Share your thought leadership across social platforms
                                    effortlessly.</p>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA Section */}
                    <section className="text-center mb-16 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl"></div>
                        <div className="relative z-10 py-16 px-8">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                Ready to Become a Global Thought Leader?
                            </h2>
                            <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
                                Join <span className="text-blue-600 font-semibold">200+ professionals</span> from Netflix, Google, Meta, and Apple who are building their personal brands and advancing their immigration goals with EnsolAI.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                                <a href="https://app.ensol.ai" className="inline-block">
                                    <CTAButton>
                                        <Trophy className="mr-2 h-5 w-5"/>
                                        Transform Your Career Today <ArrowRight className="ml-2 h-5 w-5"/>
                                    </CTAButton>
                                </a>
                                <div className="text-gray-500 text-sm">
                                    ✨ Free 7-day trial
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm text-gray-500">
                                <div className="flex items-center justify-center">
                                    <Target className="h-4 w-4 mr-2 text-green-600"/>
                                    Start speaking within 30 days
                                </div>
                                <div className="flex items-center justify-center">
                                    <TrendingUp className="h-4 w-4 mr-2 text-blue-600"/>
                                    300% average career ROI
                                </div>
                                <div className="flex items-center justify-center">
                                    <Star className="h-4 w-4 mr-2 text-amber-600"/>
                                    4.8/5 satisfaction rating
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            <Footer/>
        </div>
    );
};

export default Index;
