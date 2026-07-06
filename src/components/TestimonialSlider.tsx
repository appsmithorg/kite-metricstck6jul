'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { bodyFont, headingFont } from '@/app/fonts';

const testimonials = [
  {
    quote: "MetricStack completely transformed how we view our revenue. The cohort analysis alone saved us weeks of manual spreadsheet work.",
    author: "Sarah Jenkins",
    role: "VP of Revenue, CloudScale",
    image: "https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-testimonial-portrait.png"
  },
  {
    quote: "Finally, a dashboard that looks as good as it performs. The integration with Stripe was flawless and took less than five minutes.",
    author: "David Chen",
    role: "Founder, SyncFlow",
    image: "https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-testimonial-portrait.png"
  },
  {
    quote: "The forecasting accuracy is unparalleled. We use MetricStack every day to align our product and sales teams.",
    author: "Elena Rodriguez",
    role: "CFO, DataStream",
    image: "https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-testimonial-portrait.png"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  if (!isClient) {
    return (
      <section className="py-24 md:py-32 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center opacity-0" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-[#181818]">
            {testimonials.map((t, i) => (
              <Image
                key={i}
                src={t.image}
                alt={t.author}
                fill
                className={`object-cover transition-opacity duration-700 ease-out ${
                  i === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
              />
            ))}
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#ccff00]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <div className="relative min-h-[200px] mb-8">
              {testimonials.map((t, i) => (
                <blockquote 
                  key={i}
                  className={`absolute inset-0 ${headingFont.className} text-2xl md:text-3xl lg:text-4xl text-white leading-tight tracking-tight transition-opacity duration-700 ease-out ${
                    i === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  "{t.quote}"
                </blockquote>
              ))}
            </div>

            <div className="relative h-16 mb-12">
              {testimonials.map((t, i) => (
                <div 
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    i === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className={`${bodyFont.className} text-white font-semibold text-lg`}>{t.author}</div>
                  <div className={`${bodyFont.className} text-[#A1A1AA]`}>{t.role}</div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={prev} 
                className="w-12 h-12 rounded-full border border-[#333333] flex items-center justify-center text-white hover:border-[#ccff00] hover:text-[#ccff00] transition-colors" 
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={next} 
                className="w-12 h-12 rounded-full border border-[#333333] flex items-center justify-center text-white hover:border-[#ccff00] hover:text-[#ccff00] transition-colors" 
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
