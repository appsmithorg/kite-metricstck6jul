import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/content";
import { headingFont, bodyFont } from "@/app/fonts";

export function ArticleGrid() {
  return (
    <section className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
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
              <p className={`text-gray-400 leading-relaxed line-clamp-3 ${bodyFont.className}`}>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
