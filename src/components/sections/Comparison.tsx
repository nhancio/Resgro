import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, XCircle, Cpu, DollarSign, Lightbulb, Clock } from "lucide-react";

const comparisonData = [
  {
    label: "Methodology",
    icon: Cpu,
    agency: "Manual data analysis and high TATs",
    resgro: "AI powered analysis engine",
  },
  {
    label: "Cost & Efficiency",
    icon: DollarSign,
    agency: "High cost of human employees",
    resgro: "AI agents with 24/7 uptime and very low cost",
  },
  {
    label: "Strategies",
    icon: Lightbulb,
    agency: "Basic strategies",
    resgro: "Data backed strategies",
  },
  {
    label: "Setup Time",
    icon: Clock,
    agency: "1–2 months",
    resgro: "1 week",
  },
];

export function Comparison() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Why <span className="text-[#FF6B35]">RESGRO</span> Wins
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See how we compare to traditional agencies across every metric that matters.
          </p>
        </motion.div>

        {/* Table-style comparison */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50">
            <div className="px-6 py-5 md:px-8">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Feature</span>
            </div>
            <div className="px-6 py-5 md:px-8 text-center border-l border-gray-200">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Traditional Agencies</span>
            </div>
            <div className="px-6 py-5 md:px-8 text-center border-l border-gray-200 bg-orange-50">
              <span className="text-sm font-bold text-[#FF6B35] uppercase tracking-wider">ResGro</span>
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, index) => {
            const Icon = row.icon;
            const isLast = index === comparisonData.length - 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-3 ${!isLast ? "border-b border-gray-100" : ""} hover:bg-gray-50/50 transition-colors`}
              >
                {/* Feature Label */}
                <div className="px-6 py-6 md:px-8 flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#FF6B35] flex items-center justify-center text-white flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <span className="text-base md:text-lg font-bold text-black">{row.label}</span>
                </div>

                {/* Traditional Agency */}
                <div className="px-6 py-6 md:px-8 flex items-center justify-center gap-3 border-l border-gray-100">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-600">{row.agency}</span>
                </div>

                {/* ResGro */}
                <div className="px-6 py-6 md:px-8 flex items-center justify-center gap-3 border-l border-gray-100 bg-orange-50/50">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                  <span className="text-sm md:text-base font-semibold text-black">{row.resgro}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
