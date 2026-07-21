"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  ArrowUpRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Radial Gradient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_var(--background)_0%,_rgba(34,197,94,0.08)_30%,_transparent_70%)]"></div>
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><filter id=\"noiseFilter\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100\" height=\"100\" filter=\"url(%23noiseFilter)\" opacity=\"0.03\"/></svg>')]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/6 w-20 h-20 bg-brand-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-brand-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/5 right-1/4 w-16 h-16 bg-brand-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-24 bg-brand-500/5 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-brand-500/5 rounded-full blur-xl"></div>
        
        {/* Subtle Grid Lines */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(55,65,81,0.03)_1px,rgba(55,65,81,0.03)_2px)] opacity-30 pointer-events-none"></div>
        
        {/* Geometric Lines */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_1px,rgba(34,197,94,0.02)_1px,rgba(34,197,94,0.02)_2px)] opacity-20 pointer-events-none"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="flex items-center space-x-3"
              >
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 -z-0 blur-sm"></div>
                  <div className="relative z-0 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-emerald-700 shadow-lg shadow-brand-600/30">
                    <Calculator className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-brand-600">
                    منصة مشاغل الألمنيوم
                  </p>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    قَصّة
                  </h3>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm text-zinc-400 leading-relaxed max-w-md"
              >
                منصة SaaS متكاملة لمشاغل الألمنيوم في فلسطين. نستبدل ملفات Excel بنظام ذكي يحسب قصات الألمنيوم تلقائيًا — بدقة، سرعة، وعزل كامل بين المشاغل.
              </p>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-sm font-semibold text-white mb-2 uppercase tracking-wider"
              >
                المنتج
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-2 text-sm text-zinc-400"
              >
                <li className="flex items-center gap-2 transition-all duration-300 hover:text-brand-400 hover:translate-x-1">
                  <ArrowUpRight className="w-3 h-3 text-brand-400 transition-colors duration-300" />
                  <a href="#features" className="hover:underline">المميزات</a>
                </li>
                <li className="flex items-center gap-2 transition-all duration-300 hover:text-brand-400 hover:translate-x-1">
                  <ArrowUpRight className="w-3 h-3 text-brand-400 transition-colors duration-300" />
                  <a href="#how-it-works" className="hover:underline">كيف يعمل</a>
                </li>
                <li className="flex items-center gap-2 transition-all duration-300 hover:text-brand-400 hover:translate-x-1">
                  <ArrowUpRight className="w-3 h-3 text-brand-400 transition-colors duration-300" />
                  <a href="#formula-engine" className="hover:underline">محرك المعادلات</a>
                </li>
                <li className="flex items-center gap-2 transition-all duration-300 hover:text-brand-400 hover:translate-x-1">
                  <ArrowUpRight className="w-3 h-3 text-brand-400 transition-colors duration-300" />
                  <a href="#pricing" className="hover:underline">الأسعار</a>
                </li>
              </motion.ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-sm font-semibold text-white mb-2 uppercase tracking-wider"
              >
                الشركة
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-2 text-sm text-zinc-400"
              >
                <li className="flex items-center gap-2 transition-all duration-300 hover:text-brand-400 hover:translate-x-1">
                  <ArrowUpRight className="w-3 h-3 text-brand-400 transition-colors duration-300" />
                  <a href="#" className="hover:underline">من نحن</a>
                </li>
                <li className="flex items-center gap-2 transition-all duration-300 hover:text-brand-400 hover:translate-x-1">
                  <ArrowUpRight className="w-3 h-3 text-brand-400 transition-colors duration-300" />
                  <a href="#" className="hover:underline">المدونة</a>
                </li>
                <li className="flex items-center gap-2 transition-all duration-300 hover:text-brand-400 hover:translate-x-1">
                  <ArrowUpRight className="w-3 h-3 text-brand-400 transition-colors duration-300" />
                  <a href="#" className="hover:underline">الوظائف</a>
                </li>
                <li className="flex items-center gap-2 transition-all duration-300 hover:text-brand-400 hover:translate-x-1">
                  <ArrowUpRight className="w-3 h-3 text-brand-400 transition-colors duration-300" />
                  <a href="#contact" className="hover:underline">تواصل معنا</a>
                </li>
              </motion.ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-sm font-semibold text-white mb-2 uppercase tracking-wider"
              >
                الدعم
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-2 text-sm text-zinc-400"
              >
                <li className="flex items-center gap-2 transition-all duration-300 hover:text-brand-400 hover:translate-x-1">
                  <ArrowUpRight className="w-3 h-3 text-brand-400 transition-colors duration-300" />
                  <a href="#" className="hover:underline">مركز المساعدة</a>
                </li>
                <li className="flex items-center gap-2 transition-all duration-300 hover:text-brand-400 hover:translate-x-1">
                  <ArrowUpRight className="w-3 h-3 text-brand-400 transition-colors duration-300" />
                  <a href="#" className="hover:underline">الأسئلة الشائعة</a>
                </li>
                <li className="flex items-center gap-2 transition-all duration-300 hover:text-brand-400 hover:translate-x-1">
                  <ArrowUpRight className="w-3 h-3 text-brand-400 transition-colors duration-300" />
                  <a href="#" className="hover:underline">الدعم الفني</a>
                </li>
              </motion.ul>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-sm font-semibold text-white mb-2 uppercase tracking-wider"
              >
                تواصل معنا
              </motion.h3>
              
              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-brand-600/20 rounded-xl">
                  <Whatsapp className="w-5 h-5 text-brand-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-white">ابدأ الآن عبر واتساب</p>
                  <p className="text-xs text-zinc-400">نرد خلال دقائق.</p>
                </div>
              </motion.div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-zinc-400 hover:text-brand-400 transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  <span>فلسطين، القدس</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-400 hover:text-brand-400 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                  <span>+972 56-835-3362</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-400 hover:text-brand-400 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  <span>info@qassa.app</span>
                </div>
              </div>
              
              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex gap-3"
              >
                <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
                  <Linkedin className="w-4 h-4 text-zinc-400 hover:text-brand-400" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
                  <Facebook className="w-4 h-4 text-zinc-400 hover:text-brand-400" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
                  <Instagram className="w-4 h-4 text-zinc-400 hover:text-brand-400" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
                  <Youtube className="w-4 h-4 text-zinc-400 hover:text-brand-400" />
                </a>
              </motion.div>
              
              {/* Newsletter */}
              <motion.form
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-3 mt-4"
              >
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-zinc-400 focus:ring-2 focus:ring-brand-500/20 focus:border-transparent"
                    aria-label="البريد الإلكتروني للنشرة البريدية"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/10 hover:bg-white/20 text-white hover:text-brand-400 border border-white/20 hover:border-brand-400/50"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-zinc-500">
                  نرسل تحديثات شهرية فقط، لا spam.
                </p>
              </motion.form>
            </div>
          </div>
          
          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 pt-8 border-t border-white/10"
          />
          
          {/* Bottom Section */}
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between mt-10 pt-6 text-xs text-zinc-500">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} قَصّة — جميع الحقوق محفوظة.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-400 transition-colors duration-300">الشروط والأحكام</a>
              <a href="#" className="hover:text-brand-400 transition-colors duration-300">سياسة الخصوصية</a>
              <a href="#" className="hover:text-brand-400 transition-colors duration-300">سياسة الإرجاع</a>
              <a href="#" className="hover:text-brand-400 transition-colors duration-300">اتفاقية الخدمة</a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

// WhatsApp Icon Component (since it's not in Lucide by default)
function Whatsapp() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 8.92c-1.45 4.73-5.25 8.16-10.15 8.16s-8.7-3.43-10.15-8.16C1.26 11.37 2 8.48 2 5.41 2 2.76 4.24 1 7 1c2.76 0 5.2 1.04 7.06 2.76l3.75-3.75 1.42 1.42-3.75 3.75c1.72 1.86 2.75 4.3 2.75 6.76 0 3.78-3 6.86-7 8.26v2.2l2.68-.02c3.42-.35 6.22-2.92 6.57-6.35.2-1.89-.2-3.82-.98-5.51z" fill="currentColor"/>
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
    </svg>
  );
}