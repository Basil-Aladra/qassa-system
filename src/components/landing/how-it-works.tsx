"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import {
  UserPlus,
  ClipboardCheck,
  FolderPlus,
  Ruler,
  Table2,
  Download,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Clock,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./reveal";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  glowColor: string;
  duration: string;
  highlight: string;
  mockup: MockupType;
}

type MockupType = "register" | "approval" | "project" | "dimensions" | "table" | "export";

const steps: Step[] = [
  {
    number: "01",
    icon: UserPlus,
    title: "سجّل حسابك",
    desc: "أنشئ حسابًا بإيميل وكلمة مرور فقط، ثم أكمل بيانات مشغلك في خطوة Onboarding بسيطة — اسم المشغل، المالك، الهاتف، العنوان.",
    color: "from-brand-500 to-brand-700",
    glowColor: "bg-brand-500",
    duration: "دقيقتان",
    highlight: "بدون تأكيد بريد إلكتروني",
    mockup: "register",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "انتظر الموافقة",
    desc: "طلبك يصير pending تلقائيًا. فريقنا يتواصل معك عبر واتساب، يتأكد من الدفع، يحدد الخطة ومدة الاشتراك، ويفعّل حسابك خلال 24 ساعة.",
    color: "from-gold-500 to-gold-700",
    glowColor: "bg-gold-500",
    duration: "خلال 24 ساعة",
    highlight: "موافقة بشرية حقيقية",
    mockup: "approval",
  },
  {
    number: "03",
    icon: FolderPlus,
    title: "أنشئ مشروعك الأول",
    desc: "ابدأ مشروعًا جديدًا (مثل «فيلا أبو أحمد»)، وستجده جاهزًا في لوحتك مع إحصائيات حية لعدد المشاريع، الأنظمة، والقوالب.",
    color: "from-emerald-500 to-teal-700",
    glowColor: "bg-emerald-500",
    duration: "30 ثانية",
    highlight: "لوحة تحكم بإحصائيات حية",
    mockup: "project",
  },
  {
    number: "04",
    icon: Ruler,
    title: "أدخل الأبعاد فقط",
    desc: "اختر نظام الألمنيوم والقالب، ثم أدخل عرض وطول الإطار. النظام يحسب فورًا كل الحقول المحسوبة — عرض النافذة، الزجاج، وكل التفاصيل.",
    color: "from-rose-500 to-pink-700",
    glowColor: "bg-rose-500",
    duration: "حساب فوري",
    highlight: "محرك معادلات ذكي",
    mockup: "dimensions",
  },
  {
    number: "05",
    icon: Table2,
    title: "جدول موحّد للعناصر",
    desc: "كل عناصر المشروع في جدول واحد، حتى لو من قوالب مختلفة. اعرض، عدّل، انسخ، أو احذف — كل شيء في مكان واحد منظّم.",
    color: "from-violet-500 to-purple-700",
    glowColor: "bg-violet-500",
    duration: "إدارة كاملة",
    highlight: "حتى لو من قوالب مختلفة",
    mockup: "table",
  },
  {
    number: "06",
    icon: Download,
    title: "صدّر واطبع",
    desc: "صدّر إلى PDF أو Excel أو اطبع مباشرة. كل عنصر بكامل حقوله تحت اسمه، بتنسيق احترافي جاهز للتسليم للزبون.",
    color: "from-amber-500 to-orange-700",
    glowColor: "bg-amber-500",
    duration: "بنقرة واحدة",
    highlight: "PDF + Excel + طباعة",
    mockup: "export",
  },
];

