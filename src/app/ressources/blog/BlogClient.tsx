"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { blogPosts, formatDate } from "@/lib/blog-data";

export default function BlogClient() {
  return (
    <main>
      <Section background="cream" className="pt-32 md:pt-40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-primary tracking-wide uppercase mb-4">
              Blog
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-dark">
              Le journal de bord de l&apos;entrepreneur structuré.
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              Articles et analyses pour nourrir votre réflexion stratégique et accompagner votre développement entrepreneurial.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-3xl mx-auto space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/ressources/blog/${post.slug}`}
                className="block bg-cream rounded-lg p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-text-secondary">
                    {post.readingTime} de lecture
                  </span>
                </div>
                <h2 className="font-display text-xl md:text-2xl font-semibold text-dark mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <span>{post.author}</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Section>
    </main>
  );
}
