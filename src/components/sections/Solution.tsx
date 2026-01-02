import React from "react";
import { motion } from "motion/react";
import { BarChart3, Radio, Clock, Map, AlertTriangle } from "lucide-react";

const FeatureCard = ({ title, description, icon: Icon, delay, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={`p-6 rounded-2xl bg-gray-900/50 border border-white/10 hover:border-cyan-500/50 transition-all group hover:bg-gray-900/80 ${className}`}
    >
        <div className="w-12 h-12 rounded-lg bg-cyan-900/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

export function Solution() {
  return (
    <section id="solution" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-cyan-400 font-medium tracking-wider text-sm uppercase mb-2 block"
            >
                The RESGRO Ecosystem
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Complete Delivery Intelligence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Stop guessing. Start growing. Our platform consolidates data from UberEats, DoorDash, and your POS to give you a single source of truth.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
                icon={Radio}
                title="Personalised Campaigns"
                description="Launch targeted marketing campaigns based on customer behavior segments, not just blanket discounts."
                delay={0}
                className="lg:col-span-2"
            />
            <FeatureCard 
                icon={BarChart3}
                title="Deep Analytics"
                description="Unified dashboard for UberEats & DoorDash performance metrics."
                delay={0.1}
            />
            <FeatureCard 
                icon={Clock}
                title="Automated Reporting"
                description="Weekly insights delivered straight to your inbox. No login required."
                delay={0.2}
            />
            <FeatureCard 
                icon={Map}
                title="Geo Insights"
                description="Heatmaps showing where your demand is coming from and where you're missing out."
                delay={0.3}
            />
            <FeatureCard 
                icon={AlertTriangle}
                title="Crisis Alerts"
                description="Real-time notifications when ratings drop or delivery times spike."
                delay={0.4}
            />
        </div>

        {/* Mock Interface Preview */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F1115]"
        >
            <div className="grid md:grid-cols-12 gap-0">
                {/* Sidebar Mock */}
                <div className="hidden md:block col-span-2 border-r border-white/5 bg-[#0A0C10] p-4 space-y-4">
                    <div className="h-8 w-24 bg-white/10 rounded mb-8" />
                    <div className="space-y-2">
                        <div className="h-8 w-full bg-cyan-500/10 border-l-2 border-cyan-500 rounded-r" />
                        <div className="h-8 w-full bg-white/5 rounded" />
                        <div className="h-8 w-full bg-white/5 rounded" />
                        <div className="h-8 w-full bg-white/5 rounded" />
                    </div>
                </div>
                {/* Main Content Mock */}
                <div className="col-span-12 md:col-span-10 p-6 md:p-8 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center relative">
                    <div className="absolute inset-0 bg-[#0F1115]/90" />
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-black/40 border border-white/10 rounded-lg backdrop-blur-sm">
                            <div className="text-gray-400 text-xs mb-1">Total Revenue</div>
                            <div className="text-2xl font-bold text-white">$42,593</div>
                            <div className="text-green-400 text-xs mt-2 flex items-center">▲ 12.5% vs last week</div>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/10 rounded-lg backdrop-blur-sm">
                            <div className="text-gray-400 text-xs mb-1">Active Campaigns</div>
                            <div className="text-2xl font-bold text-white">4</div>
                            <div className="text-cyan-400 text-xs mt-2 flex items-center">● 2 Ending Soon</div>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/10 rounded-lg backdrop-blur-sm">
                            <div className="text-gray-400 text-xs mb-1">Avg Order Value</div>
                            <div className="text-2xl font-bold text-white">$48.20</div>
                            <div className="text-green-400 text-xs mt-2 flex items-center">▲ 2.1%</div>
                        </div>
                        <div className="col-span-1 md:col-span-2 h-64 bg-black/40 border border-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                             {/* Mock Graph Lines */}
                             <svg className="w-full h-full p-4" viewBox="0 0 400 200">
                                <path d="M0 150 C 50 150, 100 100, 150 120 S 250 50, 400 80" fill="none" stroke="#06b6d4" strokeWidth="3" />
                                <path d="M0 180 C 50 170, 100 140, 150 160 S 250 120, 400 140" fill="none" stroke="#8b5cf6" strokeWidth="3" opacity="0.5" />
                             </svg>
                        </div>
                        <div className="h-64 bg-black/40 border border-white/10 rounded-lg backdrop-blur-sm p-4">
                            <div className="text-sm text-white font-medium mb-4">Top Items</div>
                            <div className="space-y-3">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="h-2 w-24 bg-white/20 rounded" />
                                        <div className="h-2 w-8 bg-white/10 rounded" />
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
