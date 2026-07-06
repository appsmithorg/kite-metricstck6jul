import Link from "next/link";
import Image from "next/image";
import { heroFont, bodyFont } from "@/app/fonts";

export function Footer() {
  return (
    <footer className="pt-32 pb-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className={`text-5xl md:text-8xl text-white tracking-tighter mb-10 leading-[1.05] ${heroFont.className}`}>Ready to scale?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="px-8 py-4 bg-[#ccff00] text-black rounded-full font-medium text-lg hover:bg-[#b3e600] transition-colors w-full sm:w-auto">
              Start your free trial
            </Link>
            <Link href="/" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/5 transition-colors w-full sm:w-auto">
              Book a demo
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2 md:col-span-1">
            <div className="relative w-32 h-8 mb-6">
              <Image src="https://static.kite.ai/image/upload/e_trim/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-metricstack-logo.png" alt="MetricStack" width={2100} height={900} className="w-full h-full object-contain object-left" />
            </div>
            <p className={`text-sm text-gray-500 leading-relaxed ${bodyFont.className}`}>
              The source of truth for your SaaS revenue engine.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Product</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#ccff00] transition-colors">Features</Link></li>
              <li><Link href="/" className="hover:text-[#ccff00] transition-colors">Integrations</Link></li>
              <li><Link href="/" className="hover:text-[#ccff00] transition-colors">Pricing</Link></li>
              <li><Link href="/" className="hover:text-[#ccff00] transition-colors">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-[#ccff00] transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-[#ccff00] transition-colors">Blog</Link></li>
              <li><Link href="/" className="hover:text-[#ccff00] transition-colors">Careers</Link></li>
              <li><Link href="/" className="hover:text-[#ccff00] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#ccff00] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-[#ccff00] transition-colors">Terms of Service</Link></li>
              <li><Link href="/" className="hover:text-[#ccff00] transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} MetricStack Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-white transition-colors">X (Twitter)</Link>
            <Link href="/" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="/" className="hover:text-white transition-colors">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
