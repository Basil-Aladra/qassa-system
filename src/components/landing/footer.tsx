"use client";

import { Calculator, Heart } from "lucide-react";

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

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-600/30">
                <Calculator className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-lg text-white">
                  قَصّة
                </span>
                <span className="text-[10px] text-zinc-500 font-medium">
                  منصة مشاغل الألمنيوم
                </span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-sm">
              منصة SaaS متكاملة لمشاغل الألمنيوم في فلسطين. نستبدل ملفات Excel
              بنظام ذكي يحسب قصات الألمنيوم تلقائيًا — بدقة، سرعة، وعزل كامل بين
              المشاغل.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500">مصنوع بكل</span>
              <Heart className="w-3.5 h-3.5 text-brand-500 fill-current" />
              <span className="text-xs text-zinc-500">في فلسطين</span>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-display font-bold text-sm text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-zinc-400 hover:text-brand-400 transition-colors"
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
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} قَصّة — جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span>الخدمة تعمل — Vercel + Supabase</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
