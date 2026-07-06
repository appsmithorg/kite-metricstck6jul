import { Inter, Manrope } from 'next/font/google';

// Brand fonts wired in by nextjs-website-creation/scripts/plan_files.py.
// The planner LLM picks one Google Font per typography role from the
// Available Fonts map; this file exports each role as a next/font
// instance for components to apply via `.className`.

const _inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const _manrope = Manrope({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const heroFont = _manrope;
export const headingFont = _manrope;
export const subHeadingFont = _inter;
export const bodyFont = _inter;
