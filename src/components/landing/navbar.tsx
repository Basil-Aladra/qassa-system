"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "المميزات", href: "#features" },
  { label: "كيف يعمل", href: "#how-it-works" },
  { label: "محرك المعادلات", href: "#formula-engine" },
  { label: "الأسعار", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/60 shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#hero");
            }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2.5"
          >
            <div className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 shadow-lg shadow-brand-600/30">
              <Calculator className="w-5 h-5 text-white" strokeWidth={2.5} />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-lg text-foreground">
                قَصّة
              </span>
              <span className="text-[10px] text-muted-foreground font-medium">
                منصة مشاغل الألمنيوم
              </span>
            </div>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/60"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNav("#contact")}
              className="font-medium"
            >
              تسجيل الدخول
            </Button>
            <Button
              size="sm"
              onClick={() => handleNav("#pricing")}
              className="bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/30 font-semibold"
            >
              ابدأ الآن
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden grid place-items-center w-10 h-10 rounded-lg border border-border bg-background"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="القائمة"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden mt-3"
            >
              <div className="glass border border-border rounded-2xl p-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="text-right px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="h-px bg-border my-1" />
                <Button
                  className="bg-brand-600 hover:bg-brand-700 text-white font-semibold w-full"
                  onClick={() => handleNav("#pricing")}
                >
                  ابدأ الآن مجانًا
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
