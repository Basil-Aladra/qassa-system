"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  Calculator,
  X,
  Check,
  AlertTriangle,
  Clock,
  Users,
  Zap,
} from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

const problems = [
  {
    icon: AlertTriangle,
    title: "أخطاء حسابية مكلفة",
    desc: "كل خطأ في Excel يعني قطعًا خاطئة، خسارة في المواد، وتأخير في التسليم.",
  },
  {
    icon: Clock,
    title: "وقت ضائع في النسخ",
    desc: "إعادة إدخال نفس المعادلات لكل مشروع، ونسخ ولصق بلا نهاية بين الملفات.",
  },
  {
    icon: Users,
    title: "صعوبة التشارك",
    desc: "كل فني ينسخ نسخته الخاصة، وتتضارب الأرقام بين أعضاء الفريق.",
  },
];

const solutions = [
  {
    icon: Zap,
    title: "حساب فوري ودقيق",
    desc: "أدخل الأبعاد، والنظام يحسب كل القصات المطلوبة تلقائيًا في أجزاء من الثانية.",
  },
  {
    icon: Clock,
    title: "وفّر ساعات يوميًا",
    desc: "أنشئ القالب مرة واحدة، واستخدمه في كل المشاريع القادمة بنفس الدقة.",
  },
  {
    icon: Users,
    title: "فريق واحد، مصدر واحد",
    desc: "كل العناصر في جدول موحّد، وكل حساباتك محفوظة بأمان في مكان واحد.",
  },
];

export function ProblemSolution() {
  return (
    <section id="problem" className="relative py-24 lg:py-32 font-thasans">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-brand-600 mb-3">
            المشكلة والحل
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            لماذا تترك <span className="text-red-500">Excel</span> وتنتقل
            <br className="hidden sm:block" /> إلى{" "}
            <span className="text-gradient-brand">النظام الذكي</span>؟
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            ملفات Excel كانت أداة جيدة في وقتها، لكنها لم تُصمّم لإدارة مشاغل
            الألمنيوم. النظام الذكي يفهم احتياجك، ويحسب بدقة، ويوفر وقتك.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Problem side */}
          <Reveal delay={0.1}>
            <div className="relative h-full rounded-3xl border border-red-200/60 bg-red-50/30 p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-200/30 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="grid place-items-center w-12 h-12 rounded-2xl bg-red-100 text-red-600">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      ملفات Excel
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      الطريقة القديمة — بطيئة وعرضة للأخطاء
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "حسابات يدوية عرضة للأخطاء البشرية",
                    "إعادة إدخال المعادلات لكل مشروع من جديد",
                    "ملفات مبعثرة، ولا أحد يعرف أي نسخة هي الصحيحة",
                    "صعوبة في إضافة عنصر جديد بقالب مختلف",
                    "لا يوجد عزل بين بيانات المشغل وبيانات غيره",
                    "تصدير غير احترافي يدوي ومرهق",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span className="grid place-items-center w-5 h-5 rounded-full bg-red-100 text-red-600 flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3" strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  {problems.map((p) => (
                    <div
                      key={p.title}
                      className="rounded-xl bg-white/70 border border-red-200/50 p-3 text-center"
                    >
                      <p.icon className="w-4 h-4 text-red-500 mx-auto mb-1" />
                      <div className="text-[11px] font-semibold text-foreground leading-tight">
                        {p.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Solution side */}
          <Reveal delay={0.2}>
            <div className="relative h-full rounded-3xl border border-brand-200/60 bg-gradient-to-br from-brand-50/50 to-white p-6 sm:p-8 overflow-hidden shadow-xl shadow-brand-600/5">
              <div className="absolute top-0 left-0 w-40 h-40 bg-brand-200/40 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="grid place-items-center w-12 h-12 rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      النظام الذكي قَصّة
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      الطريقة الحديثة — سريعة ودقيقة وآمنة
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "حساب تلقائي فوري بلا أي أخطاء",
                    "أنشئ القالب مرة واحدة، واستخدمه للأبد",
                    "كل العناصر في جدول موحّد مهما اختلف القالب",
                    "إضافة أي عنصر جديد بقالب مختلف بنفس السلاسة",
                    "عزل كامل بين المشاغل عبر Row-Level Security",
                    "تصدير PDF و Excel وطباعة بنقرة واحدة",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span className="grid place-items-center w-5 h-5 rounded-full bg-brand-600 text-white flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <RevealStagger className="mt-6 grid grid-cols-3 gap-2" stagger={0.1}>
                  {solutions.map((s) => (
                    <RevealItem
                      key={s.title}
                      className="rounded-xl bg-white border border-brand-200/60 p-3 text-center shadow-sm"
                    >
                      <s.icon className="w-4 h-4 text-brand-600 mx-auto mb-1" />
                      <div className="text-[11px] font-semibold text-foreground leading-tight">
                        {s.title}
                      </div>
                    </RevealItem>
                  ))}
                </RevealStagger>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
