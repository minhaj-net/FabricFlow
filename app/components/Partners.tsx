"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const partners = [
  { id: 1, name: "ONE", style: "font-black text-gray-700 text-xl tracking-widest border border-gray-300 px-4 py-2" },
  { id: 2, name: "▶", style: "text-green-500 text-3xl" },
  { id: 3, name: "HAMZA TEX", style: "font-bold text-sm tracking-widest bg-gray-200 text-gray-600 px-4 py-2" },
  { id: 4, name: "🔺", style: "text-red-500 text-2xl" },
  { id: 5, name: "OPEX", style: "font-black text-gray-700 text-xl tracking-widest" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: d },
  }),
};

export default function Partners() {
  useEffect(() => {
    AOS.init({ once: true, duration: 650, easing: "ease-out-cubic" });
  }, []);

  return (
    <section id="partners" className="bg-white">

      {/* ── Partners ── */}
      <div className="py-14 sm:py-18 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">

          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-widest uppercase text-gray-800"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Our <span className="text-blue-500">Partners</span>
          </motion.h2>

          <motion.div
            className="mx-auto mt-3 mb-5 w-10 h-0.5 bg-blue-500"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
          />

          <motion.p
            className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            During the glorious denim product development journey, HamzaTex has built a great
            business partnership with some renowned business giants in the denim sector. We are
            working together to make it stronger in the denim sector.
          </motion.p>

          {/* Partner logos row */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {partners.map((p, i) => (
              <motion.div
                key={p.id}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className={`cursor-pointer grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 ${p.style}`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                {p.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Google Map ── */}
      <div
        className="w-full h-64 sm:h-80 lg:h-[320px] relative"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.0!2d90.3742!3d23.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13b0f0a1b1b%3A0x1234567890abcdef!2sAshraf%20Setu%20Shopping%20Complex%2C%20Tongi%2C%20Gazipur!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hamza Tex Location"
          className="absolute inset-0 w-full h-full"
        />
      </div>

    </section>
  );
}
