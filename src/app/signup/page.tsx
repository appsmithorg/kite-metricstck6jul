import { Metadata } from "next";
import { SignupForm } from "@/components/SignupForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sign Up | MetricStack",
  description: "Start your 14-day free trial of MetricStack. No credit card required.",
  alternates: { canonical: "/signup" },
  openGraph: { url: "/signup", title: "Sign Up | MetricStack", description: "Start your 14-day free trial of MetricStack. No credit card required.", images: ["https://static.kite.ai/image/upload/f_auto,q_auto,w_1600/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-home-hero-planet.png"] }
};

export default function Signup() {
  return (
    <main className="bg-black min-h-screen">
      <SignupForm />
      <Footer />
    </main>
  );
}
