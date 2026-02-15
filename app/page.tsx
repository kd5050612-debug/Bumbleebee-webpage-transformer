import HeroCanvasAnimation from "@/components/HeroCanvasAnimation";
import PerformanceSection from "@/components/PerformanceSection";
import FeaturesSection from "@/components/FeaturesSection";
import TransformationBreakdown from "@/components/TransformationBreakdown";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-[#0B0B0F] min-h-screen text-white">
      <HeroCanvasAnimation />
      <div className="relative z-10 bg-[#0B0B0F]">
        <PerformanceSection />
        <FeaturesSection />
        <TransformationBreakdown />
        <CTA />
      </div>
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-900 bg-[#0B0B0F]">
        © {new Date().getFullYear()} CYBERTRON INDUSTRIES.
      </footer>
    </main>
  );
}
