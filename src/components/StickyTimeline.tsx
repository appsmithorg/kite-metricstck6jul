import { timeline } from "@/data/content";
import { headingFont, bodyFont } from "@/app/fonts";

export function StickyTimeline() {
  return (
    <section className="py-32 px-6 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-5 md:sticky md:top-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></span>
            <span className="text-[10px] text-white uppercase tracking-widest font-medium">History</span>
          </div>
          <h2 className={`text-5xl md:text-6xl text-white tracking-tighter leading-tight ${headingFont.className}`}>
            Our Journey
          </h2>
        </div>
        <div className="md:col-span-7 flex flex-col gap-24">
          {timeline.map((t, i) => (
            <div key={i} className="relative pl-10 border-l border-white/10">
              <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-[#ccff00] -translate-x-[8.5px] shadow-[0_0_15px_rgba(204,255,0,0.5)]" />
              <div className={`text-[#ccff00] font-mono text-sm mb-6 ${bodyFont.className}`}>{t.year}</div>
              <h3 className={`text-3xl text-white tracking-tight mb-4 ${headingFont.className}`}>{t.title}</h3>
              <p className={`text-gray-400 text-lg leading-relaxed ${bodyFont.className}`}>{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
