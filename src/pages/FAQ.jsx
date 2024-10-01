import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <Header/>
            <main className="flex-grow container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
                <div className="space-y-6">

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">What is EnsolAI?</h2>
                        <p>
                            EnsolAI is a platform designed to help professionals elevate their careers by providing
                            access to speaking opportunities at conferences, judging positions at hackathons, and tools
                            to streamline the application process. Whether you're looking to share your expertise on a
                            global stage or take your thought leadership to the next level, EnsolAI connects you to the
                            right opportunities.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">How does EnsolAI help me become a thought
                            leader?</h2>
                        <p>
                            EnsolAI curates opportunities for you to speak at conferences, judge hackathons, and
                            contribute to media like podcasts. By leveraging these high-impact engagements, you can
                            enhance your visibility in your field and build a reputation as an expert in your area of
                            expertise.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">What are the main features of EnsolAI?</h2>
                        <p>
                            EnsolAI offers a variety of features to help professionals grow their influence:
                            <ul className="list-disc pl-5">
                                <li>Find speaking engagements at top conferences.</li>
                                <li>Discover hackathons looking for judges and apply with just one click.</li>
                                <li>Create AI-powered abstracts to streamline the application process.</li>
                                <li>Access judging positions, media opportunities, and advanced analytics (Pro Plan).
                                </li>
                            </ul>
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">How does the one-click apply for hackathons
                            work?</h2>
                        <p>
                            The one-click apply feature simplifies the process of applying for judging positions at
                            hackathons. Once you find an event you're interested in, you can apply with a single click,
                            saving you time and effort. Your profile and expertise are automatically matched to the
                            opportunities that fit best.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">How do AI-powered abstracts work?</h2>
                        <p>
                            Our AI-powered tool helps you generate professional abstracts for speaking engagements based
                            on your expertise and the event requirements. This feature ensures that your application is
                            polished and compelling, improving your chances of being selected to speak.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">What is the difference between the Basic and Pro
                            Plans?</h2>
                        <p>
                            The Basic Plan gives you access to all essential features, including speaking opportunities,
                            hackathon judging positions, and AI-powered abstracts. The Pro Plan, coming soon, will offer
                            additional benefits such as journal review opportunities, media and podcast engagements, and
                            advanced analytics to track your thought leadership growth.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">How do I know which conferences and hackathons are
                            relevant to me?</h2>
                        <p>
                            EnsolAI tailors its recommendations based on your professional profile and interests. You'll
                            see opportunities that match your expertise and industry, ensuring you apply for the events
                            that are most relevant to you.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Is there a free trial available?</h2>
                        <p>
                            Yes! EnsolAI offers a limited free trial for users to explore the platform before committing
                            to a subscription. You can experience some of our core features and decide if it’s the right
                            fit for your professional growth.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">How can I get early access to the Pro Plan?</h2>
                        <p>
                            You can join the waitlist for the Pro Plan directly on the website. By joining the waitlist,
                            you’ll be among the first to receive access when the Pro Plan is launched, giving you a head
                            start on unlocking new features like journal review opportunities and advanced analytics.
                        </p>
                    </div>

                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default FAQ;
