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
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all group"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-red-400 group-hover:bg-red-500/10 transition-colors">
                    <Icon size={24} />
                </div>
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">{label}</h3>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</div>
            <p className="text-gray-500 text-sm">{subtext}</p>
        </motion.div>
    );
};

export function MarketPain() {
  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Hidden Cost of Inefficiency</h2>
            <p className="text-gray-400 text-lg">
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

        {/* Revenue Flatline Graphic */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-xs font-mono text-gray-500">REVENUE_ANALYSIS_V2.0</div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">The "Promotion Trap"</h3>
                    <p className="text-gray-400 mb-6">
                        Most restaurants rely on heavy discounting to maintain order volume. This destroys margins and creates a dependency on platforms like UberEats and DoorDash without building brand loyalty.
                    </p>
                    <div className="flex gap-2">
                        <div className="px-3 py-1 rounded bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20">High CAC</div>
                        <div className="px-3 py-1 rounded bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20">Low Retention</div>
                        <div className="px-3 py-1 rounded bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20">Margin Erosion</div>
                    </div>
                </div>
                <div className="flex-1 w-full h-48 bg-black/50 rounded-xl relative border border-white/5 flex items-end px-4 pb-4">
                    {/* Fake Chart */}
                    <div className="w-full h-full flex items-end gap-1">
                        {[40, 42, 45, 41, 38, 35, 32, 30, 28, 25, 22, 20].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                                className={`flex-1 rounded-t-sm ${i > 5 ? 'bg-red-500/50' : 'bg-gray-600/50'}`}
                            />
                        ))}
                    </div>
                    {/* Line overlay */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                         <motion.path 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2 }}
                            d="M0 100 Q 50 80, 100 90 T 200 120 T 300 150 T 400 180"
                            fill="none" 
                            stroke="rgba(239, 68, 68, 0.5)" 
                            strokeWidth="2" 
                        />
                    </svg>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
