import { headingFont, bodyFont } from "@/app/fonts";

export function VisualFeatures() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-[#111] border border-white/10 rounded-2xl p-10 flex flex-col">
        <div className="mb-12 flex-1">
          <div className="bg-black border border-white/10 rounded-xl p-5 flex flex-col gap-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400 uppercase tracking-widest">Live Feed</span>
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
            </div>
            <div className="flex flex-col gap-3">
              {[
                { event: "New Subscription", user: "acme_corp", amount: "$499/mo", time: "Just now" },
                { event: "Upgrade", user: "globex_inc", amount: "$999/mo", time: "2m ago" },
                { event: "Payment Failed", user: "initech_llc", amount: "$49/mo", time: "5m ago" }
              ].map((e, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-[#111] border border-white/5">
                  <div>
                    <div className={`text-sm text-white font-medium ${bodyFont.className}`}>{e.event}</div>
                    <div className="text-[11px] text-gray-500 mt-1">{e.user}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm text-white font-medium ${bodyFont.className}`}>{e.amount}</div>
                    <div className="text-[11px] text-gray-500 mt-1">{e.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h3 className={`text-2xl text-white tracking-tight mb-3 ${headingFont.className}`}>Real-time sync</h3>
        <p className={`text-gray-400 leading-relaxed ${bodyFont.className}`}>Your dashboard updates the millisecond a transaction clears. No more waiting for nightly batch jobs.</p>
      </div>
      
      <div className="bg-[#111] border border-white/10 rounded-2xl p-10 flex flex-col">
        <div className="mb-12 flex-1">
          <div className="bg-black border border-white/10 rounded-xl p-5 flex flex-col gap-4 h-full">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">Segmentation</div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1.5 rounded-md bg-[#111] border border-white/10 text-xs text-white flex items-center gap-2">Plan: Enterprise <span className="text-gray-500">×</span></span>
              <span className="px-3 py-1.5 rounded-md bg-[#111] border border-white/10 text-xs text-white flex items-center gap-2">Region: EU <span className="text-gray-500">×</span></span>
              <span className="px-3 py-1.5 rounded-md bg-[#ccff00]/5 border border-[#ccff00]/20 text-xs text-[#ccff00]">+ Add Filter</span>
            </div>
            <div className="flex-1 border-t border-white/10 pt-6">
              <div className={`text-white text-3xl font-medium tracking-tight mb-2 ${headingFont.className}`}>428</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Matching Customers</div>
            </div>
          </div>
        </div>
        <h3 className={`text-2xl text-white tracking-tight mb-3 ${headingFont.className}`}>Deep segmentation</h3>
        <p className={`text-gray-400 leading-relaxed ${bodyFont.className}`}>Filter any metric by plan, geography, or custom user attributes to isolate exactly what drives growth.</p>
      </div>
    </div>
  );
}
