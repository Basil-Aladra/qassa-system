"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  ClipboardCheck,
  FolderPlus,
  Ruler,
  Table2,
  Download,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "./reveal";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "سجّل حسابك",
    desc: "أنشئ حسابًا بإيميل وكلمة مرور فقط، ثم أكمل بيانات مشغلك في خطوة Onboarding بسيطة — اسم المشغل، المالك، الهاتف، العنوان.",
    color: "from-brand-500 to-brand-700",
    side: "right",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "انتظر الموافقة",
    desc: "طلبك يصير pending تلقائيًا. فريقنا يتواصل معك عبر واتساب، يتأكد من الدفع، يحدد الخطة ومدة الاشتراك، ويفعّل حسابك خلال 24 ساعة.",
    color: "from-gold-500 to-gold-700",
    side: "left",
  },
  {
    number: "03",
    icon: FolderPlus,
    title: "أنشئ مشروعك الأول",
    desc: "ابدأ مشروعًا جديدًا (مثل «فيلا أبو أحمد»)، وستجده جاهزًا في لوحتك مع إحصائيات حية لعدد المشاريع، الأنظمة، والقوالب.",
    color: "from-emerald-500 to-teal-700",
    side: "right",
  },
  {
    number: "04",
    icon: Ruler,
    title: "أدخل الأبعاد فقط",
    desc: "اختر نظام الألمنيوم والقالب، ثم أدخل عرض وطول الإطار. النظام يحسب فورًا كل الحقول المحسوبة — عرض النافذة، الزجاج، وكل التفاصيل.",
    color: "from-rose-500 to-pink-700",
    side: "left",
  },
  {
    number: "05",
    icon: Table2,
    title: "جدول موحّد للعناصر",
    desc: "كل عناصر المشروع في جدول واحد، حتى لو من قوالب مختلفة. اعرض، عدّل، انسخ، أو احذف — كل شيء في مكان واحد منظّم.",
    color: "from-violet-500 to-purple-700",
    side: "right",
  },
  {
    number: "06",
    icon: Download,
    title: "صدّر واطبع",
    desc: "صدّر إلى PDF أو Excel أو اطبع مباشرة. كل عنصر بكامل حقوله تحت اسمه، بتنسيق احترافي جاهز للتسليم للزبون.",
    color: "from-amber-500 to-orange-700",
    side: "left",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-foreground via-zinc-900 to-foreground text-background overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative">
        <Reveal className="text-center mb-20">
          <span className="inline-block text-sm font-semibold text-brand-400 mb-3">
            كيف يعمل
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            من التسجيل حتى التصدير
            <br className="hidden sm:block" /> في{" "}
            <span className="text-gradient-gold">٦ خطوات بسيطة</span>
          </h2>
          <p className="text-background/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            رحلة واضحة وسلسة من لحظة إنشاء حسابك حتى تسليم مشروعك النهائي للزبون.
          </p>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-[27px] sm:right-1/2 sm:translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-500/40 to-transparent" />

          <div className="space-y-12 sm:space-y-20">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05}>
                <div
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    step.side === "left"
                      ? "sm:flex-row-reverse"
                      : "sm:flex-row"
                  }`}
                >
                  {/* Step number circle */}
                  <div className="relative flex-shrink-0 z-10">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className={`relative grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-2xl border-2 border-background`}
                    >
                      <step.icon className="w-6 h-6" strokeWidth={2} />
                    </motion.div>
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} blur-md opacity-50 -z-10`}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 ${
                      step.side === "left"
                        ? "sm:pr-12 sm:text-left"
                        : "sm:pr-12 sm:text-right"
                    }`}
                  >
                    <div className="inline-block bg-background/10 backdrop-blur border border-background/15 rounded-2xl p-5 sm:p-6 hover:bg-background/15 transition-colors group">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono font-bold text-brand-400">
                          {step.number}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-background">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-background/70 leading-relaxed max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Final badge */}
          <Reveal delay={0.2} className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-l from-brand-600 to-emerald-600 text-white shadow-xl shadow-brand-600/30">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold">مشروعك جاهز للتسليم! 🎉</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
