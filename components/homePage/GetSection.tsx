"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  AlignLeft,
  Anchor,
  Briefcase,
  IdCard,
  List,
  Mail,
  Megaphone,
  MessageCircle,
  Tag,
} from "lucide-react";

const GetSection = () => {
  return (
    <section className="bg-blue-600 rounded-3xl py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="flex justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-10"
        >
          But What You Get
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="flex justify-center"
        >
          <Image
            src="/whatwomen.avif"
            alt="Woman learning with laptop"
            width={420}
            height={420}
            className="rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-[420px] h-auto"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl p-5 shadow-md"
          >
            <div className="text-xs sm:text-sm text-gray-600 mb-2">
              Your learning progress
            </div>
            <div className="text-gray-800 font-medium mb-2 text-sm sm:text-base">
              12 lessons complete, you’re on a good pace!
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 w-2/3"></div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-gray-600">
              <span className="font-semibold">
                A Personalized Learning Plan
              </span>
              <br />
              Learn at your own pace—focused on what suits you best: writing,
              marketing, or automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl p-5 shadow-md"
          >
            <div className="grid grid-cols-3 gap-3 mb-4 text-base sm:text-lg">
              <span className="bg-pink-500 text-white p-2 rounded-lg flex items-center justify-center">
                <Megaphone className="w-5 h-5" />
              </span>
              <span className="bg-green-500 text-white p-2 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </span>
              <span className="bg-purple-500 text-white p-2 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </span>
              <span className="bg-yellow-500 text-white p-2 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5" />
              </span>
              <span className="bg-red-500 text-white p-2 rounded-lg flex items-center justify-center">
                <Anchor className="w-5 h-5" />
              </span>
              <span className="bg-indigo-500 text-white p-2 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </span>
              <span className="bg-orange-500 text-white p-2 rounded-lg flex items-center justify-center">
                <AlignLeft className="w-5 h-5" />
              </span>
              <span className="bg-teal-500 text-white p-2 rounded-lg flex items-center justify-center">
                <IdCard className="w-5 h-5" />
              </span>
              <span className="bg-blue-500 text-white p-2 rounded-lg flex items-center justify-center">
                <List className="w-5 h-5" />
              </span>
            </div>
            <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
              Access to AI Assistants
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              30+ top tools and GPT-powered bots at your fingertips—to speed up
              your work and handle 80% of the routine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl p-5 shadow-md sm:col-span-2"
          >
            <div className="mb-4">
              <Image
                src="/flow_img.avif"
                alt="Template example"
                width={600}
                height={200}
                className="rounded-md w-full h-auto"
              />
            </div>
            <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
              Step by Step Guides and Templates
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              No empty theory. You get ready-to-use examples, checklists, and
              templates to apply right away.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetSection;
