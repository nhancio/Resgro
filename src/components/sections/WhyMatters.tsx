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
    <section ref={containerRef} className="py-24 bg-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B35]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Why Data <span className="text-[#FF6B35]">Matters</span></h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">The numbers that prove data-led decisions drive real results.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-orange-50 border border-orange-200 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-4xl font-bold text-black mb-3">1 in 3</h3>
                <p className="text-gray-600 text-base leading-relaxed">Australians use meal delivery platforms regularly</p>
            </div>
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-4xl font-bold text-black mb-3">65%</h3>
                <p className="text-gray-600 text-base leading-relaxed">Of restaurants rely heavily on generic promotions</p>
            </div>
            <div className="p-8 rounded-2xl bg-sky-50 border border-sky-200 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-4xl font-bold text-black mb-3">+20%</h3>
                <p className="text-gray-600 text-base leading-relaxed">Revenue uplift achievable with data-led decisions</p>
            </div>
            <div className="p-8 rounded-2xl bg-amber-50 border border-amber-200 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-4xl font-bold text-black mb-3">Data-led</h3>
                <p className="text-gray-600 text-base leading-relaxed">Smart campaigns beat generic discounts every time</p>
            </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 opacity-20 select-none mt-8">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap">
            <span className="text-8xl md:text-9xl font-black text-transparent stroke-text px-4">CLICK CLICK CLICK CLICK CLICK CLICK</span>
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap">
            <span className="text-8xl md:text-9xl font-black text-black/10 px-4">OFFER OFFER OFFER OFFER OFFER OFFER</span>
        </motion.div>
        <motion.div style={{ x: x3 }} className="whitespace-nowrap">
            <span className="text-8xl md:text-9xl font-black text-transparent stroke-text px-4" style={{ color: '#FF6B35' }}>GROW GROW GROW GROW GROW GROW</span>
        </motion.div>
      </div>
      
      <style>{`
        .stroke-text {
            -webkit-text-stroke: 1px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
}
