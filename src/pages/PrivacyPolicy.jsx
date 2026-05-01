import React from 'react';
import LegalPage from '../components/LegalPage';

const Strong = ({ children }) => <strong className="text-white font-semibold">{children}</strong>;
const Bullets = ({ items }) => (
  <ul className="list-disc pl-5 space-y-2">{items.map((it, i) => <li key={i}>{it}</li>)}</ul>
);
const accent = 'text-indigo-300 font-medium';

const sections = [
  {
    title: '1. Information We Collect',
    body: <>
      <p>We may collect various types of information to provide you with our services, including:</p>
      <Bullets items={[
        <><Strong>Personal Information:</Strong> Your name, email address, contact details, billing information, and other identifiers provided when you create an account.</>,
        <><Strong>Usage Data:</Strong> Details about your interactions with our website, such as IP addresses, browser type, and device information.</>,
        <><Strong>Communication Data:</Strong> Information from your communications with us, including emails, support requests, and inquiries.</>,
        <><Strong>Third-Party Data:</Strong> Information we receive from third-party services if you choose to connect or log in through such services.</>,
      ]} />
    </>
  },
  {
    title: '2. How We Use Your Information',
    body: <>
      <p>We use the collected information for various purposes, including:</p>
      <Bullets items={[
        'Providing and maintaining our services, such as processing payments and managing your account.',
        'Personalizing your experience and tailoring our services to your preferences.',
        'Improving the functionality and performance of our platform.',
        'Communicating with you regarding updates, promotions, and service-related information.',
        'Monitoring usage patterns and analyzing trends to improve our services.',
        'Complying with legal obligations and enforcing our Terms of Service.',
      ]} />
    </>
  },
  {
    title: '3. How We Share Your Information',
    body: <>
      <p>We may share your information under these circumstances:</p>
      <Bullets items={[
        <><Strong>Service Providers:</Strong> With trusted third-party providers like payment processors and hosting services under confidentiality agreements.</>,
        <><Strong>Business Partners:</Strong> With partners offering additional services or features that you choose to use.</>,
        <><Strong>Legal Requirements:</Strong> If required by law or in response to legitimate requests by public authorities.</>,
        <><Strong>Business Transfers:</Strong> In the event of mergers, acquisitions, or sales, your information may be transferred as part of such transactions.</>,
        <><Strong>With Consent:</Strong> For any other purpose with your explicit consent.</>,
      ]} />
    </>
  },
  {
    title: '4. Data Security',
    body: <>
      <p>We take data security seriously and use industry-standard measures to protect your information:</p>
      <Bullets items={[
        'Encryption of sensitive information, such as payment details.',
        'Regular security audits and updates.',
        'Access controls to limit who can access your information.',
      ]} />
      <p>However, no method of transmission over the internet or electronic storage is 100% secure. We strive to protect your personal information but cannot guarantee absolute security.</p>
    </>
  },
  {
    title: '5. Your Rights and Choices',
    body: <>
      <p>You have rights concerning your personal information, including:</p>
      <Bullets items={[
        <><Strong>Access and Correction:</Strong> Request access to or corrections of your personal data.</>,
        <><Strong>Deletion:</Strong> Request deletion of your data, subject to certain legal obligations.</>,
        <><Strong>Opt-Out:</Strong> Opt out of promotional communications by following instructions in those messages or contacting us directly.</>,
        <><Strong>Data Portability:</Strong> Request a copy of your data in a commonly used format.</>,
      ]} />
      <p>To exercise these rights, contact us at <span className={accent}>goeb1app@gmail.com</span>. We may need to verify your identity before processing your request.</p>
    </>
  },
  { title: '6. Cookies and Tracking Technologies', body: <p>We use cookies and similar technologies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.</p> },
  { title: "7. Children's Privacy", body: <p>Our services are not intended for children under 13. We do not knowingly collect personal data from children under 13. If we learn that we have, we will promptly delete such information. If you believe a child under 13 has provided us with personal data, please contact us at <span className={accent}>goeb1app@gmail.com</span>.</p> },
  { title: '8. Data Retention', body: <p>We retain personal data as long as necessary to provide our services, fulfill legal obligations, and resolve disputes.</p> },
  { title: '9. Changes to this Privacy Policy', body: <p>We may update this Privacy Policy periodically. Any changes will be communicated through our website or via email notifications. Please review the policy regularly.</p> },
  { title: '10. Contact Us', body: <p>If you have any questions about this Privacy Policy, please reach out to us at <span className={accent}>goeb1app@gmail.com</span>.</p> },
  { title: '11. Subscription Data', body: <p>We collect and process payment information through our payment processor. We do not store complete credit card information on our servers. Subscription status, billing history, and payment methods are stored securely and used only for billing purposes.</p> },
  {
    title: '12. Usage Analytics',
    body: <>
      <p>We collect detailed analytics about how you use our platform, including:</p>
      <Bullets items={[
        'Features accessed and time spent using them',
        'Opportunities viewed and applied to',
        'Search patterns and preferences',
        'Platform performance metrics',
      ]} />
    </>
  },
  { title: '13. Subscription Communications', body: <p>We send essential subscription-related communications, including billing notices, feature updates, and service changes. These administrative emails cannot be opted out of while maintaining an active subscription.</p> },
];

const PrivacyPolicy = () => (
  <LegalPage
    title="Privacy"
    accent="Policy"
    lastUpdated="September 30, 2024"
    intro="At EnsolAI, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information."
    sections={sections}
  />
);

export default PrivacyPolicy;
