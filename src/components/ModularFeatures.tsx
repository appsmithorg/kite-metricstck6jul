"use client";
import { useEffect, useRef } from "react";
import { modularFeatures } from "@/data/content";
import { headingFont, bodyFont } from "@/app/fonts";
import * as Icons from "lucide-react";

export function ModularFeatures() {
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
    
    const cards = ref.current?.querySelectorAll(".feature-card");
    cards?.forEach(card => observer.observe(card));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-8">
      {modularFeatures.map((f, i) => {
        const Icon = (Icons as any)[f.icon] || Icons.Circle;
        return (
          <div 
            key={i} 
            className="feature-card opacity-0 translate-y-8 transition-all duration-700 ease-out bg-[#111] border border-white/10 rounded-2xl p-10 flex flex-col items-start"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-[#ccff00] blur-xl opacity-20 rounded-full" />
              <Icon className="w-8 h-8 text-[#ccff00] relative z-10 stroke-[1.5]" />
            </div>
            <h3 className={`text-xl text-white tracking-tight mb-3 ${headingFont.className}`}>{f.title}</h3>
            <p className={`text-gray-400 text-sm leading-relaxed ${bodyFont.className}`}>{f.description}</p>
          </div>
        );
      })}
    </div>
  );
}
