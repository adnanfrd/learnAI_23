"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 md:px-16 py-12 max-w-5xl mx-auto leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6 text-sm text-gray-500">
        Date of Last Revision: February 3rd, 2025
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Important Privacy Information
        </h2>
        <p className="mb-4">
          To use the service on the website, we may ask you to enter information
          such as age, gender, email address, financial situation, and other
          onboarding questions. We also automatically collect data from your
          device such as language settings, IP address, time zone, device type,
          OS, and more.
        </p>
        <p>
          For improving our service and ads, we use solutions by: Digital Ocean,
          Facebook, Google, Mixpanel, Microsoft Clarity, Amplitude, Stripe,
          Apple, PayPal, FreshDesk, SendPulse. This helps us analyze
          interactions, serve ads, and improve your experience.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Personal Data Controller</li>
          <li>Categories of Personal Data We Collect</li>
          <li>For What Purposes We Process Data</li>
          <li>Legal Bases for Processing (EEA Users)</li>
          <li>With Whom We Share Data</li>
          <li>How You Can Exercise Privacy Rights</li>
          <li>Age Limitation</li>
          <li>International Data Transfers</li>
          <li>Changes to This Privacy Policy</li>
          <li>Data Retention</li>
          <li>Do Not Track Requests</li>
          <li>Contact Us</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Personal Data Controller</h2>
        <p>
          Nomad Venture Studio, Block B-B19-141, Sharjah, UAE, registration
          number 3773, will be the controller of your personal data.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Categories of Personal Data We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <b>Voluntary data:</b> age, gender, financial status, email.
          </li>
          <li>
            <b>Automatic data:</b> IP address, location, usage interactions,
            transaction data, cookies.
          </li>
          <li>
            <b>Cookies:</b> We use session & persistent cookies, tracking
            pixels, and advertising cookies.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          For What Purposes We Process Data
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Provide our Service & prevent errors</li>
          <li>Communicate with you (emails, offers, updates)</li>
          <li>Research & analyze usage (Google Analytics, Amplitude)</li>
          <li>Marketing campaigns & personalization</li>
          <li>Ads personalization (Facebook, Google Ads)</li>
          <li>Payment processing (Stripe, PayPal)</li>
          <li>Fraud prevention & legal compliance</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Legal Bases for Processing (EEA Users)
        </h2>
        <p className="mb-4">We process your data under:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Consent (marketing emails, ads)</li>
          <li>
            Contract performance (providing services, processing payments)
          </li>
          <li>
            Legitimate interests (analyzing use, improving services, preventing
            fraud)
          </li>
          <li>
            Legal obligations (when required by law enforcement or regulation)
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          With Whom We Share Your Data
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Service providers (Digital Ocean, Amplitude, Mixpanel, SendPulse,
            etc.)
          </li>
          <li>Marketing partners (Facebook, Google)</li>
          <li>Payment processors (Stripe, PayPal)</li>
          <li>Law enforcement agencies (when legally required)</li>
          <li>Third parties in corporate transactions (merger, acquisition)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          How You Can Exercise Privacy Rights
        </h2>
        <p>
          You can send requests to <b>support@jobescape.me</b> to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Access, review, or correct your data</li>
          <li>Request deletion</li>
          <li>Restrict or object to processing</li>
          <li>Request data portability</li>
          <li>File a complaint with a supervisory authority (EEA users)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Other Policies</h2>
        <p>
          <b>Age Limitation:</b> We do not process data from users under 18.
        </p>
        <p>
          <b>International Transfers:</b> We may transfer data internationally
          with safeguards (SCCs, adequacy decisions).
        </p>
        <p>
          <b>Do Not Track:</b> This website does not support DNT requests; check
          third-party policies.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Data Retention</h2>
        <p>
          We retain your data as long as necessary to provide the Service,
          comply with legal obligations, resolve disputes, and enforce
          agreements.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Changes</h2>
        <p>
          We may update this Privacy Policy periodically. Continued use of the
          Service after updates means you accept the changes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p>Nomad Venture Studio</p>
        <p>Block B-B19-141, Sharjah, UAE</p>
        <p>
          Email:{" "}
          <a
            href="mailto:support@jobescape.me"
            className="text-blue-600 underline"
          >
            support@jobescape.me
          </a>
        </p>
      </section>
    </main>
  );
}
