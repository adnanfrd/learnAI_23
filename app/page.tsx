import dynamic from "next/dynamic";
import GetSection from "@/components/homePage/GetSection";
import GuarenteeSection from "@/components/homePage/GuarenteeSection";
import HeroSection from "@/components/homePage/HeroSection";

// Lazy load components below the fold with loading states
const Courses = dynamic(() => import("@/components/homePage/courses"));
const FAQ = dynamic(() => import("@/components/homePage/FAQ"));
const FitForYouCarousel = dynamic(
  () => import("@/components/homePage/FitForYouCarousel")
);
const HowItWorks = dynamic(() => import("@/components/homePage/owItWorks"), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      Loading...
    </div>
  ),
});
const QuizCTA = dynamic(() => import("@/components/homePage/quickCTA"));
const QuizSection = dynamic(() => import("@/components/homePage/QuizSection"), {
  loading: () => (
    <div className="min-h-[500px] flex items-center justify-center">
      Loading quiz...
    </div>
  ),
});
const QuizSectiontwo = dynamic(
  () => import("@/components/homePage/QuizSectiontwo"),
  {
    loading: () => (
      <div className="min-h-[500px] flex items-center justify-center">
        Loading quiz...
      </div>
    ),
  }
);
const SocialProof = dynamic(() => import("@/components/homePage/SocialProof"));

export default function HomePage() {
  return (
    <>
      {/* hero section */}
      <HeroSection />
      {/* guarantee setion */}
      <GuarenteeSection />
      {/* what you get section */}
      <GetSection />
      {/* courses section */}
      <Courses />
      {/* quick cta section */}
      <QuizCTA />
      {/* how it Works */}
      <HowItWorks />
      {/* fit carousel */}
      <FitForYouCarousel />
      {/* quiz section */}
      <QuizSection />
      {/* social proof */}
      <SocialProof />
      {/* faq */}
      <FAQ />
      {/* quiz section two */}
      <QuizSectiontwo />
    </>
  );
}
