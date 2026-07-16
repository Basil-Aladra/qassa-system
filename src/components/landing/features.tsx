"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Calculator,
  Layers,
  FileText,
  ShieldCheck,
  Archive,
  History,
  Sparkles,
  FileCheck2,
  Zap,
  Cpu,
  Users,
  Play,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  accent: string;
  glow: string;
  badge: string;
  metric?: string;
  metricLabel?: string;
}

const features: Feature[] = [
  {
    icon: Calculator,
    title: "محرك معادلات مرن",
    desc: "أنشئ حقول إدخال وحقول محسوبة بمعادلاتك الخاصة، بدون أي كود. يدعم الاعتماد المتسلسل بين الحقول واكتشاف الحلقات الدائرية تلقائيًا.",
    color: "from-brand-500 to-brand-700",
    accent: "bg-brand-50 text-brand-700 border-brand-200",
    glow: "shadow-brand-500/30",
    badge: "بدون كود",
    metric: "∞",
    metricLabel: "معادلات",
  },
  {
    icon: Layers,
    title: "قوالب قابلة لإعادة الاستخدام",
    desc: "صمّم قالبًا مرة واحدة لكل نوع شباك أو باب أو واجهة، ثم استخدمه في كل مشاريعك القادمة بنفس الدقة والسرعة.",
    color: "from-gold-500 to-gold-700",
    accent: "bg-gold-50 text-gold-700 border-gold-200",
    glow: "shadow-gold-500/30",
    badge: "وفّر وقتك",
  },
  {
    icon: Sparkles,
    title: "Sandbox اختبار حي",
    desc: "جرّب قيمًا افتراضية وشوف النتائج فورًا قبل الاستخدام الفعلي. عدّل المعادلة واختبرها دون حفظ أي تغيير.",
    color: "from-emerald-500 to-teal-700",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-200",
    glow: "shadow-emerald-500/30",
    badge: "تجربة آمنة",
  },
  {
    icon: FileText,
    title: "تصدير احترافي",
    desc: "صدّر إلى PDF أو Excel أو اطبع مباشرة — كل عنصر بكامل حقوله تحت اسمه، بتنسيق نظيف وجاهز للتسليم.",
    color: "from-rose-500 to-pink-700",
    accent: "bg-rose-50 text-rose-700 border-rose-200",
    glow: "shadow-rose-500/30",
    badge: "3 صيغ",
    metric: "PDF",
    metricLabel: "+ Excel + Print",
  },
  {
    icon: ShieldCheck,
    title: "عزل كامل بين المشاغل",
    desc: "حماية على مستوى قاعدة البيانات عبر Row-Level Security — ليست مجرد فلترة بالتطبيق. كل مشغل معزول تمامًا عن غيره.",
    color: "from-brand-600 to-emerald-800",
    accent: "bg-brand-50 text-brand-700 border-brand-200",
    glow: "shadow-brand-600/30",
    badge: "RLS حقيقي",
  },
  {
    icon: Archive,
    title: "أرشفة بدل الحذف",
    desc: "لا تفقد بياناتك أبدًا. الأنظمة والقوالب تُؤرشف بدل حذفها نهائيًا، فتبقى سجلك التاريخي محفوظًا.",
    color: "from-amber-500 to-orange-700",
    accent: "bg-amber-50 text-amber-700 border-amber-200",
    glow: "shadow-amber-500/30",
    badge: "آمن",
  },
  {
    icon: History,
    title: "سجل كامل للاشتراك",
    desc: "كل تغيير على الاشتراك موثّق — تفعيل، تعليق، تجديد. صفحة تفاصيل مشترك كاملة للأدمن بسجل تاريخي دقيق.",
    color: "from-violet-500 to-purple-700",
    accent: "bg-violet-50 text-violet-700 border-violet-200",
    glow: "shadow-violet-500/30",
    badge: "شفافية",
  },
  {
    icon: FileCheck2,
    title: "كشف ذكي للتعارض",
    desc: "عدّلت قالبًا فيه عناصر موجودة؟ النظام يعلّمها تلقائيًا «تحتاج إعادة حساب» بدل أن تنكسر بصمت.",
    color: "from-cyan-500 to-blue-700",
    accent: "bg-cyan-50 text-cyan-700 border-cyan-200",
    glow: "shadow-cyan-500/30",
    badge: "ذكاء",
  },
];

