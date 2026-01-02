import React from "react";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export function IntelligenceEngine() {
  return (
    <section id="intelligence" className="py-24 bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Marketing Intelligence Engine</h2>
            <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-violet-500/10 rounded-full flex items-center justify-center border border-violet-500/20">
                        <span className="text-violet-400 font-bold">01</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Geo-Demand Analysis</h3>
                        <p className="text-gray-400">Identify exactly where your orders are coming from and target under-served neighborhoods with precision ads.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                        <span className="text-blue-400 font-bold">02</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Competitor Mapping</h3>
                        <p className="text-gray-400">See what your competitors are offering and when. Adjust your pricing and bundles to win the buy box.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-cyan-500/10 rounded-full flex items-center justify-center border border-cyan-500/20">
                        <span className="text-cyan-400 font-bold">03</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Smart Seasonal Bundles</h3>
                        <p className="text-gray-400">AI recommendations for menu bundles based on upcoming events, weather, and festive trends.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-2xl blur-2xl opacity-20" />
             <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1759701059272-d83175fff799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2l0eSUyMG5pZ2h0JTIwYWJzdHJhY3QlMjBibHVlJTIwbmVvbnxlbnwxfHx8fDE3NjczNDg0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Intelligence Map" 
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Overlay UI elements */}
                <div className="absolute top-1/4 left-1/4 p-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <div>
                        <div className="text-white text-xs font-bold">High Demand Zone</div>
                        <div className="text-gray-400 text-[10px]">+24% Order Vol</div>
                    </div>
                </div>

                <div className="absolute bottom-1/4 right-1/4 p-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div>
                        <div className="text-white text-xs font-bold">Competitor Spiked</div>
                        <div className="text-gray-400 text-[10px]">Offering 20% Off</div>
                    </div>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
}
