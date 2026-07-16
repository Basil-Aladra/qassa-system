import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { ProblemSolution } from "@/components/landing/problem-solution";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FormulaEngine } from "@/components/landing/formula-engine";
import { Stats } from "@/components/landing/stats";
import { Pricing } from "@/components/landing/pricing";
import { Footer } from "@/components/landing/footer";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <FormulaEngine />
        <Stats />
        <Pricing />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
