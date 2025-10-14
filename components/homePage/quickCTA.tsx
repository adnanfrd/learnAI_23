import React from "react";
import Image from "next/image";
import Link from "next/link";

const QuizCTA = () => {
  return (
    <section className="relative bg-blue-600 text-center text-white py-12 md:py-16 rounded-3xl overflow-hidden">
      <h2 className="text-xl md:text-3xl font-bold mb-3">
        Not Sure? Take a Quiz!
      </h2>
      <p className="text-sm md:text-base mb-6 text-blue-100">
        Find your path in under 5 minutes
      </p>
      <Link href="/auth/chat-v3">
        <button className="bg-white cursor-pointer text-black px-5 py-3 md:px-6 md:py-3 rounded-md shadow hover:scale-105 transition">
          Get Your Freelancing Plan Now
        </button>
      </Link>

      <div className="hidden md:block">
        <div className="absolute left-12 top-1/2 -translate-y-1/2">
          <Image
            src="/person.avif"
            alt="Profile 1"
            width={90}
            height={90}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        <div className="absolute right-12 top-1/2 -translate-y-1/2">
          <Image
            src="/person2.avif"
            alt="Profile 2"
            width={90}
            height={90}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-8 md:hidden">
        <Image
          src="/person.avif"
          alt="Profile 1"
          width={70}
          height={70}
          className="rounded-full border-4 border-white shadow-lg"
        />
        <Image
          src="/person2.avif"
          alt="Profile 2"
          width={70}
          height={70}
          className="rounded-full border-4 border-white shadow-lg"
        />
      </div>
    </section>
  );
};

export default QuizCTA;
