import { Metadata } from "next";
import { ArticleHeader } from "@/components/ArticleHeader";
import { ArticleContent } from "@/components/ArticleContent";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Architecture of a Sub-Second Analytics Engine | MetricStack",
  description: "A deep dive into how we use ClickHouse and Kafka to process millions of webhook events.",
  alternates: { canonical: "/blog/building-real-time-engine" },
  openGraph: { url: "/blog/building-real-time-engine", title: "Architecture of a Sub-Second Analytics Engine | MetricStack", description: "A deep dive into how we use ClickHouse and Kafka to process millions of webhook events.", images: ["https://static.kite.ai/image/upload/f_auto,q_auto,w_2100/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-article-hero.png"] }
};

export default function Article() {
  return (
    <main className="bg-black min-h-screen">
      <ArticleHeader />
      <ArticleContent />
      <RelatedArticles />
      <Footer />
    </main>
  );
}
