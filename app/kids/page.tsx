"use client";

import { motion } from "framer-motion";
import { Book, Gamepad2, Brain, Star, Users, Smile } from "lucide-react";

export default function AIForKidsStudents() {
  return (
    <main className="bg-white text-gray-900"
      style={{
        backgroundImage: "url('/d1slyWNLomUm7eU304IY5rDDr8.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      {/* Hero Section */}
      <section className="text-center py-24 px-6 max-w-5xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          AI for Kids & Students
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Make learning fun, engaging, and effective! AI as your child’s learning
          companion, turning complex topics into playful stories and games.
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
            icon: Gamepad2,
            title: "Gamified Learning",
            text: "Interactive quizzes, points, and badges to make studying fun.",
          },
          {
            icon: Brain,
            title: "Smart Explanations",
            text: "AI simplifies complex concepts into bite-sized, easy lessons.",
          },
          {
            icon: Book,
            title: "Story-Based Lessons",
            text: "Turn math, science, and history into exciting adventures.",
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

      {/* Benefits */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Students & Parents Love It
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Smile,
              title: "Engaging & Fun",
              text: "Kids enjoy learning with stories and games they relate to.",
            },
            {
              icon: Users,
              title: "Parent Friendly",
              text: "Parents can track progress and support their child’s journey.",
            },
            {
              icon: Star,
              title: "Better Results",
              text: "Improved attention, retention, and exam performance.",
            },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg"
            >
              <b.icon className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-600">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Parents & Kids Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Emma (Parent)",
              text: "My daughter finally enjoys math! The games keep her motivated.",
            },
            {
              name: "Leo (Student, 12)",
              text: "History is fun now. It feels like I’m in an adventure story!",
            },
            {
              name: "Sophie (Teacher)",
              text: "A great tool for classrooms. Students stay engaged and learn faster.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-md"
            >
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
          Learning Made Fun with AI
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-full shadow-lg hover:bg-yellow-300"
        >
          Start Learning Today
        </motion.button>
      </section>
    </main>
  );
}
