import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b-2 border-[#FF6B35]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img 
            src="/logo.png" 
            alt="RESGRO Logo" 
            className="h-8 w-auto"
          />
          <span className="text-2xl font-bold tracking-tight text-black">
            RES<span className="text-[#FF6B35]">GRO</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Solution", "Intelligence", "Process"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
              className="text-sm font-medium text-black hover:text-[#FF6B35] transition-colors"
            >
              {item}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection("contact-form")}
            className="!bg-[#FF6B35] hover:!bg-[#FF8C42] !text-white border-0 rounded-full px-6 py-2 font-medium"
            style={{ backgroundColor: '#FF6B35', color: 'white' }}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b-2 border-[#FF6B35] overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {["Solution", "Intelligence", "Process"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="text-lg font-medium text-black hover:text-[#FF6B35] text-left"
                >
                  {item}
                </button>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button 
                  onClick={() => scrollToSection("contact-form")}
                  className="w-full !bg-[#FF6B35] hover:!bg-[#FF8C42] !text-white border-0 rounded-full font-medium"
                  style={{ backgroundColor: '#FF6B35', color: 'white' }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
