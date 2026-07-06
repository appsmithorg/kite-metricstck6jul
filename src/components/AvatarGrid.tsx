import { headingFont } from "@/app/fonts";

const initials = ["SJ", "MC", "AL", "RT", "DK", "EW", "JB", "PL", "RN", "CM", "TF", "GH", "KL", "OP", "WQ", "ZX", "VB", "NM", "QW", "ER", "AB", "CD", "EF", "GH", "IJ", "KL", "MN", "OP", "QR", "ST", "UV", "WX", "YZ"];

export function AvatarGrid() {
  return (
    <div className="flex flex-col items-center">
      <h3 className={`text-2xl text-white tracking-tight mb-12 text-center ${headingFont.className}`}>
        Join 10,000+ data-driven operators
      </h3>
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {initials.map((init, i) => (
          <div 
            key={i} 
            className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-xs text-gray-500 font-medium hover:border-[#ccff00] hover:text-[#ccff00] transition-colors cursor-default"
          >
            {init}
          </div>
        ))}
      </div>
    </div>
  );
}
