import React from "react";

export function Vision() {
  return (
    <section className="py-32 bg-white flex items-center justify-center text-center px-6 border-t-2 border-[#FF6B35]">
      <div className="max-w-4xl border-2 border-[#FF6B35] p-12 rounded-2xl">
        <blockquote className="text-3xl md:text-5xl font-serif text-black leading-tight">
          "Modern problems require <span style={{ color: '#FF6B35' }}>modern solutions</span>. <br />
          <span className="text-black">Modern delivery users need customised campaigns backed by deep data insights."</span>
        </blockquote>
      </div>
    </section>
  );
}
