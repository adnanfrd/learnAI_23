"use client";
import React from "react";
import { motion } from "framer-motion";

const GuarenteeSection = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-white text-center overflow-hidden">
      <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 flex flex-col sm:flex-row justify-center items-center gap-2">
        <span>Earn or</span>
        <span className="bg-black text-white px-4 py-1 rounded-full -rotate-2 inline-block">
          Get Your Money Back
        </span>
      </motion.h2>

      <motion.p className="max-w-2xl mx-auto text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed px-4">
        We teach a real skill, you will learn to build AI agents that help
        businesses: write copy, automate workflows, and create content. If you
        do not land a client and earn within 3 months, we will give you your
        money back.
      </motion.p>
    </section>
  );
};

export default GuarenteeSection;
