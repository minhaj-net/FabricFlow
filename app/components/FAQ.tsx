"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    id: 1,
    question: "How do we contact you?",
    answer:
      "It's simple. Just write a line and send us the email. We will have contact you ASAP.",
  },
  {
    id: 2,
    question: "Can I speak to a live agent, please?",
    answer:
      "Of course, feel free to reach us at +88 01616-637477 Or +88 01710-041494",
  },
  {
    id: 3,
    question: "Do you export your products?",
    answer:
      "Yes, we export our denim products to various countries worldwide. Please contact us for export inquiries and pricing.",
  },
  {
    id: 4,
    question: "We can get a sample product from you?",
    answer:
      "Absolutely! We provide product samples upon request. Please reach out to our sales team with your requirements.",
  },
  {
    id: 5,
    question: "Can we get a price quotation?",
    answer:
      "Yes, we provide detailed price quotations based on your order quantity and specifications. Contact us with your requirements.",
  },
  {
    id: 6,
    question: "What type of payment method do you accept?",
    answer:
      "We accept bank transfers (T/T), Letter of Credit (L/C), and other standard international payment methods.",
  },
];

export default function FAQ() {
  // default open: first two
  const [openIds, setOpenIds] = useState<number[]>([1, 2]);

  useEffect(() => {
    AOS.init({ once: true, duration: 650, easing: "ease-out-cubic" });
  }, []);

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isOpen = (id: number) => openIds.includes(id);

  // Split into two columns
  const left = faqs.filter((_, i) => i % 2 === 0);
  const right = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section id="faq" className="bg-white py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-light tracking-widest text-gray-800 uppercase">
            FAQ
          </h2>
          <div className="mx-auto mt-3 mb-5 w-10 h-0.5 bg-blue-500" />
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            To maintain superior quality and make it as our strength. To be devoted and stringent
            to commitments and quality in order to gain customer confidence.
          </p>
        </div>

        {/* Two-column accordion grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          {[left, right].map((col, ci) =>
            col.map((faq, i) => (
              <motion.div
                key={faq.id}
                data-aos="fade-up"
                data-aos-delay={(ci * 3 + i) * 60}
                className="rounded-md overflow-hidden border border-gray-200 shadow-sm"
                layout
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(faq.id)}
                  className={`w-full flex items-center justify-between px-5 py-3.5 text-left text-sm font-semibold transition-colors duration-300 ${
                    isOpen(faq.id)
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 ml-3"
                  >
                    {isOpen(faq.id) ? (
                      /* up chevron */
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      /* down chevron */
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen(faq.id) && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 py-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
