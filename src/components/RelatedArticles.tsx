import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/content";
import { headingFont, bodyFont } from "@/app/fonts";

export function RelatedArticles() {
  const related = blogPosts.slice(0, 2);
  return (
    <section className="py-32 px-6 border-t border-white/10 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <h3 className={`text-3xl text-white tracking-tight mb-12 ${headingFont.className}`}>Read Next</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {related.map((post, i) => (
            <Link href={`/blog/${post.slug}`} key={i} className="group flex flex-col gap-6">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
                <Image src={post.image} alt={post.title} width={1600} height={900} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <h4 className={`text-xl text-white tracking-tight mb-3 leading-tight group-hover:text-[#ccff00] transition-colors ${headingFont.className}`}>{post.title}</h4>
                <p className={`text-gray-400 text-sm leading-relaxed line-clamp-2 ${bodyFont.className}`}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
