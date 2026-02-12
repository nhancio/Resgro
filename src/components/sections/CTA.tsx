import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, Globe, MapPin, Linkedin, Twitter, Instagram, Send, Loader2 } from "lucide-react";
import { FacebookIcon } from "../icons/FacebookIcon";
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
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!publicKey || !serviceId || !templateId) {
        throw new Error("EmailJS configuration is missing.");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        restaurant: formData.restaurant || "Not provided",
        message: formData.message,
        to_email: "contact@resgro.ai",
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", restaurant: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer className="bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-[#FF6B35] p-12 md:p-20 text-center mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#e85d2c]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Grow Your Restaurant?</h2>
            <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">
              Join hundreds of Australian restaurants using data to outperform the market.
            </p>
            <Button 
              size="lg" 
              onClick={() => {
                const el = document.getElementById("contact-form");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="h-14 px-10 text-lg !bg-white hover:!bg-gray-100 !text-[#FF6B35] rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Start Free Trial
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="mb-20 max-w-2xl mx-auto scroll-mt-20">
          <div className="rounded-3xl bg-white border border-gray-200 p-10 md:p-14 shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">Contact <span style={{ color: '#FF6B35' }}>Us</span></h3>
            <p className="text-black/70 text-center mb-10">
              Get in touch with us to learn more about how we can help grow your restaurant.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">Name *</label>
                  <Input
                    id="name" name="name" type="text" required
                    value={formData.name} onChange={handleChange}
                    className="w-full bg-white border border-gray-300 text-black placeholder:text-gray-400 focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] rounded-xl h-12"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">Email *</label>
                  <Input
                    id="email" name="email" type="email" required
                    value={formData.email} onChange={handleChange}
                    className="w-full bg-white border border-gray-300 text-black placeholder:text-gray-400 focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] rounded-xl h-12"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="restaurant" className="block text-sm font-medium text-black mb-2">Restaurant Name</label>
                <Input
                  id="restaurant" name="restaurant" type="text"
                  value={formData.restaurant} onChange={handleChange}
                  className="w-full bg-white border border-gray-300 text-black placeholder:text-gray-400 focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] rounded-xl h-12"
                  placeholder="Your restaurant name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">Message *</label>
                <Textarea
                  id="message" name="message" required
                  value={formData.message} onChange={handleChange} rows={5}
                  className="w-full bg-white border border-gray-300 text-black placeholder:text-gray-400 focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] resize-none rounded-xl"
                  placeholder="Tell us about your restaurant and how we can help..."
                />
              </div>
              <Button
                type="submit" size="lg" disabled={isSubmitting}
                className="w-full h-14 text-lg !bg-[#FF6B35] hover:!bg-[#FF8C42] !text-white border-0 rounded-full disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-md"
              >
                {isSubmitting ? (
                  <><Loader2 className="mr-2 w-5 h-5 animate-spin" /> Sending...</>
                ) : (
                  <><Send className="mr-2 w-5 h-5" /> Submit</>
                )}
              </Button>
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center font-medium">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-center font-medium">
                  Something went wrong. Please try again or contact us directly at contact@resgro.ai
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 border-t border-gray-200 pt-16 pb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="RESGRO Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold tracking-tight text-black">
                RES<span className="text-[#FF6B35]">GRO</span>
              </span>
            </div>
            <p className="text-black/70 max-w-sm mb-8 leading-relaxed">
              Data science powered growth engine for modern restaurants in Australia & New Zealand.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/resgro-ai" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF8C42] transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="https://www.facebook.com/profile.php?id=61586497146713" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF8C42] transition-colors" aria-label="Facebook"><FacebookIcon size={18} /></a>
              <a href="https://www.instagram.com/resgro.australia/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF8C42] transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://x.com/Resgro_AI" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF8C42] transition-colors" aria-label="X"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-black font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-black/80 hover:text-[#FF6B35] transition-colors">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:contact@resgro.ai">contact@resgro.ai</a>
              </li>
              <li className="flex items-center gap-3 text-black/80 hover:text-[#FF6B35] transition-colors">
                <Globe size={18} className="flex-shrink-0" />
                <a href="https://www.resgro.ai" target="_blank" rel="noreferrer">www.resgro.ai</a>
              </li>
              <li className="flex items-center gap-3 text-black/80">
                <MapPin size={18} className="flex-shrink-0" />
                <span>Australia</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-bold mb-6 text-lg">Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:sales@resgro.ai" className="text-black/80 hover:text-[#FF6B35] transition-colors">
                  Book a demo
                </a>
                <span className="text-sm text-black/50 block mt-1">Email sales@resgro.ai</span>
              </li>
              <li>
                <a href="#case-study" onClick={(e) => { e.preventDefault(); document.getElementById("case-study")?.scrollIntoView({ behavior: "smooth" }); }} className="text-black/80 hover:text-[#FF6B35] transition-colors">
                  Case Study
                </a>
              </li>
              <li>
                <a href="#/privacy-policy" className="text-black/80 hover:text-[#FF6B35] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-black/50 text-sm border-t border-gray-200">
          &copy; {new Date().getFullYear()} RESGRO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
