import React, {useState} from 'react';

const PrivacyPolicy = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const sections = [
        {
            title: "1. Information We Collect",
            content: (
                <>
                    <p>We may collect various types of information in order to provide you with our services. The
                        information we collect includes:</p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px'}}>
                        <li><strong>Personal Information:</strong> Name, email address, contact information, billing
                            information, and other identifiers that you provide when you create an account, subscribe to
                            our service, or interact with us.
                        </li>
                        <li><strong>Usage Data:</strong> Information about your activity on our website, including IP
                            addresses, browser type, device identifiers, and interaction with the website.
                        </li>
                        <li><strong>Communication Data:</strong> Information contained in your communications with us,
                            including support requests, emails, and other inquiries.
                        </li>
                        <li><strong>Third-Party Data:</strong> We may receive information from third-party services if
                            you choose to link, connect, or log in through such services.
                        </li>
                    </ul>
                </>
            )
        },
        {
            title: "2. How We Use Your Information",
            content: (
                <>
                    <p>We use the information we collect for various purposes, including:</p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px'}}>
                        <li>To provide and maintain our services, including processing payments and managing your
                            account.
                        </li>
                        <li>To personalize your experience and tailor our services to your needs and preferences.</li>
                        <li>To improve the functionality and performance of our platform.</li>
                        <li>To communicate with you, including sending notifications about updates, promotions, and
                            service-related information.
                        </li>
                        <li>To analyze usage patterns, track trends, and monitor performance for internal business
                            purposes.
                        </li>
                        <li>To comply with legal obligations and enforce our Terms of Service.</li>
                    </ul>
                </>
            )
        },
        {
            title: "3. How We Share Your Information",
            content: (
                <>
                    <p>We may share your information in the following circumstances:</p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px'}}>
                        <li><strong>With Service Providers:</strong> We may share your information with trusted
                            third-party service providers who help us deliver our services, such as payment processors,
                            hosting providers, and customer support platforms. These third parties are bound by
                            confidentiality agreements.
                        </li>
                        <li><strong>With Business Partners:</strong> We may partner with other companies to offer
                            additional services or features. These partners may have access to your information if you
                            choose to use these services.
                        </li>
                        <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law or
                            in response to valid requests by public authorities (e.g., a court or government agency).
                        </li>
                        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all
                            or a portion of our assets, your information may be transferred as part of that transaction.
                        </li>
                        <li><strong>With Your Consent:</strong> We may share your information for any other purpose
                            disclosed to you and with your explicit consent.
                        </li>
                    </ul>
                </>
            )
        },
        {
            title: "4. Data Security",
            content: (
                <>
                    <p>We take the security of your personal information seriously and implement industry-standard
                        security measures to protect it from unauthorized access, disclosure, alteration, or
                        destruction. These measures include:</p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px'}}>
                        <li>Encryption of sensitive information, such as payment details.</li>
                        <li>Regular security audits and updates to protect our infrastructure.</li>
                        <li>Access controls to limit who can access your information.</li>
                    </ul>
                    <p style={{marginTop: '10px'}}>However, no method of transmission over the internet or method of
                        electronic storage is 100% secure. While we strive to protect your personal information, we
                        cannot guarantee its absolute security.</p>
                </>
            )
        },
        {
            title: "5. Your Rights and Choices",
            content: (
                <>
                    <p>You have certain rights regarding your personal information. These include:</p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px'}}>
                        <li><strong>Access and Correction:</strong> You may request access to your personal information
                            and correct any inaccuracies.
                        </li>
                        <li><strong>Deletion:</strong> You may request that we delete your personal information, subject
                            to certain legal exceptions.
                        </li>
                        <li><strong>Opt-Out:</strong> You can opt out of receiving promotional emails from us at any
                            time by following the instructions in the emails or contacting us directly.
                        </li>
                        <li><strong>Portability:</strong> You can request a copy of your data in a commonly used format.
                        </li>
                    </ul>
                    <p style={{marginTop: '10px'}}>To exercise these rights, please contact us at goeb1app@gmail.com. We
                        may need to verify your identity before processing your request.</p>
                </>
            )
        },
        {
            title: "6. Cookies and Tracking Technologies",
            content: (
                <p>We use cookies and similar tracking technologies to collect information about your browsing behavior
                    on our site. This helps us improve your experience and customize the services we offer. You can
                    manage your cookie preferences through your browser settings or by using cookie management tools on
                    our site.</p>
            )
        },
        {
            title: "7. Children's Privacy",
            content: (
                <p>EnsolAI is not intended for use by children under the age of 13. We do not knowingly collect or
                    solicit personal information from children under 13. If we learn that we have collected information
                    from a child under 13 without verification of parental consent, we will delete that information as
                    quickly as possible. If you believe that we may have any information from or about a child under 13,
                    please contact us at goeb1app@gmail.com.</p>
            )
        },
        {
            title: "8. Data Retention",
            content: (
                <p>We retain your personal information for as long as necessary to provide our services and fulfill the
                    purposes outlined in this Privacy Policy. We may also retain and use your information to comply with
                    legal obligations, resolve disputes, and enforce our agreements.</p>
            )
        },
        {
            title: "9. Changes to this Privacy Policy",
            content: (
                <p>We may update this Privacy Policy from time to time in response to changing legal, technical, or
                    business developments. When we update the policy, we will take appropriate measures to inform you,
                    such as posting a notice on our website or sending you a notification. Please review this policy
                    periodically for any updates.</p>
            )
        },
        {
            title: "10. Contact Us",
            content: (
                <p>If you have any questions or concerns about this Privacy Policy, our practices, or your personal
                    information, please contact us at goeb1app@gmail.com.</p>
            )
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
                    Privacy Policy
                </h1>
                <p style={{marginBottom: '1rem'}}>Last updated: {new Date().toLocaleDateString()}</p>
                <p style={{marginBottom: '2rem'}}>
                    At EnsolAI ("we," "us," or "our"), part of GoEB1 L.L.C., we are committed to protecting your
                    privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information
                    when you visit our website or use our services. By accessing or using our services, you agree to
                    this Privacy Policy.
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

export default PrivacyPolicy;