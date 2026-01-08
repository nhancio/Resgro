import React from "react";
import { Check, X } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-16">Why RESGRO Wins</h2>
        
        <div className="overflow-x-auto">
            <div className="min-w-[800px] grid grid-cols-4 gap-4">
                {/* Header */}
                <div className="col-span-1 p-6 flex items-end">
                    <span className="text-black font-medium">Comparison</span>
                </div>
                <div className="col-span-1 p-6 bg-white rounded-t-xl text-center border-t border-x border-black">
                    <h3 className="text-black font-bold text-lg">Traditional Agencies</h3>
                </div>
                <div className="col-span-1 p-6 bg-white rounded-t-xl text-center border-t border-x border-black relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#FF6B35]" />
                    <h3 className="text-black font-bold text-xl" style={{ color: '#FF6B35' }}>RESGRO</h3>
                </div>
                <div className="col-span-1 p-6 bg-white rounded-t-xl text-center border-t border-x border-black">
                    <h3 className="text-black font-bold text-lg">Generic SaaS</h3>
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
                        <div className="col-span-1 p-4 flex items-center border-b border-black">
                            <span className="text-black font-medium">{row.label}</span>
                        </div>
                        <div className="col-span-1 p-4 flex items-center justify-center border-b border-black bg-white">
                            <span className="text-black text-sm">{row.agency}</span>
                        </div>
                        <div className="col-span-1 p-4 flex items-center justify-center border-b border-black bg-white">
                            <span className="text-black font-semibold text-sm" style={{ color: '#FF6B35' }}>{row.resgro}</span>
                        </div>
                        <div className="col-span-1 p-4 flex items-center justify-center border-b border-black bg-white">
                            <span className="text-black text-sm">{row.generic}</span>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
