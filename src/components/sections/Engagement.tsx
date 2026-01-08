import React from "react";
import { motion } from "motion/react";

export function Engagement() {
  const steps = [
    {
      title: "Onboarding",
      desc: "Connect your delivery platforms in minutes.",
      time: "Week 1",
    },
    {
      title: "Data Collection",
      desc: "We analyze historical data to build your growth model.",
      time: "Month 1 (Free)",
    },
    {
      title: "Strategy Activation",
      desc: "Launch AI-driven campaigns and optimized menus.",
      time: "Ongoing",
    },
    {
      title: "Scale Partnership",
      desc: "Contract partnership to drive long-term revenue.",
      time: "Future",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            The Path to Profitability
          </h2>
          <p className="text-black">Simple, transparent, and results-driven.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-black -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="group relative"
              >
                <div className="w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:bg-[#FF6B35] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B35] group-hover:bg-white transition-colors" />
                </div>
                
                <div className="p-6 rounded-2xl bg-white border border-black h-full hover:-translate-y-2 transition-transform duration-300">
                    <span className="text-xs font-mono text-black mb-2 block">{step.time}</span>
                    <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                    <p className="text-black text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
