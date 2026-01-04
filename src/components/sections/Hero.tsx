import React from "react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px]" />
        
        {/* Abstract Grid */}
        <div 
            className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }}
        />
        
        {/* Hero Image Overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <img 
                src="https://images.unsplash.com/photo-1585427074397-a6fec413c00e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjB2aXN1YWxpemF0aW9uJTIwZGFyayUyMG5lb24lMjBjeWJlcnxlbnwxfHx8fDE3NjczNDg0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Data Background" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm font-medium text-cyan-300">New: AI-Powered Competitor Analysis</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Data Science Powered Growth <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
            for Modern Restaurants
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
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
            className="h-14 px-8 text-lg bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-[0_0_20px_rgba(8,145,178,0.5)] transition-all hover:scale-105"
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
             <div className="relative rounded-t-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]/80 backdrop-blur-xl">
                <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>
             </div>
        </motion.div>
      </div>
    </section>
  );
}
