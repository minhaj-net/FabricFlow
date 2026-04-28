"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: d },
  }),
};

export default function UpcomingProject() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
  }, []);

  return (
    <section id="upcoming" className="bg-white py-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

        {/* ── Left: text content ── */}
        <div className="flex flex-col justify-center px-8 sm:px-14 lg:px-16 py-16 lg:py-20">

          {/* Heading */}
          <motion.h2
            className="text-2xl sm:text-3xl font-bold tracking-widest uppercase text-gray-800 mb-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Upcoming{" "}
            <span className="text-blue-500">Project</span>
          </motion.h2>

          {/* Blue underline */}
          <motion.div
            className="w-10 h-0.5 bg-blue-500 mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
          />

          {/* Description */}
          <motion.p
            className="text-sm text-gray-500 leading-relaxed max-w-md"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            We are going to establish a smart (form fiber to fabric) denim fabric production plant
            that will be fully equipped with the high-tech machinery and equipment to produce
            innovative denim fabric.
          </motion.p>
        </div>

        {/* ── Right: image ── */}
        <div
          className="relative w-full h-64 sm:h-80 lg:h-auto min-h-[320px]"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <Image
            src="/hamzatex-upcomming-project.jpg"
            alt="Denim fabric production plant"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle blue tint overlay matching the image */}
          <div className="absolute inset-0 bg-blue-900/20" />
        </div>

      </div>
    </section>
  );
}
