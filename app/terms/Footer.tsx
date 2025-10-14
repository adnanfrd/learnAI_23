import React from "react";
import { Youtube, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si"; 
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1A2533] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Jobescape Logo"
            height={32} width={32}
             className="h-8 w-8" />
            <span className="text-white font-semibold text-lg">Jobescape</span>
          </div>

          <div className="flex gap-4 text-gray-300">
            <a href="#" className="hover:text-white">
              <SiTiktok size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:items-end gap-2 mt-6 md:mt-0 text-sm text-gray-300">
          <Link href="/terms/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms/subscription-terms" className="hover:text-white">
            Subscription Policy
          </Link>
          <Link href="/terms/terms-conditions" className="hover:text-white">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
