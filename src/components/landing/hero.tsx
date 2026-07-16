"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
  FileSpreadsheet,
  Cpu,
  ShieldCheck,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-background to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        {/* Glow orbs */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-brand-400/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-gold-400/15 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        {/* Animated lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-brand-500/40 to-transparent"
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Right side (text) - in RTL appears first */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">
                مصنوع خصيصًا لمشاغل الألمنيوم في فلسطين
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-foreground mb-6"
            >
              وداعًا لملفات{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-muted-foreground line-through decoration-gold-500 decoration-4">
                  Excel
                </span>
              </span>
              <br />
              أهلاً{" "}
              <span className="text-gradient-brand">بنظام ذكي</span>{" "}
              يحسب قصات الألمنيوم تلقائيًا
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 lg:mr-0"
            >
              أنشئ أنظمة الألمنيوم وقوالبك ومعادلاتك مرة واحدة، ثم أدخل أبعاد
              الإطار فقط — والنظام يحسب كل المقاسات المطلوبة تلقائيًا. عزل كامل
              بين المشاغل، دقة لا تخطئ، وتصدير احترافي بنقرة واحدة.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                onClick={() => scrollTo("#pricing")}
                className="bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/30 font-semibold text-base h-12 px-7 group"
              >
                جرّب النظام الآن
                <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("#how-it-works")}
                className="font-semibold text-base h-12 px-7 border-border hover:border-brand-400 hover:text-brand-700"
              >
                شاهد كيف يعمل
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              {[
                "بدون بطاقة ائتمان",
                "تفعيل خلال 24 ساعة",
                "دعم بالعربية",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Left side (visual) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs">اكتشف المزيد</span>
        <div className="w-5 h-9 rounded-full border-2 border-current/40 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1.5 rounded-full bg-current/60"
          />
        </div>
      </motion.div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      {/* Floating decorative card 1 */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-4 z-20 glass rounded-2xl p-3 shadow-xl border border-brand-200/60 hidden sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="grid place-items-center w-9 h-9 rounded-lg bg-brand-100 text-brand-700">
            <Cpu className="w-4.5 h-4.5" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">محرك المعادلات</div>
            <div className="text-sm font-bold text-foreground">
              حساب فوري ✓
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating decorative card 2 */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute -bottom-4 -left-4 z-20 glass rounded-2xl p-3 shadow-xl border border-gold-200/60 hidden sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="grid place-items-center w-9 h-9 rounded-lg bg-gold-100 text-gold-700">
            <ShieldCheck className="w-4.5 h-4.5" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">عزل المشاغل</div>
            <div className="text-sm font-bold text-foreground">
              RLS حقيقي ✓
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main mockup card */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="relative bg-white rounded-3xl shadow-2xl border border-border/60 overflow-hidden"
      >
        {/* Mock browser header */}
        <div className="flex items-center gap-1.5 px-4 py-3 bg-muted/60 border-b border-border">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-gold-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-brand-400/70" />
          <div className="mx-auto text-xs text-muted-foreground font-mono">
            qassa.app/projects/villa-abu-ahmad
          </div>
        </div>

        {/* Mock content */}
        <div className="p-5 space-y-4 bg-gradient-to-br from-white to-brand-50/30">
          {/* Project header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-muted-foreground mb-0.5">
                مشروع
              </div>
              <div className="font-bold text-foreground">
                فيلا أبو أحمد
              </div>
            </div>
            <Badge className="bg-brand-100 text-brand-700 hover:bg-brand-100 border-0">
              12 عنصرًا
            </Badge>
          </div>

          {/* Input row */}
          <div className="grid grid-cols-2 gap-3">
            <MockInput label="عرض الإطار" value="120 سم" />
            <MockInput label="طول الإطار" value="180 سم" />
          </div>

          {/* Computed results */}
          <div className="rounded-xl bg-brand-50/70 border border-brand-100 p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-xs text-brand-700 font-semibold mb-1">
              <Sparkles className="w-3 h-3" />
              نتيجة الحساب التلقائي
            </div>
            <MockResult label="عرض النافذة" value="60 سم" delay={0} />
            <MockResult label="طول النافذة" value="176 سم" delay={0.15} />
            <MockResult label="عرض الزجاج" value="56 سم" delay={0.3} />
            <MockResult label="طول الزجاج" value="172 سم" delay={0.45} />
          </div>

          {/* Export buttons */}
          <div className="flex gap-2 pt-1">
            <div className="flex-1 h-8 rounded-lg bg-gradient-to-l from-brand-600 to-brand-700 grid place-items-center text-white text-xs font-semibold shadow-sm">
              تصدير PDF
            </div>
            <div className="px-3 h-8 rounded-lg border border-border grid place-items-center text-xs font-semibold text-foreground">
              Excel
            </div>
            <div className="px-3 h-8 rounded-lg border border-border grid place-items-center text-xs font-semibold text-foreground">
              طباعة
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Excel "replaced" badge */}
      <motion.div
        animate={{ rotate: [-6, -4, -6] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-2 -left-6 sm:-left-10 z-30 bg-white rounded-xl shadow-lg border border-red-200/60 px-3 py-2 hidden sm:block"
      >
        <div className="flex items-center gap-1.5">
          <FileSpreadsheet className="w-4 h-4 text-red-500 line-through" />
          <span className="text-xs font-bold text-red-600">Excel</span>
        </div>
      </motion.div>
    </div>
  );
}

function MockInput({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-white px-3 py-2">
      <div className="text-[10px] text-muted-foreground mb-0.5">{label}</div>
      <div className="text-sm font-bold text-foreground font-mono">{value}</div>
    </div>
  );
}

function MockResult({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 + delay, duration: 0.4 }}
      className="flex items-center justify-between"
    >
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="flex items-center gap-1.5">
        <Layers className="w-3 h-3 text-brand-500" />
        <span className="text-xs font-bold text-foreground font-mono">
          {value}
        </span>
      </div>
    </motion.div>
  );
}
