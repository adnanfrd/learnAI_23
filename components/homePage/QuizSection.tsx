import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const QuizSection = () => {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-6">
            Take our FREE quiz to go to the next level in freelancing journey
          </h2>
          <Link href="/auth/chat-v3">
            <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium rounded-md px-6 py-3 flex items-center gap-2 hover:scale-105  transition">
              Get Your Freelancing Plan Now <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        <div>
          <Image
            src="/quiz_img.avif"
            alt="Quiz Section"
            width={500}
            height={500}
            className="rounded-2xl shadow-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
