import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { MarketPain } from "./components/sections/MarketPain";
import { WhyMatters } from "./components/sections/WhyMatters";
import { Solution } from "./components/sections/Solution";
import { IntelligenceEngine } from "./components/sections/Intelligence";
import { Comparison } from "./components/sections/Comparison";
import { Engagement } from "./components/sections/Engagement";
import { Vision } from "./components/sections/Vision";
import { CTA } from "./components/sections/CTA";

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <MarketPain />
        <WhyMatters />
        <Solution />
        <IntelligenceEngine />
        <Comparison />
        <Engagement />
        <Vision />
        <CTA />
      </main>
    </div>
  );
}
