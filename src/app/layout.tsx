import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "قصّة | منصة إدارة مشاغل الألمنيوم الذكية في فلسطين",
  description:
    "نظام SaaS متكامل لمشاغل الألمنيوم يستبدل ملفات Excel بحساب ذكي وتلقائي لقصات الألمنيوم. عزل كامل بين المشاغل، محرك معادلات مرن، وتصدير احترافي.",
  keywords: [
    "مشاغل الألمنيوم",
    "نظام إدارة المشاغل",
    "حساب قصات الألمنيوم",
    "SaaS فلسطين",
    "إدارة مشاريع الألمنيوم",
    "بديل Excel للمشاغل",
  ],
  authors: [{ name: "قصّة" }],
  openGraph: {
    title: "قصّة | منصة إدارة مشاغل الألمنيوم الذكية",
    description:
      "بديل ذكي لملفات Excel في مشاغل الألمنيوم — حساب تلقائي، عزل كامل بين المشاغل، وتصدير احترافي.",
    type: "website",
    locale: "ar_PS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${tajawal.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
