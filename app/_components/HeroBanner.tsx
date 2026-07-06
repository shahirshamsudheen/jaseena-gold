"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroBannerProps {
  /** Background image path */
  image: string;
  /** Main headline */
  headline: string;
  /** Subline / lead text */
  subline?: string;
  /** CTA button text */
  ctaText: string;
  /** CTA button link */
  ctaHref: string;
  /** Optional kicker text above headline */
  kicker?: string;
  /** Whether to use the gold accent CTA (max ONE per screen) */
  accentCta?: boolean;
  /** Height variant */
  size?: "full" | "large" | "medium";
}

/**
 * HeroBanner, Full-bleed hero with overlay text.
 * Used on homepage and major landing pages.
 *
 * [PLACEHOLDER IMAGE], Hero image to be replaced with real photography.
 */
export default function HeroBanner({
  image,
  headline,
  subline,
  ctaText,
  ctaHref,
  kicker,
  accentCta = false,
  size = "full",
}: HeroBannerProps) {
  const heightClass = {
    full: "min-h-[100svh]",
    large: "min-h-[80vh]",
    medium: "min-h-[60vh]",
  }[size];

  return (
    <section
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden -mt-20 lg:-mt-24`}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt="" // Decorative, content is in the text overlay
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={90}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/30 to-ink/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {kicker && (
          <motion.p
            className="text-kicker text-warm-gold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {kicker}
          </motion.p>
        )}

        <motion.h1
          className="font-display text-ivory font-medium leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {headline}
        </motion.h1>

        {subline && (
          <motion.p
            className="text-lead text-ivory/80 mt-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {subline}
          </motion.p>
        )}

        {/* Gold rule before CTA */}
        <motion.hr
          className="block h-px border-none bg-warm-gold w-16 mx-auto mt-8 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            href={ctaHref}
            className={accentCta ? "btn-accent" : "btn-primary"}
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-5 h-8 border border-ivory/30 rounded-full flex items-start justify-center p-1"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-ivory/50 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
