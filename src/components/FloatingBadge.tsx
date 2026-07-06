import { bodyFont } from "@/app/fonts";
import Link from "next/link";

export function FloatingBadge() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link href="/signup" className="flex items-center gap-3 bg-[#111] border border-white/10 rounded-full px-5 py-3 hover:border-[#ccff00] transition-colors group">
        <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
        <span className={`text-white text-sm font-medium ${bodyFont.className}`}>Start Free Trial</span>
      </Link>
    </div>
  );
}
