"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import DOMPurify from "dompurify";



interface ArticleProps {
  article: {
    title: string;
    content: string;
    image: string;
    date: string;
    category: string;
  };
}

export default function BlogContent({ article }: { article: ArticleProps["article"] }) {
  // Sanitize and normalize image path
  const imageSrc = useMemo(() => {
    if (!article.image) return '/default-blog-image.jpg';
    const cleanPath = DOMPurify.sanitize(article.image);
    return cleanPath.startsWith('/') || cleanPath.startsWith('http') 
      ? cleanPath 
      : `/${cleanPath}`;
  }, [article.image]);

  // Sanitize and format content
  const sanitizedContent = useMemo(() => {
    const dirty = article.content.replace(/\n/g, '<br>');
    return DOMPurify.sanitize(dirty, {
      ALLOWED_TAGS: ['br', 'p', 'strong', 'em', 'ul', 'ol', 'li', 'a'],
      ALLOWED_ATTR: ['href', 'target', 'rel']
    });
  }, [article.content]);

  // Sanitize title
  const cleanTitle = useMemo(() => {
    return DOMPurify.sanitize(article.title);
  }, [article.title]);

  return (
    <article className="max-w-3xl mx-auto">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {cleanTitle}
        </h1>

        <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-500 mb-6">
          <span className="inline-flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            {DOMPurify.sanitize(article.category)}
          </span>
          <span className="inline-flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {DOMPurify.sanitize(article.date)}
          </span>
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative aspect-video overflow-hidden rounded-xl shadow-lg mb-8 bg-gray-100"
      >
        <Image
          src={imageSrc}
          alt={cleanTitle}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/default-blog-image.jpg';
          }}
        />
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="prose prose-lg max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 pt-6 border-t border-gray-200"
      >
        <Link
          href="/#blogsId"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          กลับไปยังหน้าบทความทั้งหมด
        </Link>
      </motion.footer>
    </article>
  );
}