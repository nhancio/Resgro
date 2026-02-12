import React from "react";
import { motion } from "motion/react";

export function Vision() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-orange-50/30 border border-gray-200 p-14 md:p-20 rounded-3xl shadow-lg text-center"
        >
          <blockquote className="text-2xl md:text-4xl lg:text-5xl font-serif text-black leading-tight">
            "Modern problems require <span className="text-[#FF6B35]">modern solutions</span>. <br className="hidden md:block" />
            <span className="text-black">Modern delivery users need customised campaigns backed by deep data insights."</span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
