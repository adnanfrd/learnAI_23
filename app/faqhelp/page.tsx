"use client";

import {
  Search,
  User,
  PlayCircle,
  CreditCard,
  HelpCircle,
  X,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { useState } from "react";

export default function HelpCenterPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-white text-gray-900">
      <header className="bg-[#2664eb]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-semibold text-white text-lg">
            Jobescape Help Center
          </h1>

          <nav className="hidden md:flex text-white items-center gap-6 text-sm">
            <Link href="/terms/terms-conditions" className="hover:underline">
              Terms and conditions
            </Link>
            <Link href="/auth/login" className="hover:underline">
              Login
            </Link>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#1f55c9] text-white px-6 py-4 space-y-4 text-sm"
          >
            <Link
              href="/terms/terms-conditions"
              className="block hover:underline"
            >
              Terms and conditions
            </Link>
            <Link href="/auth/login" className="block hover:underline">
              Login
            </Link>
          </motion.nav>
        )}
      </header>

      <section className="bg-gradient-to-t from-blue-200 to-blue-600 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Advices and answers from Jobescape Team 🚀
        </h2>
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for articles..."
            className="w-full rounded-full py-3 px-6 pl-12 text-gray-700 focus:outline-none shadow-md focus:bg-white transition"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <User className="w-8 h-8 text-blue-600" />,
            title: "Who we are?",
            desc: "Our mission.",
            authors: 1,
            articles: 3,
          },
          {
            icon: <PlayCircle className="w-8 h-8 text-blue-600" />,
            title: "Getting Started",
            desc: "Everything you need to get going.",
            authors: 1,
            articles: 4,
          },
          {
            icon: <CreditCard className="w-8 h-8 text-blue-600" />,
            title: "Subscription",
            desc: "Managing subscription plan.",
            authors: 3,
            articles: 5,
          },
          {
            icon: <User className="w-8 h-8 text-blue-600" />,
            title: "Account",
            desc: "Managing personal account details.",
            authors: 2,
            articles: 2,
          },
          {
            icon: <HelpCircle className="w-8 h-8 text-blue-600" />,
            title: "FAQs",
            desc: "Answers to frequently asked questions.",
            authors: 4,
            articles: 7,
          },
        ].map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
          >
            {cat.icon}
            <h3 className="font-semibold text-lg mt-4">{cat.title}</h3>
            <p className="text-gray-500 text-sm">{cat.desc}</p>
            <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
              {Array.from({ length: cat.authors }).map((_, idx) => (
                <User key={idx} className="w-4 h-4 text-gray-400" />
              ))}
              · {cat.articles} article{cat.articles > 1 ? "s" : ""}
            </div>
          </motion.div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10">
          <h3 className="font-semibold text-lg mb-4">
            The most popular articles 🏆
          </h3>
          <ul className="space-y-3">
            {[
              "What Jobescape is?",
              "Registration",
              "Courses for beginners and advanced learners",
              "Structure and Tools",
              "How to get a Refund for your Jobescape Subscription?",
            ].map((item, i) => (
              <li
                key={i}
                className="flex justify-between items-center px-3 py-2 rounded-md text-gray-600 hover:bg-blue-200 hover:text-blue-900 cursor-pointer transition"
              >
                {item}
                <span className="text-gray-400">›</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Need more help?</h3>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to our team via the live messenger in the
            bottom-right corner! 🎧
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">
            Start Your Path in Freelance!
          </button>
        </div>
      </section>

      <footer className="bg-blue-600 text-white mt-16 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="font-semibold mb-4">Jobescape Help Center</h4>
          <div className="flex justify-center gap-6 mb-4 text-sm">
            <Link href="/terms/terms-conditions/" className="hover:underline">
              Terms and Conditions
            </Link>
            <Link href="/terms/subscription-terms/" className="hover:underline">
              Subscription Terms
            </Link>
            <Link href="/terms/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
          <div className="flex justify-center gap-6 text-2xl mb-4">
            <FaTiktok className="w-6 h-6" />
            <FaFacebook className="w-6 h-6" />
            <FaYoutube className="w-6 h-6" />
          </div>
          <p className="text-sm text-blue-100">We run on Intercom</p>
        </div>
      </footer>
    </main>
  );
}
