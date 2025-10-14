"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/app/terms/Footer";
import { SupportProvider } from "./SupportProvider";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hiddenRoutes = [
    "/admin",
    "/faqhelp",
    "/auth/login",
    "/auth/chat-v3",
    "/auth/reset-password",
    "/quiz",
    "/selling-page",
    "/terms/terms-conditions",
    "/terms/privacy-policy",
    "/terms/subscription-terms",
    
  ];
  const hideLayout = hiddenRoutes.includes(pathname);

  return (
    <>
    <SupportProvider>
      {!hideLayout && <Header />}
      </SupportProvider>
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
