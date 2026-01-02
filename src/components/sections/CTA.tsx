import React from "react";
import { Button } from "../ui/button";
import { Mail, Globe, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export function CTA() {
  return (
    <footer className="bg-[#020202] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main CTA */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-900/20 to-violet-900/20 border border-white/10 p-12 md:p-20 text-center mb-20">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1759701059272-d83175fff799?auto=format&fit=crop&q=80')] opacity-20 mix-blend-overlay bg-cover bg-center" />
            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Grow Your Restaurant?</h2>
                <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
                    Join hundreds of Australian restaurants using data to outperform the market.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="h-14 px-10 text-lg bg-white text-black hover:bg-gray-200 rounded-full font-bold">
                        Start Free Trial
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-white/20 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                        Contact Sales
                    </Button>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
            <div className="col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-black text-lg">R</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">
                        RES<span className="text-cyan-500">GRO</span>
                    </span>
                </div>
                <p className="text-gray-500 max-w-sm mb-6">
                    Data science powered growth engine for modern restaurants in Australia & New Zealand.
                </p>
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
                        <Linkedin size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
                        <Twitter size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
                        <Instagram size={20} />
                    </div>
                </div>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6">Contact</h4>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                        <Mail size={18} />
                        <a href="mailto:parth@idigitalmind.au">parth@idigitalmind.au</a>
                    </li>
                    <li className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                        <Globe size={18} />
                        <a href="https://www.idigitalmind.com" target="_blank" rel="noreferrer">www.idigitalmind.com</a>
                    </li>
                    <li className="flex items-center gap-3 text-gray-400">
                        <MapPin size={18} />
                        <span>Australia</span>
                    </li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6">Links</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Platform Login</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Book a Demo</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
            </div>
        </div>

        <div className="pt-8 text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} RESGRO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
