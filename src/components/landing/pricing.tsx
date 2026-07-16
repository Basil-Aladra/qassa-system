"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Star, ArrowLeft, Zap, Crown, Building2 } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./reveal";
import { Button } from "@/components/ui/button";

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
    color: "from-zinc-600 to-zinc-800",
    accent: "bg-zinc-100 text-zinc-700 border-zinc-200",
    popular: false,
    features: [
      { text: "حتى ٥ مشاريع نشطة", included: true },
      { text: "حتى ٥ قوالب مخصصة", included: true },
      { text: "محرك معادلات كامل", included: true },
      { text: "تصدير PDF فقط", included: true },
      { text: "أرشفة للأنظمة والقوالب", included: false },
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
    accent: "bg-brand-50 text-brand-700 border-brand-200",
    popular: true,
    features: [
      { text: "مشاريع غير محدودة", included: true },
      { text: "حتى ٢٠ قالبًا مخصصًا", included: true },
      { text: "محرك معادلات كامل", included: true },
      { text: "تصدير PDF و Excel وطباعة", included: true },
      { text: "أرشفة كاملة + سجل التغييرات", included: true },
      { text: "عزل كامل بين المشاغل (RLS)", included: true },
      { text: "دعم عبر واتساب + هاتف", included: true },
      { text: "حتى ٣ مستخدمين للمشغل", included: false },
      { text: "قوالب جاهزة مسبقًا (نوافذ، أبواب)", included: false },
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
    color: "from-amber-600 to-yellow-700",
    accent: "bg-amber-50 text-amber-700 border-amber-200",
    popular: false,
    features: [
      { text: "مشاريع غير محدودة", included: true },
      { text: "قوالب مخصصة غير محدودة", included: true },
      { text: "محرك معادلات كامل", included: true },
      { text: "تصدير PDF و Excel وطباعة", included: true },
      { text: "أرشفة كاملة + سجل التغييرات", included: true },
      { text: "عزل كامل بين المشاغل (RLS)", included: true },
      { text: "دعم مخصص ٢٤/٧", included: true },
      { text: "مستخدمون غير محدودين للمشغل", included: false },
      { text: "امكانية عمل القوالب من قبلنا", included: true },
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
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200/80 shadow-xl">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                billing === "monthly"
                  ? "bg-gradient-to-r from-brand-600 to-emerald-600 text-white shadow-lg"
                  : "text-zinc-600 hover:text-foreground"
              }`}
            >
              شهري
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 duration-300 ${
                billing === "yearly"
                  ? "bg-gradient-to-r from-brand-600 to-emerald-600 text-white shadow-lg"
                  : "text-zinc-600 hover:text-foreground"
              }`}
            >
              سنوي
              <span className="text-[10px] bg-brand-100 text-brand-700 px-2 py-1 rounded-full font-bold shadow-inner">
                وفّر شهرين
              </span>
            </button>
          </div>
        </Reveal>

        <RevealStagger
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          stagger={0.15}
        >
          {plans.map((plan) => (
            <RevealItem key={plan.id}>
              <motion.div
                whileHover={{ y: -12, scale: plan.popular ? 1.07 : 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative h-full rounded-3xl flex flex-col ${
                  plan.popular
                    ? "bg-gradient-to-b from-white via-brand-50/30 to-white border-2 border-brand-500 shadow-2xl shadow-brand-600/20"
                    : "bg-white/80 backdrop-blur-sm border border-zinc-200/80 hover:border-brand-300/60 shadow-xl hover:shadow-2xl hover:shadow-brand-600/10"
                } transition-all duration-500`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 right-1/2 translate-x-1/2">
                    <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-brand-600 via-emerald-600 to-brand-600 text-white text-xs font-bold shadow-lg shadow-brand-600/30">
                      <Star className="w-4 h-4 fill-current" />
                      الأكثر اختيارًا
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8 p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} text-white shadow-xl shadow-brand-600/25`}
                    >
                      <plan.icon className="w-7 h-7" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-extrabold text-foreground">
                        {plan.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {plan.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="px-6 sm:px-8 mb-8 pb-8 border-b border-zinc-200/80">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold text-foreground font-mono tracking-tight">
                      {billing === "monthly" ? plan.monthly : plan.yearly}
                    </span>
                    <span className="text-xl font-bold text-brand-600">
                      {plan.currency}
                    </span>
                    <span className="text-base text-muted-foreground">
                      /{billing === "monthly" ? "شهر" : "سنة"}
                    </span>
                  </div>
                  {billing === "yearly" && (
                    <div className="mt-2 text-sm text-brand-700 font-semibold">
                      يعادل{" "}
                      {Math.round(plan.yearly / 12)}{" "}
                      {plan.currency}/شهر — وفّر{" "}
                      {plan.monthly * 12 - plan.yearly}{" "}
                      {plan.currency}
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="px-6 sm:px-8 mb-8">
                  <Button
                    className={`w-full font-semibold py-6 text-base rounded-2xl transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 text-white shadow-xl shadow-brand-600/30"
                        : "bg-foreground hover:bg-foreground/90 text-background"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Button>
                </div>

                {/* Features */}
                <ul className="space-y-3.5 px-6 sm:px-8 pb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      {f.included ? (
                        <span className="grid place-items-center w-6 h-6 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700 flex-shrink-0 mt-0.5 shadow-inner">
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="grid place-items-center w-6 h-6 rounded-full bg-zinc-100 text-zinc-400 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">—</span>
                        </span>
                      )}
                      <span
                        className={
                          f.included
                            ? "text-foreground font-medium"
                            : "text-muted-foreground/50"
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
        <Reveal delay={0.3} className="mt-16">
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-zinc-200/80 shadow-xl">
              <div className="text-base text-muted-foreground">
                تحتاج خطة مخصصة لمشغل كبير؟
              </div>
              <Button
                variant="outline"
                className="border-2 border-brand-300 text-brand-700 hover:bg-brand-50 hover:border-brand-400 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                تواصل مع فريق المبيعات
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Trust badges */}
        <Reveal delay={0.4} className="mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "تفعيل خلال", value: "٢٤ ساعة", icon: "⚡" },
              { label: "بدون رسوم", value: "خفية", icon: "🔒" },
              { label: "إلغاء", value: "في أي وقت", icon: "🔄" },
              { label: "دفع آمن", value: "محلي ودولي", icon: "💳" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-zinc-200/80 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-lg font-bold text-brand-700">
                  {item.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
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
