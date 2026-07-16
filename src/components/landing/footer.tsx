"use client";

import { Calculator, Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "المنتج",
    links: [
      { label: "المميزات", href: "#features" },
      { label: "كيف يعمل", href: "#how-it-works" },
      { label: "محرك المعادلات", href: "#formula-engine" },
      { label: "الأسعار", href: "#pricing" },
    ],
  },
  {
    title: "الشركة",
    links: [
      { label: "من نحن", href: "#" },
      { label: "المدونة", href: "#" },
      { label: "الوظائف", href: "#" },
      { label: "تواصل معنا", href: "#contact" },
    ],
  },
  {
    title: "الدعم",
    links: [
      { label: "مركز المساعدة", href: "#" },
      { label: "الأسئلة الشائعة", href: "#" },
      { label: "تواصل عبر واتساب", href: "#contact" },
      { label: "تسجيل الدخول", href: "#" },
    ],
  },
  {
    title: "قانوني",
    links: [
      { label: "سياسة الخصوصية", href: "#" },
      { label: "شروط الاستخدام", href: "#" },
      { label: "سياسة الاسترجاع", href: "#" },
      { label: "اتفاقية الخدمة", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "تويتر" },
  { icon: Linkedin, href: "#", label: "لينكدإن" },
  { icon: Github, href: "#", label: "جيتهاب" },
  { icon: Mail, href: "#contact", label: "بريد" },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-zinc-300 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-700/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-2xl shadow-brand-600/40">
                  <Calculator className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-400 rounded-full animate-ping" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-xl text-white tracking-tight">
                  قَصّة
                </span>
                <span className="text-[11px] text-brand-400 font-medium">
                  منصة مشاغل الألمنيوم
                </span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-sm">
              منصة SaaS متكاملة لمشاغل الألمنيوم في فلسطين. نستبدل ملفات Excel
              بنظام ذكي يحسب قصات الألمنيوم تلقائيًا — بدقة، سرعة، وعزل كامل بين
              المشاغل.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-zinc-500">مصنوع بكل</span>
              <Heart className="w-4 h-4 text-brand-500 fill-current" />
              <span className="text-xs text-zinc-500">في فلسطين</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-800/50 text-zinc-400 hover:text-brand-400 hover:bg-zinc-800 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-display font-bold text-sm text-white mb-5 uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-zinc-400 hover:text-brand-400 transition-all duration-300 inline-block hover:translate-x-1"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} قَصّة — جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-500 shadow-lg shadow-brand-500/50 animate-pulse" />
              <span>الخدمة تعمل — Vercel + Supabase</span>
            </div>
            <div className="h-4 w-px bg-zinc-700" />
            <div className="text-xs text-zinc-500">
              صادق تكنولوجي دائمًا
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
