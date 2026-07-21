"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calculator,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Youtube,
} from "lucide-react";

const linkGroups = [
  {
    title: "المنتج",
    ariaLabel: "روابط المنتج",
    links: [
      { label: "المميزات", href: "#features" },
      { label: "كيف يعمل", href: "#how-it-works" },
      { label: "محرك المعادلات", href: "#formula-engine" },
      { label: "الأسعار", href: "#pricing" },
    ],
  },
  {
    title: "الشركة",
    ariaLabel: "روابط الشركة",
    links: [
      { label: "من نحن", href: "#hero" },
      { label: "العملاء", href: "#stats" },
      { label: "الشراكات", href: "mailto:info@qassa.app" },
      { label: "الوظائف", href: "mailto:info@qassa.app" },
    ],
  },
  {
    title: "الدعم",
    ariaLabel: "روابط الدعم",
    links: [
      { label: "مركز المساعدة", href: "mailto:info@qassa.app" },
      { label: "تواصل معنا", href: "#contact" },
      { label: "واتساب", href: "https://wa.me/972568353362" },
      { label: "طلب عرض", href: "#pricing" },
    ],
  },
  {
    title: "القانوني",
    ariaLabel: "روابط قانونية",
    links: [
      { label: "الخصوصية", href: "#privacy" },
      { label: "الشروط", href: "#terms" },
      { label: "الأمان", href: "#security" },
      { label: "ملفات الارتباط", href: "#cookies" },
    ],
  },
];

const contactLinks = [
  {
    label: "info@qassa.app",
    href: "mailto:info@qassa.app",
    icon: Mail,
  },
  {
    label: "+972 56-835-3362",
    href: "tel:+972568353362",
    icon: Phone,
  },
  {
    label: "فلسطين، القدس",
    href: "https://maps.google.com/?q=Jerusalem%2C%20Palestine",
    icon: MapPin,
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com", icon: Youtube },
];

export function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-[#06120d] text-white"
      aria-labelledby="footer-heading"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(16,185,129,0.24),transparent_34%),radial-gradient(circle_at_18%_82%,rgba(251,191,36,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.045)_0_1px,transparent_1px_120px)]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="absolute -right-28 top-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -left-24 bottom-12 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.15fr_1.85fr]">
          <section className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
            <a
              href="#hero"
              className="group inline-flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06120d]"
            >
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-500/30">
                <Calculator className="h-6 w-6 text-white" strokeWidth={2.5} />
                <span className="absolute inset-0 rounded-2xl ring-1 ring-white/25" />
                <span className="absolute -inset-3 -z-10 rounded-full bg-brand-400/20 blur-xl transition-opacity duration-300 group-hover:opacity-70" />
              </span>
              <span className="flex flex-col leading-tight">
                <span
                  id="footer-heading"
                  className="font-display text-2xl font-extrabold tracking-normal"
                >
                  قصّة
                </span>
                <span className="text-xs font-medium text-brand-200">
                  منصة مشاغل الألمنيوم
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
              نظام SaaS يساعد مشاغل الألمنيوم على إدارة المشاريع، القوالب،
              المعادلات، وحساب قصات الألمنيوم تلقائيًا بدقة وسرعة.
            </p>

            <div className="mt-7">
              <a
                href="https://wa.me/972568353362"
                className="group relative flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-l from-brand-500 via-emerald-500 to-brand-600 px-5 py-4 text-sm font-extrabold text-white shadow-xl shadow-brand-500/25 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-brand-400/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1b14]"
              >
                <span className="absolute inset-y-0 -right-1/3 w-1/3 skew-x-12 bg-white/25 opacity-0 blur-sm transition-all duration-700 group-hover:right-full group-hover:opacity-100" />
                <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>ابدأ الآن عبر واتساب</span>
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </a>
              <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-brand-100">
                <span className="h-2 w-2 rounded-full bg-brand-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
                نرد خلال دقائق.
              </p>
            </div>
          </section>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {linkGroups.map((group) => (
              <nav
                key={group.title}
                aria-label={group.ariaLabel}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
              >
                <h3 className="text-sm font-extrabold text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-all duration-200 hover:-translate-x-1 hover:text-brand-300 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
                      >
                        <span className="h-px w-0 bg-brand-300 transition-all duration-200 group-hover:w-4" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <section
            aria-labelledby="contact-heading"
            className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-brand-300">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 id="contact-heading" className="font-bold text-white">
                  تواصل مباشر وواضح
                </h3>
                <p className="text-xs text-zinc-400">
                  فريق محلي يفهم تفاصيل المشاغل ومراحل التسعير والتنفيذ.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm text-zinc-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300/40 hover:bg-brand-400/10 hover:text-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-brand-300" />
                  <span className="truncate">{item.label}</span>
                </a>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="newsletter-heading"
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur-xl"
          >
            <div className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr] xl:items-end">
              <div>
                <h3 id="newsletter-heading" className="text-xl font-extrabold">
                  ابقَ على اطلاع
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  تحديثات قصيرة حول المنتج، القوالب، وأفضل ممارسات إدارة
                  المشاغل.
                </p>
              </div>

              <form className="flex flex-col gap-3 sm:flex-row" action="#">
                <label className="sr-only" htmlFor="footer-newsletter-email">
                  البريد الإلكتروني
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  required
                  placeholder="البريد الإلكتروني"
                  className="h-12 min-w-0 flex-1 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-brand-300 focus:ring-2 focus:ring-brand-300/30"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-extrabold text-[#07130e] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06120d]"
                >
                  <Send className="h-4 w-4" />
                  اشترك
                </button>
              </form>
            </div>
          </section>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-5 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 قصّة. جميع الحقوق محفوظة.</p>

            <div className="flex items-center gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300/40 hover:bg-brand-400/10 hover:text-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
