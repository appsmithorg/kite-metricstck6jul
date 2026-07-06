"use client";
import { useState } from "react";
import { pricing } from "@/data/content";
import { headingFont, bodyFont } from "@/app/fonts";
import { Check } from "lucide-react";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h2 className={`text-4xl md:text-6xl text-white tracking-tighter mb-12 leading-none ${headingFont.className}`}>
            Simple, transparent pricing.
          </h2>
          <div className="inline-flex items-center p-1.5 bg-[#111] border border-white/10 rounded-full">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${!isYearly ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${isYearly ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}
            >
              Yearly <span className="text-[#ccff00] text-xs px-2 py-0.5 bg-[#ccff00]/10 rounded-full">-20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {pricing.map((p, i) => (
            <div key={i} className={`rounded-3xl p-12 flex flex-col ${p.isPopular ? 'bg-[#ccff00] text-black' : 'bg-[#111] border border-white/10 text-white'}`}>
              <h3 className={`text-3xl font-medium tracking-tight mb-4 ${headingFont.className}`}>{p.tier}</h3>
              <p className={`text-base mb-10 leading-relaxed ${p.isPopular ? 'text-black/70' : 'text-gray-400'} ${bodyFont.className}`}>{p.description}</p>
              <div className="mb-10">
                <span className={`text-6xl tracking-tighter leading-none ${headingFont.className}`}>{isYearly ? p.yearlyPrice : p.monthlyPrice}</span>
                <span className={`text-sm ml-2 ${p.isPopular ? 'text-black/70' : 'text-gray-500'}`}>/{isYearly ? 'year' : 'month'}</span>
              </div>
              <ul className="flex flex-col gap-5 mb-12 flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-4">
                    <Check className={`w-5 h-5 ${p.isPopular ? 'text-black' : 'text-[#ccff00]'}`} />
                    <span className={`text-base ${bodyFont.className}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-full font-medium text-lg transition-colors ${p.isPopular ? 'bg-black text-white hover:bg-black/90' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
