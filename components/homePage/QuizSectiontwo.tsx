"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuizSection = () => {
  return (
    <section className="bg-[#fafafa] py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/womenmen.avif"
            alt="Freelancing Quiz"
            width={450}
            height={450}
            priority
            className="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Take our FREE quiz to go to <br className="hidden sm:block" /> the
            next level in your freelancing journey
          </h2>

          <Link href="/auth/chat-v3">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-blue-600 text-white cursor-pointer font-medium px-6 py-3 rounded-md shadow-md"
            >
              Get Your Freelancing Plan Now →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default QuizSection;
