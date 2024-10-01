import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <Header/>
            <main className="flex-grow container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
                <p className="mb-4">Last updated: [Date]</p>

                <p className="mb-4">
                    These Terms of Service ("Terms") govern your access to and use of the EnsolAI website and services
                    (collectively, the "Service"). By using the Service, you agree to be bound by these Terms. If you do
                    not agree to these Terms, do not use the Service.
                </p>

                <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing or using our Service, you confirm that you accept these Terms and agree to comply with
                    them. If you are using the Service on behalf of an organization, you represent and warrant that you
                    have the authority to bind that organization to these Terms.
                </p>

                <h2 className="text-3xl font-bold mb-4">2. Changes to Terms</h2>
                <p className="mb-4">
                    We may update these Terms from time to time to reflect changes in our services or for other
                    operational, legal, or regulatory reasons. When we make updates, we will notify you by updating the
                    "Last updated" date above and providing a notification on our website. Continued use of the Service
                    after any changes constitutes your acceptance of the revised Terms.
                </p>

                <h2 className="text-3xl font-bold mb-4">3. Eligibility</h2>
                <p className="mb-4">
                    To use the Service, you must be at least 18 years old, or if you are under 18, you must have your
                    parent or guardian’s consent to these Terms. By using the Service, you represent and warrant that
                    you meet the eligibility requirements.
                </p>

                <h2 className="text-3xl font-bold mb-4">4. Account Registration</h2>
                <p className="mb-4">
                    In order to access certain features of the Service, you may be required to register for an account.
                    You agree to provide accurate, complete, and updated information when registering for an account.
                    You are responsible for safeguarding your account credentials and are responsible for all activities
                    that occur under your account.
                </p>

                <h2 className="text-3xl font-bold mb-4">5. Use of the Service</h2>
                <p className="mb-4">
                    You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree
                    not to use the Service:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>For any unlawful or fraudulent purpose;</li>
                    <li>To impersonate any person or entity, or falsely state or misrepresent your affiliation with a
                        person or entity;
                    </li>
                    <li>To interfere with or disrupt the operation of the Service;</li>
                    <li>To access the Service in a way that violates applicable laws or regulations;</li>
                    <li>To attempt to gain unauthorized access to any portion of the Service or any other systems or
                        networks connected to the Service.
                    </li>
                </ul>

                <h2 className="text-3xl font-bold mb-4">6. Fees and Payments</h2>
                <p className="mb-4">
                    Certain features of the Service may require you to pay fees. All fees are quoted in USD and are
                    non-refundable unless otherwise stated. You agree to pay the applicable fees for the services you
                    select, and authorize us to charge your payment method. We may change our fees at any time by
                    posting new prices on our website.
                </p>

                <h2 className="text-3xl font-bold mb-4">7. Intellectual Property</h2>
                <p className="mb-4">
                    All content and materials available through the Service, including but not limited to text,
                    graphics, logos, and software, are the property of EnsolAI or its licensors and are protected by
                    copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or
                    create derivative works based on any content from the Service without our prior written consent.
                </p>

                <h2 className="text-3xl font-bold mb-4">8. User Content</h2>
                <p className="mb-4">
                    You are responsible for any content you upload, submit, or post on the Service ("User Content"). By
                    uploading or submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license
                    to use, copy, display, and distribute your content in connection with the operation of the Service.
                    You represent and warrant that you have the necessary rights to grant us this license.
                </p>

                <h2 className="text-3xl font-bold mb-4">9. Termination</h2>
                <p className="mb-4">
                    We may suspend or terminate your access to the Service at any time, without prior notice, for
                    conduct that we believe violates these Terms or is harmful to other users of the Service, us, or
                    third parties, or for any other reason at our sole discretion.
                </p>

                <h2 className="text-3xl font-bold mb-4">10. Limitation of Liability</h2>
                <p className="mb-4">
                    To the fullest extent permitted by law, EnsolAI and its affiliates, officers, directors, employees,
                    and agents shall not be liable for any indirect, incidental, special, consequential, or punitive
                    damages, including but not limited to loss of profits, data, or other intangible losses, arising
                    from or related to your use of or inability to use the Service.
                </p>

                <h2 className="text-3xl font-bold mb-4">11. Disclaimer of Warranties</h2>
                <p className="mb-4">
                    The Service is provided on an "as is" and "as available" basis without any warranties of any kind,
                    either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or
                    secure. You use the Service at your own risk.
                </p>

                <h2 className="text-3xl font-bold mb-4">12. Indemnification</h2>
                <p className="mb-4">
                    You agree to indemnify, defend, and hold harmless EnsolAI, its affiliates, and their respective
                    officers, directors, employees, and agents from and against any claims, liabilities, damages,
                    judgments, awards, losses, costs, expenses, or fees arising out of or related to your violation of
                    these Terms or your use of the Service.
                </p>

                <h2 className="text-3xl font-bold mb-4">13. Governing Law and Dispute Resolution</h2>
                <p className="mb-4">
                    These Terms are governed by and construed in accordance with the laws of [State/Country], without
                    regard to its conflict of law provisions. Any disputes arising from or related to these Terms or
                    your use of the Service shall be resolved through binding arbitration in accordance with the rules
                    of the American Arbitration Association, and the arbitration shall be conducted in [City, State].
                </p>

                <h2 className="text-3xl font-bold mb-4">14. Miscellaneous</h2>
                <ul className="list-disc pl-5 mb-4">
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

                <h2 className="text-3xl font-bold mb-4">15. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns regarding these Terms, please contact us at goeb1app@gmail.com
                </p>
            </main>
            <Footer/>
        </div>
    );
};

export default TermsOfService;
