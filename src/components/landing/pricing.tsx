"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Star, ArrowLeft, Zap, Crown, Building2 } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Billing = "monthly" | "yearly";

const plans = [
  {
    id: "starter",
    name: "المبتدئ",
    icon: Zap,
    tagline: "للمشاغل الصغيرة التي تبدأ رحلتها",
    monthly: 99,
    yearly: 990,
    currency: "₪",
    color: "from-zinc-500 to-zinc-700",
    accent: "bg-zinc-100 text-zinc-700 border-zinc-200",
    popular: false,
    features: [
      { text: "حتى ٥ مشاريع نشطة", included: true },
      { text: "حتى ٥ قوالب مخصصة", included: true },
      { text: "محرك معادلات كامل + Sandbox", included: true },
      { text: "تصدير PDF و Excel وطباعة", included: true },
      { text: "أرشفة للأنظمة والقوالب", included: true },
      { text: "عزل كامل بين المشاغل (RLS)", included: true },
      { text: "دعم عبر واتساب", included: true },
      { text: "مستخدمون متعددون للمشغل", included: false },
      { text: "قوالب جاهزة مسبقًا", included: false },
      { text: "دعم أولوية", included: false },
    ],
    cta: "ابدأ الآن",
  },
  {
    id: "pro",
    name: "الاحترافي",
    icon: Crown,
    tagline: "للمشاغل النامية التي تريد المزيد",
    monthly: 199,
    yearly: 1990,
    currency: "₪",
    color: "from-brand-600 to-emerald-700",
    accent: "bg-brand-100 text-brand-700 border-brand-200",
    popular: true,
    features: [
      { text: "مشاريع غير محدودة", included: true },
      { text: "حتى ٢٠ قالبًا مخصصًا", included: true },
      { text: "محرك معادلات كامل + Sandbox", included: true },
      { text: "تصدير PDF و Excel وطباعة", included: true },
      { text: "أرشفة كاملة + سجل التغييرات", included: true },
      { text: "عزل كامل بين المشاغل (RLS)", included: true },
      { text: "دعم عبر واتساب + هاتف", included: true },
      { text: "حتى ٣ مستخدمين للمشغل", included: true },
      { text: "قوالب جاهزة مسبقًا (نوافذ، أبواب)", included: true },
      { text: "دعم أولوية خلال ٢٤ ساعة", included: false },
    ],
    cta: "الأكثر اختيارًا",
  },
  {
    id: "enterprise",
    name: "المؤسسي",
    icon: Building2,
    tagline: "للمشاغل الكبيرة متعددة الفروع",
    monthly: 399,
    yearly: 3990,
    currency: "₪",
    color: "from-gold-600 to-amber-700",
    accent: "bg-gold-100 text-gold-700 border-gold-200",
    popular: false,
    features: [
      { text: "مشاريع غير محدودة", included: true },
      { text: "قوالب مخصصة غير محدودة", included: true },
      { text: "محرك معادلات كامل + Sandbox", included: true },
      { text: "تصدير PDF و Excel وطباعة", included: true },
      { text: "أرشفة كاملة + سجل التغييرات", included: true },
      { text: "عزل كامل بين المشاغل (RLS)", included: true },
      { text: "دعم مخصص ٢٤/٧", included: true },
      { text: "مستخدمون غير محدودين للمشغل", included: true },
      { text: "قوالب جاهزة + استيراد مخصص", included: true },
      { text: "دعم أولوية فورية + تدريب", included: true },
    ],
    cta: "تواصل معنا",
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section
      id="pricing"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-background via-brand-50/30 to-background"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30 -z-0" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        <Reveal className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-brand-600 mb-3">
            الأسعار
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            خطط تناسب{" "}
            <span className="text-gradient-brand">كل مشغل</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            أسعار شفافة بالشيكل، بدون رسوم خفية. اختر الخطة المناسبة لحجم مشغلك،
            ويمكنك الترقية أو التخفيض في أي وقت.
          </p>
        </Reveal>

        {/* Billing toggle */}
        <Reveal delay={0.1} className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-muted border border-border">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                billing === "monthly"
                  ? "bg-white text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              شهري
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                billing === "yearly"
                  ? "bg-white text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              سنوي
              <span className="text-[10px] bg-brand-100 text-brand-700 px-1.5 py-0.5 rounded-full font-bold">
                وفّر شهرين
              </span>
            </button>
          </div>
        </Reveal>

        <RevealStagger
          className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          stagger={0.12}
        >
          {plans.map((plan) => (
            <RevealItem key={plan.id}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative h-full rounded-3xl bg-white border-2 p-6 sm:p-8 flex flex-col ${
                  plan.popular
                    ? "border-brand-500 shadow-2xl shadow-brand-600/15 lg:scale-105"
                    : "border-border shadow-sm hover:border-brand-300/60 hover:shadow-lg"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-l from-brand-600 to-emerald-600 text-white text-xs font-bold shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      الأكثر اختيارًا
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} text-white shadow-lg`}
                    >
                      <plan.icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {plan.name}
                      </h3>
                      <Badge
                        variant="outline"
                        className={`text-[10px] font-semibold ${plan.accent}`}
                      >
                        {plan.tagline.length > 25
                          ? plan.tagline.slice(0, 25) + "..."
                          : plan.tagline}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold text-foreground font-mono">
                      {billing === "monthly" ? plan.monthly : plan.yearly}
                    </span>
                    <span className="text-lg font-bold text-muted-foreground">
                      {plan.currency}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      /{billing === "monthly" ? "شهر" : "سنة"}
                    </span>
                  </div>
                  {billing === "yearly" && (
                    <div className="mt-1 text-xs text-brand-700 font-semibold">
                      يعادل{" "}
                      {Math.round(plan.yearly / 12)}{" "}
                      {plan.currency}/شهر — وفّر{" "}
                      {plan.monthly * 12 - plan.yearly}{" "}
                      {plan.currency}
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Button
                  className={`w-full mb-6 font-semibold ${
                    plan.popular
                      ? "bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/30"
                      : "bg-foreground hover:bg-foreground/90 text-background"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                  <ArrowLeft className="w-4 h-4 mr-1" />
                </Button>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.04 }}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      {f.included ? (
                        <span className="grid place-items-center w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="grid place-items-center w-5 h-5 rounded-full bg-muted text-muted-foreground/50 flex-shrink-0 mt-0.5">
                          <span className="text-xs">—</span>
                        </span>
                      )}
                      <span
                        className={
                          f.included
                            ? "text-foreground"
                            : "text-muted-foreground/60"
                        }
                      >
                        {f.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Bottom note */}
        <Reveal delay={0.3} className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 px-6 py-4 rounded-2xl bg-white border border-border shadow-sm">
            <div className="text-sm text-muted-foreground">
              تحتاج خطة مخصصة لمشغل كبير؟
            </div>
            <Button
              variant="outline"
              className="border-brand-300 text-brand-700 hover:bg-brand-50 font-semibold"
            >
              تواصل مع فريق المبيعات
            </Button>
          </div>
        </Reveal>

        {/* Trust badges */}
        <Reveal delay={0.4} className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "تفعيل خلال", value: "٢٤ ساعة" },
              { label: "بدون رسوم", value: "خفية" },
              { label: "إلغاء", value: "في أي وقت" },
              { label: "دفع آمن", value: "محلي ودولي" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-3 rounded-xl bg-white/60 border border-border/60"
              >
                <div className="text-sm font-bold text-brand-700">
                  {item.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
