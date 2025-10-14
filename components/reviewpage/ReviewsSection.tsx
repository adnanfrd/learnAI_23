"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Review = {
  id: number;
  name: string;
  country: string;
  date: string;
  profileImg?: string;
  rating: number;
  title: string;
  text: string;
  categories: string[];
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Francisco Baez",
    country: "US",
    date: "Feb 11, 2025",
    rating: 5,
    title: "JobEscape is a transformative platform…",
    text: "JobEscape is a transformative platform for anyone looking to break free from the traditional 9-to-5 grind...",
    categories: ["ethics", "app"],
  },
  {
    id: 2,
    name: "Benjamin Willie",
    country: "PG",
    date: "Nov 13, 2024",
    profileImg: "/photo1.png",
    rating: 5,
    title: "I signed up for this platform…",
    text: "I have signed up because I am very interested in affiliate marketing and the community here is supportive.",
    categories: ["recommendation", "user experience"],
  },
  {
    id: 3,
    name: "Bibek Roka",
    country: "JP",
    date: "Nov 12, 2024",
    rating: 5,
    title: "Simple and effective learning",
    text: "I didn’t know much better but I want to learn. This platform made it easy to start. Thank you! 🙂",
    categories: ["technology", "service"],
  },
  {
    id: 4,
    name: "Sarah Johnson",
    country: "UK",
    date: "Oct 15, 2024",
    rating: 4,
    title: "Worth every penny!",
    text: "The Personal Plan gives so much value for the price. I’m impressed with the resources available.",
    categories: ["value for money", "recommendation"],
  },
  {
    id: 5,
    name: "Ahmed Khan",
    country: "PK",
    date: "Sep 9, 2024",
    rating: 5,
    title: "Clear instructions, easy to follow",
    text: "The step-by-step instructions made the onboarding very easy for me.",
    categories: ["instructions", "service"],
  },
  {
    id: 6,
    name: "Lisa Wong",
    country: "SG",
    date: "Aug 21, 2024",
    rating: 5,
    title: "AI support is outstanding",
    text: "The artificial intelligence assistant really helps in guiding me through my tasks. Very futuristic.",
    categories: ["artificial intelligence", "app"],
  },
  {
    id: 7,
    name: "Carlos Mendes",
    country: "BR",
    date: "Aug 18, 2024",
    rating: 4,
    title: "Great for remote locations",
    text: "Even with slower internet in my town, the platform works smoothly without interruptions.",
    categories: ["location", "technology"],
  },
  {
    id: 8,
    name: "Emily Davis",
    country: "CA",
    date: "Jul 2, 2024",
    rating: 5,
    title: "Website is very intuitive",
    text: "The design of the website is clean and user-friendly. Easy to navigate.",
    categories: ["website", "user experience"],
  },
  {
    id: 9,
    name: "Ravi Sharma",
    country: "IN",
    date: "Jun 28, 2024",
    rating: 5,
    title: "Excellent customer service",
    text: "The support team solved my problem in minutes. Very professional.",
    categories: ["service", "recommendation"],
  },
  {
    id: 10,
    name: "Hannah Müller",
    country: "DE",
    date: "Jun 1, 2024",
    rating: 5,
    title: "Ethical and transparent",
    text: "I appreciate how transparent the company is about their policies and data usage.",
    categories: ["ethics", "instructions"],
  },
  {
    id: 11,
    name: "John Park",
    country: "KR",
    date: "May 25, 2024",
    rating: 5,
    title: "Affordable and helpful",
    text: "Compared to others, this plan is very affordable and really delivers results.",
    categories: ["value for money", "service"],
  },
  {
    id: 12,
    name: "Sophia Martinez",
    country: "MX",
    date: "May 14, 2024",
    rating: 4,
    title: "Guides are well written",
    text: "The learning guides and instructions are detailed yet easy to understand.",
    categories: ["instructions", "website"],
  },
  {
    id: 13,
    name: "Daniel Chen",
    country: "CN",
    date: "Apr 22, 2024",
    rating: 5,
    title: "Smart AI integration",
    text: "The AI tools make work faster and smarter. It feels like having a personal assistant.",
    categories: ["artificial intelligence", "user experience"],
  },
  {
    id: 14,
    name: "Olivia Brown",
    country: "AU",
    date: "Apr 9, 2024",
    rating: 4,
    title: "Great mobile app",
    text: "The app runs smoothly on my phone and syncs with my desktop easily.",
    categories: ["app", "technology"],
  },
  {
    id: 15,
    name: "Ali Hassan",
    country: "AE",
    date: "Mar 19, 2024",
    rating: 5,
    title: "Excellent recommendation system",
    text: "The recommendations are tailored perfectly to my needs.",
    categories: ["recommendation", "artificial intelligence"],
  },
  {
    id: 16,
    name: "Maria Rossi",
    country: "IT",
    date: "Mar 2, 2024",
    rating: 5,
    title: "User experience is top-notch",
    text: "The interface is smooth, fast, and pleasant to use. No clutter, no confusion.",
    categories: ["user experience", "website"],
  },
  {
    id: 17,
    name: "James Wilson",
    country: "US",
    date: "Feb 11, 2024",
    rating: 4,
    title: "Technology that works",
    text: "Behind the scenes, the tech is powerful but they keep the experience simple.",
    categories: ["technology", "service"],
  },
  {
    id: 18,
    name: "Noura Al-Fulan",
    country: "SA",
    date: "Jan 28, 2024",
    rating: 5,
    title: "Works well even abroad",
    text: "I travel a lot and the platform adapts to different regions without issues.",
    categories: ["location", "website"],
  },
  {
    id: 19,
    name: "Pedro Alvarez",
    country: "ES",
    date: "Jan 12, 2024",
    rating: 5,
    title: "Service team is amazing",
    text: "I had questions and the service team went beyond expectations.",
    categories: ["service", "recommendation"],
  },
  {
    id: 20,
    name: "Aiko Tanaka",
    country: "JP",
    date: "Dec 22, 2023",
    rating: 4,
    title: "Clear ethics, strong trust",
    text: "The platform makes me trust them because of their ethical approach.",
    categories: ["ethics", "value for money"],
  },
  {
    id: 21,
    name: "Michael Scott",
    country: "US",
    date: "Dec 10, 2023",
    rating: 5,
    title: "Great value and features",
    text: "You get a lot of features compared to what you pay for. Highly recommended.",
    categories: ["value for money", "technology"],
  },
  {
    id: 22,
    name: "Yara Ibrahim",
    country: "EG",
    date: "Nov 28, 2023",
    rating: 5,
    title: "Step-by-step clarity",
    text: "Instructions are easy to follow and practical, even for beginners.",
    categories: ["instructions", "user experience"],
  },
  {
    id: 23,
    name: "Lucas Silva",
    country: "PT",
    date: "Nov 5, 2023",
    rating: 5,
    title: "AI feels human",
    text: "The artificial intelligence doesn’t feel robotic. Very natural interactions.",
    categories: ["artificial intelligence", "ethics"],
  },
  {
    id: 24,
    name: "Chloe Martin",
    country: "FR",
    date: "Oct 22, 2023",
    rating: 4,
    title: "App is lightweight",
    text: "The app doesn’t drain my phone battery and loads quickly.",
    categories: ["app", "website"],
  },
  {
    id: 25,
    name: "David Lee",
    country: "NZ",
    date: "Oct 1, 2023",
    rating: 5,
    title: "User experience matters",
    text: "The team clearly designed the system around users. It feels effortless.",
    categories: ["user experience", "recommendation"],
  },
  {
    id: 26,
    name: "Svetlana Petrova",
    country: "RU",
    date: "Sep 12, 2023",
    rating: 5,
    title: "Fast technology",
    text: "Processing speed is amazing. No lags at all.",
    categories: ["technology", "app"],
  },
  {
    id: 27,
    name: "George Smith",
    country: "UK",
    date: "Aug 23, 2023",
    rating: 4,
    title: "Location independent",
    text: "I can use this platform from anywhere I travel. Very reliable.",
    categories: ["location", "service"],
  },
  {
    id: 28,
    name: "Mei Ling",
    country: "HK",
    date: "Aug 5, 2023",
    rating: 5,
    title: "Website is smooth",
    text: "Pages load quickly, design is modern, and responsive for all devices.",
    categories: ["website", "value for money"],
  },
  {
    id: 29,
    name: "Victor Hugo",
    country: "AR",
    date: "Jul 18, 2023",
    rating: 5,
    title: "Trustworthy and ethical",
    text: "Ethical practices make me feel confident in continuing to use this service.",
    categories: ["ethics", "recommendation"],
  },
  {
    id: 30,
    name: "Anna Kowalska",
    country: "PL",
    date: "Jul 2, 2023",
    rating: 5,
    title: "Amazing service experience",
    text: "Every time I reach out, I feel valued. Great team!",
    categories: ["service", "user experience"],
  },
];



