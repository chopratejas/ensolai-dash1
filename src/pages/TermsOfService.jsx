import React, {useState} from 'react';

const TermsOfService = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing or using our Service, you confirm that you accept these Terms and agree to comply with them. If you are using the Service on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms."
        },
        {
            title: "2. Changes to Terms",
            content: "We may update these Terms from time to time to reflect changes in our services or for other operational, legal, or regulatory reasons. When we make updates, we will notify you by updating the \"Last updated\" date above and providing a notification on our website. Continued use of the Service after any changes constitutes your acceptance of the revised Terms."
        },
        {
            title: "3. Eligibility",
            content: "To use the Service, you must be at least 18 years old, or if you are under 18, you must have your parent or guardian's consent to these Terms. By using the Service, you represent and warrant that you meet the eligibility requirements."
        },
        {
            title: "4. Account Registration",
            content: "In order to access certain features of the Service, you may be required to register for an account. You agree to provide accurate, complete, and updated information when registering for an account. You are responsible for safeguarding your account credentials and are responsible for all activities that occur under your account."
        },
        {
            title: "5. Use of the Service",
            content: (
                <>
                    <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You
                        agree not to use the Service:</p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px'}}>
                        <li>For any unlawful or fraudulent purpose;</li>
                        <li>To impersonate any person or entity, or falsely state or misrepresent your affiliation with
                            a person or entity;
                        </li>
                        <li>To interfere with or disrupt the operation of the Service;</li>
                        <li>To access the Service in a way that violates applicable laws or regulations;</li>
                        <li>To attempt to gain unauthorized access to any portion of the Service or any other systems or
                            networks connected to the Service.
                        </li>
                    </ul>
                </>
            )
        },
        {
            title: "6. Fees and Payments",
            content: "Certain features of the Service may require you to pay fees. All fees are quoted in USD and are non-refundable unless otherwise stated. You agree to pay the applicable fees for the services you select, and authorize us to charge your payment method. We may change our fees at any time by posting new prices on our website."
        },
        {
            title: "7. Intellectual Property",
            content: "All content and materials available through the Service, including but not limited to text, graphics, logos, and software, are the property of EnsolAI or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works based on any content from the Service without our prior written consent."
        },
        {
            title: "8. User Content",
            content: "You are responsible for any content you upload, submit, or post on the Service (\"User Content\"). By uploading or submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, display, and distribute your content in connection with the operation of the Service. You represent and warrant that you have the necessary rights to grant us this license."
        },
        {
            title: "9. Termination",
            content: "We may suspend or terminate your access to the Service at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users of the Service, us, or third parties, or for any other reason at our sole discretion."
        },
        {
            title: "10. Limitation of Liability",
            content: "To the fullest extent permitted by law, EnsolAI and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, arising from or related to your use of or inability to use the Service."
        },
        {
            title: "11. Disclaimer of Warranties",
            content: "The Service is provided on an \"as is\" and \"as available\" basis without any warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or secure. You use the Service at your own risk."
        },
        {
            title: "12. Indemnification",
            content: "You agree to indemnify, defend, and hold harmless EnsolAI, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or related to your violation of these Terms or your use of the Service."
        },
        {
            title: "13. Governing Law and Dispute Resolution",
            content: "These Terms are governed by and construed in accordance with the laws of [State/Country], without regard to its conflict of law provisions. Any disputes arising from or related to these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, and the arbitration shall be conducted in [City, State]."
        },
        {
            title: "14. Miscellaneous",
            content: (
                <ul style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                    <li><strong>Entire Agreement:</strong> These Terms, along with our Privacy Policy, constitute the
                        entire agreement between you and EnsolAI regarding the use of the Service.
                    </li>
                    <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable or
                        invalid, the remaining provisions will remain in full force and effect.
                    </li>
                    <li><strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms will not
                        be considered a waiver of those rights.
                    </li>
                </ul>
            )
        },
        {
            title: "15. Contact Us",
            content: "If you have any questions or concerns regarding these Terms, please contact us at goeb1app@gmail.com"
        }
    ];

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
                    Terms of Service
                </h1>
                <p style={{marginBottom: '1rem'}}>Last updated: {new Date().toLocaleDateString()}</p>
                <p style={{marginBottom: '2rem'}}>
                    These Terms of Service ("Terms") govern your access to and use of the EnsolAI website and services
                    (collectively, the "Service"). By using the Service, you agree to be bound by these Terms. If you do
                    not agree to these Terms, do not use the Service.
                </p>
                <div style={{
                    backgroundColor: 'rgba(45, 55, 72, 0.7)',
                    borderRadius: '8px',
                    padding: '20px'
                }}>
                    {sections.map((section, index) => (
                        <div key={index} style={{marginBottom: '1rem'}}>
                            <button
                                onClick={() => toggleSection(index)}
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
                                aria-expanded={openSection === index}
                            >
                                {section.title}
                                <span style={{
                                    float: 'right',
                                    transform: openSection === index ? 'rotate(180deg)' : 'rotate(0)',
                                    transition: 'transform 0.3s ease'
                                }}>
                  ▼
                </span>
                            </button>
                            {openSection === index && (
                                <div style={{
                                    padding: '1rem',
                                    fontSize: '1rem',
                                    color: '#e2e8f0',
                                    animation: 'fadeIn 0.5s ease-in-out'
                                }}>
                                    {section.content}
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

export default TermsOfService;