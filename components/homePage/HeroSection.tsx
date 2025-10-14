"use client";
import { Star, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative px-4 sm:px-6 lg:px-12 py-12 sm:py-16 max-w-7xl mx-auto bg-white overflow-hidden"
      style={{
        backgroundImage: "url('/d1slyWNLomUm7eU304IY5rDDr8.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Start Earning as an{" "}
            <span className="text-[#f5a62b] italic">AI-Powered</span> Freelancer
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            We will teach you how to build AI agents that handle business tasks
            like writing, content creation, and automation without any
            experience.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
           <Link href="/auth/chat-v3">
              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium rounded-md px-6 py-3 flex items-center justify-center transition min-w-[250px] whitespace-nowrap"
            >
              {" "}
              Get Your Freelancing Plan <span className="ml-2">→</span>{" "}
            </motion.button>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              Take the FREE quiz to get a personalized learning plan to earn
              from home!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full flex justify-center"
        >
          <Image
            src="/hero-professionals-laptops.avif"
            alt="Two freelancers with laptops"
            width={500}
            height={500}
            className="rounded-2xl w-full max-w-[450px] h-auto"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-4 left-4 bg-white rounded-full px-3 sm:px-4 py-2 shadow-md flex items-center space-x-2 text-sm sm:text-base"
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <span className="font-semibold">80k Users</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-4 right-4 bg-white rounded-full px-3 sm:px-4 py-2 shadow-md flex items-center space-x-2 text-sm sm:text-base"
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold">4.5 Trustpilot</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
