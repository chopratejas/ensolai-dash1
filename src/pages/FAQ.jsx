import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header/>
            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif mb-12 text-gray-900">
                        Frequently Asked Questions
                    </h1>

                    <div className="space-y-6">
                        {/* FAQ Item */}
                        <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">>
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                What is EnsolAI?
                            </h2>
                            <p className="text-gray-600">
                                EnsolAI is a platform designed to help professionals elevate their careers by providing
                                access to speaking opportunities at conferences, judging positions at hackathons, and tools to
                                streamline the application process.
                            </p>
                        </div>

                        {/* FAQ Item */}
                        <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">>
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                How does EnsolAI help me become a thought leader?
                            </h2>
                            <p className="text-gray-600">
                                EnsolAI curates opportunities for you to speak at conferences, judge hackathons, and
                                contribute to media
                                like podcasts. By leveraging these high-impact engagements, you can enhance your visibility
                                in your field
                                and build a reputation as an expert in your area of expertise.
                            </p>
                        </div>

                        {/* FAQ Item */}
                        <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                What are the main features of EnsolAI?
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Find speaking engagements at top conferences.</li>
                                <li>Discover hackathons looking for judges and apply with just one click.</li>
                                <li>Create AI-powered abstracts to streamline the application process.</li>
                                <li>Access judging positions, media opportunities, and advanced analytics (Pro Plan).</li>
                            </ul>
                        </div>

                        {/* FAQ Item */}
                        <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                How does the one-click apply for hackathons work?
                            </h2>
                            <p className="text-gray-600">
                                The one-click apply feature simplifies the process of applying for judging positions at
                                hackathons. Once
                                you find an event you're interested in, you can apply with a single click, saving you time
                                and effort.
                                Your profile and expertise are automatically matched to the opportunities that fit best.
                            </p>
                        </div>

                        {/* FAQ Item */}
                        <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                How do AI-powered abstracts work?
                            </h2>
                            <p className="text-gray-600">
                                Our AI-powered tool helps you generate professional abstracts for speaking engagements based
                                on your
                                expertise and the event requirements. This feature ensures that your application is polished
                                and
                                compelling, improving your chances of being selected to speak.
                            </p>
                        </div>

                        {/* FAQ Item */}
                        <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                What is the difference between the Basic and Pro Plans?
                            </h2>
                            <p className="text-gray-600">
                                The Basic Plan gives you access to all essential features, including speaking opportunities,
                                hackathon judging positions, and AI-powered abstracts. The Pro Plan offers additional benefits
                                including monthly 1:1 30-minute sessions to guide you on your EB1A/O1/EB2NIW path, exclusive
                                advanced opportunities, group sessions on specific topics, and specialized workshops for niche
                                identification and journal reviews.
                            </p>
                        </div>

                        {/* FAQ Item */}
                        <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                How do I know which conferences and hackathons are relevant to me?
                            </h2>
                            <p className="text-gray-600">
                                EnsolAI tailors its recommendations based on your professional profile and interests. You'll
                                see
                                opportunities that match your expertise and industry, ensuring you apply for the events that
                                are most
                                relevant to you.
                            </p>
                        </div>

                        {/* FAQ Item */}
                        <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                Is there a free trial available?
                            </h2>
                            <p className="text-gray-600">
                                Yes! EnsolAI offers a limited free trial of 7 days for users to explore the platform before
                                committing to a
                                subscription. You can experience some of our core features and decide if it's the right fit
                                for your
                                professional growth.
                            </p>
                        </div>

                        {/* FAQ Item */}
                        <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                Do I need to provide credit card information during sign-up?
                            </h2>
                            <p className="text-gray-600">
                                Yes, credit card information is required during the sign-up process to activate your 7-day free trial. 
                                This ensures a seamless transition to your chosen subscription plan after the trial period ends. 
                                You will not be charged during the trial period, and you can cancel anytime before the trial expires.
                            </p>
                        </div>

                        {/* FAQ Item */}
                        <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                How can I join the Elite Plan?
                            </h2>
                            <p className="text-gray-600">
                                Due to high demand, our Elite Plan currently has limited availability. You can join the waitlist on our homepage.
                                Elite Plan members receive monthly 1:1 sessions for EB1A/O1/EB2NIW guidance, exclusive opportunities not available
                                in the Essential Plan, and access to group sessions on topics like niche identification and journal reviews.
                                We'll notify you as soon as a spot becomes available.
                            </p>
                        </div>

                        {/* FAQ Item */}
                        <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                What happens if I accidentally subscribe?
                            </h2>
                            <p className="text-gray-600">
                                Due to the immediate access nature of our service, we cannot provide refunds for subscription payments, 
                                including accidental subscriptions. This policy applies to all monthly subscriptions - no refunds are 
                                available once you have subscribed for the month. Please review your subscription choice carefully 
                                before confirming. You can cancel your subscription at any time to prevent future charges.
                            </p>
                        </div>

                        {/* FAQ Item */}
                        <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                Are the opportunities guaranteed?
                            </h2>
                            <p className="text-gray-600">
                                EnsolAI is an opportunity aggregation platform. While we strive to provide high-quality opportunities, 
                                we cannot guarantee acceptance, participation, or outcomes. We recommend thoroughly reviewing each 
                                opportunity and conducting your own due diligence before applying.
                            </p>
                        </div>

                        {/* FAQ Item */}
                        <div className="bg-white p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                What happens when I cancel my subscription?
                            </h2>
                            <p className="text-gray-600">
                                When you cancel your subscription, you'll continue to have access to premium features until the end of 
                                your current billing period. After that, your account will revert to the basic plan. No partial refunds 
                                are provided for unused time.
                            </p>
                        </div>

                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default FAQ;