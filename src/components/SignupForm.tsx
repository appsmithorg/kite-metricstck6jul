import { headingFont, bodyFont } from "@/app/fonts";
import Link from "next/link";

export function SignupForm() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ccff00] opacity-[0.03] blur-[120px] rounded-full point-events-none" />
      
      <div className="w-full max-w-md bg-[#111] border border-white/10 rounded-3xl p-10 relative z-10">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white font-medium mb-8">
            <div className="w-6 h-6 rounded bg-[#ccff00] flex items-center justify-center text-black text-xs font-bold">M</div>
            <span className="tracking-tight">MetricStack</span>
          </Link>
          <h1 className={`text-3xl text-white tracking-tight mb-3 ${headingFont.className}`}>Create your account</h1>
          <p className={`text-gray-400 text-sm ${bodyFont.className}`}>Start your 14-day free trial. No credit card required.</p>
        </div>
        <form className="flex flex-col gap-6">
          <div>
            <label className={`block text-[10px] text-gray-500 mb-2 uppercase tracking-widest font-medium ${bodyFont.className}`}>Work Email</label>
            <input 
              type="email" 
              className={`w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#ccff00] transition-colors ${bodyFont.className}`} 
              placeholder="jane@company.com" 
              required 
            />
          </div>
          <div>
            <label className={`block text-[10px] text-gray-500 mb-2 uppercase tracking-widest font-medium ${bodyFont.className}`}>Password</label>
            <input 
              type="password" 
              className={`w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#ccff00] transition-colors ${bodyFont.className}`} 
              placeholder="••••••••" 
              required 
            />
          </div>
          <button type="submit" className={`w-full bg-[#ccff00] text-black font-medium rounded-xl px-4 py-4 mt-2 hover:bg-[#b3e600] transition-colors ${bodyFont.className}`}>
            Get Started
          </button>
        </form>
        <div className={`mt-8 text-center text-sm text-gray-500 ${bodyFont.className}`}>
          Already have an account? <Link href="/" className="text-white hover:text-[#ccff00] transition-colors">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
