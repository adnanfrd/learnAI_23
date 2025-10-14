"use client";
import ReviewsSection from "@/components/reviewpage/ReviewsSection";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FreelancerSection from "@/components/reviewpage/FreelancerSection";
import QuizSection from "@/components/homePage/QuizSection";

const ReviewHero = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-[#f6f4ff] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-lg text-center md:text-left">
            <span className="px-4 py-1 rounded-full bg-[#ede9fe] text-[#6b21a8] text-sm font-medium">
              Jobescape Reviews
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#1e1b4b] leading-snug">
              Real Reviews from People
              Who Started Freelancing with Us
            </h2>

            <div className="flex items-center justify-center md:justify-start gap-2 mt-6">
              <Image
                src="/rating-removebg-preview.png"
                alt="Trustpilot stars"
                width={120}
                height={24}
              />
            </div>

            <Link href="#reviews">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-8 px-6 py-3 bg-[#2563eb] cursor-pointer
               hover:bg-[#1d4ed8] text-white font-medium rounded-lg"
              >
                Read reviews
              </motion.button>
            </Link>
          </div>

          <div className="mt-10 md:mt-0">
            <Image
              src="/review_hero.svg"
              alt="Review illustration"
              width={440}
              height={380}
              className="w-[380px] md:w-[440px]"
            />
          </div>
        </div>
      </section>
      <ReviewsSection />
      <FreelancerSection/>
      <QuizSection/>
    </>
  );
};

export default ReviewHero;