export function HowItWorks() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Progress bar that fills as you scroll through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-zinc-950 text-white overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0">
        {/* Radial glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-600/10 rounded-full blur-[120px]" />
        {/* Side orbs */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Enhanced header */}
        <Reveal className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-5">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs font-bold tracking-wide text-white/90">
              كيف يعمل
            </span>
            <span className="text-xs text-white/40">•</span>
            <span className="text-xs text-white/70 font-medium">
              رحلة من ٦ خطوات
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            من التسجيل حتى التصدير
            <br className="hidden sm:block" /> في{" "}
            <span className="text-gradient-gold">٦ خطوات بسيطة</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            رحلة واضحة وسلسة من لحظة إنشاء حسابك حتى تسليم مشروعك النهائي للزبون.
          </p>

          {/* Quick stats bar */}
          <div className="mt-8 inline-flex items-center gap-4 sm:gap-6 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10">
            {[
              { icon: Clock, label: "زمن الإعداد", value: "< 5 دقائق" },
              { icon: Shield, label: "أمان", value: "RLS + Auth" },
              { icon: CheckCircle2, label: "تفعيل", value: "خلال 24 ساعة" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-right"
              >
                <item.icon className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-white/40 leading-tight">
                    {item.label}
                  </div>
                  <div className="text-xs font-bold text-white/90 leading-tight">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical progress line - background track */}
          <div className="absolute right-[31px] sm:right-1/2 sm:translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
          {/* Vertical progress line - animated fill */}
          <motion.div
            style={{ height: progressHeight }}
            className="absolute right-[31px] sm:right-1/2 sm:translate-x-1/2 top-0 w-px bg-gradient-to-b from-brand-400 via-gold-400 to-emerald-400 origin-top"
          />

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <TimelineStep
                key={step.number}
                step={step}
                index={i}
                reduceMotion={!!reduceMotion}
              />
            ))}
          </div>

          {/* Final celebration badge */}
          <Reveal delay={0.2} className="mt-16 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex flex-col items-center gap-3"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-l from-brand-500 to-emerald-500 blur-2xl opacity-50 scale-110" />
                <div className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-l from-brand-600 to-emerald-600 text-white shadow-2xl shadow-brand-600/40">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-bold text-base">
                    مشروعك جاهز للتسليم!
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/60">
                من الفكرة حتى التسليم — كل ذلك في منصة واحدة
              </p>
            </motion.div>
          </Reveal>

          {/* Bottom CTA */}
          <Reveal delay={0.3} className="mt-12 text-center">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              <span>جاهز للبدء؟ اكتشف خططنا</span>
              <span className="grid place-items-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-gold-500 group-hover:text-zinc-950 text-white transition-all">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  step,
  index,
  reduceMotion,
}: {
  step: Step;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;
  const isLeft = index % 2 === 1; // alternate sides on desktop

  return (
    <Reveal delay={index * 0.05}>
      <div className="relative flex items-start gap-6 sm:gap-0">
        {/* Step circle on the line */}
        <div className="relative flex-shrink-0 z-10 sm:absolute sm:right-1/2 sm:translate-x-1/2 sm:top-2">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 shadow-2xl"
          >
            <div
              className={`grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg`}
            >
              <Icon className="w-5 h-5" strokeWidth={2.2} />
            </div>
            {/* Pulsing dot on the line */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }
              }
              transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
              className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${step.glowColor}`}
            />
          </motion.div>
        </div>

        {/* Content card */}
        <div
          className={`flex-1 sm:w-1/2 ${
            isLeft
              ? "sm:order-1 sm:pl-12 sm:pr-0 sm:text-left"
              : "sm:order-2 sm:pr-12 sm:pl-0 sm:text-right"
          } sm:flex-none sm:w-1/2`}
        >
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden"
          >
            {/* Top gradient line */}
            <div
              className={`absolute top-0 inset-x-0 h-0.5 bg-gradient-to-l ${step.color} scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500`}
            />

            {/* Big number watermark */}
            <div
              className={`absolute -top-4 ${
                isLeft ? "-left-2" : "-right-2"
              } text-7xl sm:text-8xl font-display font-extrabold text-white/[0.04] leading-none pointer-events-none select-none`}
            >
              {step.number}
            </div>

            <div className="relative">
              {/* Header row: number + duration */}
              <div
                className={`flex items-center gap-2 mb-3 ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-gradient-to-l ${step.color} text-white`}
                >
                  {step.number}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-white/50 font-medium">
                  <Clock className="w-3 h-3" />
                  {step.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-[15px] text-white/60 leading-relaxed mb-4">
                {step.desc}
              </p>

              {/* Highlight chip */}
              <div
                className={`inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/80 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full`}
              >
                <Sparkles className="w-3 h-3 text-gold-400" />
                {step.highlight}
              </div>

              {/* Mini mockup */}
              <div className="mt-5 pt-5 border-t border-white/[0.06]">
                <StepMockup type={step.mockup} color={step.color} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Spacer for other side on desktop */}
        <div className="hidden sm:block sm:w-1/2" />
      </div>
    </Reveal>
  );
}

function StepMockup({
  type,
  color,
}: {
  type: MockupType;
  color: string;
}) {
  return (
    <div className="bg-zinc-950/60 border border-white/[0.06] rounded-xl p-3 font-mono text-[10px] sm:text-[11px]">
      {type === "register" && <RegisterMockup color={color} />}
      {type === "approval" && <ApprovalMockup color={color} />}
      {type === "project" && <ProjectMockup color={color} />}
      {type === "dimensions" && <DimensionsMockup color={color} />}
      {type === "table" && <TableMockup color={color} />}
      {type === "export" && <ExportMockup color={color} />}
    </div>
  );
}

function RegisterMockup({ color }: { color: string }) {
  return (
    <div className="space-y-2">
      <div className="text-white/40">+ إنشاء حساب</div>
      <div className="flex items-center gap-2">
        <span className="text-white/40 w-12">إيميل:</span>
        <div className="flex-1 h-5 rounded bg-white/5 border border-white/10 flex items-center px-2 text-white/70">
          owner@workshop.ps
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-white/40 w-12">كلمة المرور:</span>
        <div className="flex-1 h-5 rounded bg-white/5 border border-white/10 flex items-center px-2 text-white/50">
          ••••••••
        </div>
      </div>
      <div className={`h-6 rounded bg-gradient-to-l ${color} flex items-center justify-center text-white font-bold mt-2`}>
        متابعة ←
      </div>
    </div>
  );
}

function ApprovalMockup({ color }: { color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-white/70">حالة الطلب</span>
        <span className="inline-flex items-center gap-1 text-gold-400">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          pending
        </span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div className={`h-full w-1/3 bg-gradient-to-l ${color}`} />
      </div>
      <div className="text-white/40 text-[10px] leading-relaxed">
        ⏳ بانتظار موافقة الأدمن — التواصل عبر واتساب
      </div>
    </div>
  );
}

function ProjectMockup({ color }: { color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-white/70 font-bold">فيلا أبو أحمد</span>
        <span className={`text-white/90 bg-gradient-to-l ${color} px-1.5 py-0.5 rounded text-[9px]`}>
          مشروع جديد
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { l: "مشاريع", v: "1" },
          { l: "أنظمة", v: "3" },
          { l: "قوالب", v: "5" },
        ].map((s) => (
          <div key={s.l} className="bg-white/5 rounded p-1.5 text-center">
            <div className="text-white/90 font-bold">{s.v}</div>
            <div className="text-white/40 text-[9px]">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DimensionsMockup({ color }: { color: string }) {
  return (
    <div className="space-y-1.5">
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-white/5 rounded p-1.5">
          <div className="text-white/40 text-[9px]">عرض الإطار</div>
          <div className="text-white/90 font-bold">120 سم</div>
        </div>
        <div className="bg-white/5 rounded p-1.5">
          <div className="text-white/40 text-[9px]">طول الإطار</div>
          <div className="text-white/90 font-bold">180 سم</div>
        </div>
      </div>
      <div className={`bg-gradient-to-l ${color} bg-opacity-20 rounded p-1.5 flex items-center justify-between`}>
        <span className="text-white/70 text-[9px]">→ حساب تلقائي</span>
        <span className="text-white font-bold">4 حقول ✓</span>
      </div>
    </div>
  );
}

function TableMockup({ color }: { color: string }) {
  const rows = [
    { n: "شباك 1", t: "نافذة", c: "60×176" },
    { n: "باب 1", t: "باب", c: "90×210" },
    { n: "واجهة", t: "واجهة", c: "200×300" },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-1 text-white/40 text-[9px] mb-1 px-1">
        <span>العنصر</span>
        <span>النوع</span>
        <span>المقاس</span>
      </div>
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid grid-cols-3 gap-1 text-white/80 text-[10px] py-1 px-1 border-t border-white/5"
        >
          <span className="font-bold">{r.n}</span>
          <span>{r.t}</span>
          <span className="font-mono">{r.c}</span>
        </div>
      ))}
      <div className={`mt-1.5 text-[9px] text-white/70 bg-gradient-to-l ${color} bg-opacity-20 rounded px-1.5 py-0.5 inline-block`}>
        3 عناصر موحّدة
      </div>
    </div>
  );
}

function ExportMockup({ color }: { color: string }) {
  return (
    <div className="space-y-2">
      <div className="text-white/50 text-[10px]">صيغ التصدير المتاحة:</div>
      <div className="grid grid-cols-3 gap-1.5">
        {["PDF", "Excel", "طباعة"].map((f, i) => (
          <div
            key={f}
            className={`rounded p-1.5 text-center font-bold text-[10px] ${
              i === 0
                ? `bg-gradient-to-l ${color} text-white`
                : "bg-white/5 text-white/70 border border-white/10"
            }`}
          >
            {f}
          </div>
        ))}
      </div>
      <div className="text-white/40 text-[9px] leading-relaxed">
        ✓ كل عنصر بكامل حقوله تحت اسمه
      </div>
    </div>
  );
}
