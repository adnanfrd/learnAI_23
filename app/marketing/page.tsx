"use client";

import { motion } from "framer-motion";
import { BarChart3, Globe, PenTool, Users, Star } from "lucide-react";

export default function MarketingWithAI() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-24 px-6 max-w-4xl mx-auto"
        style={{
        backgroundImage: "url('/d1slyWNLomUm7eU304IY5rDDr8.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Marketing with AI
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Beat content burnout and scale your marketing with AI-powered tools for
          copywriting, SEO, and geo-targeted campaigns.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700"
        >
          Get Started Free
        </motion.button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-6 py-20 max-w-6xl mx-auto">
        {[
          {
            icon: PenTool,
            title: "AI Copywriting",
            text: "Generate high-converting ad copy, blogs, and emails in minutes.",
          },
          {
            icon: BarChart3,
            title: "SEO Optimization",
            text: "Rank higher with AI-driven keyword research and content suggestions.",
          },
          {
            icon: Globe,
            title: "Geo-Targeted Marketing",
            text: "Personalize campaigns to specific regions and languages instantly.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg"
          >
            <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Loved by Marketers
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Sarah M.",
              text: "As a copywriter, AI helps me save hours per week and keeps my creativity flowing.",
            },
            {
              name: "James T.",
              text: "Our SEO rankings improved within weeks thanks to AI optimization.",
            },
            {
              name: "Lena R.",
              text: "Managing multiple campaigns has never been this easy and efficient.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg"
            >
              <Users className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
              <p className="mb-4 text-gray-700 italic">“{t.text}”</p>
              <p className="font-bold text-gray-900">{t.name}</p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-blue-600 text-white">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Ready to End Content Burnout?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-full shadow-lg hover:bg-yellow-300"
        >
          Start Your Free Trial
        </motion.button>
      </section>
    </main>
  );
}
