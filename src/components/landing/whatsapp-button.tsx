"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="https://wa.me/972568353362"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-16 h-16 rounded-full shadow-2xl shadow-green-500/30 group"
      >
        <img
          src="/assets/icons8-whatsapp-logo.gif"
          alt="واتساب"
          className="w-14 h-14 rounded-full"
        />
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 bg-green-500 rounded-full animate-pulse">
          <Phone className="w-3 h-3 text-white" />
        </span>
      </motion.a>
    </motion.div>
  );
}