"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Database,
  Eye,
  EyeOff,
  Server,
  KeyRound,
  FileLock2,
} from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

const securityFeatures = [
  {
    icon: Database,
    title: "عزل المشاغل على مستوى قاعدة البيانات",
    desc: "نستخدم Row-Level Security من PostgreSQL — طبقة حماية داخل قاعدة البيانات نفسها، وليست مجرد فلترة بالتطبيق. حتى لو حاول أحدهم الوصول مباشرة إلى البيانات، فلن يرى إلا ما يخص مشغله فقط، لا أكثر.",
    code: "RLS حقيقي",
  },
  {
    icon: KeyRound,
    title: "صلاحيات الأدمن محمية بطبقتين",
    desc: "كل عمليات الإدارة تمر عبر دوال PostgreSQL محمية (SECURITY DEFINER) مع فحص صريح للدور. هذا يعني أن الصلاحيات لا يمكن تجاوزها من الواجهة فقط — حتى لو تم اختراق التطبيق، تظل قاعدة البيانات تصدّ المحاولات غير المصرّح بها.",
    code: "SECURITY DEFINER",
  },
  {
    icon: Server,
    title: "حقول حساسة يديرها النظام، لا التطبيق",
    desc: "البيانات الحرجة (العدّادات، تواريخ الأرشفة، إصدارات القوالب) يديرها محرّك قاعدة البيانات تلقائيًا عبر Triggers. التطبيق لا يكتب عليها مباشرة، مما يلغي أي احتمال للخطأ البشري أو التلاعب المتعمّد.",
    code: "Triggers تلقائية",
  },
  {
    icon: FileLock2,
    title: "أرشفة بدل الحذف — لا ضياع للبيانات",
    desc: "الأنظمة والقوالب تُؤرشف بدل أن تُحذف نهائيًا. الحذف الكامل لا يحدث إلا بعد ١٤ يومًا من إيقاف الاشتراك، وبترتيب عمليات صريح. ويُحتفظ بسجل دائم منفصل (Log) لأغراض التوثيق والمراجعة.",
    code: "Soft Delete",
  },
];

export function Security() {
  return (
    <section
      id="security"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-background via-zinc-50 to-background overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-300/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-300/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Right: visual */}
          <Reveal className="order-2 lg:order-1">
            <MultiTenantVisual />
          </Reveal>

          {/* Left: text + features */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="inline-block text-sm font-semibold text-brand-600 mb-3">
                الأمان أولاً
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
                أمان على مستوى المؤسسات،
                <br className="hidden sm:block" />{" "}
                <span className="text-gradient-brand">لا مجرد فلترة</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                صُمِّم نظام الحماية لدينا على معايير قواعد البيانات المؤسسية
                (PostgreSQL RLS)، بحيث يكون كل مشغل معزولًا عزلًا حقيقيًا على مستوى
                البيانات — وليس مجرد فلترة في الواجهة يمكن تجاوزها. بياناتك
                محمية بطبقة عميقة لا يخترقها أي مشغل آخر.
              </p>
            </Reveal>

            <RevealStagger className="space-y-4" stagger={0.1}>
              {securityFeatures.map((f) => (
                <RevealItem key={f.title}>
                  <div className="group flex gap-4 p-4 rounded-2xl bg-white border border-border/60 hover:border-brand-300/60 hover:shadow-md transition-all">
                    <div className="grid place-items-center w-11 h-11 rounded-xl bg-brand-100 text-brand-700 flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <f.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="font-bold text-foreground">{f.title}</h4>
                        <code className="text-[10px] text-brand-700 font-mono bg-brand-50 border border-brand-200 px-1.5 py-0.5 rounded">
                          {f.code}
                        </code>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </div>
    </section>
  );
}

function MultiTenantVisual() {
  const workshops = [
    { name: "مشغل النور", color: "from-brand-500 to-brand-700", status: "active" },
    { name: "ألمنيوم القدس", color: "from-gold-500 to-gold-700", status: "active" },
    { name: "مشغل الرحمة", color: "from-rose-500 to-pink-700", status: "active" },
  ];

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-2xl border border-border/60 p-6"
      >
        {/* DB Header */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="grid place-items-center w-9 h-9 rounded-xl bg-foreground text-background">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">
                PostgreSQL + RLS
              </div>
              <div className="text-[11px] text-muted-foreground">
                قاعدة بيانات مشتركة، عزل كامل
              </div>
            </div>
          </div>
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-1.5 text-[11px] text-brand-700 font-semibold bg-brand-50 border border-brand-200 px-2 py-1 rounded-full"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            مفعّل
          </motion.div>
        </div>

        {/* Workshops */}
        <div className="space-y-3">
          {workshops.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="relative"
            >
              <div
                className={`rounded-xl bg-gradient-to-l ${w.color} p-0.5 shadow-lg`}
              >
                <div className="rounded-[10px] bg-white p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br ${w.color} text-white`}
                    >
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">
                        {w.name}
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        tenant_id: {1001 + i}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-brand-600" />
                    <EyeOff className="w-3.5 h-3.5 text-muted-foreground/40" />
                  </div>
                </div>
              </div>

              {/* Isolation indicator */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 hidden sm:flex items-center">
                <div className="w-8 h-px bg-brand-300" />
                <div className="text-[9px] text-brand-700 font-bold bg-white border border-brand-200 rounded-full px-1.5 py-0.5">
                  معزول
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-5 pt-4 border-t border-border"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-brand-600" />
            <span>
              كل استعلام يمر عبر سياسة RLS — لا وصول لبيانات المشغل الآخر حتى مع
              نفس الجلسة.
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating lock badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -top-4 -left-4 z-20 bg-foreground text-background rounded-2xl shadow-xl px-3 py-2 hidden sm:block"
      >
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-brand-400" />
          <span className="text-xs font-bold">AES + RLS</span>
        </div>
      </motion.div>
    </div>
  );
}
