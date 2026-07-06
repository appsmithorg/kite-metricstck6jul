import { bodyFont } from '@/app/fonts';

const companies = [
  "Acme Corp", "Global Dynamics", "Initech", "Soylent", "Umbrella Corp",
  "Massive Dynamic", "Stark Industries", "Wayne Enterprises"
];

export default function LogoTicker() {
  return (
    <section className="py-12 bg-black border-y border-[#181818] overflow-hidden flex">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      <div className="flex w-max animate-marquee">
        <div className="flex items-center">
          {companies.map((name, i) => (
            <span key={i} className={`${bodyFont.className} font-semibold text-[#A1A1AA] tracking-wide uppercase text-sm whitespace-nowrap px-8 md:px-16`}>
              {name}
            </span>
          ))}
        </div>
        <div className="flex items-center">
          {companies.map((name, i) => (
            <span key={`dup-${i}`} className={`${bodyFont.className} font-semibold text-[#A1A1AA] tracking-wide uppercase text-sm whitespace-nowrap px-8 md:px-16`}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
