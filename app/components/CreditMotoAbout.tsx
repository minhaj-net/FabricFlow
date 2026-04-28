"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

/* ── helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: d },
  }),
};

function SectionHeading({
  plain,
  colored,
  aosDelay = 0,
}: {
  plain: string;
  colored: string;
  aosDelay?: number;
}) {
  return (
    <h2
      className="text-3xl sm:text-4xl font-bold tracking-widest uppercase text-center text-gray-800"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      {plain}{" "}
      <span className="text-blue-500">{colored}</span>
    </h2>
  );
}

function Divider({ aosDelay = 100 }: { aosDelay?: number }) {
  return (
    <div
      className="mx-auto mt-3 mb-6 w-10 h-0.5 bg-blue-500"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    />
  );
}

/* ── icons ── */
function GearIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.6}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ImportIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.6}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
      />
    </svg>
  );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function CreditMotoAbout() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="bg-white text-gray-700">

      {/* ── 1. OUR CREDIT RATING ── */}
      <section id="moto" className="py-16 sm:py-20 px-4 text-center border-b border-gray-100">
        <motion.div
          className="max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-widest uppercase text-gray-800 mb-4">
            Our Credit Rating
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8">
            CRISL has assigned us &lsquo;CRISL So 3&rsquo; rating in the Long Term with &lsquo;Stable
            Outlook&rsquo; with rating validity up to July 17, 2024.
          </p>
          <motion.a
            href="/details"
            className="inline-block border border-gray-400 text-gray-600 text-xs tracking-widest uppercase px-6 py-2.5 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Details
          </motion.a>
        </motion.div>
      </section>

      {/* ── 2. OUR MOTO ── */}
      <section id="our-moto" className="py-16 sm:py-20 px-4 text-center bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <SectionHeading plain="OUR" colored="MOTO" aosDelay={0} />
          <Divider aosDelay={100} />

          <p
            className="text-sm sm:text-base text-gray-500 leading-relaxed mb-10"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            It is steered by our passion for excellence. Through each of our products, we set out to
            define the region&apos;s industry practices and create market benchmarks of international
            standards. We believe in long term business relationships that are based on mutual goals,
            ethical business practices, and the single-minded pursuit of delivering the extraordinary.
          </p>

          {/* Blue circle graphic */}
          <motion.div
            className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-blue-500 shadow-lg shadow-blue-200"
            data-aos="zoom-in"
            data-aos-delay="200"
            whileHover={{ scale: 1.08, rotate: 6 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
        </div>
      </section>

      {/* ── 3. ABOUT US ── */}
      <section id="about" className="py-16 sm:py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionHeading plain="ABOUT" colored="US" aosDelay={0} />
          <Divider aosDelay={100} />

          <p
            className="text-sm sm:text-base text-gray-500 leading-relaxed mb-14"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            To become the most trusted denim suppliers. Established in 2008, it is a set up to supply
            a best quality denim fabrics. We believe in changing trends and fashions. We strive for
            making niche product line using state of the art set up and consistency is our recognition.
            Our aim is to satisfy our clients in terms of prices, quality and delivery of goods.
          </p>

          {/* Two cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8 text-center">
            {/* Our Mission */}
            <div data-aos="fade-right" data-aos-delay="100">
              <motion.div
                className="mx-auto mb-5 w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-md shadow-blue-200"
                whileHover={{ scale: 1.1, rotate: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 16 }}
              >
                <GearIcon />
              </motion.div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-gray-800 mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Hamza Textile is committed to achieve excellence in the quality of its product and
                satisfaction of customers through reliability. To strive to keep up with the modern
                technology in the field of textile industry. To respond to customers ever changing
                needs in the most effective way. To maintain superior quality and make it as our
                strength. To be devoted and stringent to commitments and quality in order to gain
                customer confidence.
              </p>
            </div>

            {/* Out Sourcing & Imports */}
            <div data-aos="fade-left" data-aos-delay="200">
              <motion.div
                className="mx-auto mb-5 w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-md shadow-blue-200"
                whileHover={{ scale: 1.1, rotate: 8 }}
                transition={{ type: "spring", stiffness: 280, damping: 16 }}
              >
                <ImportIcon />
              </motion.div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-gray-800 mb-3">
                Out Sourcing &amp; Imports
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We outsource yarns and then make/processing of fabric in a certified facilities
                packaging and enrolled our own warehouse for keep it ready for delivery incase if we
                are planned over stocked or if we need to import as per customer requirements. We have
                very reliable sources for this purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
