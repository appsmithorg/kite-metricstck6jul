import { Metadata } from "next";
import { AboutHero } from "@/components/AboutHero";
import { ValuesGrid } from "@/components/ValuesGrid";
import { StickyTimeline } from "@/components/StickyTimeline";
import { LeadershipSequence } from "@/components/LeadershipSequence";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | MetricStack",
  description: "Learn about the team and technology behind MetricStack's real-time analytics engine.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Us | MetricStack", description: "Learn about the team and technology behind MetricStack's real-time analytics engine.", images: ["https://static.kite.ai/image/upload/f_auto,q_auto,w_1600/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-about-hero-particles.png"] }
};

export default function About() {
  return (
    <main className="bg-black min-h-screen">
      <AboutHero />
      <ValuesGrid />
      <StickyTimeline />
      <LeadershipSequence />
      <Footer />
    </main>
  );
}
