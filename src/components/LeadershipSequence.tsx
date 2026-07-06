"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { leadership } from "@/data/content";
import { headingFont, bodyFont } from "@/app/fonts";

type ScrollPattern = "sticky-text";

function ScrollLink({ pattern, children, className = "" }: { pattern: ScrollPattern; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const rootClass = `overflow-clip ${className}`.trim();

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const patched: { el: HTMLElement; o: string; x: string; y: string }[] = [];
    const breaks = (v: string) => v === "hidden" || v === "auto" || v === "scroll";
    for (let el: HTMLElement | null = root; el && el !== document.documentElement; el = el.parentElement) {
      const cs = getComputedStyle(el);
      if (!breaks(cs.overflow) && !breaks(cs.overflowX) && !breaks(cs.overflowY)) continue;
      const s = el.style;
      patched.push({ el, o: s.overflow, x: s.overflowX, y: s.overflowY });
      s.overflow = "clip";
    }

    const chapters = root.querySelectorAll("[data-scroll-chapter]");
    const images = root.querySelectorAll("[data-scroll-image] [data-chapter-index]");
    if (chapters.length === 0) return;

    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setActive = (index: number) => {
      root.dataset.activeIndex = String(index);
      images.forEach((img) => {
        const visible = Number((img as HTMLElement).dataset.chapterIndex) === index;
        (img as HTMLElement).style.opacity = visible ? "1" : "0";
        (img as HTMLElement).style.transition = reduceMq.matches ? "none" : "opacity 400ms ease-out";
      });
    };
    setActive(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.chapterIndex));
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    chapters.forEach((c) => observer.observe(c));

    return () => {
      patched.forEach(({ el, o, x, y }) => {
        el.style.overflow = o;
        el.style.overflowX = x;
        el.style.overflowY = y;
      });
      observer.disconnect();
    };
  }, [pattern]);

  return <section ref={ref} className={rootClass} data-website-scroll-management="true" data-scroll-pattern={pattern}>{children}</section>;
}

export function LeadershipSequence() {
  return (
    <ScrollLink pattern="sticky-text" className="py-32 px-6 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="space-y-[60vh]">
          {leadership.map((l, i) => (
            <article key={i} data-scroll-chapter data-chapter-index={i} className="py-[10vh]">
              <div className="md:hidden mb-8 relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10">
                <Image src={l.image} alt={l.name} width={1200} height={1600} className="object-cover" />
              </div>
              <h3 className={`text-4xl md:text-5xl text-white tracking-tighter mb-4 ${headingFont.className}`}>{l.name}</h3>
              <div className={`text-[#ccff00] text-sm font-medium mb-6 tracking-widest uppercase ${bodyFont.className}`}>{l.role}</div>
              <p className={`text-gray-400 text-lg leading-relaxed ${bodyFont.className}`}>{l.bio}</p>
            </article>
          ))}
        </div>
        <div className="hidden md:block">
          <div className="sticky top-32 h-[75vh] w-full max-w-md ml-auto rounded-3xl overflow-hidden border border-white/10" data-scroll-image>
            {leadership.map((l, i) => (
              <Image 
                key={i} 
                data-chapter-index={i} 
                src={l.image} 
                alt={l.name} 
                width={1200} 
                height={1600} 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" 
                loading="eager" 
              />
            ))}
          </div>
        </div>
      </div>
    </ScrollLink>
  );
}
