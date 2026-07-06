import Image from "next/image";
import { heroFont } from "@/app/fonts";

export function ArticleHeader() {
  return (
    <header className="pt-40 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></span>
          <span className="text-[10px] text-white uppercase tracking-widest font-medium">Engineering</span>
        </div>
        <h1 className={`text-5xl md:text-7xl text-white tracking-tighter leading-[1.05] mb-10 ${heroFont.className}`}>
          Architecture of a Sub-Second Analytics Engine
        </h1>
        <div className="flex items-center justify-center gap-6 text-xs text-gray-400 uppercase tracking-widest">
          <span>Marcus Webb</span>
          <span>•</span>
          <span>Nov 04, 2023</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto relative aspect-[21/9] w-full rounded-3xl overflow-hidden border border-white/10">
        <Image src="https://static.kite.ai/image/upload/f_auto,q_auto,w_2100/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-article-hero.png" alt="Hero" width={2100} height={900} className="w-full h-full object-cover" priority />
      </div>
    </header>
  );
}
