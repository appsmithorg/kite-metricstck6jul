import Image from "next/image";
import { heroFont, bodyFont } from "@/app/fonts";
import Link from "next/link";

export function NotFoundHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="https://static.kite.ai/image/upload/f_auto,q_auto,w_1600/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-home-hero-planet.png" alt="Planet" width={1600} height={900} className="absolute inset-0 w-full h-full object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="text-center z-10 px-6">
        <h1 className={`text-[12rem] md:text-[16rem] text-white tracking-tighter leading-none mb-4 ${heroFont.className}`}>
          404
        </h1>
        <p className={`text-xl text-gray-400 mb-12 ${bodyFont.className}`}>
          The page you're looking for doesn't exist in this sector.
        </p>
        <Link href="/" className="px-8 py-4 bg-[#ccff00] text-black rounded-full font-medium text-lg hover:bg-[#b3e600] transition-colors inline-block">
          Return to Base
        </Link>
      </div>
    </section>
  );
}
