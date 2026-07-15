"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  Layers,
  FileText,
  ShieldCheck,
  Archive,
  History,
  Users,
  Sparkles,
  Cpu,
  FileCheck2,
} from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

const features = [
  {
    icon: Calculator,
    title: "محرك معادلات مرن",
    desc: "أنشئ حقول إدخال وحقول محسوبة بمعادلاتك الخاصة، بدون أي كود. يدعم الاعتماد المتسلسل بين الحقول واكتشاف الحلقات الدائرية تلقائيًا.",
    color: "from-brand-500 to-brand-700",
    accent: "bg-brand-50 text-brand-700 border-brand-200",
    badge: "بدون كود",
  },
  {
    icon: Layers,
    title: "قوالب قابلة لإعادة الاستخدام",
    desc: "صمّم قالبًا مرة واحدة لكل نوع شباك أو باب أو واجهة، ثم استخدمه في كل مشاريعك القادمة بنفس الدقة والسرعة.",
    color: "from-gold-500 to-gold-700",
    accent: "bg-gold-50 text-gold-700 border-gold-200",
    badge: "وفّر وقتك",
  },
  {
    icon: Sparkles,
    title: "Sandbox اختبار حي",
    desc: "جرّب قيمًا افتراضية وشوف النتائج فورًا قبل الاستخدام الفعلي. عدّل المعادلة واختبرها دون حفظ أي تغيير.",
    color: "from-emerald-500 to-teal-700",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-200",
    badge: "تجربة آمنة",
  },
  {
    icon: FileText,
    title: "تصدير احترافي",
    desc: "صدّر إلى PDF أو Excel أو اطبع مباشرة — كل عنصر بكامل حقوله تحت اسمه، بتنسيق نظيف وجاهز للتسليم.",
    color: "from-rose-500 to-pink-700",
    accent: "bg-rose-50 text-rose-700 border-rose-200",
    badge: "3 صيغ",
  },
  {
    icon: ShieldCheck,
    title: "عزل كامل بين المشاغل",
    desc: "حماية على مستوى قاعدة البيانات عبر Row-Level Security — ليست مجرد فلترة بالتطبيق. كل مشغل معزول تمامًا عن غيره.",
    color: "from-brand-600 to-emerald-800",
    accent: "bg-brand-50 text-brand-700 border-brand-200",
    badge: "RLS حقيقي",
  },
  {
    icon: Archive,
    title: "أرشفة بدل الحذف",
    desc: "لا تفقد بياناتك أبدًا. الأنظمة والقوالب تُؤرشف بدل حذفها نهائيًا، فتبقى سجلك التاريخي محفوظًا.",
    color: "from-amber-500 to-orange-700",
    accent: "bg-amber-50 text-amber-700 border-amber-200",
    badge: "آمن",
  },
  {
    icon: History,
    title: "سجل كامل للاشتراك",
    desc: "كل تغيير على الاشتراك موثّق — تفعيل، تعليق، تجديد. صفحة تفاصيل مشترك كاملة للأدمن بسجل تاريخي دقيق.",
    color: "from-violet-500 to-purple-700",
    accent: "bg-violet-50 text-violet-700 border-violet-200",
    badge: "شفافية",
  },
  {
    icon: FileCheck2,
    title: "كشف ذكي للتعارض",
    desc: "عدّلت قالبًا فيه عناصر موجودة؟ النظام يعلّمها تلقائيًا «تحتاج إعادة حساب» بدل أن تنكسر بصمت.",
    color: "from-cyan-500 to-blue-700",
    accent: "bg-cyan-50 text-cyan-700 border-cyan-200",
    badge: "ذكاء",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-background via-brand-50/20 to-background"
    >
      <div className="absolute inset-0 bg-dots-pattern opacity-40 -z-0" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        <Reveal className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-brand-600 mb-3">
            المميزات
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            كل ما يحتاجه مشغل الألمنيوم
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient-brand">في مكان واحد</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            مجموعة أدوات متكاملة صُممت خصيصًا لسير عمل مشاغل الألمنيوم — من
            إنشاء المشروع حتى التصدير النهائي.
          </p>
        </Reveal>

        <RevealStagger
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          stagger={0.08}
        >
          {features.map((f) => (
            <RevealItem key={f.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:border-brand-300/60 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient */}
                <div
                  className={`absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} text-white shadow-lg`}
                    >
                      <f.icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-1 rounded-full border ${f.accent}`}
                    >
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Extra info bar */}
        <Reveal delay={0.2} className="mt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-3xl bg-foreground text-background">
            {[
              { icon: Cpu, label: "محرك معادلات", value: "mathjs" },
              { icon: Users, label: "عزل المشاغل", value: "RLS على DB" },
              { icon: ShieldCheck, label: "صلاحيات الأدمن", value: "SECURITY DEFINER" },
              { icon: FileText, label: "اختبارات حقيقية", value: "Playwright" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-background/90"
              >
                <item.icon className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <div>
                  <div className="text-xs text-background/60">
                    {item.label}
                  </div>
                  <div className="text-sm font-bold font-mono">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
