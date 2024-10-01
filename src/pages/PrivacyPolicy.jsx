import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <Header/>
            <main className="flex-grow container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
                <p className="mb-4">Last updated: [Date]</p>
                <p className="mb-4">
                    At EnsolAI ("we," "us," or "our"), part of GoEB1 L.L.C., we are committed to protecting your
                    privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information
                    when you visit our website or use our services. By accessing or using our services, you agree to
                    this Privacy Policy.
                </p>

                <h2 className="text-3xl font-bold mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                    We may collect various types of information in order to provide you with our services. The
                    information we collect includes:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li><strong>Personal Information:</strong> Name, email address, contact information, billing
                        information, and other identifiers that you provide when you create an account, subscribe to our
                        service, or interact with us.
                    </li>
                    <li><strong>Usage Data:</strong> Information about your activity on our website, including IP
                        addresses, browser type, device identifiers, and interaction with the website.
                    </li>
                    <li><strong>Communication Data:</strong> Information contained in your communications with us,
                        including support requests, emails, and other inquiries.
                    </li>
                    <li><strong>Third-Party Data:</strong> We may receive information from third-party services if you
                        choose to link, connect, or log in through such services.
                    </li>
                </ul>

                <h2 className="text-3xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                    We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>To provide and maintain our services, including processing payments and managing your account.
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

                <h2 className="text-3xl font-bold mb-4">3. How We Share Your Information</h2>
                <p className="mb-4">
                    We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li><strong>With Service Providers:</strong> We may share your information with trusted third-party
                        service providers who help us deliver our services, such as payment processors, hosting
                        providers, and customer support platforms. These third parties are bound by confidentiality
                        agreements.
                    </li>
                    <li><strong>With Business Partners:</strong> We may partner with other companies to offer additional
                        services or features. These partners may have access to your information if you choose to use
                        these services.
                    </li>
                    <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law or in
                        response to valid requests by public authorities (e.g., a court or government agency).
                    </li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a
                        portion of our assets, your information may be transferred as part of that transaction.
                    </li>
                    <li><strong>With Your Consent:</strong> We may share your information for any other purpose
                        disclosed to you and with your explicit consent.
                    </li>
                </ul>

                <h2 className="text-3xl font-bold mb-4">4. Data Security</h2>
                <p className="mb-4">
                    We take the security of your personal information seriously and implement industry-standard security
                    measures to protect it from unauthorized access, disclosure, alteration, or destruction. These
                    measures include:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Encryption of sensitive information, such as payment details.</li>
                    <li>Regular security audits and updates to protect our infrastructure.</li>
                    <li>Access controls to limit who can access your information.</li>
                </ul>
                <p className="mb-4">
                    However, no method of transmission over the internet or method of electronic storage is 100% secure.
                    While we strive to protect your personal information, we cannot guarantee its absolute security.
                </p>

                <h2 className="text-3xl font-bold mb-4">5. Your Rights and Choices</h2>
                <p className="mb-4">
                    You have certain rights regarding your personal information. These include:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li><strong>Access and Correction:</strong> You may request access to your personal information and
                        correct any inaccuracies.
                    </li>
                    <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to
                        certain legal exceptions.
                    </li>
                    <li><strong>Opt-Out:</strong> You can opt out of receiving promotional emails from us at any time by
                        following the instructions in the emails or contacting us directly.
                    </li>
                    <li><strong>Portability:</strong> You can request a copy of your data in a commonly used format.
                    </li>
                </ul>
                <p className="mb-4">
                    To exercise these rights, please contact us at [email address]. We may need to verify your identity
                    before processing your request.
                </p>

                <h2 className="text-3xl font-bold mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                    We use cookies and similar tracking technologies to collect information about your browsing behavior
                    on our site. This helps us improve your experience and customize the services we offer. You can
                    manage your cookie preferences through your browser settings or by using cookie management tools on
                    our site.
                </p>

                <h2 className="text-3xl font-bold mb-4">7. Children's Privacy</h2>
                <p className="mb-4">
                    EnsolAI is not intended for use by children under the age of 13. We do not knowingly collect or
                    solicit personal information from children under 13. If we learn that we have collected information
                    from a child under 13 without verification of parental consent, we will delete that information as
                    quickly as possible. If you believe that we may have any information from or about a child under 13,
                    please contact us at [email address].
                </p>

                <h2 className="text-3xl font-bold mb-4">8. Data Retention</h2>
                <p className="mb-4">
                    We retain your personal information for as long as necessary to provide our services and fulfill the
                    purposes outlined in this Privacy Policy. We may also retain and use your information to comply with
                    legal obligations, resolve disputes, and enforce our agreements.
                </p>

                <h2 className="text-3xl font-bold mb-4">9. Changes to this Privacy Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time in response to changing legal, technical, or
                    business developments. When we update the policy, we will take appropriate measures to inform you,
                    such as posting a notice on our website or sending you a notification. Please review this policy
                    periodically for any updates.
                </p>

                <h2 className="text-3xl font-bold mb-4">10. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns about this Privacy Policy, our practices, or your personal
                    information, please contact us at goeb1app@gmail.com.
                </p>

            </main>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;
