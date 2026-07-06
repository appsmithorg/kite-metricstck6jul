import { bodyFont, headingFont } from '@/app/fonts';

const integrations = [
  "Stripe", "Paddle", "Chargebee", "Braintree", "PayPal", "Square", "Adyen", "Auth.net"
];

export default function IntegrationMarquee() {
  return (
    <section className="py-24 bg-black overflow-hidden flex flex-col items-center">
      <div className="mb-16 text-center px-6">
        <span className={`${bodyFont.className} uppercase tracking-[0.2em] text-[10px] text-[#ccff00] border border-[#ccff00]/30 rounded-full px-3 py-1 inline-block mb-6`}>
          Seamless Integrations
        </span>
        <h2 className={`${headingFont.className} text-3xl md:text-5xl text-white tracking-tight`}>
          Connect your revenue stack
        </h2>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="flex w-max animate-marquee">
        <div className="flex items-center">
          {integrations.map((name, i) => (
            <div key={i} className="flex items-center gap-4 px-8 md:px-12">
              <div className="w-12 h-12 rounded-xl bg-[#111111] border border-white/10 flex items-center justify-center shrink-0">
                <div className="w-4 h-4 rounded-sm border border-[#ccff00] opacity-80" />
              </div>
              <span className={`${bodyFont.className} font-semibold text-white tracking-wide text-xl whitespace-nowrap`}>
                {name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          {integrations.map((name, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-4 px-8 md:px-12">
              <div className="w-12 h-12 rounded-xl bg-[#111111] border border-white/10 flex items-center justify-center shrink-0">
                <div className="w-4 h-4 rounded-sm border border-[#ccff00] opacity-80" />
              </div>
              <span className={`${bodyFont.className} font-semibold text-white tracking-wide text-xl whitespace-nowrap`}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
