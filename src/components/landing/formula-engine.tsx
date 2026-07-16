"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Variable,
  Sigma,
  GitBranch,
  AlertCircle,
  Play,
  RotateCcw,
  ArrowLeft,
  Braces,
} from "lucide-react";
import { Reveal } from "./reveal";
import { Button } from "@/components/ui/button";

export function FormulaEngine() {
  return (
    <section
      id="formula-engine"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 via-background to-gold-50/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-300/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Right: text */}
          <div className="text-center lg:text-right">
            <Reveal>
              <span className="inline-block text-sm font-semibold text-brand-600 mb-3">
                المحرك السري
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
                محرك معادلات
                <br className="hidden sm:block" />{" "}
                <span className="text-gradient-brand">يفهم منطقك</span> تمامًا
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                لا تحتاج أن تكون مبرمجًا. أنشئ حقول الإدخال، اكتب معادلاتك بصيغة
                رياضية بسيطة، والنظام يحسبها تلقائيًا — مع دعم الاعتماد المتسلسل
                واكتشاف الأخطاء قبل وقوعها.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4 text-right">
                {[
                  {
                    icon: Variable,
                    title: "حقول إدخال وحقول محسوبة",
                    desc: "عرّف حقول الإدخال (عرض الإطار، طوله) ثم حقول محسوبة بمعادلاتك (عرض النافذة = عرض الإطار / ٢).",
                  },
                  {
                    icon: GitBranch,
                    title: "اعتماد متسلسل ذكي",
                    desc: "الحقل المحسوب يمكنه الاعتماد على حقل محسوب آخر، والنظام يحل الترتيب الصحيح تلقائيًا.",
                  },
                  {
                    icon: AlertCircle,
                    title: "كشف الحلقات الدائرية",
                    desc: "لو صممت معادلة تعتمد على نفسها بشكل غير مباشر، النظام يكتشفها فورًا ويحذّرك قبل الحفظ.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-white/70 border border-border/60 hover:border-brand-300/60 transition-colors"
                  >
                    <div className="grid place-items-center w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button className="bg-brand-600 hover:bg-brand-700 text-white font-semibold">
                  <Play className="w-4 h-4 ml-1" />
                  جرّب الـ Sandbox
                </Button>
                <Button variant="outline" className="font-semibold">
                  شاهد مثالًا كاملًا
                  <ArrowLeft className="w-4 h-4 mr-1" />
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Left: Interactive demo */}
          <Reveal delay={0.2}>
            <FormulaSandboxDemo />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FormulaSandboxDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [frameWidth, setFrameWidth] = useState(120);
  const [frameHeight, setFrameHeight] = useState(180);

  // Computed values
  const windowWidth = frameWidth / 2;
  const windowHeight = frameHeight - 4;
  const glassWidth = windowWidth - 4;
  const glassHeight = windowHeight - 4;

  const fields = [
    {
      label: "عرض الإطار",
      key: "frame_width",
      value: frameWidth,
      type: "input" as const,
      unit: "سم",
    },
    {
      label: "طول الإطار",
      key: "frame_height",
      value: frameHeight,
      type: "input" as const,
      unit: "سم",
    },
    {
      label: "عرض النافذة",
      key: "window_width",
      value: windowWidth,
      type: "computed" as const,
      formula: "frame_width / 2",
      unit: "سم",
    },
    {
      label: "طول النافذة",
      key: "window_height",
      value: windowHeight,
      type: "computed" as const,
      formula: "frame_height - 4",
      unit: "سم",
    },
    {
      label: "عرض الزجاج",
      key: "glass_width",
      value: glassWidth,
      type: "computed" as const,
      formula: "window_width - 4",
      unit: "سم",
    },
    {
      label: "طول الزجاج",
      key: "glass_height",
      value: glassHeight,
      type: "computed" as const,
      formula: "window_height - 4",
      unit: "سم",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-5 -right-5 z-20 bg-gold-500 text-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-1.5"
      >
        <Sigma className="w-4 h-4" />
        <span className="text-xs font-bold">Sandbox حي</span>
      </motion.div>

      <div className="bg-white rounded-3xl shadow-2xl border border-border/60 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 bg-foreground text-background">
          <div className="flex items-center gap-2">
            <Braces className="w-4 h-4 text-brand-400" />
            <span className="text-sm font-bold font-mono">
              template_sandbox.tsx
            </span>
          </div>
          <button className="text-xs flex items-center gap-1 text-background/70 hover:text-background">
            <RotateCcw className="w-3 h-3" />
            إعادة تعيين
          </button>
        </div>

        <div className="p-5 space-y-4 bg-gradient-to-br from-white to-brand-50/40">
          {/* Inputs */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
              حقول الإدخال
            </div>
            <SliderInput
              label="عرض الإطار"
              value={frameWidth}
              onChange={setFrameWidth}
              min={40}
              max={300}
            />
            <SliderInput
              label="طول الإطار"
              value={frameHeight}
              onChange={setFrameHeight}
              min={40}
              max={300}
            />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2 text-xs text-brand-700 font-semibold pt-2">
            <Sigma className="w-3.5 h-3.5" />
            حقول محسوبة تلقائيًا
          </div>

          {/* Computed fields */}
          <div className="space-y-2">
            {fields
              .filter((f) => f.type === "computed")
              .map((field, i) => (
                <motion.div
                  key={field.key}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="rounded-xl bg-brand-50/60 border border-brand-100 p-3"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground">
                        {field.label}
                      </span>
                      <code className="text-[10px] text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded">
                        {field.key}
                      </code>
                    </div>
                    <motion.div
                      key={field.value}
                      initial={{ scale: 0.9, opacity: 0.5 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-lg font-bold text-brand-700 font-mono"
                    >
                      {field.value.toFixed(1)}
                      <span className="text-xs text-muted-foreground mr-1">
                        {field.unit}
                      </span>
                    </motion.div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground font-mono">
                    <ArrowLeft className="w-3 h-3" />
                    <span>{field.formula}</span>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Detection badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg p-2.5"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold">
              تم التحقق — لا توجد حلقات دائرية ✓
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
}) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className="rounded-xl border border-border bg-white p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">{label}</span>
          <code className="text-[10px] text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded">
            input
          </code>
        </div>
        <div className="text-sm font-bold text-foreground font-mono">
          {localValue}
          <span className="text-xs text-muted-foreground mr-1">سم</span>
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={localValue}
        onChange={(e) => {
          const v = Number(e.target.value);
          setLocalValue(v);
          onChange(v);
        }}
        className="w-full h-2 rounded-full appearance-none bg-gradient-to-l from-brand-200 to-brand-100 accent-brand-600 cursor-pointer"
        style={{
          background: `linear-gradient(to left, var(--color-brand-600) ${
            ((localValue - min) / (max - min)) * 100
          }%, var(--color-brand-100) ${((localValue - min) / (max - min)) * 100}%)`,
        }}
      />
    </div>
  );
}
