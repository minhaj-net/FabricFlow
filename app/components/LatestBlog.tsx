"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
}

const VISIBLE = 3;

export default function LatestBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(posts.length / VISIBLE);

  useEffect(() => {
    AOS.init({ once: true, duration: 650, easing: "ease-out-cubic" });
    fetch("/blog.json")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  const visible = posts.slice(page * VISIBLE, page * VISIBLE + VISIBLE);

  return (
    <section id="blog" className="bg-gray-50 py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-3" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-widest uppercase text-gray-800">
            Our Latest <span className="text-blue-500">Blog</span>
          </h2>
          <div className="mx-auto mt-3 mb-5 w-10 h-0.5 bg-blue-500" />
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Hamza Tex is very excited to contribute to the local fabric market to enhance the quality
            and commitment. We are planning to make this sector to organize as like as European and
            American standard like- Factory environment, Labour rights, Modern machinery, Digital
            communications, etc.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* Dot pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === page ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      className="bg-white rounded shadow-sm overflow-hidden flex flex-col"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      {/* Image */}
      <div className="relative w-full h-48 shrink-0 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category */}
        <p className="text-xs text-gray-500 mb-1">
          Category:{" "}
          <span className="text-blue-500 font-medium">{post.category}</span>
        </p>

        {/* Author + date */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM5 7V6h14v1H5z"/>
            </svg>
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-gray-800 mb-2 uppercase tracking-wide">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
          {post.excerpt}
        </p>

        {/* Read More */}
        <Link
          href={`/blog/${post.id}`}
          className="self-start bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full transition-colors duration-300"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
}
