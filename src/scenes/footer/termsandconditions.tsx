import { Outlet } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="flex w-full mx-auto overflow-hidden body-font">
      <div className="w-full mx-3 my-12 prose text-white prose-headings:text-white max-w-none">
      <h1 className="flex items-center justify-center">Terms and Conditions</h1>
        <p>Last Updated on August 5, 2024</p>
        <h2>Acceptance of Terms and Conditions</h2>
        <p>
          These Terms and Conditions ("Terms") are a legally binding agreement
          between you ("you", "your" or "User") and Crypto Trading Flow ("the
          Company", "we", "us", "our"), the owner and operator of our website
          and services (collectively, the "Services"). By accessing or using our
          Services, you agree to be bound by these Terms. If you do not agree to
          these Terms, you must not use our Services.
        </p>
        <h2>Privacy Policy</h2>
        <p>
          The Company’s Privacy Policy outlines how your personally identifiable
          information is collected, utilized, and disclosed. By accessing our
          Services, you agree to adhere to the terms specified in the Company’s
          Privacy Policy, available at the following link: [insert link]. We
          prioritize your privacy and will handle your information in accordance
          with both the Terms and the Privacy Policy.
        </p>
        <h2>Eligibility</h2>
        <p>
          You must be at least eighteen (18) years old to use any of our services.
          By using our services, you represent and warrant to us that your actions
          are in compliance with all applicable laws and regulations. You agree not
          to use our services for any illegal purposes.
        </p>
        <h2>Use of Services</h2>
        <h3>Permitted Use:</h3>
        <p>
          You may use our Services for lawful purposes only and in accordance with
          these Terms. You agree not to use our Services in any way that:
        </p>
        <ul>
          <li>Violates any applicable federal, state, local, or international law or regulation.</li>
          <li>Exploits, harms, or attempts to exploit or harm minors in any way.</li>
          <li>Transmits or procures the sending of any advertising or promotional material without our prior written consent.</li>
          <li>Impersonates or attempts to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
        </ul>
        <h3>Prohibited Use:</h3>
        <p>
          You agree not to use our Services in any manner that could disable, overburden, damage, or impair our site or interfere with any other party's use of our Services, or use any robot, spider, or other automatic device, process, or means to access our Services for any purpose.
        </p>
        <h2>Intellectual Property Rights</h2>
        <p>
          You acknowledge and agree that the Company or its licensors own, control, or possess all legal rights, title, and interest in and to the content and all materials, including but not limited to any copyrights, trademark rights, patent rights, moral rights, and other intellectual property and/or proprietary rights therein, whether such rights are registered or unregistered, and wherever in the world those rights may exist.
        </p>
        <h2>Third-Party Platforms</h2>
        <p>
          The Services may provide links to third-party websites or apps ("Third-Party Platforms'') such as Wundertrading, Binance, Facebook, Twitter, or Instagram that are not owned or controlled by the Company. These links are provided for your convenience. We do not review, approve, endorse, or make any representations about such Third-Party Platforms, the companies or individuals who own and operate them, or any information, software, or other products and services made available through such Third-Party Platforms, or any results that may be obtained from using them. If you choose to access any Third-Party Platforms linked to the Services, you do so at your own risk. Your activities on Third-Party Platforms are solely your responsibility. Your use of Third-Party Platforms is governed by their respective terms of use and privacy policies, which may differ from our Terms or Privacy Policy. Therefore, we recommend that you review the privacy policies of these Third-Party Platforms.
        </p>
        <h2>Disclaimer</h2>
        <p>
          Crypto Trading Flow cannot and does not represent or warrant that the Services or its server will be uninterrupted, free from unauthorized access (including third-party hackers or denial of service attacks), or otherwise meet your requirements. Crypto Trading Flow is not licensed or qualified to provide investment advice. We offer Automated Trading Bots and do not make recommendations or provide investment advice of any kind. No information obtained from us is intended as investment, tax, accounting, or legal advice, nor as an offer or solicitation to buy or sell cryptocurrencies. Users should be aware of the extremely high risks involved in the cryptocurrency market. Users seeking to trade or invest in cryptocurrencies should do so cautiously and after consulting with their qualified financial, legal, and tax advisors. You are solely responsible for evaluating the merits and risks associated with using any of our Services. By using our Services, you agree not to hold Crypto Trading Flow liable for any loss that you may incur.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          In no event shall any party of Crypto Trading Flow be liable to you, or any third party, for any special, indirect, incidental, punitive, exemplary, reliance, or consequential damages of any kind, including, but not limited to, financial loss, loss of profit, loss of value of your cryptocurrency assets, loss of data, or damages arising from any decision you make based on the content or other information made available to you by us, whether based on breach of any express or implied warranty or condition, breach of contract, or tort (including, without limitation, negligence or strict liability), even if a Crypto Trading Flow party has been advised of the possibility of such damages. Nothing in this section shall exclude or limit any Crypto Trading Flow party’s liability for losses which may not be lawfully excluded or limited by applicable law, in which case, such Crypto Trading Flow party’s liability will be limited to the greatest extent permitted by applicable law.
        </p>
        <h2>Indemnification</h2>
        <p>
          You hereby agree to defend, indemnify, and hold harmless Crypto Trading Flow from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that arise from or relate to:
        </p>
        <ul>
          <li>Your use or inability to use our services.</li>
          <li>Your violation of these Terms.</li>
          <li>Your violation of any applicable laws or regulations.</li>
          <li>Your infringement of any rights of another party, including but not limited to intellectual property rights.</li>
        </ul>
        <p>
          This indemnification obligation will survive the termination or expiration of these Terms and your use of our services.
        </p>
        <p>
          By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default TermsAndConditions;
