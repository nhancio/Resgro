import React from "react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-[#FF6B35] mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
          <span className="text-sm font-medium" style={{ color: '#FF6B35' }}>New: AI-Powered Competitor Analysis</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 leading-tight"
        >
          Data Science Powered Growth <br />
          <span style={{ color: '#FF6B35' }}>
            for Modern Restaurants
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-black max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Helping Australian restaurants unlock delivery revenue from UberEats and DoorDash using deep analytics and personalised campaigns.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            onClick={() => {
              const element = document.getElementById("contact-form");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="h-14 px-8 text-lg bg-[#FF6B35] hover:bg-[#FF8C42] text-white rounded-full transition-all hover:scale-105"
          >
            Book a Free Growth Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
        
        {/* Floating UI Elements Mockup */}
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 relative mx-auto max-w-5xl"
        >
             <div className="relative rounded-t-xl overflow-hidden border-2 border-[#FF6B35] shadow-2xl bg-white backdrop-blur-xl">
                <div className="h-8 bg-white border-b-2 border-[#FF6B35] flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="aspect-[16/9] relative">
                    <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwc2NyZWVuJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NjczNDg0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                        alt="Dashboard" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    {/* Overlay Graphics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
             </div>
        </motion.div>
      </div>
    </section>
  );
}
