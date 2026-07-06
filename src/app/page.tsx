import { Metadata } from "next";
import { HomeHero } from "@/components/HomeHero";
import LogoTicker from "@/components/LogoTicker";
import { SocialProof } from "@/components/SocialProof";
import { StickyProductShowcase } from "@/components/StickyProductShowcase";
import { VisualFeatures } from "@/components/VisualFeatures";
import { AvatarGrid } from "@/components/AvatarGrid";
import { ModularFeatures } from "@/components/ModularFeatures";
import IntegrationMarquee from "@/components/IntegrationMarquee";
import TestimonialSlider from "@/components/TestimonialSlider";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { BlogTeaser } from "@/components/BlogTeaser";
import { Footer } from "@/components/Footer";
import { FloatingBadge } from "@/components/FloatingBadge";

export const metadata: Metadata = {
  title: "MetricStack | Real-time SaaS Analytics",
  description: "MetricStack provides a real-time analytics dashboard that helps SaaS companies track MRR, churn, LTV, and other key metrics in one place.",
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: "MetricStack | Real-time SaaS Analytics", description: "MetricStack provides a real-time analytics dashboard that helps SaaS companies track MRR, churn, LTV, and other key metrics in one place.", images: ["https://static.kite.ai/image/upload/f_auto,q_auto,w_1600/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-home-hero-planet.png"] }
};

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <HomeHero />
      <LogoTicker />
      <SocialProof />
      <StickyProductShowcase />
      <div className="max-w-7xl mx-auto px-6 py-32 space-y-32">
        <VisualFeatures />
        <AvatarGrid />
        <ModularFeatures />
      </div>
      <IntegrationMarquee />
      <TestimonialSlider />
      <Pricing />
      <Faq />
      <BlogTeaser />
      <Footer />
      <FloatingBadge />
    </main>
  );
}
