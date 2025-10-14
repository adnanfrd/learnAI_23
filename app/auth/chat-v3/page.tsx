"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-white overflow-x-hidden">
      <header className="p-10 text-end">
        <button className="cursor-pointer" onClick={() => setSidebarOpen(true)}>
          <Menu />
        </button>
      </header>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white text-black shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-lg font-bold cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
        <nav className="mt-16 flex flex-col gap-4 px-6">
          <Link href="/auth/login" className="hover:text-blue-600">
            Login
          </Link>
          <Link href="/terms/privacy-policy" className="hover:text-blue-600">
            Privacy Policy
          </Link>
          <Link href="/terms/terms-conditions" className="hover:text-blue-600">
            Money-Back Policy
          </Link>
          <Link
            href="/terms/subscription-terms"
            className="hover:text-blue-600"
          >
            Subscription Policy
          </Link>
          <Link href="/" className="hover:text-blue-600">
            Help Center
          </Link>
        </nav>
      </div>

      <main className="flex flex-col items-center text-center px-4 py-2">
        <div className="mb-2">
          <Image
            src="/logo_white_desktop.webp"
            alt="Background Pattern Top"
            width={120}
            height={120}
            className="w-full h-auto"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">
          EARN $70K-$100K per YEAR <br /> AUTOMATING TASKS WITH AI
        </h2>
        <p className="mt-2 text-gray-200">
          Take the quiz. Start earning with zero experience.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-10">
          <div></div>
          <Image
            src="/female_desktop.webp"
            alt="person"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        <div className="bg-white/10 text-white mt-8 p-4 rounded-lg max-w-md">
          <p>
            Lorena, ex-housewife from NY <br />{" "}
            <span className="italic">
              “I finally became financially independent with Jobescape”
            </span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center mt-10 text-center">
          <div>
            <p className="font-bold text-xl">120 000+</p>
            <p className="text-sm">new freelancers with us</p>
          </div>
          <div>
            <p className="font-bold text-xl">4.6 ★</p>
            <p className="text-sm">on Trustpilot</p>
          </div>
          <div>
            <p className="font-bold text-xl">WIN-WIN</p>
            <p className="text-sm">Money back guarantee</p>
          </div>
        </div>
      </main>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
        <button
          onClick={() => router.push("/quiz")}
          className="bg-blue-500 hover:bg-blue-700 px-8 py-3 rounded-lg font-bold shadow-lg"
        >
          Get started
        </button>
      </div>

      <div className="h-[20vh]" />
    </div>
  );
}
