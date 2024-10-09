import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import {ArrowRight, Mic, Award, FileText, MousePointer, Zap, Users, PenTool, BarChart2, Share2} from 'lucide-react';

const Index = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <Header/>
            <main className="flex-grow container mx-auto px-4 py-12">
                <section className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Become a Thought Leader
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-300">
                        Discover opportunities to speak at conferences, or judge hackathons.
                    </p>
                    <a href="https://app.ensol.ai" className="inline-block">
                        <CTAButton>
                            Get Started <ArrowRight className="ml-2 h-5 w-5"/>
                        </CTAButton>
                    </a>

                </section>

                <section className="grid md:grid-cols-2 gap-12 mb-16">
                    <div
                        className="bg-gray-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <Mic className="h-12 w-12 text-blue-400 mb-4"/>
                        <h2 className="text-2xl font-semibold mb-4">Speaking Opportunities</h2>
                        <p className="text-gray-300">Find and apply to conferences seeking speakers in your area of
                            expertise.</p>
                    </div>
                    <div
                        className="bg-gray-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <Award className="h-12 w-12 text-purple-400 mb-4"/>
                        <h2 className="text-2xl font-semibold mb-4">Judging Positions</h2>
                        <p className="text-gray-300">Discover hackathons looking for experienced judges with one-click
                            apply.</p>
                    </div>
                    <div
                        className="bg-gray-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <FileText className="h-12 w-12 text-green-400 mb-4"/>
                        <h2 className="text-2xl font-semibold mb-4">Automatic Abstracts</h2>
                        <p className="text-gray-300">Generate professional abstracts for your talks with our AI-powered
                            tool.</p>
                    </div>
                    <div
                        className="bg-gray-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <MousePointer className="h-12 w-12 text-yellow-400 mb-4"/>
                        <h2 className="text-2xl font-semibold mb-4">One-Click Apply for Hackathons</h2>
                        <p className="text-gray-300">Streamline your application process for judging hackathons with our
                            efficient one-click system.</p>
                    </div>
                </section>

                <section className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Pricing</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
                            <p className="text-4xl font-bold mb-4">$49<span className="text-xl">/month</span></p>
                            <ul className="text-left mb-6">
                                <li className="flex items-center mb-2"><Zap className="h-5 w-5 text-blue-400 mr-2"/> All
                                    current features
                                </li>
                                <li className="flex items-center mb-2"><Zap
                                    className="h-5 w-5 text-blue-400 mr-2"/> Unlimited opportunities
                                </li>
                                <li className="flex items-center"><Zap
                                    className="h-5 w-5 text-blue-400 mr-2"/> AI-powered abstracts
                                </li>
                            </ul>

                            <a href="https://app.ensol.ai" className="inline-block">
                                <CTAButton>
                                    Subscribe Now <ArrowRight className="ml-2 h-5 w-5"/>
                                </CTAButton>
                            </a>
                            <p className="mt-4 text-sm text-gray-400">First 50 users get 10% off for first month with
                                coupon code: WELCOME10</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-8 shadow-lg border-2 border-purple-500">
                            <h3 className="text-2xl font-semibold mb-4">Pro Plan (Coming Soon)</h3>
                            <p className="text-4xl font-bold mb-4">$99<span className="text-xl">/month</span></p>
                            <ul className="text-left mb-6">
                                <li className="flex items-center mb-2"><Zap
                                    className="h-5 w-5 text-purple-400 mr-2"/> All Basic Plan features
                                </li>
                                <li className="flex items-center mb-2"><Zap
                                    className="h-5 w-5 text-purple-400 mr-2"/> Journal Review opportunities
                                </li>
                                <li className="flex items-center mb-2"><Zap
                                    className="h-5 w-5 text-purple-400 mr-2"/> Podcast and Media opportunities
                                </li>
                                <li className="flex items-center"><Zap
                                    className="h-5 w-5 text-purple-400 mr-2"/> Advanced analytics and reporting
                                </li>
                            </ul>
                            <button
                                className="inline-block bg-gray-600 cursor-not-allowed text-white font-bold py-2 px-4 rounded"
                                disabled>
                                Coming Soon
                            </button>
                            <p className="mt-4 text-sm text-gray-400">Be the first to access enhanced features</p>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Coming Soon</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <Mic className="h-8 w-8 text-blue-400 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Podcast & Media Opportunities</h3>
                            <p className="text-gray-300">Expand your reach with podcast appearances and media
                                features.</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <Users className="h-8 w-8 text-purple-400 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">User Collaboration</h3>
                            <p className="text-gray-300">Connect with peers to uncover more thought leadership
                                opportunities.</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <PenTool className="h-8 w-8 text-green-400 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
                            <p className="text-gray-300">Create and share blogs to boost your professional profile.</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <BarChart2 className="h-8 w-8 text-yellow-400 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Tracking Dashboard</h3>
                            <p className="text-gray-300">Monitor your progress and success with comprehensive
                                analytics.</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <Share2 className="h-8 w-8 text-blue-400 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Social Media Integration</h3>
                            <p className="text-gray-300">Share your thought leadership across social platforms
                                effortlessly.</p>
                        </div>
                    </div>
                </section>

                <section className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Professional Influence</h2>
                    <p className="text-xl mb-8 text-gray-300">
                        Join thousands of professionals who've transformed their careers through thought leadership.
                    </p>
                    <a href="https://app.ensol.ai" className="inline-block">
                        <CTAButton>
                            Start Your Journey <ArrowRight className="ml-2 h-5 w-5"/>
                        </CTAButton>
                    </a>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Index;