"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Mail } from "lucide-react";

const faqs = [
  {
    question: "What Jobescape is?",
    answer:
      "Jobescape is your path to freedom through freelancing and AI. Learn at your own pace, work from anywhere, and gain in-demand skills. Build a career that matches your goals and values. We offer flexibility, growth, and the chance to turn work into true fulfillment.",
  },
  {
    question: "How can I start?",
    answer:
      "Curious about freelancing and AI but don’t know where to start? At Jobescape, we guide you step by step - no tech skills needed. Create your account, start with our “AI Starter Kit,” and explore easy tools to begin earning online. Learn, practice, and grow. Here is detailed instruction how to register.",
  },
  {
    question: "How can I cancel subscription?",
    answer:
      "Here’s a quick guide to walk you through the process. Still need help? Contact us, and we'll be happy to assist you.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-center mb-10">
          Answers to frequently asked questions.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-medium text-gray-900"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg mt-10 p-6 text-center">
          <h3 className="text-lg font-bold mb-2">Still have questions?</h3>
          <p className="text-gray-600 text-sm mb-2">
            Feel free to contact our Support Team via the live messenger or
            email
          </p>
          <a
            href="mailto:support@jobescape.me"
            className="text-blue-600 hover:underline block mb-4"
          >
            support@jobescape.me
          </a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 mx-auto bg-blue-600 text-white px-6 py-2 rounded-md shadow"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
