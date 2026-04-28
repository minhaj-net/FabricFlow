"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const easing = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" as const, delay },
  }),
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[560px] flex items-center overflow-hidden">
      {/* Background image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: easing }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45 z-10" />
        {/* Background — denim texture via CSS gradient fallback; swap src for real image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542272604-787c3835535d?w=1600&q=80')",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            className="text-white/70 text-sm sm:text-base tracking-[0.25em] uppercase mb-3 font-light"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            Meet Us
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="text-white font-bold leading-[1.05] tracking-tight"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            <motion.span
              className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
            >
              Most Trusted
            </motion.span>
            <motion.span
              className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.55}
            >
              Denim Suppliers
            </motion.span>
          </motion.h1>

          {/* CTA */}
          <motion.div
            className="mt-8 sm:mt-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.75}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white text-white text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <motion.div
          className="w-9 h-9 rounded-full border border-white/50 flex items-center justify-center cursor-pointer hover:border-white transition-colors"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
