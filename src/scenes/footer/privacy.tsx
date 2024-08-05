import { Outlet } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="flex w-full mx-auto overflow-hidden body-font">
      <div className="w-full mx-3 my-12 prose text-white prose-headings:text-white max-w-none prose-strong:text-white">
        <h1 className="flex items-center justify-center">Privacy Policy</h1>
        <p>Last Updated on July 9, 2024</p>
        <h2>Acceptance of This Policy</h2>
        <p>
          Crypto Trading Flow ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our services. By accessing and using the Website or our Services, you acknowledge that you have read this Policy and agree to all its terms and conditions. If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Website and Services.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect no personal information besides the email address users subscribe with. However, we do use cookies for functionality and analytics purposes. Please note that in some countries, data such as cookie IDs may be considered personal information. If we process such data, we will handle it in accordance with our privacy and cookie policies.
        </p>
        <h2>Use of Your Information</h2>
        <p>
          We use your information to communicate with you, to comply with the law, and for functionality and analytics purposes as follows:
        </p>
        <ul>
          <li><strong>To Communicate with You:</strong> We may use your information to inform you about updates, changes, and other relevant information regarding our services. This includes sending you emails and responding to your inquiries.</li>
          <li><strong>To Comply with Legal Obligations:</strong> We may use your information to comply with applicable laws, regulations, legal processes, or governmental requests.</li>
          <li><strong>For Functionality and Analytics Purposes:</strong> We use cookies to enhance the functionality of our website and to perform analytics. This helps us understand how to improve the user experience.</li>
        </ul>
        <h2>Disclosure of Your Information</h2>
        <p>
          We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        </p>
        <ul>
          <li><strong>By Law or to Protect Rights:</strong> If we believe that the release of information about you is necessary to respond to a legal process, investigate or remedy potential violations of our policies, or protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
          <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
        </ul>
        <h2>Changes and Amendments</h2>
        <p>
          We reserve the right to modify this Policy or its terms related to the Website and Services at any time at our discretion. When we make changes, we will revise the "Last Updated" date at the top of this Policy and notify you through email. Unless otherwise specified, an updated version of this Policy will be effective immediately upon posting on the Website. Your continued use of the Website and Services after the effective date of the revised Policy (or such other act specified at that time) constitutes your acceptance of the changes.
        </p>
        <h2>Security of Your Information</h2>
        <p>
          We use administrative and technical measures to help protect your personal information. However, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against interception or misuse.
        </p>
        <h2>Policy for Children</h2>
        <p>
          We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under 13 without verification of parental consent, we will delete that information as quickly as possible. If you believe we might have any information from or about a child under 13, please contact us.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at: support@cryptotradingflow.com
        </p>
        <p>
          By using our Services, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our Services.
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default PrivacyPolicy;
