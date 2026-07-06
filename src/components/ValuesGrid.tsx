"use client";
import { useEffect, useRef } from "react";
import { values } from "@/data/content";
import { headingFont, bodyFont } from "@/app/fonts";

export function ValuesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const cards = ref.current?.querySelectorAll(".value-card");
    cards?.forEach(card => observer.observe(card));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="value-card opacity-0 translate-y-8 transition-all duration-700 ease-out bg-[#111] border border-white/10 rounded-2xl p-10 flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] font-mono text-sm mb-10">
                0{i + 1}
              </div>
              <h3 className={`text-2xl text-white tracking-tight mb-4 ${headingFont.className}`}>{v.title}</h3>
              <p className={`text-gray-400 leading-relaxed ${bodyFont.className}`}>{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
