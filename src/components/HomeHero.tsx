import Image from "next/image";
import { heroFont, bodyFont } from "@/app/fonts";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 -z-10">
        <Image src="https://static.kite.ai/image/upload/f_auto,q_auto,w_1600/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-home-hero-planet.png" alt="Planet" width={1600} height={900} className="absolute inset-0 w-full h-full object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto mt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></span>
          <span className="text-[10px] text-white uppercase tracking-widest font-medium">MetricStack 2.0 is live</span>
        </div>
        <h1 className={`text-6xl md:text-8xl text-white tracking-tighter leading-[1.05] mb-8 ${heroFont.className}`}>
          The true engine for SaaS revenue.
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup" className="px-8 py-4 bg-[#ccff00] text-black rounded-full font-medium text-lg hover:bg-[#b3e600] transition-colors w-full sm:w-auto">
            Start free
          </Link>
          <Link href="/" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/5 transition-colors w-full sm:w-auto">
            Explore products
          </Link>
        </div>
      </div>

      <div className="mt-24 w-full max-w-5xl mx-auto border border-white/10 rounded-2xl bg-[#0a0a0a] overflow-hidden flex flex-col md:flex-row h-[600px] text-left relative z-10">
        <div className="w-64 border-r border-white/10 bg-[#111] p-6 hidden md:flex flex-col gap-8">
          <div className="flex items-center gap-3 text-white font-medium">
            <div className="w-6 h-6 rounded bg-[#ccff00] flex items-center justify-center text-black text-xs font-bold">M</div>
            <span className="tracking-tight">MetricStack</span>
          </div>
          <div className={`flex flex-col gap-2 ${bodyFont.className}`}>
            <div className="px-3 py-2 bg-white/5 rounded-md text-white text-sm font-medium">Dashboard</div>
            <div className="px-3 py-2 text-gray-500 text-sm hover:text-gray-300 transition-colors cursor-pointer">Cohorts</div>
            <div className="px-3 py-2 text-gray-500 text-sm hover:text-gray-300 transition-colors cursor-pointer">Forecasting</div>
            <div className="px-3 py-2 text-gray-500 text-sm hover:text-gray-300 transition-colors cursor-pointer">Reports</div>
          </div>
        </div>
        <div className="flex-1 p-8 bg-[#0a0a0a] flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h3 className="text-white text-lg font-medium">Revenue Overview</h3>
            <div className="px-3 py-1.5 border border-white/10 rounded-md text-xs text-gray-400 bg-[#111]">Last 30 Days</div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="p-5 bg-[#111] border border-white/10 rounded-xl">
              <div className="text-gray-500 text-xs mb-2 uppercase tracking-wide font-medium">MRR</div>
              <div className="text-white text-3xl font-medium tracking-tight">$142,300</div>
              <div className="text-[#ccff00] text-xs mt-3 flex items-center gap-1">
                <span>↑</span> 12.4% vs last month
              </div>
            </div>
            <div className="p-5 bg-[#111] border border-white/10 rounded-xl">
              <div className="text-gray-500 text-xs mb-2 uppercase tracking-wide font-medium">Active Customers</div>
              <div className="text-white text-3xl font-medium tracking-tight">1,204</div>
              <div className="text-[#ccff00] text-xs mt-3 flex items-center gap-1">
                <span>↑</span> 4.2% vs last month
              </div>
            </div>
            <div className="p-5 bg-[#111] border border-white/10 rounded-xl">
              <div className="text-gray-500 text-xs mb-2 uppercase tracking-wide font-medium">Churn Rate</div>
              <div className="text-white text-3xl font-medium tracking-tight">0.8%</div>
              <div className="text-[#ccff00] text-xs mt-3 flex items-center gap-1">
                <span>↓</span> 0.2% vs last month
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#111] border border-white/10 rounded-xl relative overflow-hidden p-6 flex flex-col">
            <div className="text-sm text-gray-500 mb-4 font-medium">MRR Growth</div>
            <div className="flex-1 border-b border-l border-white/10 relative">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,80 L20,70 L40,75 L60,40 L80,50 L100,20" fill="none" stroke="#ccff00" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <path d="M0,80 L20,70 L40,75 L60,40 L80,50 L100,20 L100,100 L0,100 Z" fill="url(#gradient)" opacity="0.15" vectorEffect="non-scaling-stroke" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ccff00" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] text-gray-600 translate-y-6">
                <span>Oct 1</span>
                <span>Oct 8</span>
                <span>Oct 15</span>
                <span>Oct 22</span>
                <span>Oct 29</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
