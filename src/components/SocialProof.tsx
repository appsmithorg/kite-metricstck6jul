import { stats } from "@/data/content";
import { headingFont, bodyFont } from "@/app/fonts";

export function SocialProof() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-5">
          <h2 className={`text-4xl md:text-5xl text-white tracking-tighter leading-[1.1] mb-8 ${headingFont.className}`}>
            Trusted by the fastest growing SaaS companies.
          </h2>
          <p className={`text-xl text-gray-400 leading-relaxed ${bodyFont.className}`}>
            When accuracy is non-negotiable, engineering and finance teams choose MetricStack as their source of truth.
          </p>
        </div>
        <div className="md:col-span-7 flex flex-col gap-8">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-10">
            <blockquote className={`text-xl text-white leading-relaxed mb-8 ${bodyFont.className}`}>
              "The reconciliation engine caught $40k in unbilled revenue in our first week. It paid for itself immediately."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-gray-400 font-medium">
                AM
              </div>
              <div>
                <div className={`text-sm text-white font-medium ${bodyFont.className}`}>Alex Mercer</div>
                <div className="text-xs text-gray-500">CFO, CloudScale</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-[#111] border border-white/10 rounded-2xl p-8">
                <div className={`text-3xl text-white tracking-tight mb-2 ${headingFont.className}`}>{s.value}</div>
                <div className={`text-sm text-gray-500 ${bodyFont.className}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
