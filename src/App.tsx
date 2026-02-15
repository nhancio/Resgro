import React, { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { MarketPain } from "./components/sections/MarketPain";
import { WhyMatters } from "./components/sections/WhyMatters";
import { Solution } from "./components/sections/Solution";
import { IntelligenceEngine } from "./components/sections/Intelligence";
import { Comparison } from "./components/sections/Comparison";
import { Engagement } from "./components/sections/Engagement";
import { Vision } from "./components/sections/Vision";
import { CaseStudy } from "./components/sections/CaseStudy";
import { PrivacyPolicy } from "./components/sections/PrivacyPolicy";
import { CTA } from "./components/sections/CTA";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "privacy">("home");

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#/privacy-policy") {
        setCurrentPage("privacy");
        window.scrollTo(0, 0);
      } else {
        setCurrentPage("home");
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  if (currentPage === "privacy") {
    return (
      <div className="bg-white min-h-screen text-black font-sans selection:bg-orange-500/30" style={{ fontFamily: "'Roboto', sans-serif" }}>
        <nav className="bg-white border-b-2 border-[#FF6B35] sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 md:h-20 flex items-center justify-between gap-2">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.hash = ""; }}
              className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity min-w-0"
            >
              <img src="/logo.png" alt="RESGRO Logo" className="h-6 sm:h-8 w-auto" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-black">
                RES<span className="text-[#FF6B35]">GRO</span>
              </span>
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.hash = ""; }}
              className="text-sm font-medium text-[#FF6B35] hover:text-black transition-colors whitespace-nowrap py-2 px-3 min-h-[44px] flex items-center touch-manipulation"
            >
              &larr; Back to Home
            </a>
          </div>
        </nav>
        <PrivacyPolicy />
        <footer className="bg-white border-t border-gray-200 py-8 text-center text-black text-sm">
          &copy; {new Date().getFullYear()} RESGRO. All rights reserved. |{" "}
          <a href="mailto:contact@resgro.ai" className="text-[#FF6B35] hover:underline">contact@resgro.ai</a>
        </footer>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-orange-500/30 overflow-x-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <MarketPain />
        <WhyMatters />
        <Solution />
        <Comparison />
        <IntelligenceEngine />
        <Engagement />
        <Vision />
        <CaseStudy />
        <CTA />
      </main>
    </div>
  );
}
