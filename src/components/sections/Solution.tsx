import React from "react";
import { motion } from "motion/react";
import { BarChart3, Radio, Clock, Map, AlertTriangle } from "lucide-react";

const CARD_STYLES = [
    { bg: "bg-orange-50", border: "border-orange-200", iconBg: "bg-[#FF6B35]" },
    { bg: "bg-emerald-50", border: "border-emerald-200", iconBg: "bg-emerald-600" },
    { bg: "bg-sky-50", border: "border-sky-200", iconBg: "bg-sky-600" },
    { bg: "bg-amber-50", border: "border-amber-200", iconBg: "bg-amber-500" },
    { bg: "bg-rose-50", border: "border-rose-200", iconBg: "bg-rose-500" },
];

const FeatureCard = ({ title, description, icon: Icon, delay, className = "", colorIndex = 0 }) => {
    const style = CARD_STYLES[colorIndex % CARD_STYLES.length];
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${style.bg} border ${style.border} transition-all group hover:shadow-lg ${className}`}
        >
            <div className={`w-14 h-14 rounded-xl ${style.iconBg} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={26} />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
            <p className="text-black/80 text-base leading-relaxed">{description}</p>
        </motion.div>
    );
};

export function Solution() {
  return (
    <section id="solution" className="py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="font-medium tracking-wider text-sm uppercase mb-3 block"
                style={{ color: '#FF6B35' }}
            >
                The RESGRO Ecosystem
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Complete Delivery Intelligence</h2>
            <p className="text-black/70 max-w-2xl mx-auto text-lg">
                Stop guessing. Start growing. Our platform consolidates data from UberEats and Doordash to give you a single source of truth.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
                icon={Radio}
                title="Personalised Campaigns"
                description="Launch targeted marketing campaigns based on customer behavior segments, not just blanket discounts."
                delay={0}
                className="lg:col-span-2"
                colorIndex={0}
            />
            <FeatureCard 
                icon={BarChart3}
                title="Deep Analytics"
                description="Unified dashboard for UberEats & DoorDash performance metrics."
                delay={0.1}
                colorIndex={1}
            />
            <FeatureCard 
                icon={Clock}
                title="Automated Reporting"
                description="Weekly insights delivered straight to your inbox. No login required."
                delay={0.2}
                colorIndex={2}
            />
            <FeatureCard 
                icon={Map}
                title="Geo Insights"
                description="Heatmaps showing where your demand is coming from and where you're missing out."
                delay={0.3}
                colorIndex={3}
            />
            <FeatureCard 
                icon={AlertTriangle}
                title="Crisis Alerts"
                description="Real-time notifications when ratings drop or delivery times spike."
                delay={0.4}
                colorIndex={4}
            />
        </div>

        {/* Mock Interface Preview */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white"
        >
            <div className="grid md:grid-cols-12 gap-0">
                {/* Sidebar Mock */}
                <div className="hidden md:block col-span-2 border-r border-gray-200 bg-gray-50 p-5 space-y-4">
                    <div className="h-8 w-24 bg-white border border-gray-200 rounded mb-8" />
                    <div className="space-y-2">
                        <div className="h-8 w-full bg-[#FF6B35] rounded-lg" />
                        <div className="h-8 w-full bg-white border border-gray-200 rounded-lg" />
                        <div className="h-8 w-full bg-white border border-gray-200 rounded-lg" />
                        <div className="h-8 w-full bg-white border border-gray-200 rounded-lg" />
                    </div>
                </div>
                {/* Main Content Mock */}
                <div className="col-span-12 md:col-span-10 p-8 bg-white relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 bg-orange-50 border border-orange-200 rounded-xl">
                            <div className="text-black/60 text-xs font-medium mb-1">Total Revenue</div>
                            <div className="text-2xl font-bold text-black">$42,593</div>
                            <div className="text-xs mt-2 font-medium" style={{ color: '#FF6B35' }}>▲ 12.5% vs last week</div>
                        </div>
                        <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                            <div className="text-black/60 text-xs font-medium mb-1">Active Campaigns</div>
                            <div className="text-2xl font-bold text-black">4</div>
                            <div className="text-xs mt-2 font-medium text-emerald-600">● 2 Ending Soon</div>
                        </div>
                        <div className="p-5 bg-sky-50 border border-sky-200 rounded-xl">
                            <div className="text-black/60 text-xs font-medium mb-1">Avg Order Value</div>
                            <div className="text-2xl font-bold text-black">$48.20</div>
                            <div className="text-xs mt-2 font-medium text-sky-600">▲ 2.1%</div>
                        </div>
                        <div className="col-span-1 md:col-span-2 h-48 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                             <svg className="w-full h-full p-6" viewBox="0 0 400 200">
                                <path d="M0 150 C 50 150, 100 100, 150 120 S 250 50, 400 80" fill="none" stroke="#FF6B35" strokeWidth="3" />
                                <path d="M0 180 C 50 170, 100 140, 150 160 S 250 120, 400 140" fill="none" stroke="#FF6B35" strokeWidth="3" opacity="0.3" />
                             </svg>
                        </div>
                        <div className="h-48 bg-gray-50 border border-gray-200 rounded-xl p-5">
                            <div className="text-sm text-black font-medium mb-4">Top Items</div>
                            <div className="space-y-3">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="h-2 w-24 bg-gray-200 rounded" />
                                        <div className="h-2 w-8 bg-gray-200 rounded" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
