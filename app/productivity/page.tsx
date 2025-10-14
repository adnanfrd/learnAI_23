"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Workflow,
  Cpu,
  Clock,
  CheckCircle,
  Star,
  Users,
} from "lucide-react";

export default function ProductivityWithAI() {
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
          Productivity with AI
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Automate repetitive tasks, save time, and focus on what really
          matters. Use AI agents, workflow automation, and smart prompts to
          boost your efficiency.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700"
        >
          Start Free Trial
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-6 py-20 max-w-6xl mx-auto">
        {[
          {
            icon: Zap,
            title: "AI Agents",
            text: "Delegate tasks to AI agents that work around the clock.",
          },
          {
            icon: Workflow,
            title: "Workflow Automation",
            text: "Connect tools like n8n and automate your entire business flow.",
          },
          {
            icon: Cpu,
            title: "Prompt Engineering",
            text: "Unlock the power of AI with optimized prompts for any use case.",
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

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 px-6"
          >
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Professionals Love It
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Clock,
              title: "Save Hours",
              text: "Cut down repetitive tasks and reclaim 10+ hours weekly.",
            },
            {
              icon: CheckCircle,
              title: "Error-Free Work",
              text: "AI automation ensures consistency and reduces human error.",
            },
            {
              icon: Users,
              title: "Scale with Ease",
              text: "Handle more clients and projects without extra effort.",
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
          Hear from Freelancers & Professionals
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex P.",
              text: "AI automation cut my admin time in half. I can finally focus on client work.",
            },
            {
              name: "Maria G.",
              text: "Workflow automation with n8n + AI freed up hours every day. Game-changer!",
            },
            {
              name: "Daniel K.",
              text: "Prompt engineering boosted my efficiency in creating client deliverables.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg"
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
          Automate Your Work. Reclaim Your Time.
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-full shadow-lg hover:bg-yellow-300"
        >
          Start Automating Today
        </motion.button>
      </section>
    </main>
  );
}
