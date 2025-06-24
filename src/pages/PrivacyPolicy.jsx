import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-gray-100">
            <Header/>
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-gray-900">
                        Privacy Policy
                    </h1>
                    <p className="text-sm mb-8 text-gray-500">
                        Last updated: September 30, 2024
                    </p>

                    <div className="prose prose-gray max-w-none">
                        <p className="text-gray-600 mb-8">
                            At EnsolAI, we are committed to protecting your privacy. This Privacy Policy outlines how we collect,
                            use, disclose, and safeguard your information.
                        </p>

                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Information We Collect</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                We may collect various types of information to provide you with our services. This includes:
                            </p>
                            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
                                <li><strong className="text-gray-900">Personal Information:</strong> Your name, email address, contact details, billing
                                    information, and other identifiers provided when you create an account or interact with us.
                                </li>
                                <li><strong className="text-gray-900">Usage Data:</strong> Details about your interactions with our website, such as IP
                                    addresses, browser type, and device information.
                                </li>
                                <li><strong className="text-gray-900">Communication Data:</strong> Information from your communications with us, including
                                    emails, support requests, and inquiries.
                                </li>
                                <li><strong className="text-gray-900">Third-Party Data:</strong> Information we receive from third-party services if you
                                    choose to connect or log in through such services.
                                </li>
                            </ul>
                        </section>

                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. How We Use Your Information</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                We use the collected information for various purposes, including:
                            </p>
                            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
                                <li>Providing and maintaining our services, such as processing payments and managing your
                                    account.
                                </li>
                                <li>Personalizing your experience and tailoring our services to your preferences.</li>
                                <li>Improving the functionality and performance of our platform.</li>
                                <li>Communicating with you regarding updates, promotions, and service-related information.</li>
                                <li>Monitoring usage patterns and analyzing trends to improve our services.</li>
                                <li>Complying with legal obligations and enforcing our Terms of Service.</li>
                            </ul>
                        </section>

                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. How We Share Your Information</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                We may share your information under these circumstances:
                            </p>
                            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
                                <li><strong className="text-gray-900">Service Providers:</strong> With trusted third-party providers like payment
                                    processors and hosting services under confidentiality agreements.
                                </li>
                                <li><strong className="text-gray-900">Business Partners:</strong> With partners offering additional services or features
                                    that you choose to use.
                                </li>
                                <li><strong className="text-gray-900">Legal Requirements:</strong> If required by law or in response to legitimate
                                    requests by public authorities.
                                </li>
                                <li><strong className="text-gray-900">Business Transfers:</strong> In the event of mergers, acquisitions, or sales, your
                                    information may be transferred as part of such transactions.
                                </li>
                                <li><strong className="text-gray-900">With Consent:</strong> For any other purpose with your explicit consent.</li>
                            </ul>
                        </section>

                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Data Security</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                We take data security seriously and use industry-standard measures to protect your information.
                                These include:
                            </p>
                            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
                                <li>Encryption of sensitive information, such as payment details.</li>
                                <li>Regular security audits and updates.</li>
                                <li>Access controls to limit who can access your information.</li>
                            </ul>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                However, no method of transmission over the internet or electronic storage is 100% secure. We
                                strive to protect your personal information but cannot guarantee absolute security.
                            </p>
                        </section>

                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Your Rights and Choices</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                You have rights concerning your personal information, including:
                            </p>
                            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
                                <li><strong className="text-gray-900">Access and Correction:</strong> Request access to or corrections of your personal
                                    data.
                                </li>
                                <li><strong className="text-gray-900">Deletion:</strong> Request deletion of your data, subject to certain legal
                                    obligations.
                                </li>
                                <li><strong className="text-gray-900">Opt-Out:</strong> Opt out of promotional communications by following instructions in
                                    those messages or contacting us directly.
                                </li>
                                <li><strong className="text-gray-900">Data Portability:</strong> Request a copy of your data in a commonly used format.
                                </li>
                            </ul>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                To exercise these rights, please contact us at <span
                                className="text-blue-600 font-medium">goeb1app@gmail.com</span>. We may need to verify your identity before
                                processing your request.
                            </p>
                        </section>

                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Cookies and Tracking Technologies</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                We use cookies and similar technologies to enhance your browsing experience. You can manage your
                                cookie preferences through your browser settings.
                            </p>
                        </section>

                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Children's Privacy</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                Our services are not intended for children under 13. We do not knowingly collect personal data
                                from children under 13. If we learn that we have, we will promptly delete such information. If
                                you believe a child under 13 has provided us with personal data, please contact us at <span
                                className="text-blue-600 font-medium">goeb1app@gmail.com</span>.
                            </p>
                        </section>

                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Data Retention</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                We retain personal data as long as necessary to provide our services, fulfill legal obligations,
                                and resolve disputes.
                            </p>
                        </section>

                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Changes to this Privacy Policy</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                We may update this Privacy Policy periodically. Any changes will be communicated through our
                                website or via email notifications. Please review the policy regularly.
                            </p>
                        </section>

                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Contact Us</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                If you have any questions about this Privacy Policy, please reach out to us at <span
                                className="text-blue-600 font-medium">goeb1app@gmail.com</span>.
                            </p>
                        </section>

                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Subscription Data</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                We collect and process payment information through our payment processor. We do not store complete credit card 
                                information on our servers. Subscription status, billing history, and payment methods are stored securely and 
                                used only for billing purposes.
                            </p>
                        </section>

                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. Usage Analytics</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                We collect detailed analytics about how you use our platform, including:
                            </p>
                            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
                                <li>Features accessed and time spent using them</li>
                                <li>Opportunities viewed and applied to</li>
                                <li>Search patterns and preferences</li>
                                <li>Platform performance metrics</li>
                            </ul>
                        </section>

                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">13. Subscription Communications</h2>
                            <p className="mb-6 text-gray-600 leading-relaxed">
                                We send essential subscription-related communications, including billing notices, feature updates, and service 
                                changes. These administrative emails cannot be opted out of while maintaining an active subscription.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;
