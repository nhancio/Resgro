import React from "react";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export function IntelligenceEngine() {
  return (
    <section id="intelligence" className="py-24 bg-white border-t-2 border-[#FF6B35] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Marketing <span style={{ color: '#FF6B35' }}>Intelligence</span> Engine</h2>
            <div className="space-y-8">
                <div className="flex gap-4 p-4 bg-white rounded-xl border-2 border-[#FF6B35] hover:bg-[#FF6B35]/5 transition-colors">
                    <div className="w-12 h-12 flex-shrink-0 bg-[#FF6B35] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">01</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-black mb-2">Geo-Demand <span style={{ color: '#FF6B35' }}>Analysis</span></h3>
                        <p className="text-black">Identify exactly where your orders are coming from and target under-served neighborhoods with precision ads.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl border-2 border-[#FF6B35] hover:bg-[#FF6B35]/5 transition-colors">
                    <div className="w-12 h-12 flex-shrink-0 bg-[#FF6B35] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">02</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-black mb-2"><span style={{ color: '#FF6B35' }}>Competitor</span> Mapping</h3>
                        <p className="text-black">See what your competitors are offering and when. Adjust your pricing and bundles to win the buy box.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl border-2 border-[#FF6B35] hover:bg-[#FF6B35]/5 transition-colors">
                    <div className="w-12 h-12 flex-shrink-0 bg-[#FF6B35] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">03</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-black mb-2">Smart <span style={{ color: '#FF6B35' }}>Seasonal</span> Bundles</h3>
                        <p className="text-black">AI recommendations for menu bundles based on upcoming events, weather, and festive trends.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-violet-600 rounded-2xl blur-2xl opacity-20" />
             <div className="relative rounded-2xl overflow-hidden border-2 border-[#FF6B35] shadow-2xl">
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
