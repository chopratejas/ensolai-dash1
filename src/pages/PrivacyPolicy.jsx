import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <Header/>
            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto bg-gray-900 rounded-lg p-10 shadow-lg">
                    <h1 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                        Privacy Policy
                    </h1>
                    <p className="text-center text-lg mb-10 text-gray-300">
                        Last updated: <span className="text-blue-400">30th Sept, 2024</span>
                    </p>

                    <p className="mb-6 text-gray-400 leading-relaxed">
                        At EnsolAI ("we," "us," or "our"), part of GoEB1 L.L.C., we are committed to protecting your
                        privacy.
                        This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when
                        you visit
                        our website or use our services. By accessing or using our services, you agree to this Privacy
                        Policy.
                    </p>

                    {/* Section 1 */}
                    <h2 className="text-4xl font-bold text-blue-400 mb-4">1. Information We Collect</h2>
                    <p className="mb-6 text-gray-400 leading-relaxed">
                        We may collect various types of information to provide you with our services. This includes:
                    </p>
                    <ul className="list-disc pl-5 mb-8 text-gray-300 space-y-2">
                        <li><strong>Personal Information:</strong> Your name, email address, contact details, billing
                            information, and other identifiers provided when you create an account or interact with us.
                        </li>
                        <li><strong>Usage Data:</strong> Details about your interactions with our website, such as IP
                            addresses, browser type, and device information.
                        </li>
                        <li><strong>Communication Data:</strong> Information from your communications with us, including
                            emails, support requests, and inquiries.
                        </li>
                        <li><strong>Third-Party Data:</strong> Information we receive from third-party services if you
                            choose to connect or log in through such services.
                        </li>
                    </ul>

                    {/* Section 2 */}
                    <h2 className="text-4xl font-bold text-blue-400 mb-4">2. How We Use Your Information</h2>
                    <p className="mb-6 text-gray-400 leading-relaxed">
                        We use the collected information for various purposes, including:
                    </p>
                    <ul className="list-disc pl-5 mb-8 text-gray-300 space-y-2">
                        <li>Providing and maintaining our services, such as processing payments and managing your
                            account.
                        </li>
                        <li>Personalizing your experience and tailoring our services to your preferences.</li>
                        <li>Improving the functionality and performance of our platform.</li>
                        <li>Communicating with you regarding updates, promotions, and service-related information.</li>
                        <li>Monitoring usage patterns and analyzing trends to improve our services.</li>
                        <li>Complying with legal obligations and enforcing our Terms of Service.</li>
                    </ul>

                    {/* Section 3 */}
                    <h2 className="text-4xl font-bold text-blue-400 mb-4">3. How We Share Your Information</h2>
                    <p className="mb-6 text-gray-400 leading-relaxed">
                        We may share your information under these circumstances:
                    </p>
                    <ul className="list-disc pl-5 mb-8 text-gray-300 space-y-2">
                        <li><strong>Service Providers:</strong> With trusted third-party providers like payment
                            processors and hosting services under confidentiality agreements.
                        </li>
                        <li><strong>Business Partners:</strong> With partners offering additional services or features
                            that you choose to use.
                        </li>
                        <li><strong>Legal Requirements:</strong> If required by law or in response to legitimate
                            requests by public authorities.
                        </li>
                        <li><strong>Business Transfers:</strong> In the event of mergers, acquisitions, or sales, your
                            information may be transferred as part of such transactions.
                        </li>
                        <li><strong>With Consent:</strong> For any other purpose with your explicit consent.</li>
                    </ul>

                    {/* Section 4 */}
                    <h2 className="text-4xl font-bold text-blue-400 mb-4">4. Data Security</h2>
                    <p className="mb-6 text-gray-400 leading-relaxed">
                        We take data security seriously and use industry-standard measures to protect your information.
                        These include:
                    </p>
                    <ul className="list-disc pl-5 mb-8 text-gray-300 space-y-2">
                        <li>Encryption of sensitive information, such as payment details.</li>
                        <li>Regular security audits and updates.</li>
                        <li>Access controls to limit who can access your information.</li>
                    </ul>
                    <p className="mb-6 text-gray-400 leading-relaxed">
                        However, no method of transmission over the internet or electronic storage is 100% secure. We
                        strive to protect your personal information but cannot guarantee absolute security.
                    </p>

                    {/* Section 5 */}
                    <h2 className="text-4xl font-bold text-blue-400 mb-4">5. Your Rights and Choices</h2>
                    <p className="mb-6 text-gray-400 leading-relaxed">
                        You have rights concerning your personal information, including:
                    </p>
                    <ul className="list-disc pl-5 mb-8 text-gray-300 space-y-2">
                        <li><strong>Access and Correction:</strong> Request access to or corrections of your personal
                            data.
                        </li>
                        <li><strong>Deletion:</strong> Request deletion of your data, subject to certain legal
                            obligations.
                        </li>
                        <li><strong>Opt-Out:</strong> Opt out of promotional communications by following instructions in
                            those messages or contacting us directly.
                        </li>
                        <li><strong>Data Portability:</strong> Request a copy of your data in a commonly used format.
                        </li>
                    </ul>
                    <p className="mb-6 text-gray-400 leading-relaxed">
                        To exercise these rights, please contact us at <span
                        className="text-blue-400">goeb1app@gmail.com</span>. We may need to verify your identity before
                        processing your request.
                    </p>

                    {/* Section 6 */}
                    <h2 className="text-4xl font-bold text-blue-400 mb-4">6. Cookies and Tracking Technologies</h2>
                    <p className="mb-6 text-gray-400 leading-relaxed">
                        We use cookies and similar technologies to enhance your browsing experience. You can manage your
                        cookie preferences through your browser settings.
                    </p>

                    {/* Section 7 */}
                    <h2 className="text-4xl font-bold text-blue-400 mb-4">7. Children's Privacy</h2>
                    <p className="mb-6 text-gray-400 leading-relaxed">
                        Our services are not intended for children under 13. We do not knowingly collect personal data
                        from children under 13. If we learn that we have, we will promptly delete such information. If
                        you believe a child under 13 has provided us with personal data, please contact us at <span
                        className="text-blue-400">goeb1app@gmail.com</span>.
                    </p>

                    {/* Section 8 */}
                    <h2 className="text-4xl font-bold text-blue-400 mb-4">8. Data Retention</h2>
                    <p className="mb-6 text-gray-400 leading-relaxed">
                        We retain personal data as long as necessary to provide our services, fulfill legal obligations,
                        and resolve disputes.
                    </p>

                    {/* Section 9 */}
                    <h2 className="text-4xl font-bold text-blue-400 mb-4">9. Changes to this Privacy Policy</h2>
                    <p className="mb-6 text-gray-400 leading-relaxed">
                        We may update this Privacy Policy periodically. Any changes will be communicated through our
                        website or via email notifications. Please review the policy regularly.
                    </p>

                    {/* Section 10 */}
                    <h2 className="text-4xl font-bold text-blue-400 mb-4">10. Contact Us</h2>
                    <p className="mb-6 text-gray-400 leading-relaxed">
                        If you have any questions about this Privacy Policy, please reach out to us at <span
                        className="text-blue-400">goeb1app@gmail.com</span>.
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;
