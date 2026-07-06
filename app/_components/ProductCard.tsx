"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "../_lib/types";

interface ProductCardProps {
  product: Product;
  /** Index for staggered animation */
  index?: number;
}

/**
 * ProductCard — Displays a single product with image, name, description, and "Enquire" CTA.
 * No price shown — all products are price-on-request.
 *
 * [PLACEHOLDER IMAGE] — Product images to be replaced with real photography.
 */
export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        href={`/collections/${product.category}/${product.slug}`}
        className="block min-h-0"
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-sm bg-ivory">
          <Image
            src={product.images[0]}
            alt={product.name} // [PLACEHOLDER IMAGE]
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Subtle hover overlay */}
          <div className="absolute inset-0 bg-deep-emerald/0 group-hover:bg-deep-emerald/10 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="mt-4">
          {/* Karat badge */}
          {product.karat && (
            <span className="text-kicker text-muted text-[0.65rem]">
              {product.karat} {product.purity ? `· ${product.purity}` : ""}
            </span>
          )}

          <h3 className="font-display text-lg font-medium text-ink mt-1 group-hover:text-emerald transition-colors duration-300">
            {product.name}
          </h3>

          <p className="text-muted text-sm font-body mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Price on Request */}
          <p className="text-lead text-emerald text-sm mt-2">
            Price on request
          </p>
        </div>
      </Link>

      {/* Enquire CTA */}
      <div className="mt-3">
        <Link
          href={`/contact?product=${product.id}`}
          className="btn-outline !py-2 !px-4 !text-xs w-full text-center"
        >
          Enquire
        </Link>
      </div>
    </motion.article>
  );
}
