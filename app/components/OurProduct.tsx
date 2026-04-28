"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const products = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Denim fabric rolls dark",
  },
  {
    id: 2,
    src: null, // center card — logo placeholder
    alt: "Hamza Tex",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&q=80",
    alt: "Denim rolls stacked",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
    alt: "Denim fabric swatches",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=600&q=80",
    alt: "Denim jeans fabric",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    alt: "Denim texture close",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&q=80",
    alt: "Blue denim fabric",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=600&q=80",
    alt: "Hamza Tex label denim",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&q=80",
    alt: "Grey denim fabric",
  },
];

export default function OurProduct() {
  useEffect(() => {
    AOS.init({ once: true, duration: 650, easing: "ease-out-cubic" });
  }, []);

  return (
    <section id="product" className="bg-white py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-widest uppercase text-gray-800">
            Our <span className="text-blue-500">Product</span>
          </h2>
          <div className="mx-auto mt-3 w-10 h-0.5 bg-blue-500" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-1.5">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Single card ── */
function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  const aosAnim =
    index % 3 === 0 ? "fade-right" : index % 3 === 2 ? "fade-left" : "fade-up";

  return (
    <motion.div
      className="relative overflow-hidden aspect-square cursor-pointer bg-gray-100"
      data-aos={aosAnim}
      data-aos-delay={index * 60}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {/* Image or logo placeholder */}
      {product.src ? (
        <Image
          src={product.src}
          alt={product.alt}
          fill
          className="object-cover transition-transform duration-500 ease-out"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
          sizes="(max-width: 640px) 50vw, 33vw"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-white">
          <span className="text-lg font-bold tracking-widest text-gray-700 uppercase">
            Hamza Tex
          </span>
        </div>
      )}

      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Top blue line */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-blue-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0.5 }}
            />

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              {/* Search / zoom */}
              <motion.button
                className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-md"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.05, type: "spring", stiffness: 320, damping: 20 }}
                aria-label="View"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                </svg>
              </motion.button>

              {/* Link / arrow */}
              <motion.button
                className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-md"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.12, type: "spring", stiffness: 320, damping: 20 }}
                aria-label="Link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
