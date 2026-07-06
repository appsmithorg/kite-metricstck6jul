import Image from "next/image";
import { heroFont, bodyFont } from "@/app/fonts";

export function BlogHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="https://static.kite.ai/image/upload/f_auto,q_auto,w_1600/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-blog-hero-stars.png" alt="Stars" width={1600} height={900} className="absolute inset-0 w-full h-full object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="text-center z-10 max-w-3xl mx-auto mt-20">
        <h1 className={`text-6xl md:text-8xl text-white tracking-tighter leading-[1.05] mb-8 ${heroFont.className}`}>
          MetricStack Journal
        </h1>
        <p className={`text-xl text-gray-400 leading-relaxed ${bodyFont.className}`}>
          Insights on SaaS metrics, real-time data architecture, and revenue growth.
        </p>
      </div>
    </section>
  );
}
