import { headingFont, bodyFont } from "@/app/fonts";

export function StickyProductShowcase() {
  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-5 md:sticky md:top-32">
          <h2 className={`text-4xl md:text-5xl text-white tracking-tighter leading-[1.1] mb-6 ${headingFont.className}`}>
            Superb clarity into your revenue engine.
          </h2>
          <p className={`text-gray-400 text-lg leading-relaxed ${bodyFont.className}`}>
            Stop wrestling with spreadsheets. MetricStack automatically normalizes your billing data into boardroom-ready insights, cohorts, and forecasts.
          </p>
        </div>
        <div className="md:col-span-7 flex flex-col gap-8">
          {/* Full width card: Cohort Analysis */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex justify-between items-center mb-4">
              <div className={`text-white font-medium text-lg tracking-tight ${headingFont.className}`}>Cohort Retention Ideas</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Month 1-6</div>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[...Array(5)].map((_, r) => (
                <div key={r} className="contents">
                  <div className="text-xs text-gray-500 py-2 border-b border-white/5">Oct {r + 1}</div>
                  {[...Array(5)].map((_, c) => (
                    <div 
                      key={c} 
                      className={`rounded p-2 text-xs text-black font-medium flex items-center justify-center ${c <= 4-r ? 'bg-[#ccff00]' : 'bg-transparent'}`} 
                      style={{ opacity: c <= 4-r ? 1 - (c * 0.15) : 0 }}
                    >
                      {c <= 4-r ? `${100 - (c * 12)}%` : ''}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 2 Half width cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Revenue Forecasting */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 flex flex-col h-[320px]">
              <div className={`text-white font-medium text-lg tracking-tight mb-1 ${headingFont.className}`}>Revenue Forecasting</div>
              <div className="text-xs text-gray-500 mb-8 uppercase tracking-widest">Q4 Projection</div>
              <div className="flex-1 relative border-b border-l border-white/10 mb-4">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,90 L50,50" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                  <path d="M50,50 L100,10" fill="none" stroke="#ccff00" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
            </div>
            
            {/* Custom Reports */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 flex flex-col h-[320px]">
              <div className={`text-white font-medium text-lg tracking-tight mb-1 ${headingFont.className}`}>Custom Reports</div>
              <div className="text-xs text-gray-500 mb-8 uppercase tracking-widest">Drag & Drop</div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-4 flex justify-between items-center">
                  <span className="text-sm text-gray-300">Metric: MRR</span>
                  <span className="text-xs text-gray-500">Edit</span>
                </div>
                <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-4 flex justify-between items-center">
                  <span className="text-sm text-gray-300">Group by: Plan</span>
                  <span className="text-xs text-gray-500">Edit</span>
                </div>
                <div className="bg-[#ccff00]/5 border border-[#ccff00]/20 rounded-lg p-4 flex justify-center items-center mt-auto cursor-pointer hover:bg-[#ccff00]/10 transition-colors">
                  <span className="text-xs text-[#ccff00] font-medium">+ Add Filter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
