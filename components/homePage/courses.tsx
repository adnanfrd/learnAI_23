"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Freelance Copywriter",
    modules: "5 modules",
    lessons: "45 lessons",
    hours: "15 learning hours",
    description:
      "Master persuasive writing that sells—from attention grabbing headlines to landing pages, ad copy, and email sequences. Learn the psychology of buying, proven copy formulas, and how to freelance with confidence using AI tools.",
    image: "/course1.png",
  },
  {
    title: "Media Buyer/Facebook Ads Manager",
    modules: "6 modules",
    lessons: "48 lessons",
    hours: "16 learning hours",
    description:
      "Learn how to launch, scale, and optimize Facebook & Instagram ad campaigns that convert. This track is ideal for those who want to freelance with e-commerce brands, coaches, or digital products.",
    image: "/course2.png",
  },
  {
    title: "Social Media Manager",
    modules: "6 modules",
    lessons: "46 lessons",
    hours: "13 learning hours",
    description:
      "Learn how to grow and manage social media accounts like a pro. From content creation to scheduling, analytics, and trendspotting—you will master Instagram, TikTok, and other platforms. Plus discover how to go viral and turn views into real income.",
    image: "/course3.png",
  },
  {
    title: "AI Powered Problem Solver",
    modules: "6 modules",
    lessons: "48 lessons",
    hours: "16 learning hours",
    description:
      "As a freelancer, you will leverage powerful tools like ChatGPT, Midjourney, and Make.com to deliver high-impact services—from content generation to automation and digital productivity. You will learn how to create visuals, write faster and build bots.",
    image: "/course4.png",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Courses
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#fafafa] rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start relative overflow-hidden"
            >
              <div className="max-w-lg">
                <span className="inline-block text-xs font-medium text-white bg-blue-600 px-3 py-1 rounded-md mb-3">
                  Course
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                  {course.title}
                </h3>
                <div className="text-sm sm:text-md text-gray-600 mb-3 font-semibold flex flex-wrap gap-3">
                  <span>{course.modules}</span>
                  <span>{course.lessons}</span>
                  <span>{course.hours}</span>
                </div>
                <p className="text-[#9999a0] text-sm sm:text-base leading-relaxed hidden md:block">
                  {course.description}
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0 flex justify-center sm:justify-end w-full sm:w-auto">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={140}
                  height={140}
                  className="object-contain w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
