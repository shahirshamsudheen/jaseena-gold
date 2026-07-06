"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Category } from "../_lib/types";

interface CategoryGridProps {
  categories: Category[];
}

/**
 * CategoryGrid — Responsive grid of category cards.
 * 1 col on mobile, 2 on tablet, 3 on desktop.
 *
 * [PLACEHOLDER IMAGE] — Category images to be replaced with real photography.
 */
export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {categories.map((category, i) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Link
            href={`/collections/${category.slug}`}
            className="group block min-h-0"
          >
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={category.image} // [PLACEHOLDER IMAGE]
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

              {/* Content overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-kicker text-warm-gold text-[0.65rem]">
                  {category.productCount} Pieces
                </span>
                <h3 className="font-display text-ivory text-2xl font-medium mt-1">
                  {category.name}
                </h3>
                <p className="text-ivory/70 text-sm font-body mt-1 line-clamp-2">
                  {category.description}
                </p>

                {/* Animated explore arrow */}
                <div className="flex items-center gap-2 mt-3 text-warm-gold text-sm font-body">
                  <span className="text-xs tracking-wider uppercase">Explore</span>
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
