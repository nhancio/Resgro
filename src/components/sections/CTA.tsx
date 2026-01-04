import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, Globe, MapPin, Linkedin, Twitter, Instagram, Send } from "lucide-react";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    restaurant: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", restaurant: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                </div>
            </div>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="mb-20 max-w-2xl mx-auto scroll-mt-20">
            <div className="rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Contact Us</h3>
                <p className="text-gray-400 text-center mb-8">
                    Get in touch with us to learn more about how we can help grow your restaurant.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                Name *
                            </label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email *
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="restaurant" className="block text-sm font-medium text-gray-300 mb-2">
                            Restaurant Name
                        </label>
                        <Input
                            id="restaurant"
                            name="restaurant"
                            type="text"
                            value={formData.restaurant}
                            onChange={handleChange}
                            className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                            placeholder="Your restaurant name"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Message *
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500 resize-none"
                            placeholder="Tell us about your restaurant and how we can help..."
                        />
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 text-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 rounded-full"
                    >
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                    </Button>
                </form>
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
                        <a href="mailto:partha@idigitalmind.com.au">partha@idigitalmind.com.au</a>
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
                    <li>
                        <button 
                            onClick={() => {
                                const element = document.getElementById("contact-form");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }}
                            className="text-gray-400 hover:text-white transition-colors text-left"
                        >
                            Book a Demo
                        </button>
                    </li>
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