const categories = [
  "value for money",
  "instructions",
  "ethics",
  "app",
  "recommendation",
  "artificial intelligence",
  "user experience",
  "technology",
  "location",
  "website",
  "service",
];

export default function ReviewsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const reviewsPerPage = 5;

  const filteredReviews = selectedCategory
    ? reviews.filter((r) => r.categories.includes(selectedCategory))
    : reviews;

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = filteredReviews.slice(
    startIndex,
    startIndex + reviewsPerPage
  );

  return (
    <section id="reviews" className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Over{" "}
          <span className="bg-black text-white px-3 -rotate-4 inline-block py-1 rounded-full">
            3000+
          </span>{" "}
          Reviews
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Our users’ experiences and insights demonstrate the value and
          effectiveness of the Personal Plan
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 mt-8 px-4">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setSelectedCategory(selectedCategory === cat ? null : cat)
            }
            className={`px-4 py-2 rounded-full border text-sm font-medium shadow-sm transition ${
              selectedCategory === cat
                ? "bg-blue-500 text-white border-green-500"
                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12 space-y-8 px-4">
        <AnimatePresence mode="wait">
          {currentReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3">
                {review.profileImg ? (
                  <Image
                    src={review.profileImg}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg text-gray-600">
                    {review.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">
                    {review.country} • {review.date}
                  </p>
                </div>
              </div>

              <div className="flex mt-3 text-yellow-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <h3 className="font-semibold mt-3 text-lg">{review.title}</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-3 border rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-40"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-3 border rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-40"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      )}
    </section>
  );
}
