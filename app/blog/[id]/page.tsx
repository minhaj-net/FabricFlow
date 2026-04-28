import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readFile } from "fs/promises";
import path from "path";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

async function getPost(id: string): Promise<BlogPost | null> {
  const filePath = path.join(process.cwd(), "public", "blog.json");
  const raw = await readFile(filePath, "utf-8");
  const posts: BlogPost[] = JSON.parse(raw);
  return posts.find((p) => p.id === id) ?? null;
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public", "blog.json");
  const raw = await readFile(filePath, "utf-8");
  const posts: BlogPost[] = JSON.parse(raw);
  return posts.map((p) => ({ id: p.id }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) notFound();

  return (
    <main className="bg-white min-h-screen">
      {/* Hero image */}
      <div className="relative w-full h-64 sm:h-80 lg:h-[420px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto w-full px-6 pb-8">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">
              {post.category}
            </span>
            <h1 className="text-white text-2xl sm:text-4xl font-bold uppercase tracking-wide mt-1">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM5 7V6h14v1H5z"/>
            </svg>
            {post.date}
          </span>
          <span className="ml-auto">
            Category:{" "}
            <span className="text-blue-500 font-medium">{post.category}</span>
          </span>
        </div>

        {/* Body */}
        <p className="text-gray-600 text-base leading-8 whitespace-pre-line">
          {post.content}
        </p>

        {/* Back */}
        <div className="mt-12">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
