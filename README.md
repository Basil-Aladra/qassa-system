# قَصّة — منصة إدارة مشاغل الألمنيوم الذكية

> نظام SaaS متكامل لمشاغل الألمنيوم في فلسطين — بديل ذكي لملفات Excel لحساب قصات الألمنيوم تلقائيًا.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black)

## ✨ نظرة عامة

منصة SaaS مخصصة لمشاغل الألمنيوم، تستبدل ملفات Excel التقليدية بنظام ذكي لحساب قصات الألمنيوم تلقائيًا. صاحب المشغل يُنشئ أنظمة الألمنيوم الخاصة به وقوالبه ومعادلاته مرة واحدة، وبعدها يدخل أبعاد الإطار فقط، والنظام يحسب كل المقاسات المطلوبة تلقائيًا.

كل مشغل معزول بالكامل عن باقي المشاغل (Multi-tenant حقيقي عبر Row-Level Security على مستوى قاعدة البيانات).

---

## 🎯 المشكلة والحل

| ملفات Excel (الطريقة القديمة) | قَصّة (النظام الذكي) |
|------------------------------|---------------------|
| حسابات يدوية عرضة للأخطاء | حساب تلقائي فوري بلا أخطاء |
| إعادة إدخال المعادلات لكل مشروع | أنشئ القالب مرة، واستخدمه للأبد |
| ملفات مبعثرة، نسخ متضاربة | جدول موحّد لكل العناصر |
| لا يوجد عزل بين المشاغل | RLS على مستوى قاعدة البيانات |
| تصدير غير احترافي يدوي | PDF + Excel + طباعة بنقرة واحدة |

---

## 🏗️ التقنيات المستخدمة

| الفئة | التقنية |
|------|---------|
| **Frontend** | Next.js 16 + TypeScript + Tailwind CSS 4 + shadcn/ui |
| **Database & Auth** | Supabase (PostgreSQL + RLS + Auth) |
| **Deployment** | Vercel |
| **Data Fetching** | TanStack Query |
| **Forms** | React Hook Form + Zod |
| **Formula Engine** | mathjs |
| **Export** | PDF (Chromium serverless-safe) + Excel (exceljs) + Print |
| **Testing** | Playwright + Vitest |
| **Animations** | Framer Motion |

---

## ✨ المميزات الرئيسية

### 1. محرك المعادلات المرن
- أنشئ حقول إدخال وحقول محسوبة بمعادلاتك الخاصة، بدون أي كود
- يدعم الاعتماد المتسلسل بين الحقول
- اكتشاف الحلقات الدائرية تلقائيًا
- **Sandbox اختبار حي**: جرّب قيمًا افتراضية وشوف النتائج فورًا

### 2. قوالب قابلة لإعادة الاستخدام
- صمّم قالبًا مرة واحدة لكل نوع شباك / باب / واجهة
- استخدمه في كل مشاريعك القادمة بنفس الدقة

### 3. عزل كامل بين المشاغل (Multi-tenant)
- Row-Level Security على مستوى PostgreSQL
- ليست مجرد فلترة بالتطبيق
- صلاحيات الأدمن محمية بدوال `SECURITY DEFINER`

### 4. تصدير احترافي
- PDF / Excel / طباعة — بنقرة واحدة
- كل عنصر بكامل حقوله تحت اسمه
- تنسيق نظيف وجاهز للتسليم

### 5. أرشفة بدل الحذف
- الأنظمة والقوالب تُؤرشف بدل حذفها نهائيًا
- الحذف الوحيد يكون بعد 14 يوم تعليق، بترتيب صريح مضبوط
- الاحتفاظ بسجل دائم منفصل (`deleted_workshops_log`)

### 6. كشف ذكي للتعارض
- لو عدّلت قالبًا فيه عناصر موجودة، النظام يعلّمها تلقائيًا "تحتاج إعادة حساب"
- بدل أن تنكسر بصمت

---

## 🔄 دورة حياة الاشتراك

```
pending → active → expired (تلقائي عبر Vercel Cron)
                ↓
            suspended (تعليق يدوي من الأدمن مع سبب إلزامي)
                ↓
        بعد 14 يوم → حذف نهائي تلقائي (مع الاحتفاظ بسجل دائم)
```

---

## 👥 المستخدمون والصلاحيات

### Super Admin
- Dashboard بإحصائيات فعلية (نشط، معلّق، موقوف، قريب الانتهاء)
- إدارة المشتركين: موافقة/رفض، تفعيل، تعليق، تجديد
- صفحة تفاصيل كل مشترك بسجل كامل لتغييرات الاشتراك
- إدارة الخطط (سعر ومميزات)

### Workshop Owner (صاحب المشغل)
- لوحة تحكم بإحصائيات المشروع
- عرض حالة الاشتراك والأيام المتبقية
- إدارة: مشاريع، أنظمة ألمنيوم، قوالب، حقول ومعادلات

---

## 🚀 التشغيل المحلي

### المتطلبات
- Node.js 18+
- Bun (موصى به) أو npm/yarn

### التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/Basil-Aladra/qassa-system.git
cd qassa-system

# تثبيت الحزم
bun install

# إعداد متغيرات البيئة
cp .env.example .env
# عدّل .env حسب الحاجة

# تشغيل قاعدة البيانات (Prisma)
bun run db:push

# تشغيل خادم التطوير
bun run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

---

## 📁 بنية المشروع

```
qassa-system/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Layout رئيسي (RTL + خطوط عربية)
│   │   ├── page.tsx            # الصفحة الرئيسية (Landing Page)
│   │   └── globals.css         # أنماط عامة + ثيم الألوان
│   ├── components/
│   │   ├── ui/                 # مكونات shadcn/ui
│   │   └── landing/            # مكونات الـ Landing Page
│   │       ├── navbar.tsx
│   │       ├── hero.tsx
│   │       ├── problem-solution.tsx
│   │       ├── features.tsx
│   │       ├── how-it-works.tsx
│   │       ├── formula-engine.tsx
│   │       ├── security.tsx
│   │       ├── stats.tsx
│   │       ├── pricing.tsx
│   │       ├── final-cta.tsx
│   │       ├── footer.tsx
│   │       └── reveal.tsx      # مكونات الأنيميشن
│   ├── lib/
│   └── hooks/
├── public/
│   └── fonts/                  # خطوط مخصصة (ThaSans)
├── prisma/
│   └── schema.prisma
└── package.json
```

---

## 🎨 التصميم

- **الهوية البصرية**: أخضر زمردي (للثقة والدقة) + كهرماني (للدفء الصناعي)
- **الخطوط**: Cairo + Tajawal (افتراضي) + ThaSans (لقسم المشكلة والحل)
- **الأنيميشن**: Framer Motion (reveal على scroll, stagger, parallax, hover effects)
- **Responsive**: دعم كامل للموبايل والديسكتوب
- **RTL**: دعم كامل للغة العربية

---

## 📜 الترخيص

هذا المشروع خاص — جميع الحقوق محفوظة © 2025

---

## 📞 تواصل معنا

- **واتساب**: 0599-XXX-XXX
- **البريد**: info@qassa.app

<div align="center">

**صُنع بكل ❤️ في فلسطين**

</div>
