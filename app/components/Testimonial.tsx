"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    logo: "ONE",
    name: "Md. Mizanur Rahman",
    title: "CEO",
    quote:
      "It is very happy to see that Hamza Tex keeping a leading role in our raising fabric sector. We are dealing business with them from the very beginning and still, we are happy with them. We feel proud to be a part of the business with Hamza Tex, and wishing the best!",
  },
  {
    id: 2,
    logo: "TEX",
    name: "Karim Hossain",
    title: "Managing Director",
    quote:
      "Hamza Tex has been our most reliable denim supplier for years. Their commitment to quality and on-time delivery is unmatched in the industry. We highly recommend them to any business looking for a trusted partner.",
  },
  {
    id: 3,
    logo: "BD",
    name: "Rafiqul Islam",
    title: "Procurement Head",
    quote:
      "Working with Hamza Tex has transformed our supply chain. Their product quality is consistently excellent and their team is always responsive and professional. A true industry leader.",
  },
];

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
  }, []);

  // Parallax: background moves slower than scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={sectionRef}
      id="testimonial"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* ── Parallax background ── */}
      <motion.div
        className="absolute inset-[-20%] z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80')",
          y: bgY,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/65" />

      {/* ── Content ── */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-widest uppercase text-white">
            What Our{" "}
            <span className="text-blue-400">Clients Say</span>
          </h2>
          <div className="mx-auto mt-3 w-10 h-0.5 bg-blue-400" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="flex flex-col gap-5"
              data-aos="fade-up"
              data-aos-delay={i * 120}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              {/* Logo badge + name */}
              <div className="flex items-center gap-4">
                {/* Logo box */}
                <div className="shrink-0 w-14 h-14 border-2 border-blue-400 flex items-center justify-center">
                  <span className="text-blue-400 font-black text-sm tracking-widest">
                    {t.logo}
                  </span>
                </div>

                {/* Name & title */}
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">
                    {t.name}
                  </p>
                  <p className="text-white/50 text-xs tracking-wide mt-0.5">
                    {t.title}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/15" />

              {/* Quote */}
              <p className="text-white/75 text-sm leading-relaxed">
                {t.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
