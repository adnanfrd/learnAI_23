"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  {
    text: "We offer high-income skill courses from world's best experts",
    link: "#",
  },
  {
    text: "We’ll personalize learning program for you",
    link: "#",
  },
  {
    text: "We’ll support you until getting results",
    link: "#",
  },
  {
    text: "We offer money-back guarantee - that’s how much we are confident",
    link: "#",
  },
];

export default function FreelancerSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#1662f3] px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8 sm:p-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-8">
          We can fully enhance your <br className="hidden sm:block" />
          potential as a Freelancer
        </h2>

        <ul className="space-y-6">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-700"
            >
              <span className="text-base sm:text-lg">{feature.text}</span>
              <a
                href={feature.link}
                className="mt-2 sm:mt-0 flex items-center text-sm sm:text-base text-gray-900 font-medium hover:text-blue-600 transition"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
