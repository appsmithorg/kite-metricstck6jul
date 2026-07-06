"use client";
import { useState } from "react";
import { faqs } from "@/data/content";
import { headingFont, bodyFont } from "@/app/fonts";
import { Plus, Minus } from "lucide-react";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></span>
            <span className="text-[10px] text-white uppercase tracking-widest font-medium">Support</span>
          </div>
          <h2 className={`text-4xl md:text-5xl text-white tracking-tighter ${headingFont.className}`}>Frequently Asked Questions</h2>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className={`text-lg text-white font-medium pr-8 ${bodyFont.className}`}>{faq.question}</span>
                {open === i ? <Minus className="w-5 h-5 text-[#ccff00] flex-shrink-0" /> : <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />}
              </button>
              <div 
                className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${open === i ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className={`text-gray-400 leading-relaxed ${bodyFont.className}`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
