import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/content";
import { headingFont, bodyFont } from "@/app/fonts";

export function BlogTeaser() {
  return (
    <section className="py-32 px-6 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></span>
              <span className="text-[10px] text-white uppercase tracking-widest font-medium">Resources</span>
            </div>
            <h2 className={`text-4xl md:text-5xl text-white tracking-tighter ${headingFont.className}`}>Latest Insights</h2>
          </div>
          <Link href="/blog" className={`hidden md:flex items-center gap-2 text-[#ccff00] hover:text-white transition-colors text-sm uppercase tracking-widest ${bodyFont.className}`}>
            View all articles &rarr;
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <Link href={`/blog/${post.slug}`} key={i} className="group flex flex-col gap-8">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
                <Image src={post.image} alt={post.title} width={1600} height={900} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs uppercase tracking-widest">{post.author}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">{post.date}</span>
                </div>
                <h3 className={`text-2xl text-white tracking-tight mb-4 leading-tight group-hover:text-[#ccff00] transition-colors ${headingFont.className}`}>{post.title}</h3>
                <p className={`text-gray-400 text-base leading-relaxed line-clamp-2 ${bodyFont.className}`}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Link href="/blog" className={`inline-flex items-center gap-2 text-[#ccff00] hover:text-white transition-colors text-sm uppercase tracking-widest ${bodyFont.className}`}>
            View all articles &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