const techStack = [
  { icon: Cpu, label: "محرك المعادلات", value: "mathjs" },
  { icon: Users, label: "عزل المشاغل", value: "RLS على DB" },
  { icon: ShieldCheck, label: "صلاحيات الأدمن", value: "SECURITY DEFINER" },
  { icon: Play, label: "اختبارات حقيقية", value: "Playwright" },
];

export function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="features"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-brand-50/30 to-background" />
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />
        {/* Decorative orbs */}
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-brand-300/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gold-300/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Enhanced header */}
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 mb-5">
            <Zap className="w-3.5 h-3.5 fill-brand-500 text-brand-500" />
            <span className="text-xs font-bold tracking-wide">المميزات</span>
            <span className="text-xs text-brand-400">•</span>
            <span className="text-xs text-brand-600 font-medium">٨ أدوات قوية</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
            كل ما يحتاجه مشغل الألمنيوم
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient-brand">في مكان واحد</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            مجموعة أدوات متكاملة صُممت خصيصًا لسير عمل مشاغل الألمنيوم — من
            إنشاء المشروع حتى التصدير النهائي.
          </p>
        </Reveal>

        {/* Features grid */}
        <RevealStagger
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
          stagger={0.08}
        >
          {features.map((f, idx) => (
            <RevealItem key={f.title}>
              <FeatureCard feature={f} index={idx} reduceMotion={!!reduceMotion} />
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Enhanced tech bar */}
        <Reveal delay={0.2} className="mt-14">
          <div className="relative">
            {/* Glow background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-600/20 via-emerald-600/20 to-gold-600/20 rounded-3xl blur-xl opacity-60" />

            <div className="relative bg-zinc-950 rounded-3xl p-6 sm:p-8 overflow-hidden">
              {/* Subtle grid overlay */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
              </div>

              <div className="relative flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
                {/* Left: label */}
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-emerald-600 text-white shadow-lg shadow-brand-500/30">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-medium">
                      مبني على تقنيات
                    </div>
                    <div className="text-sm font-bold text-white">
                      مؤسسية ومُختبَرة
                    </div>
                  </div>
                </div>

                {/* Right: tech badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-6 flex-1 lg:max-w-3xl">
                  {techStack.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-2.5 group cursor-default"
                    >
                      <div className="grid place-items-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 group-hover:bg-brand-500/10 group-hover:border-brand-400/30 transition-colors">
                        <item.icon className="w-4 h-4 text-brand-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wide leading-tight">
                          {item.label}
                        </div>
                        <div className="text-xs font-bold text-white font-mono truncate">
                          {item.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom CTA strip */}
        <Reveal delay={0.3} className="mt-10 text-center">
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 group"
          >
            <span>شاهد كيف تعمل هذه المميزات معًا</span>
            <span className="grid place-items-center w-7 h-7 rounded-full bg-brand-100 group-hover:bg-brand-600 group-hover:text-white text-brand-600 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
  reduceMotion,
}: {
  feature: Feature;
  index: number;
  reduceMotion: boolean;
}) {
  const f = feature;
  const Icon = f.icon;

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative h-full bg-white rounded-2xl border border-border/80 p-6 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Top gradient line on hover */}
      <div
        className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-l ${f.color} scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500`}
      />

      {/* Hover glow blob */}
      <div
        className={`absolute -top-16 -left-16 w-40 h-40 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`}
      />

      {/* Big decorative icon in background */}
      <div className="absolute -bottom-4 -left-2 text-foreground/[0.03] group-hover:text-foreground/[0.05] transition-colors duration-500 pointer-events-none">
        <Icon className="w-28 h-28" strokeWidth={1} />
      </div>

      {/* Number indicator */}
      <div className="absolute top-4 left-4 text-xs font-mono font-bold text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative">
        {/* Icon + Badge row */}
        <div className="flex items-start justify-between mb-5">
          <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className={`grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} text-white shadow-xl ${f.glow} relative`}
          >
            <Icon className="w-7 h-7" strokeWidth={2} />
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <span
            className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${f.accent} mt-1`}
          >
            {f.badge}
          </span>
        </div>

        {/* Title + Description */}
        <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-brand-700 transition-colors duration-300">
          {f.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {f.desc}
        </p>

        {/* Optional metric footer */}
        {f.metric && (
          <div className="flex items-center gap-2 pt-3 border-t border-border/60">
            <div
              className={`font-display text-2xl font-extrabold bg-gradient-to-l ${f.color} bg-clip-text text-transparent`}
            >
              {f.metric}
            </div>
            {f.metricLabel && (
              <div className="text-[11px] text-muted-foreground leading-tight">
                {f.metricLabel}
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
