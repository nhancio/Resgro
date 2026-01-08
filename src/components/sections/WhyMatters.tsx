import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function WhyMatters() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={containerRef} className="py-32 bg-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Why Data Matters</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-black bg-white">
                <h3 className="text-4xl font-bold text-black mb-2">1 in 3</h3>
                <p className="text-black">Australians use meal delivery platforms regularly</p>
            </div>
            <div className="p-6 border border-black bg-white">
                <h3 className="text-4xl font-bold text-black mb-2">65%</h3>
                <p className="text-black">Of restaurants rely heavily on generic promotions</p>
            </div>
            <div className="p-6 border border-black bg-white">
                <h3 className="text-4xl font-bold text-black mb-2">+20%</h3>
                <p className="text-black">Revenue uplift achievable with data-led decisions</p>
            </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 opacity-30 select-none">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap">
            <span className="text-8xl md:text-9xl font-black text-transparent stroke-text px-4">CLICK CLICK CLICK CLICK CLICK CLICK</span>
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap">
            <span className="text-8xl md:text-9xl font-black text-black px-4">OFFER OFFER OFFER OFFER OFFER OFFER</span>
        </motion.div>
        <motion.div style={{ x: x3 }} className="whitespace-nowrap">
            <span className="text-8xl md:text-9xl font-black text-transparent stroke-text px-4" style={{ color: '#FF6B35' }}>GROW GROW GROW GROW GROW GROW</span>
        </motion.div>
      </div>
      
      <style>{`
        .stroke-text {
            -webkit-text-stroke: 1px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
}
