import React, {useState} from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is EnsolAI?",
            answer: "EnsolAI is a platform designed to help professionals elevate their careers by providing access to speaking opportunities at conferences, judging positions at hackathons, and tools to streamline the application process. Whether you're looking to share your expertise on a global stage or take your thought leadership to the next level, EnsolAI connects you to the right opportunities."
        },
        {
            question: "How does EnsolAI help me become a thought leader?",
            answer: "EnsolAI curates opportunities for you to speak at conferences, judge hackathons, and contribute to media like podcasts. By leveraging these high-impact engagements, you can enhance your visibility in your field and build a reputation as an expert in your area of expertise."
        },
        {
            question: "What are the main features of EnsolAI?",
            answer: (
                <div>
                    EnsolAI offers a variety of features to help professionals grow their influence:
                    <ul style={{listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px'}}>
                        <li>Find speaking engagements at top conferences.</li>
                        <li>Discover hackathons looking for judges and apply with just one click.</li>
                        <li>Create AI-powered abstracts to streamline the application process.</li>
                        <li>Access judging positions, media opportunities, and advanced analytics (Pro Plan).</li>
                    </ul>
                </div>
            )
        },
        {
            question: "How does the one-click apply for hackathons work?",
            answer: "The one-click apply feature simplifies the process of applying for judging positions at hackathons. Once you find an event you're interested in, you can apply with a single click, saving you time and effort. Your profile and expertise are automatically matched to the opportunities that fit best."
        },
        {
            question: "How do AI-powered abstracts work?",
            answer: "Our AI-powered tool helps you generate professional abstracts for speaking engagements based on your expertise and the event requirements. This feature ensures that your application is polished and compelling, improving your chances of being selected to speak."
        },
        {
            question: "What is the difference between the Basic and Pro Plans?",
            answer: "The Basic Plan gives you access to all essential features, including speaking opportunities, hackathon judging positions, and AI-powered abstracts. The Pro Plan, coming soon, will offer additional benefits such as Journal review opportunities, media and podcast engagements, and advanced analytics to track your thought leadership growth."
        },
        {
            question: "How do I know which conferences and hackathons are relevant to me?",
            answer: "EnsolAI tailors its recommendations based on your professional profile and interests. On Conferences page, you will see Recommended Conferences at the top. These are based on your profile. You'll see opportunities that match your expertise and industry, ensuring you apply for the events that are most relevant to you."
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes! EnsolAI offers a limited free trial of 7 days for users to explore the platform before committing to a subscription. You can experience some of our core features and decide if it's the right fit for your professional growth."
        },
        {
            question: "How can I get early access to the Pro Plan?",
            answer: "You can join the waitlist for the Pro Plan soon. By joining the waitlist, you'll be among the first to receive access when the Pro Plan is launched, giving you a head start on unlocking new features like journal review opportunities and advanced analytics."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(to bottom right, #1a202c, #2d3748)',
            color: '#ffffff',
            fontFamily: 'Arial, sans-serif'
        }}>
            <main style={{
                flexGrow: 1,
                maxWidth: '800px',
                margin: '0 auto',
                padding: '48px 20px'
            }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '2rem'
                }}>
                    Frequently Asked Questions
                </h1>
                <div style={{
                    backgroundColor: 'rgba(45, 55, 72, 0.7)',
                    borderRadius: '8px',
                    padding: '20px'
                }}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{marginBottom: '1rem'}}>
                            <button
                                onClick={() => toggleAccordion(index)}
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    padding: '1rem',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    color: '#ffffff',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                    cursor: 'pointer',
                                    transition: 'color 0.3s ease'
                                }}
                                aria-expanded={openIndex === index}
                            >
                                {faq.question}
                                <span style={{
                                    float: 'right',
                                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                                    transition: 'transform 0.3s ease'
                                }}>
                  ▼
                </span>
                            </button>
                            {openIndex === index && (
                                <div style={{
                                    padding: '1rem',
                                    fontSize: '1rem',
                                    color: '#e2e8f0',
                                    animation: 'fadeIn 0.5s ease-in-out'
                                }}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default FAQ;