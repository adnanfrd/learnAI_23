"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SellingPage() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 0;
            seconds = 0;
          }
        }
        return { minutes, seconds };
      });
    }, 1000);

    // Initial time (e.g., 5 minutes)
    setTimeLeft({ minutes: 5, seconds: 0 });

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-white text-black">
      {/* 1. Header */}
      <header className="flex justify-around items-center px-6 py-5 ">
        <div className="hidden md:flex items-center">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-xl">Jobescape</span>
        </div>
        <div className="flex items-center gap-4">
          <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>min :
          <span>{timeLeft.seconds.toString().padStart(2, "0")}</span> sec 
          <motion.button
            className="relative bg-blue-600 text-white px-2 cursor-pointer py-2 rounded-lg border-2 border-blue-600"
            initial={{ boxShadow: "0 0 0 0px rgba(37,99,235,0.7)" }}
            animate={{
              boxShadow: [
                "0 0 0 0px rgba(37,99,235,0.7)",
                "0 0 0 6px rgba(37,99,235,0)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          >
            Get My Plan
          </motion.button>
        </div>
      </header>

      {/* 2. Promo Banner */}
      <div
        className="flex flex-col p-4 md:flex-row items-start md:items-center justify-between 
                border border-green-400 bg-green-50 rounded-xl max-w-3xl mx-auto gap-3"
      >
        <div>
          <h3 className="text-green-800 font-semibold text-base md:text-lg">
            New promocode applied!
          </h3>
          <p className="text-green-700 text-sm md:text-base">
            Get your personal plan with up{" "}
            <span className="font-bold">70%</span> discount
          </p>
        </div>

        {/* Right badge */}
        <div className="bg-green-600 text-white px-3 py-1 rounded-md relative self-start md:self-auto">
          <span className="text-xs block">
            <del>69%</del>
          </span>
          <span className="text-sm font-bold">70% OFF</span>
          {/* Little arrow/flag effect */}
          <div
            className="absolute -bottom-2 left-0 right-0 mx-auto w-0 h-0 
                    border-l-8 border-r-8 border-t-8 border-transparent border-t-green-600"
          ></div>
        </div>
      </div>

      {/* 3. Hero Section */}
      <section className="max-w-5xl  mx-auto px-6 py-10 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Your Freelancing Plan is ready!
        </h1>

        <div className="grid grid-cols-2 bg-gray-50 rounded-3xl p-4  gap-6 items-center">
          <div className="p-6">
            <Image
              src="/before.png"
              alt="Before"
              width={300}
              height={300}
              className="mx-auto"
            />
            <p className="mt-2 text-sm">Now</p>
          </div>
          <div className="p-6">
            <Image
              src="/after.png"
              alt="After"
              width={300}
              height={300}
              className="mx-auto"
            />
            <p className="mt-2 text-sm">Your Goal</p>
          </div>
        </div>
      </section>

      {/* 4. Personalized CTA */}
      <section className="max-w-4xl mx-auto px-6 py-10 text-center bg-white">
        <div className="flex justify-center items-center mb-4">
          <img
            src="/users.png" // Replace with actual profile image
            alt="Profile"
            className="w-16 h-8 rounded-full mr-2"
          />
          <p className="text-sm text-gray-600">
            123,584 freelancers started with us
          </p>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          adnan, get your{" "}
          <span className="text-blue-500">Personalized Plan</span> to become
          AI-expert now!
        </h1>
        <div className="relative bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between max-w-md mx-auto">
          <div>
            <p className="text-sm text-green-700">New promocode applied!</p>
            <div className="flex items-center">
              <span className="text-sm text-green-700 mr-2">✔</span>
              <input
                type="text"
                value="adn-sep-17.final"
                readOnly
                className="bg-transparent border-none focus:outline-none text-sm text-gray-900 w-32"
              />
            </div>
          </div>
          <div className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-tl-lg rounded-bl-lg ml-2">
            70% OFF
          </div>
          <div className="text-sm text-gray-600 ml-4">
            <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>:
            <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
            <br />
            <span className="text-xs">min sec</span>
          </div>
        </div>
      </section>

      {/* 5. Pricing Cards */}
     <section className="max-w-5xl mx-auto py-12 px-4">
  <div className="grid md:grid-cols-3 gap-6">
    {/* 1-month plan */}
    <div className="border rounded-2xl p-6 flex flex-col justify-between text-center bg-white">
      <div>
        <h3 className="text-xl font-semibold">1-month plan</h3>
        <span className="inline-block text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-0.5 rounded mt-2">
          Save 61%
        </span>
        <p className="mt-3 text-gray-500 line-through">$27.33</p>
        <p className="text-lg font-bold">$10.66</p>
        <div className="border-t my-4" />
        <p className="text-gray-500 line-through">$0.91</p>
        <p className="text-2xl font-bold">
          $0.35 <span className="text-base font-normal text-gray-500">per day</span>
        </p>
      </div>
    </div>

    {/* 3-month plan (Most popular) */}
    <div className="relative border-2 border-blue-600 rounded-2xl p-6 flex flex-col justify-between text-center bg-white shadow-lg">
      <div className="absolute -top-5 inset-x-0 flex justify-center">
        <div className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
          Most popular
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">3-month plan</h3>
        <span className="inline-block text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-0.5 rounded mt-2">
          Save 70%
        </span>
        <p className="mt-3 text-gray-500 line-through">$49.23</p>
        <p className="text-lg font-bold">$14.77</p>
        <div className="border-t my-4" />
        <p className="text-gray-500 line-through">$0.55</p>
        <p className="text-2xl font-bold">
          $0.16 <span className="text-base font-normal text-gray-500">per day</span>
        </p>
      </div>
    </div>

    {/* 1-year plan */}
    <div className="border rounded-2xl p-6 flex flex-col justify-between text-center bg-white">
      <div>
        <h3 className="text-xl font-semibold">1-year plan</h3>
        <span className="inline-block text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-0.5 rounded mt-2">
          Save 61%
        </span>
        <p className="mt-3 text-gray-500 line-through">$117.53</p>
        <p className="text-lg font-bold">$45.84</p>
        <div className="border-t my-4" />
        <p className="text-gray-500 line-through">$0.32</p>
        <p className="text-2xl font-bold">
          $0.12 <span className="text-base font-normal text-gray-500">per day</span>
        </p>
      </div>
    </div>
  </div>

  {/* CTA button */}
  <div className="mt-8 text-center">
    <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg">
      GET MY PLAN
    </button>
    <p className="text-xs text-gray-500 max-w-2xl mx-auto mt-3">
      By clicking “Get My Plan”, I agree to pay $14.77 for a 3-month introductory plan. Unless I
      cancel before it ends, JobEscape will automatically charge $49.23 every 3 months. I can cancel
      anytime from the subscription page in my account to avoid future charges.
    </p>
  </div>

  {/* Payment icons */}
  <div className="mt-6 text-center">
    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-full">
      ✅ Pay safe and secure
    </div>
    <div className="flex justify-center gap-2 mt-3">
      <Image src="/paymentcards.png" alt="Visa" width={200} height={200} />
    </div>
  </div>
</section>


      {/* 6. Guarantee */}
      <section className="text-center text-sm text-gray-600 px-6 pb-10">
        <p>30-day Money-Back Guarantee</p>
      </section>

      {/* 7. Highlights */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Highlight of your plan</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-6 shadow-sm">
            Step-by-step guides
          </div>
          <div className="border rounded-2xl p-6 shadow-sm">
            Access to 20+ AI Tools
          </div>
        </div>
      </section>

      {/* 8. AI Tools */}
      <section className="text-center bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">
          Get access to 20+ AI Tools in one place
        </h2>
        <p className="text-gray-600">
          Stop overpaying for tools, enjoy all-in-one AI tools in your plan.
        </p>
      </section>

      {/* 9. Testimonials */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Results that make us proud</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-2xl shadow-sm p-6">
              <p className="text-sm">Testimonial {i} lorem ipsum...</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ (Custom Accordion) */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">People often ask</h2>
        <details className="border rounded-lg p-4 mb-3">
          <summary className="cursor-pointer font-semibold">
            What happens after payment?
          </summary>
          <p className="mt-2 text-sm text-gray-600">
            You get instant access to your personalized plan and resources.
          </p>
        </details>
        <details className="border rounded-lg p-4">
          <summary className="cursor-pointer font-semibold">
            Can I cancel anytime?
          </summary>
          <p className="mt-2 text-sm text-gray-600">
            Yes, you can cancel anytime from your account settings.
          </p>
        </details>
      </section>

      {/* 11. Final Pricing */}
      <section className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Choose your plan</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["1-month plan", "3-month plan", "1-year plan"].map((plan, idx) => (
            <div
              key={plan}
              className={`border rounded-2xl shadow-sm p-6 flex flex-col gap-4 text-center ${
                idx === 1 ? "border-blue-600 shadow-lg" : ""
              }`}
            >
              <h3 className="text-lg font-semibold">{plan}</h3>
              <p className="text-2xl font-bold">
                {idx === 0 ? "$0.35" : idx === 1 ? "$0.16" : "$0.12"}/day
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Choose
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="text-center text-sm text-gray-600 py-6 border-t">
        <p>© 2025 Jobescape. All rights reserved.</p>
        <div className="flex gap-4 justify-center mt-2">
          <a href="#">Terms</a>·<a href="#">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
