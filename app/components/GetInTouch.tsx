"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay: d },
  }),
};

const contactInfo = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    label: "Location:",
    lines: [
      "Flat 60, Gayton House, Chiltern Road,",
      "E3 4BY, London, United Kingdom",
    ],
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Office Hours:",
    lines: ["Mon – Fri: 9:00 AM – 6:00 PM (PST)"],
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email:",
    lines: ["info@easysolutionsltd.com"],
  },
];

export default function GetInTouch() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 650, easing: "ease-out-cubic" });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-widest uppercase text-gray-800">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <div className="mx-auto mt-3 mb-5 w-10 h-0.5 bg-blue-500" />
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            We love to hear from you. So please write a line or advice for us. We will do contact
            you ASAP. We do response quickly around.
          </p>
        </div>

        {/* Contact info — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 text-center">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center gap-2"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
            >
              {item.icon}
              <p className="text-sm font-semibold text-gray-700 mt-1">{item.label}</p>
              {item.lines.map((line, li) => (
                <p key={li} className="text-sm text-gray-500 leading-relaxed">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Left column — 4 stacked inputs */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full bg-white border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
              />
              <input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-white border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
              />
              <input
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
              />
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
                className="w-full bg-white border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Right column — textarea */}
            <textarea
              placeholder="Your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center mt-8">
            <motion.button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-10 py-3.5 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {sent ? "Message Sent ✓" : "Send Message"}
            </motion.button>
          </div>
        </motion.form>

      </div>
    </section>
  );
}
