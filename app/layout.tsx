import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";
import { SupportProvider } from "@/components/SupportProvider";

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Italic-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});
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
