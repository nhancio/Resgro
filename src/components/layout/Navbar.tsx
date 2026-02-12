import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X, Linkedin, Instagram, Twitter } from "lucide-react";
import { FacebookIcon } from "../icons/FacebookIcon";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { label: "Solution", id: "solution" },
  { label: "Intelligence", id: "intelligence" },
  { label: "Process", id: "process" },
];

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/company/resgro-ai", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.facebook.com/profile.php?id=61586497146713", label: "Facebook", icon: FacebookIcon },
  { href: "https://www.instagram.com/resgro.australia/", label: "Instagram", icon: Instagram },
  { href: "https://x.com/Resgro_AI", label: "X", icon: Twitter },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          });
        },
        { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
      );
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer?.observe(el);
      });
    }, 100);
    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
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
          className="flex flex-col items-start gap-0.5 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="RESGRO Logo" 
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold tracking-tight text-black">
              RES<span className="text-[#FF6B35]">GRO</span>
            </span>
          </div>
          <span className="text-xs font-medium text-black/80 hidden sm:block" style={{ maxWidth: "220px" }}>
            Your Restaurant, Our Data Science & AI = Growth
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === id ? "text-[#FF6B35]" : "text-black hover:text-[#FF6B35]"
              }`}
            >
              {label}
            </button>
          ))}
          <div className="flex items-center gap-2 border-l border-gray-200 pl-6">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#FF6B35] hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
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
              {NAV_ITEMS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-lg font-medium text-left ${
                    activeSection === id ? "text-[#FF6B35]" : "text-black hover:text-[#FF6B35]"
                  }`}
                >
                  {label}
                </button>
              ))}
              <div className="flex gap-3 flex-wrap">
                {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-[#FF6B35] hover:text-white transition-colors"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
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
