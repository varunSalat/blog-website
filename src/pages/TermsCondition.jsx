import { useEffect } from "react";

const TermsCondition = () => {
  useEffect(() => {
    document.title = `Scholarwithtech | blog website | Terms and Conditions`;
    // changing meta description
    const description = `Please read these Terms of Use ("Agreement") carefully before using the ScholarwithTech website ("Website") operated by ScholarwithTech `;
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = description;
  }, []);
  return (
    <section className="w-[min(1200px,90%)] mx-auto border-2 p-4 my-8">
      <div>
        <h1 className="text-3xl text-center my-6 ">Terms and conditions</h1>
        <p className="text-md text-gray-600">
          Last Updated: 17th September 2023
        </p>
      </div>
      <p className="my-4">
        Please read these Terms of Use (&quot;Agreement&quot;) carefully before
        using the ScholarwithTech website (&quot;Website&quot;) operated by
        ScholarwithTech (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
        This Agreement sets forth the legally binding terms and conditions for
        your use of the Website.
      </p>
      <div className="flex flex-col gap-6 mt-6">
        <div>
          <h2 className="text-xl">1. Acceptance of Terms</h2>
          <p className="my-3">
            By accessing or using the Website, you agree to comply with and be
            bound by these Terms of Use. If you do not agree with any part of
            these terms, please do not use the Website.
          </p>
        </div>
        <div>
          <h2 className="text-xl">2. Use of Website</h2>
          <div className="mt-3 flex gap-2 flex-col ">
            <p>
              <span className="text-xl mr-2">Content:</span>
              All content provided on this Website is for informational purposes
              only. It is subject to change without notice.
            </p>
            <p>
              <span className="text-xl mr-2">User Conduct:</span>
              You agree not to engage in any activity that may disrupt the
              operation of the Website, interfere with other users&rsquo;
              access, or compromise the security and integrity of the Website.
            </p>
            <p>
              <span className="text-xl mr-2">Intellectual Property:</span>
              The content on this Website, including but not limited to text,
              graphics, logos, images and software, is protected by copyright,
              trademark and other intellectual property laws. You may not
              reproduce, distribute, or display any part of the Website without
              prior written consent.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl">3. Links to Other Websites</h2>
          <p className="mt-3">
            The Website may contain links to third-party websites. These links
            are provided for your convenience and we do not endorse the content
            of any linked website. We are not responsible for the content or
            privacy practices of such websites.
          </p>
        </div>
        <div>
          <h2 className="text-xl">4. Privacy Policy</h2>
          <p className="mt-3">
            Your use of the Website is also governed by our Privacy Policy,
            which can be found at{" "}
            <a href={"/privacy-policy"} className="text-blue-600 underline">
              Privacy Policy
            </a>
            . By using the Website, you agree to the collection, use and sharing
            of your information as described in the Privacy Policy.
          </p>
        </div>
        <div>
          <h2 className="text-xl">5. Limitation of Liability</h2>
          <p className="mt-3">
            To the fullest extent permitted by applicable law, we disclaim all
            warranties, express or implied, regarding the Website&apos;s
            availability, accuracy, or fitness for a particular purpose. We
            shall not be liable for any direct, indirect, incidental, special,
            or consequential damages resulting from your use of or inability to
            use the Website.
          </p>
        </div>
        <div>
          <h2 className="text-xl">6. Indemnification</h2>
          <p className="mt-3">
            You agree to indemnify and hold us harmless from any claims, losses,
            damages, liabilities, costs and expenses (including attorney&lsquo;s
            fees) arising out of or related to your use of the Website,
            violation of these Terms of Use, or any third-party claims arising
            from your actions.
          </p>
        </div>
        <div>
          <h2 className="text-xl">7. Changes to Terms</h2>
          <p className="mt-3">
            We reserve the right to modify these Terms of Use at any time. Any
            changes will be posted on this page, along with the date of the last
            update. Your continued use of the Website after any modifications
            constitutes your acceptance of the revised Terms of Use.
          </p>
        </div>
        <div>
          <h2 className="text-xl">8. Governing Law</h2>
          <p className="mt-3">
            This Agreement is governed by and construed in accordance with the
            laws of India. Any disputes arising from or related to this
            Agreement shall be subject to the exclusive jurisdiction of the
            courts in India.
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
      <h4 className="mt-6 text-center text-2xl">
        By using ScholarwithTech, you agree to abide by these Terms of Use.
      </h4>
    </section>
  );
};

export default TermsCondition;
