"use client";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 md:px-16 py-12 max-w-5xl mx-auto leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Terms & Conditions of Service
      </h1>

      <p className="mb-6 text-sm text-gray-500">
        Date of Last Revision: February 3rd, 2025
      </p>

      <p className="mb-8">
        This service includes subscriptions that automatically renew. Please
        read these terms and conditions of use (the “T&C”). In particular,
        Section 6 “Billing and Cancellation” before starting a subscription plan
        or completing a purchase for our auto-renewing subscription service. To
        avoid being charged you must affirmatively cancel your subscription at
        least 24 hours before the end of your current subscription period.
        Please review these policies prior to purchasing.
      </p>

      {/* Example Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">1. Scope of Application</h2>
        <p className="mb-4">
          These Terms & Conditions of Service (T&C) govern the relationship
          between Jobescape Venture Studio (“Company”) and the user (“you”,
          “your”, or “User”).
        </p>
        <ul className="list-decimal list-inside space-y-2">
          <li>
            The User’s access to the Company’s website and related subscription
            services, including introductory offers, digital content, features
            and updates are all covered under these T&C.
          </li>
          <li>
            By accessing the Service, you agree to comply with these T&C and
            acknowledge that you are at least 18 years of age or older.
          </li>
          <li>
            If you do not agree with any part of these T&C, you may not use the
            Service.
          </li>
        </ul>
      </section>

      {/* Another Example Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">2. Service Description</h2>
        <p className="mb-4">
          The Service provides users with access to digital content, resources,
          and online subscription services.
        </p>
        <ul className="list-decimal list-inside space-y-2">
          <li>
            Users are granted access to one or multiple subscription plans,
            depending on the plan selected at checkout.
          </li>
          <li>
            Each plan renews automatically unless cancelled in accordance with
            Section 6 below.
          </li>
        </ul>
      </section>

      {/* Billing Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          6. Billing and Cancellation
        </h2>
        <ul className="list-decimal list-inside space-y-2">
          <li>
            Payment methods for the Services are billed by the Company via
            PayPal or other payment providers.
          </li>
          <li>
            You authorize us to store your payment method and automatically
            charge the applicable subscription fees to the payment card you
            provided at checkout.
          </li>
          <li>
            Subscriptions renew automatically unless cancelled at least 24 hours
            before the renewal date.
          </li>
          <li>
            You may cancel your subscription on our website under your profile.
          </li>
        </ul>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          12. Limitation of Liability
        </h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY AND ITS AFFILIATES
          SHALL NOT BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, OR
          INCIDENTAL DAMAGES ARISING FROM THE USE OF THE SERVICE. YOU AGREE THAT
          THE COMPANY’S TOTAL LIABILITY WILL NOT EXCEED THE AMOUNT PAID BY YOU
          FOR THE SUBSCRIPTION PLAN.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-2">Jobescape Venture Studio</p>
        <p className="mb-2">Block B-19-14F, Sharjah, UAE</p>
        <p>Email: support@jobescape.me</p>
      </section>
    </main>
  );
}
