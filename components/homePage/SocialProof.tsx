"use client";
import { Star } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "So",
    date: "December 04, 2024",
    image: "/review_1.avif",
    text: "Exceeded expectations. This lesson gives you the idea of what to expect in this freelancing journey and how to prepare yourself for it. That’s the base for everyone in the future.",
  },
  {
    name: "Simon Paul",
    date: "December 28, 2023",
    image: "/review_2.avif",
    text: "Failure is worse enemy in progress. But changing my mindset helped me in 2023 in my little business. I do enjoy every moment when I learn something new. After deeply diving in these guidelines of this company I realised that it is not only doing business or job, it also shapes a person’s mindset.",
  },
  {
    name: "Jesahalvia Max",
    date: "November 05, 2024",
    image: "/review_3.avif",
    text: "The company’s reputation well respected. I think this company is really a well run business. By reading all its course’s contents, I’m really impressed. I see a lot of successful business ideas and steps mentioned in the content.",
  },
  {
    name: "Lisa DeGroff",
    date: "December 01, 2024",
    image: "/review_4.avif",
    text: "I have never thought of freelancing and am shocked to find opportunities, without a college degree.",
  },
  {
    name: "Luz Anabell Torres Jaramillo",
    date: "December 04, 2024",
    image: "/review_5.avif",
    text: "Honestly I feel like it’s the best opportunity to be better, this app is a great platform. I recommend it 100%.",
  },
  {
    name: "Briana",
    date: "December 04, 2024",
    image: "/review_6.avif",
    text: "Why is freelancing a good source of income? This company is great for people who are looking to find more income but aren’t sure where to start. They have step by step lessons that guide you through the process from beginning to the end.",
  },
  {
    name: "Mahta Teimourian",
    date: "November 07, 2024",
    image: "/review_7.avif",
    text: "Absolutely recommended. It’s wonderful how you teach all the crucial steps for freelancing work! You make sure every beginner learns and same time your content has new ideas and important tips for people whom already in business!",
  },
];

const TrustpilotStars = () => (
  <div className="flex space-x-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-[#30a46c] p-1 rounded"
      >
        <Star className="text-white w-5 h-5" />
      </motion.div>
    ))}
  </div>
);

const SocialProof = () => {
  return (
    <section
      id="testimonials"
      className="py-16 bg-white"
      style={{
        backgroundImage: "url('/d1slyWNLomUm7eU304IY5rDDr8.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Social Proof</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="bg-white border border-[#fafafa] rounded-xl p-5 shadow-sm"
            >
              <div className="flex items-center mb-3">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <motion.h3
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="font-semibold text-gray-900"
                  >
                    {review.name}
                  </motion.h3>
                  <motion.p
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-sm text-gray-500"
                  >
                    {review.date}
                  </motion.p>
                </div>
              </div>
              <TrustpilotStars />
              <motion.p
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-gray-700 text-md leading-relaxed"
              >
                {review.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
