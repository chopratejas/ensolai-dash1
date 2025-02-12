import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
            <Header/>
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">
                        Terms of Service
                    </h1>
                    <p className="text-sm mb-8 text-gray-600 dark:text-gray-400">
                        Last updated: September 30, 2024
                    </p>

                    <div className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-400">
                            These Terms of Service ("Terms") govern your access to and use of the EnsolAI website and
                            services. By using the Service, you agree to be bound by these Terms.
                        </p>

                        {/* Sections */}
                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                By accessing or using our Service, you confirm that you accept these Terms and agree to comply
                                with them. If you are using the Service on behalf of an organization, you represent and warrant
                                that you have the authority to bind that organization to these Terms.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">2. Changes to Terms</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                We may update these Terms from time to time to reflect changes in our services or for other
                                operational, legal, or regulatory reasons. When we make updates, we will notify you by updating
                                the "Last updated" date above and providing a notification on our website. Continued use of the
                                Service after any changes constitutes your acceptance of the revised Terms.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">3. Eligibility</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                To use the Service, you must be at least 18 years old, or if you are under 18, you must have
                                your parent or guardian’s consent to these Terms. By using the Service, you represent and
                                warrant that you meet the eligibility requirements.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">4. Account Registration</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                In order to access certain features of the Service, you may be required to register for an
                                account. You agree to provide accurate, complete, and updated information when registering for
                                an account. You are responsible for safeguarding your account credentials and are responsible
                                for all activities that occur under your account.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">5. Use of the Service</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                You agree to use the Service only for lawful purposes and in accordance with these Terms. You
                                agree not to use the Service:
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-400">
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
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">6. Fees and Payments</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Certain features of the Service require a paid subscription. All fees are quoted in USD and are non-refundable.
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                                <li>Subscription fees are charged on a monthly basis</li>
                                <li>No refunds will be provided for any subscription payments, including accidental subscriptions or unused portions of a subscription period</li>
                                <li>You authorize us to automatically charge your payment method for recurring subscription fees</li>
                                <li>Prices may change at any time with notice</li>
                                <li>Failure to pay fees may result in immediate service termination</li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">7. Intellectual Property</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                All content and materials available through the Service, including but not limited to text,
                                graphics, logos, and software, are the property of EnsolAI or its licensors and are protected by
                                copyright, trademark, and other intellectual property laws. You may not reproduce, distribute,
                                or create derivative works based on any content from the Service without our prior written
                                consent.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">8. User Content</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                You are responsible for any content you upload, submit, or post on the Service ("User Content").
                                By uploading or submitting User Content, you grant us a worldwide, non-exclusive, royalty-free
                                license to use, copy, display, and distribute your content in connection with the operation of
                                the Service. You represent and warrant that you have the necessary rights to grant us this
                                license.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">9. Service Disclaimer</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                EnsolAI is an opportunity aggregation platform and not a legal, professional, or employment service. You acknowledge that:
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                                <li>We do not guarantee the accuracy, completeness, or availability of any opportunities</li>
                                <li>We are not responsible for the outcome of any speaking engagements, judging positions, or other opportunities</li>
                                <li>We do not endorse or verify any third-party events, organizations, or opportunities</li>
                                <li>Any actions you take based on opportunities found through our platform are at your own risk</li>
                                <li>We are not responsible for any financial losses, reputation damage, or other damages resulting from using our service</li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">10. Limitation of Liability</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                To the fullest extent permitted by law, EnsolAI and its affiliates, officers, directors,
                                employees, and agents shall not be liable for any indirect, incidental, special, consequential,
                                or punitive damages, including but not limited to loss of profits, data, or other intangible
                                losses, arising from or related to your use of or inability to use the Service.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">11. Disclaimer of Warranties</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                The Service is provided on an "as is" and "as available" basis without any warranties of any
                                kind, either express or implied. We do not warrant that the Service will be uninterrupted,
                                error-free, or secure. You use the Service at your own risk.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">12. Indemnification</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                You agree to indemnify, defend, and hold harmless EnsolAI, its affiliates, and their respective
                                officers, directors, employees, and agents from and against any claims, liabilities, damages,
                                judgments, awards, losses, costs, expenses, or fees arising out of or related to your violation
                                of these Terms or your use of the Service.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">13. Governing Law and Dispute Resolution</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                These Terms are governed by the laws of Delaware, United States. Any dispute shall be resolved through binding arbitration 
                                in Delaware, conducted by a single arbitrator under the rules of the American Arbitration Association. You agree to waive 
                                your right to participate in class actions or pursue claims in court (other than small claims court). Each party shall 
                                bear its own costs of arbitration.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">14. Subscription Management</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end 
                                of your current billing period. No partial refunds will be provided for unused subscription time. If you cancel, you 
                                will retain access to premium features until the end of your paid period.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">15. Miscellaneous</h2>
                            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                                <li><strong>Entire Agreement:</strong> These Terms, along with our Privacy Policy, constitute
                                    the entire agreement between you and EnsolAI regarding the use of the Service.
                                </li>
                                <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable
                                    or invalid, the remaining provisions will remain in full force and effect.
                                </li>
                                <li><strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms will
                                    not be considered a waiver of those rights.
                                </li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">16. Contact Us</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                If you have any questions or concerns regarding these Terms, please contact us at <span
                                className="text-blue-400">goeb1app@gmail.com</span>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default TermsOfService;
