"use client";

import { motion } from "framer-motion";
import { Star, Sparkles, Users, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-900" 
      style={{
        backgroundImage: "url('/d1slyWNLomUm7eU304IY5rDDr8.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
        >
          Code with AI{" "}
          <span className="text-blue-600">Made Simple</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600"
        >
          Don’t fear coding. Build apps faster with AI as your co-pilot.
          Perfect for beginners and non-coders.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex justify-center"
        >
          <button className="px-8 py-4 text-lg bg-blue-600 text-white hover:bg-blue-700 rounded-full shadow-lg">
            Start Learning Free
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-[#fafafa] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <Sparkles className="w-10 h-10 text-blue-600 mx-auto" />,
              title: "AI Co-Pilot",
              desc: "Learn coding step by step with AI guiding you along the way.",
            },
            {
              icon: <Users className="w-10 h-10 text-pink-500 mx-auto" />,
              title: "For Beginners",
              desc: "No coding experience needed. Start with simple projects.",
            },
            {
              icon: <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />,
              title: "No-Code & Low-Code",
              desc: "Use powerful AI-driven tools to build apps without heavy coding.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              {f.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Beginners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I built my first app without writing a single line of code. The AI walked me through everything!",
                name: "Sarah M.",
              },
              {
                quote:
                  "As someone scared of coding, this made it fun and easy. I feel empowered now.",
                name: "James L.",
              },
              {
                quote:
                  "Finally, a way to create apps without the stress of traditional coding.",
                name: "Emily R.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#fafafa] rounded-xl p-6 shadow-md"
              >
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Build Your First App?
        </motion.h2>
        <p className="text-lg mb-8">
          Join thousands of beginners turning ideas into apps with AI co-pilot.
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100">
          Start for Free
        </button>
      </section>
    </main>
  );
}
