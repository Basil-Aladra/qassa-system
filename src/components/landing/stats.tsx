"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "./reveal";

const stats = [
  {
    value: 15,
    suffix: "",
    label: "مرحلة تطوير مكتملة",
    desc: "كل مرحلة مختبرة بـ Playwright فعليًا على الواجهة",
    color: "text-brand-600",
    glow: "bg-brand-500/10",
  },
  {
    value: 100,
    suffix: "%",
    label: "عزل بين المشاغل",
    desc: "RLS على مستوى قاعدة البيانات، مش مجرد فلترة",
    color: "text-gold-600",
    glow: "bg-gold-500/10",
  },
  {
    value: 24,
    suffix: "س",
    label: "للتفعيل",
    desc: "من التسجيل حتى تفعيل الحساب من فريقنا",
    color: "text-emerald-600",
    glow: "bg-emerald-500/10",
  },
  {
    value: 3,
    suffix: "",
    label: "صيغ تصدير",
    desc: "PDF و Excel وطباعة — بتنسيق احترافي",
    color: "text-rose-600",
    glow: "bg-rose-500/10",
  },
];

export function Stats() {
  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-b from-background to-brand-50/30 overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-30 -z-0" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        <Reveal className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
            أرقام تروي{" "}
            <span className="text-gradient-brand">القصة</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            لماذا تثق في قَصّة؟ لأننا بنينا كل تفصيلة بعناية واختبرناها فعليًا.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative h-full bg-white rounded-2xl border border-border/60 p-6 text-center shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div
                  className={`absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 ${stat.glow} rounded-full blur-2xl`}
                />
                <div className="relative">
                  <div
                    className={`font-display text-4xl sm:text-5xl font-extrabold mb-2 ${stat.color}`}
                  >
                    <AnimatedNumber
                      to={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="font-bold text-sm text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {stat.desc}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  to,
  suffix = "",
  duration = 1.5,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, to, duration, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
