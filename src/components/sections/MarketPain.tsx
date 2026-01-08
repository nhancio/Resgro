import React from "react";
import { motion, useInView } from "motion/react";
import { TrendingDown, Users, DollarSign, ShoppingBag } from "lucide-react";
import { useRef } from "react";

const StatsCard = ({ icon: Icon, label, value, subtext, delay }: { icon: any, label: string, value: string, subtext: string, delay: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay }}
            className="p-6 rounded-2xl bg-white border border-black transition-all group"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF6B35] flex items-center justify-center text-white group-hover:bg-[#FF8C42] transition-colors">
                    <Icon size={24} />
                </div>
                <h3 className="text-black text-sm font-medium uppercase tracking-wider">{label}</h3>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">{value}</div>
            <p className="text-black text-sm">{subtext}</p>
        </motion.div>
    );
};

export function MarketPain() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">The Hidden Cost of Inefficiency</h2>
            <p className="text-black text-lg">
                Restaurants are losing margins due to inefficient tools, fragmented data, and promotion heavy competition.
                The market is growing, but are you capturing your share?
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard 
                icon={DollarSign}
                label="Market Size (2025)"
                value="~$1.8B"
                subtext="Total AUD food delivery market"
                delay={0}
            />
            <StatsCard 
                icon={ShoppingBag}
                label="Competition"
                value="~15,000"
                subtext="Restaurants selling online in AU"
                delay={0.1}
            />
            <StatsCard 
                icon={Users}
                label="Active Users"
                value="12M"
                subtext="Australians used delivery apps in 2024"
                delay={0.2}
            />
            <StatsCard 
                icon={TrendingDown}
                label="Frequency"
                value="4.2x"
                subtext="Monthly orders per consumer"
                delay={0.3}
            />
        </div>

      </div>
    </section>
  );
}
