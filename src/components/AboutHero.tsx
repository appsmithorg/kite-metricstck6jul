import Image from "next/image";
import { heroFont } from "@/app/fonts";

export function AboutHero() {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="https://static.kite.ai/image/upload/f_auto,q_auto,w_1600/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-about-hero-particles.png" alt="Particles" width={1600} height={900} className="absolute inset-0 w-full h-full object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="text-center z-10 max-w-4xl mx-auto mt-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></span>
          <span className="text-[10px] text-white uppercase tracking-widest font-medium">Mission</span>
        </div>
        <h1 className={`text-6xl md:text-8xl text-white tracking-tighter leading-[1.05] ${heroFont.className}`}>
          Building the truth engine for SaaS.
        </h1>
      </div>
    </section>
  );
}
