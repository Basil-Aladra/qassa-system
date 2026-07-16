"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./reveal";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-800 to-emerald-800" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        {/* Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-400/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-400/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative">
        <Reveal className="text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur border border-white/20 mb-6"
          >
            <Sparkles className="w-8 h-8 text-gold-300" />
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            جاهز تحوّل مشغل الألمنيوم
            <br className="hidden sm:block" /> إلى{" "}
            <span className="text-yellow-300">نظام ذكي</span>؟
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            انضم إلى مشاغل الألمنيوم التي تركت Excel خلفها وبدأت تعمل بذكاء.
            سجّل الآن، وفريقنا يفعّل حسابك خلال ٢٤ ساعة.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Button
              size="lg"
              className="bg-white text-brand-800 hover:bg-white/90 font-bold text-base h-13 px-8 shadow-2xl group"
            >
              ابدأ التسجيل الآن
              <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold text-base h-13 px-8"
            >
              <MessageCircle className="w-4 h-4 ml-1" />
              تواصل عبر واتساب
            </Button>
          </div>

{/* Quick contact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Phone, label: "اتصل بنا", value: "+972 56-835-3362" },
              {
                icon: MessageCircle,
                label: "واتساب",
                value: "+972 56-835-3362",
              },
              {
                icon: Sparkles,
                label: "البريد",
                value: "info@qassa.app",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 justify-center sm:justify-start p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="grid place-items-center w-10 h-10 rounded-xl bg-white/15 text-yellow-300 flex-shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-white/70">{item.label}</div>
                  <div className="text-sm font-bold text-white font-mono">
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
