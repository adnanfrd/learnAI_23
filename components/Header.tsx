"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSupport } from "@/components/SupportProvider";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setOpen } = useSupport();

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6 bg-white relative shadow-sm">
      <Link href="/">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center cursor-pointer space-x-2"
        >
          <Image src="/logo.png" width={40} height={40} alt="Logo" />
          <span className="font-bold text-lg text-black">Jobescape</span>
        </motion.div>
      </Link>

      <div className="hidden md:flex items-center gap-2 font-normal space-x-6 lg:space-x-8">
        <Link href="#courses">
          <motion.span
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1 text-black py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            Courses <ArrowRight size={14} />
          </motion.span>
        </Link>
        <Link href="#howitworks">
          <motion.span
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1 text-black py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            How It Works <ArrowRight size={14} />
          </motion.span>
        </Link>
        <Link href="#testimonials">
          <motion.span
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1 text-black py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            Testimonials <ArrowRight size={14} />
          </motion.span>
        </Link>
        <Link href="/faqhelp">
          <motion.span
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1 text-black py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            FAQ <ArrowRight size={14} />
          </motion.span>
        </Link>
    
          <motion.span
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(true)}
            className="flex items-center gap-1 text-black py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            Contact <ArrowRight size={14} />
          </motion.span>
   
        <Link href="/reviews">
          <motion.span
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1 text-black py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            Reviews <ArrowRight size={14} />
          </motion.span>
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
        <Link href="/auth/login">
          <motion.button
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-100 hover:bg-gray-200 text-black rounded-lg px-4 lg:px-5 py-2"
          >
            Login
          </motion.button>
        </Link>
        <Link href="/auth/chat-v3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 lg:px-5 py-2"
          >
            Start Now
          </motion.button>
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-start px-6 py-4 space-y-4 z-50"
          >
            <Link href="#courses" className="w-full">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="block w-full text-black hover:bg-gray-100 px-3 py-2 rounded"
              >
                Courses
              </motion.span>
            </Link>
            <Link href="#howitworks" className="w-full">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="block w-full text-black hover:bg-gray-100 px-3 py-2 rounded"
              >
                How It Works
              </motion.span>
            </Link>
            <Link href="#testimonials" className="w-full">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="block w-full text-black hover:bg-gray-100 px-3 py-2 rounded"
              >
                Testimonials
              </motion.span>
            </Link>
            <Link href="/faqhelp" className="w-full">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="block w-full text-black hover:bg-gray-100 px-3 py-2 rounded"
              >
                FAQ
              </motion.span>
            </Link>
            <Link href="/contact" className="w-full">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="block w-full text-black hover:bg-gray-100 px-3 py-2 rounded"
              >
                Contact
              </motion.span>
            </Link>
            <Link href="/reviews" className="w-full">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="block w-full text-black hover:bg-gray-100 px-3 py-2 rounded"
              >
                Reviews
              </motion.span>
            </Link>
            <Link href="/login" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-full bg-gray-100 text-black px-4 py-2 rounded-md hover:bg-gray-200"
              >
                Login
              </motion.button>
            </Link>
            <Link href="/signup" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Start Now
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
