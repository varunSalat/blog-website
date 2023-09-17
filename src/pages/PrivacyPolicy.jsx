import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = `Scholarwithtech | blog website | Privacy policy`;
    // changing meta description
    const description =
      "At ScholarwithTech, we are committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection use.";
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = description;
  }, []);
  return (
    <section className="w-[min(1200px,90%)] mx-auto border-2 p-4 my-8">
      <div>
        <h1 className="text-3xl text-center my-6 ">Privacy Policy</h1>
        <p className="text-md text-gray-600">
          Last Updated: 17th September 2023
        </p>
      </div>
      <p className="my-4">
        At ScholarwithTech, we are committed to protecting your privacy. This
        Privacy Policy outlines our practices regarding the collection, use and
        disclosure of your information when you visit our website.
      </p>
      <div className="flex flex-col gap-6 mt-6">
        <div>
          <h2 className="text-xl">1. Information We Collect</h2>
          <p className="mt-4">
            We do not require users to log in or subscribe to our website.
            Therefore, we do not collect personally identifiable information
            such as names, email addresses, or phone numbers. However, we may
            collect and store the following non-personal information
            automatically:
          </p>
          <div className="mt-3 flex gap-2 flex-col ">
            <p>
              <span className="text-xl mr-2">Log Data:</span>
              We may collect information that your browser sends whenever you
              visit our website. This may include your IP address, browser type,
              browser version, the pages you visit, the time and date of your
              visit and other statistics.
            </p>
            <p>
              <span className="text-xl mr-2">Cookies:</span>
              We may use cookies to enhance your browsing experience. Cookies
              are small files stored on your device that help us analyze website
              traffic and customize content to your preferences. You can choose
              to disable cookies through your browser settings.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl">2. How We Use Your Information</h2>
          <p className="mt-3">
            We collect non-personal information to improve and optimize our
            website&rsquo;s content and user experience. This data helps us
            understand user preferences, trends and areas of interest. We may
            also use this information for:
          </p>
          <ul className="mt-2 list-disc ml-5">
            <li>Website analytics and performance monitoring.</li>
            <li>Security and troubleshooting purposes.</li>
            <li>Legal compliance and protection against misuse.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl">3. Information Sharing</h2>
          <p className="mt-3">
            We do not sell, trade, or share your information with third parties,
            as we do not collect personally identifiable information. However,
            we may disclose non-personal information to trusted third-party
            service providers who assist us in operating our website or
            conducting our business, subject to strict confidentiality
            agreements.
          </p>
        </div>
        <div>
          <h2 className="text-xl">4. Links to Third-Party Websites</h2>
          <p className="mt-3">
            Our website may contain links to external websites or services that
            are not operated by us. Please note that we have no control over the
            content and practices of these websites and they may have their own
            privacy policies. We recommend reviewing the privacy policies of any
            third-party websites you visit.
          </p>
        </div>
        <div>
          <h2 className="text-xl">5. Children&rsquo;s Privacy</h2>
          <p className="mt-3">
            ScholarwithTech is not directed at individuals under the age of 13.
            We do not knowingly collect any information from children under 13
            years of age. If you believe that we have unintentionally collected
            information from a child under 13, please contact us and we will
            promptly remove such information.
          </p>
        </div>
        <div>
          <h2 className="text-xl">6. Changes to this Privacy Policy</h2>
          <p className="mt-3">
            We may update our Privacy Policy from time to time. Any changes will
            be reflected on this page, along with the date of the last update.
            Your continued use of our website after any modifications constitute
            your acceptance of the revised Privacy Policy.
          </p>
        </div>
        <div>
          <h2 className="text-xl">9. Contact Us</h2>
          <p className="mt-3">
            If you have any questions or concerns about these Terms of Use,
            please contact us at{" "}
            <a
              href="mailto:companymain@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="text-blue-600 underline"
            >
              companymain@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
