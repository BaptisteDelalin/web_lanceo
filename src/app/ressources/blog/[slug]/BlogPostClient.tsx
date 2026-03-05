"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { formatDate } from "@/lib/blog-data";
import type { BlogPost } from "@/lib/blog-data";

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

function parseInlineMarkdown(text: string): React.ReactNode[] {
  const result: React.ReactNode[] = [];
  // Regex to match **bold** and [text](url)
  const inlineRegex = /(\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
  let lastIndex = 0;
  let match;

  while ((match = inlineRegex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }

    if (match[2]) {
      // Bold: **text**
      result.push(
        <strong key={`b-${match.index}`} className="text-dark font-medium">
          {match[2]}
        </strong>
      );
    } else if (match[3] && match[4]) {
      // Link: [text](url)
      const href = match[4];
      const isInternal = href.startsWith("/");
      if (isInternal) {
        result.push(
          <Link key={`l-${match.index}`} href={href} className="text-primary underline hover:text-primary/80 transition-colors">
            {match[3]}
          </Link>
        );
      } else {
        result.push(
          <a key={`l-${match.index}`} href={href} className="text-primary underline hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
            {match[3]}
          </a>
        );
      }
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result;
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ");
      elements.push(
        <p key={elements.length} className="text-text-secondary leading-relaxed mb-4">
          {parseInlineMarkdown(text)}
        </p>
      );
      currentParagraph = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed === "") {
      flushParagraph();
    } else if (trimmed.startsWith("## ")) {
      flushParagraph();
      elements.push(
        <h2 key={elements.length} className="font-display text-2xl font-semibold text-dark mt-10 mb-4">
          {trimmed.replace("## ", "")}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      flushParagraph();
      elements.push(
        <h3 key={elements.length} className="font-display text-xl font-semibold text-dark mt-8 mb-3">
          {trimmed.replace("### ", "")}
        </h3>
      );
    } else if (trimmed.startsWith("- ")) {
      flushParagraph();
      elements.push(
        <li key={elements.length} className="flex items-start gap-2 text-text-secondary mb-2 ml-4">
          <span className="text-primary mt-1">&#8226;</span>
          <span>
            {parseInlineMarkdown(trimmed.replace("- ", ""))}
          </span>
        </li>
      );
    } else {
      currentParagraph.push(trimmed);
    }
  });

  flushParagraph();
  return elements;
}

export default function BlogPostClient({ post, relatedPosts }: Props) {
  return (
    <main>
      <Section background="cream" className="pt-32 md:pt-40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6 text-text-secondary text-sm">
              <span>{post.author}</span>
              <span>&#8226;</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>&#8226;</span>
              <span>{post.readingTime} de lecture</span>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section background="white">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          {renderMarkdown(post.content)}
        </motion.article>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section background="cream-dark">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-dark mb-8 text-center">
              Articles liés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/ressources/blog/${related.slug}`}
                  className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-display text-lg font-semibold text-dark mb-2 hover:text-primary transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-3">
                    {related.description}
                  </p>
                  <span className="text-sm text-primary font-medium">
                    Lire l&apos;article →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section background="cream">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold text-dark mb-4">
            Envie d&apos;aller plus loin ?
          </h2>
          <p className="text-text-secondary mb-6">
            Réservez un appel découverte gratuit pour discuter de votre projet.
          </p>
          <Button href="/rendez-vous">Prendre rendez-vous</Button>
        </div>
      </Section>
    </main>
  );
}
