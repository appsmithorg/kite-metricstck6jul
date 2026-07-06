import { Metadata } from "next";
import { BlogHero } from "@/components/BlogHero";
import { ArticleGrid } from "@/components/ArticleGrid";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | MetricStack",
  description: "Insights on SaaS metrics, real-time data architecture, and revenue growth.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog", title: "Blog | MetricStack", description: "Insights on SaaS metrics, real-time data architecture, and revenue growth.", images: ["https://static.kite.ai/image/upload/f_auto,q_auto,w_1600/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-blog-hero-stars.png"] }
};

export default function Blog() {
  return (
    <main className="bg-black min-h-screen">
      <BlogHero />
      <ArticleGrid />
      <Footer />
    </main>
  );
}
