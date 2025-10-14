import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";
import { SupportProvider } from "@/components/SupportProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobEscape - Build & Sell AI Agents | No experience required",
  description:
    "Learn to build and sell AI agents with JobEscape. No coding experience needed. Start your journey to financial freedom today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ClientLayoutWrapper>
          <SupportProvider>
          {children}
          </SupportProvider>
          </ClientLayoutWrapper>
     
      </body>
    </html>
  );
}
