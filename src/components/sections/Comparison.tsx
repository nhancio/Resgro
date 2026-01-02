import React from "react";
import { Check, X } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">Why RESGRO Wins</h2>
        
        <div className="overflow-x-auto">
            <div className="min-w-[800px] grid grid-cols-4 gap-4">
                {/* Header */}
                <div className="col-span-1 p-6 flex items-end">
                    <span className="text-gray-500 font-medium">Comparison</span>
                </div>
                <div className="col-span-1 p-6 bg-white/5 rounded-t-xl text-center border-t border-x border-white/5">
                    <h3 className="text-white font-bold text-lg">Traditional Agencies</h3>
                </div>
                <div className="col-span-1 p-6 bg-cyan-900/10 rounded-t-xl text-center border-t border-x border-cyan-500/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500" />
                    <h3 className="text-cyan-400 font-bold text-xl">RESGRO</h3>
                </div>
                <div className="col-span-1 p-6 bg-white/5 rounded-t-xl text-center border-t border-x border-white/5">
                    <h3 className="text-white font-bold text-lg">Generic SaaS</h3>
                </div>

                {/* Rows */}
                {[
                    { label: "Data Source", agency: "Manual / Limited", resgro: "Direct API Integration", generic: "Upload Required" },
                    { label: "Campaigns", agency: "Generic / Slow", resgro: "AI-Personalised", generic: "Template Based" },
                    { label: "Reporting", agency: "Monthly PDF", resgro: "Real-time Dashboard", generic: "Basic Stats" },
                    { label: "Pricing", agency: "High Retainer", resgro: "Growth Based", generic: "Flat Fee" },
                    { label: "Setup Time", agency: "Weeks", resgro: "< 48 Hours", generic: "Instant" },
                ].map((row, i) => (
                    <React.Fragment key={i}>
                        <div className="col-span-1 p-4 flex items-center border-b border-white/5">
                            <span className="text-gray-400 font-medium">{row.label}</span>
                        </div>
                        <div className="col-span-1 p-4 flex items-center justify-center border-b border-white/5 bg-white/[0.02]">
                            <span className="text-gray-500 text-sm">{row.agency}</span>
                        </div>
                        <div className="col-span-1 p-4 flex items-center justify-center border-b border-cyan-500/10 bg-cyan-900/5">
                            <span className="text-white font-semibold text-sm">{row.resgro}</span>
                        </div>
                        <div className="col-span-1 p-4 flex items-center justify-center border-b border-white/5 bg-white/[0.02]">
                            <span className="text-gray-500 text-sm">{row.generic}</span>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
