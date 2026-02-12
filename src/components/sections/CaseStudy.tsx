import React from "react";
import { motion } from "motion/react";
import { BarChart3, FileCheck, TrendingUp } from "lucide-react";

export function CaseStudy() {
  return (
    <section id="case-study" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Case <span className="text-[#FF6B35]">Study</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            How we helped an Australian restaurant achieve measurable growth with data science and AI.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-12">
            {/* Tags */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <span className="px-5 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B35] font-semibold text-sm">
                Reports
              </span>
              <span className="px-5 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-sm">
                Recommendations
              </span>
              <span className="px-5 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-semibold text-sm">
                Customer Success
              </span>
            </div>

            {/* 3 Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-[#FF6B35] flex items-center justify-center mx-auto mb-5">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Unified Reports</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  UberEats & DoorDash performance in one dashboard with weekly insights.
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-emerald-600 flex items-center justify-center mx-auto mb-5">
                  <FileCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Recommendations</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  AI-driven menu and campaign suggestions based on competitor and demand data.
                </p>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-sky-600 flex items-center justify-center mx-auto mb-5">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Revenue Uplift</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Customer achieved <strong>20% revenue uplift</strong> within 6 months.
                </p>
              </div>
            </div>

            {/* Success Story */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
              <h4 className="font-bold text-black mb-3 text-lg">Customer Success</h4>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                A multi-location restaurant in Australia partnered with ResGro to consolidate delivery analytics and run targeted campaigns. 
                Using our reports and recommendations, they optimised menu placement and promotions, resulting in a <strong className="text-black">20% revenue uplift</strong> on delivery channels. 
                Data-led decisions replaced guesswork and generic discounts.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
