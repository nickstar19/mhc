import React from "react";
import { useEffect } from "react";
const Privacy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="policy">
      <h2>Privacy Policy</h2>
      <p>Effective Date: 01/07/2023</p>
      <p>
        This Privacy Policy describes how we collect, use, store, and protect
        the personal information you provide to us when using our website. By
        accessing or using our website, you consent to the practices described
        in this Privacy Policy. We may update this Privacy Policy from time to
        time, and any changes will be effective upon posting the revised policy
        on this page. We encourage you to review this Privacy Policy
        periodically.
      </p>
      <p>1. Information We Collect:</p>
      <p>
        1.1 Personal Information: When you use our website, we may collect the
        following personal information:
      </p>
      <ul>
        <li>
          Mobile Number: We may collect your mobile number when you voluntarily
          provide it to us for the purpose of receiving updates, notifications,
          or other communication from us.
        </li>
        <li>
          Email Address: We may collect your email address when you voluntarily
          provide it to us for the purpose of receiving newsletters, updates, or
          other information.
        </li>
      </ul>
      <p>2. Use of Personal Information:</p>
      <p>
        2.1 We may use the personal information we collect for the following
        purposes:
      </p>
      <ul>
        <li>
          To communicate with you: We may use your mobile number and email
          address to send you updates, notifications, newsletters, and other
          information related to our services.
        </li>
        <li>
          To improve our services: We may analyze the information we collect to
          understand user preferences and enhance the functionality and user
          experience of our website.
        </li>
        <li>
          To respond to inquiries and provide support: We may use your personal
          information to respond to your inquiries, questions, or requests for
          assistance.
        </li>
        <li>
          To comply with legal obligations: We may use or disclose your personal
          information to comply with applicable laws, regulations, or legal
          processes.
        </li>
      </ul>
      <p>3. Data Security:</p>
      <p>
        3.1 We take reasonable measures to protect the security of your personal
        information and ensure that it is not accessed, disclosed, altered, or
        destroyed without authorization. However, please note that no method of
        transmission over the internet or electronic storage is 100% secure, and
        we cannot guarantee absolute security.
      </p>
      <p>4. Third-Party Disclosure:</p>
      <p>
        4.1 We do not sell, trade, or otherwise transfer your personal
        information to third parties without your consent, except as described
        in this Privacy Policy or if required by law.
      </p>
      <p>5. Cookies and Tracking Technologies:</p>
      <p>
        5.1 We may use cookies and similar tracking technologies to enhance your
        experience on our website, analyze usage patterns, and gather
        information about how you navigate and interact with our website. You
        can manage your cookie preferences through your web browser settings.
      </p>
      <p>6. Links to Third-Party Websites:</p>
      <p>
        6.1 Our website may contain links to third-party websites. We have no
        control over the content, privacy practices, or policies of these
        websites. We encourage you to review the privacy policies of these
        third-party websites before providing any personal information.
      </p>
      <p>7. Children's Privacy:</p>
      <p>
        7.1 Our website is not directed to individuals under the age of 18. We
        do not knowingly collect personal information from children. If you
        believe that we have inadvertently collected personal information from a
        child, please contact us so that we can delete the information.
      </p>
      <p>8. Your Rights:</p>
      <p>
        8.1 You have the right to access, update, correct, or delete your
        personal information that we hold. If you would like to exercise any of
        these rights, please contact us using the contact information provided
        below.
      </p>
      <p>9. Contact Us:</p>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or our privacy practices, please contact us at:
      </p>
      <p class="contact-info">mhcollegeworld@gmail.com</p>
      <p>
        Please note that this Privacy Policy applies solely to the information
        collected by our website and does not apply to any third-party websites
        or services linked to or from our website.
      </p>
    </div>
  );
};

export default Privacy;
