"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const features = [
  "Excellence in product quality",
  "On time delivery",
  "Diversifying products through continuous product innovation",
  "Focusing on cost effectiveness",
  "Customer satisfaction",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: d },
  }),
};

export default function Features() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      {/*  ── Features Section ── */}
      <section id="features" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left — image */}
          <div
            className="relative w-full h-72 sm:h-96 lg:h-full min-h-[720px]"
            data-aos="fade-right"
          >
            <Image
              src="/Hamza-textile-feature.jpg"
              alt="Kids in denim"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right — content */}
          <div className="flex  bg-white px-8 sm:px-12 lg:px-16 py-14 lg:py-20">  
            <div className="max-w-lg w-full">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold tracking-widest uppercase text-gray-800 leading-snug mb-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                Our Important
                <br />
                Features
              </motion.h2>

              <motion.div
                className="w-8 h-0.5 bg-blue-500 mb-5"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.1}
              />

              <motion.p
                className="text-sm text-gray-500 leading-relaxed mb-8"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2}
              >
                To Become the most trusted denim manufacturer in the world through product innovation
                and efficient management, we do follow some key ethics.
              </motion.p>

              {/* Feature list */}
              <ul className="space-y-3">
                {features.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-600"
                    data-aos="fade-left"
                    data-aos-delay={i * 80}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.3 + i * 0.08}
                  >
                    {/* Blue checkmark */}
                    <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2.5 h-2.5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Banner ── */}
      <section
        className="w-full bg-blue-500 py-12 px-6 sm:px-10"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <motion.p
            className="text-white text-base sm:text-lg font-bold tracking-widest uppercase text-center sm:text-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Contact Us And Get Latest Business Offer!
          </motion.p>

          <motion.a
            href="/contact"
            className="shrink-0 border-2 border-white text-white text-xs font-bold tracking-widest uppercase px-7 py-2.5 rounded-full hover:bg-white hover:text-blue-500 transition-all duration-300"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Contact
          </motion.a>
        </div>
      </section>
    </>
  );
}
