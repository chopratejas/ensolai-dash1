import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <Header/>
            <main className="flex-grow container mx-auto px-4 py-16">
                <h1 className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Frequently Asked Questions
                </h1>
                <div className="space-y-10 max-w-4xl mx-auto text-gray-300">

                    {/* FAQ Item */}
                    <div
                        className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                        <h2 className="text-3xl font-semibold mb-3 text-blue-400">What is Ensol?</h2>
                        <p>
                            Ensol is a platform designed to help professionals elevate their careers by providing
                            access to
                            speaking opportunities at conferences, judging positions at hackathons, and tools to
                            streamline the
                            application process. Whether you're looking to share your expertise on a global stage or
                            take your
                            thought leadership to the next level, Ensol connects you to the right opportunities.
                        </p>
                    </div>

                    {/* FAQ Item */}
                    <div
                        className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                        <h2 className="text-3xl font-semibold mb-3 text-purple-400">How does Ensol help me become a
                            thought leader?</h2>
                        <p>
                            Ensol curates opportunities for you to speak at conferences, judge hackathons, and
                            contribute to media
                            like podcasts. By leveraging these high-impact engagements, you can enhance your visibility
                            in your field
                            and build a reputation as an expert in your area of expertise.
                        </p>
                    </div>

                    {/* FAQ Item */}
                    <div
                        className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                        <h2 className="text-3xl font-semibold mb-3 text-green-400">What are the main features of
                            Ensol?</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Find speaking engagements at top conferences.</li>
                            <li>Discover hackathons looking for judges and apply with just one click.</li>
                            <li>Create AI-powered abstracts to streamline the application process.</li>
                            <li>Access judging positions, media opportunities, and advanced analytics (Pro Plan).</li>
                        </ul>
                    </div>

                    {/* FAQ Item */}
                    <div
                        className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                        <h2 className="text-3xl font-semibold mb-3 text-yellow-400">How does the one-click apply for
                            hackathons work?</h2>
                        <p>
                            The one-click apply feature simplifies the process of applying for judging positions at
                            hackathons. Once
                            you find an event you're interested in, you can apply with a single click, saving you time
                            and effort.
                            Your profile and expertise are automatically matched to the opportunities that fit best.
                        </p>
                    </div>

                    {/* FAQ Item */}
                    <div
                        className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                        <h2 className="text-3xl font-semibold mb-3 text-red-400">How do AI-powered abstracts work?</h2>
                        <p>
                            Our AI-powered tool helps you generate professional abstracts for speaking engagements based
                            on your
                            expertise and the event requirements. This feature ensures that your application is polished
                            and
                            compelling, improving your chances of being selected to speak.
                        </p>
                    </div>

                    {/* FAQ Item */}
                    <div
                        className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                        <h2 className="text-3xl font-semibold mb-3 text-indigo-400">What is the difference between the
                            Basic and Pro Plans?</h2>
                        <p>
                            The Basic Plan gives you access to all essential features, including speaking opportunities,
                            hackathon
                            judging positions, and AI-powered abstracts. The Pro Plan, coming soon, will offer
                            additional benefits
                            such as journal review opportunities, media and podcast engagements, and advanced analytics
                            to track your
                            thought leadership growth.
                        </p>
                    </div>

                    {/* FAQ Item */}
                    <div
                        className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                        <h2 className="text-3xl font-semibold mb-3 text-pink-400">How do I know which conferences and
                            hackathons are relevant to me?</h2>
                        <p>
                            Ensol tailors its recommendations based on your professional profile and interests. You'll
                            see
                            opportunities that match your expertise and industry, ensuring you apply for the events that
                            are most
                            relevant to you.
                        </p>
                    </div>

                    {/* FAQ Item */}
                    <div
                        className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                        <h2 className="text-3xl font-semibold mb-3 text-orange-400">Is there a free trial
                            available?</h2>
                        <p>
                            Yes! Ensol offers a limited free trial of 7 days for users to explore the platform before
                            committing to a
                            subscription. You can experience some of our core features and decide if it’s the right fit
                            for your
                            professional growth.
                        </p>
                    </div>

                    {/* FAQ Item */}
                    <div
                        className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                        <h2 className="text-3xl font-semibold mb-3 text-teal-400">How can I get early access to the Pro
                            Plan?</h2>
                        <p>
                            You can join the waitlist for the Pro Plan soon. By joining the waitlist, you’ll be among
                            the first to
                            receive access when the Pro Plan is launched, giving you a head start on unlocking new
                            features like
                            journal review opportunities and advanced analytics.
                        </p>
                    </div>

                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default FAQ;
