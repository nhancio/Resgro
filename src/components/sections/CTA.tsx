import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, Globe, MapPin, Linkedin, Twitter, Instagram, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    restaurant: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Initialize EmailJS with public key
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!publicKey || !serviceId || !templateId) {
        throw new Error("EmailJS configuration is missing. Please check your .env file.");
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        restaurant: formData.restaurant || "Not provided",
        message: formData.message,
        to_email: "partha@idigitalmind.com.au",
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", restaurant: "", message: "" });
      
      // Reset status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main CTA */}
        <div className="relative rounded-3xl overflow-hidden bg-[#FF6B35] border-2 border-black p-12 md:p-20 text-center mb-20">
            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Grow Your Restaurant?</h2>
                <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">
                    Join hundreds of Australian restaurants using data to outperform the market.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="h-14 px-10 text-lg bg-white hover:bg-black text-black hover:text-white rounded-full font-bold border-2 border-white">
                        Start Free Trial
                    </Button>
                </div>
            </div>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="mb-20 max-w-2xl mx-auto scroll-mt-20">
            <div className="rounded-3xl bg-white border-2 border-[#FF6B35] p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">Contact <span style={{ color: '#FF6B35' }}>Us</span></h3>
                <p className="text-black text-center mb-8">
                    Get in touch with us to learn more about how we can help grow your restaurant.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                                Name *
                            </label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-white border-2 border-[#FF6B35] text-black placeholder:text-gray-400 focus:border-black"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                                Email *
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white border-2 border-[#FF6B35] text-black placeholder:text-gray-400 focus:border-black"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="restaurant" className="block text-sm font-medium text-black mb-2">
                            Restaurant Name
                        </label>
                        <Input
                            id="restaurant"
                            name="restaurant"
                            type="text"
                            value={formData.restaurant}
                            onChange={handleChange}
                            className="w-full bg-white border-black text-black placeholder:text-gray-400 focus:border-orange-500"
                            placeholder="Your restaurant name"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                            Message *
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full bg-white border-black text-black placeholder:text-gray-400 focus:border-orange-500 resize-none"
                            placeholder="Tell us about your restaurant and how we can help..."
                        />
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full h-14 text-lg bg-[#FF6B35] hover:bg-[#FF8C42] text-white border-0 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send className="ml-2 w-5 h-5" />
                            </>
                        )}
                    </Button>
                    {submitStatus === "success" && (
                        <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                            Thank you for your message! We'll get back to you soon.
                        </div>
                    )}
                    {submitStatus === "error" && (
                        <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                            Something went wrong. Please try again or contact us directly at partha@idigitalmind.com.au
                        </div>
                    )}
                </form>
            </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-b-2 border-[#FF6B35] pb-12">
            <div className="col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <img 
                        src="/logo.png" 
                        alt="RESGRO Logo" 
                        className="h-8 w-auto"
                    />
                    <span className="text-2xl font-bold tracking-tight text-black">
                        RES<span className="text-[#FF6B35]">GRO</span>
                    </span>
                </div>
                <p className="text-black max-w-sm mb-6">
                    Data science powered growth engine for modern restaurants in Australia & New Zealand.
                </p>
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF8C42] cursor-pointer transition-colors">
                        <Linkedin size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF8C42] cursor-pointer transition-colors">
                        <Twitter size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF8C42] cursor-pointer transition-colors">
                        <Instagram size={20} />
                    </div>
                </div>
            </div>

            <div>
                <h4 className="text-black font-bold mb-6">Contact</h4>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-black hover:text-[#FF6B35] transition-colors">
                        <Mail size={18} />
                        <a href="mailto:partha@idigitalmind.com.au">partha@idigitalmind.com.au</a>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors">
                        <Globe size={18} />
                        <a href="https://www.idigitalmind.com" target="_blank" rel="noreferrer">www.idigitalmind.com</a>
                    </li>
                    <li className="flex items-center gap-3 text-black">
                        <MapPin size={18} />
                        <span>Australia</span>
                    </li>
                </ul>
            </div>

            <div>
                <h4 className="text-black font-bold mb-6">Links</h4>
                <ul className="space-y-4">
                    <li>
                        <button 
                            onClick={() => {
                                const element = document.getElementById("contact-form");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }}
                            className="text-black hover:text-[#FF6B35] transition-colors text-left"
                        >
                            Book a Demo
                        </button>
                    </li>
                    <li><a href="#" className="text-black hover:text-[#FF6B35] transition-colors">Case Studies</a></li>
                    <li><a href="#" className="text-black hover:text-[#FF6B35] transition-colors">Privacy Policy</a></li>
                </ul>
            </div>
        </div>

        <div className="pt-8 text-center text-black text-sm">
            © {new Date().getFullYear()} RESGRO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
