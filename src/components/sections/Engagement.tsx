import React from "react";
import { motion } from "motion/react";
import { Plug, BarChart3, Rocket, Handshake } from "lucide-react";

export function Engagement() {
  const steps = [
    {
      title: "Onboarding",
      desc: "Connect your delivery platforms in minutes.",
      time: "WEEK 1",
      icon: Plug,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconBg: "bg-[#FF6B35]",
    },
    {
      title: "Data Collection",
      desc: "We analyze historical data to build your growth model.",
      time: "MONTH 1 (FREE)",
      icon: BarChart3,
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-600",
    },
    {
      title: "Strategy Activation",
      desc: "Launch AI-driven campaigns and optimized menus.",
      time: "ONGOING",
      icon: Rocket,
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      iconBg: "bg-sky-600",
    },
    {
      title: "Scale Partnership",
      desc: "Contract partnership to drive long-term revenue.",
      time: "FUTURE",
      icon: Handshake,
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-500",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            The Path to <span className="text-[#FF6B35]">Profitability</span>
          </h2>
          <p className="text-gray-600 text-lg">Simple, transparent, and results-driven.</p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`text-center ${step.bgColor} border ${step.borderColor} rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.iconBg} flex items-center justify-center mx-auto mb-6 text-white shadow-md`}>
                  <Icon size={28} />
                </div>

                {/* Time Label */}
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 block">
                  {step.time}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom connector line (decorative) */}
        <div className="hidden lg:flex items-center justify-center mt-10">
          <div className="flex items-center gap-3">
            {[0, 1, 2, 3].map((i) => (
              <React.Fragment key={i}>
                <div className={`w-3 h-3 rounded-full ${steps[i].iconBg}`} />
                {i < 3 && <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
