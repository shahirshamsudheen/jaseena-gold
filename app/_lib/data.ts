/**
 * Jaseena Gold & Diamonds — Placeholder Data
 *
 * All data in this file is PLACEHOLDER content matching the brand voice.
 * To be replaced with real product data, contact info, and photography.
 *
 * PLACEHOLDER markers:
 * - [PLACEHOLDER IMAGE] — swap with real photography
 * - [PLACEHOLDER CONTACT] — to be confirmed by client
 * - [PLACEHOLDER PRODUCT] — replace with real catalog data
 */

import type { Product, Category, Store, JournalArticle, NavItem } from "./types";

// ─── Navigation ───────────────────────────────────────────────

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Heritage", href: "/heritage" },
  { label: "Collections", href: "/collections" },
  { label: "Craftsmanship", href: "/craftsmanship" },
  { label: "Visit Us", href: "/visit" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

// ─── Categories ───────────────────────────────────────────────

export const categories: Category[] = [
  {
    id: "gold",
    name: "Gold Jewellery",
    slug: "gold-jewellery",
    description:
      "Crafted in 22K and 24K gold, our collection honours the timeless traditions of South Indian goldsmithing.",
    image: "/images/category-gold.png", // [PLACEHOLDER IMAGE]
    productCount: 24,
  },
  {
    id: "diamonds",
    name: "Diamond Jewellery",
    slug: "diamond-jewellery",
    description:
      "Diamonds chosen for brilliance and set with precision — each piece a quiet statement of elegance.",
    image: "/images/category-diamonds.png", // [PLACEHOLDER IMAGE]
    productCount: 18,
  },
  {
    id: "bridal",
    name: "Bridal Collection",
    slug: "bridal",
    description:
      "Heirloom pieces entrusted to mark the most considered moments of your life.",
    image: "/images/category-bridal.png", // [PLACEHOLDER IMAGE]
    productCount: 15,
  },
  {
    id: "antique",
    name: "Antique & Temple",
    slug: "antique-temple",
    description:
      "Temple-inspired designs rooted in centuries of devotion and artistry, rendered in rich matte gold.",
    image: "/images/category-antique.png", // [PLACEHOLDER IMAGE]
    productCount: 12,
  },
  {
    id: "daily",
    name: "Daily Wear",
    slug: "daily-wear",
    description:
      "Understated gold for every day — pieces that belong with you, morning to night.",
    image: "/images/category-daily.png", // [PLACEHOLDER IMAGE]
    productCount: 30,
  },
];

// ─── Products ─────────────────────────────────────────────────
// [PLACEHOLDER PRODUCT] — All products below are placeholders

export const products: Product[] = [
  // Gold Jewellery
  {
    id: "g-001",
    name: "Kasavu Heritage Necklace",
    slug: "kasavu-heritage-necklace",
    category: "gold-jewellery",
    images: ["/images/category-gold.png"], // [PLACEHOLDER IMAGE]
    description:
      "A 22K gold necklace inspired by the Kerala kasavu tradition, featuring intricate filigree work passed down through generations of master craftsmen.",
    karat: "22K",
    purity: "916 Hallmark",
    weight: "approx. 45g",
    priceOnRequest: true,
    craftsmanshipNotes:
      "Each link is hand-formed using traditional lost-wax casting, followed by hours of meticulous hand-finishing. The filigree patterns reference motifs found in Kerala temple architecture.",
    featured: true,
  },
  {
    id: "g-002",
    name: "Thali Gold Chain",
    slug: "thali-gold-chain",
    category: "gold-jewellery",
    images: ["/images/category-gold.png"], // [PLACEHOLDER IMAGE]
    description:
      "A classic 22K gold chain with a timeless rope design — a piece of quiet confidence for everyday wear.",
    karat: "22K",
    purity: "916 Hallmark",
    weight: "approx. 28g",
    priceOnRequest: true,
    craftsmanshipNotes:
      "Machine-cut for consistency, hand-polished for warmth. This chain represents the intersection of modern precision and heritage finish.",
  },
  {
    id: "g-003",
    name: "Mango Mala Long Necklace",
    slug: "mango-mala-long-necklace",
    category: "gold-jewellery",
    images: ["/images/category-gold.png"], // [PLACEHOLDER IMAGE]
    description:
      "The iconic paisley-motif long necklace, crafted in 22K gold with hand-engraved mango-shaped pendants.",
    karat: "22K",
    purity: "916 Hallmark",
    weight: "approx. 62g",
    priceOnRequest: true,
    featured: true,
  },
  {
    id: "g-004",
    name: "Temple Jhumka Earrings",
    slug: "temple-jhumka-earrings",
    category: "gold-jewellery",
    images: ["/images/category-gold.png"], // [PLACEHOLDER IMAGE]
    description:
      "Traditional bell-shaped jhumka earrings with temple motifs, handcrafted in 22K gold with delicate pearl drops.",
    karat: "22K",
    purity: "916 Hallmark",
    weight: "approx. 18g",
    priceOnRequest: true,
  },

  // Diamond Jewellery
  {
    id: "d-001",
    name: "Starlight Solitaire Pendant",
    slug: "starlight-solitaire-pendant",
    category: "diamond-jewellery",
    images: ["/images/category-diamonds.png"], // [PLACEHOLDER IMAGE]
    description:
      "A single brilliant-cut diamond suspended from an 18K white gold chain — understated luminance for considered occasions.",
    karat: "18K",
    purity: "750 Hallmark",
    priceOnRequest: true,
    craftsmanshipNotes:
      "Centre stone: VS1 clarity, G colour. Four-prong setting to maximise light return. Chain links individually inspected.",
    featured: true,
  },
  {
    id: "d-002",
    name: "Emerald Cut Tennis Bracelet",
    slug: "emerald-cut-tennis-bracelet",
    category: "diamond-jewellery",
    images: ["/images/category-diamonds.png"], // [PLACEHOLDER IMAGE]
    description:
      "A continuous line of emerald-cut diamonds set in 18K gold — precision and grace in equal measure.",
    karat: "18K",
    purity: "750 Hallmark",
    priceOnRequest: true,
  },
  {
    id: "d-003",
    name: "Floral Diamond Studs",
    slug: "floral-diamond-studs",
    category: "diamond-jewellery",
    images: ["/images/category-diamonds.png"], // [PLACEHOLDER IMAGE]
    description:
      "Delicate floral-motif diamond stud earrings set in 18K white gold, designed for effortless daily elegance.",
    karat: "18K",
    purity: "750 Hallmark",
    priceOnRequest: true,
    featured: true,
  },

  // Bridal
  {
    id: "b-001",
    name: "Maharani Bridal Set",
    slug: "maharani-bridal-set",
    category: "bridal",
    images: ["/images/category-bridal.png"], // [PLACEHOLDER IMAGE]
    description:
      "A complete bridal ensemble — necklace, earrings, and maang tikka — crafted in 22K gold with uncut diamonds and precious stones.",
    karat: "22K",
    purity: "916 Hallmark",
    priceOnRequest: true,
    craftsmanshipNotes:
      "This set requires over 200 hours of hand labour across five master craftsmen. Each stone is individually set using the kundan technique.",
    featured: true,
  },
  {
    id: "b-002",
    name: "Kerala Bridal Choker",
    slug: "kerala-bridal-choker",
    category: "bridal",
    images: ["/images/category-bridal.png"], // [PLACEHOLDER IMAGE]
    description:
      "A traditional Kerala-style bridal choker necklace with lakshmi coins and ruby accents, in 22K gold.",
    karat: "22K",
    purity: "916 Hallmark",
    priceOnRequest: true,
  },

  // Antique & Temple
  {
    id: "a-001",
    name: "Lakshmi Temple Haram",
    slug: "lakshmi-temple-haram",
    category: "antique-temple",
    images: ["/images/category-antique.png"], // [PLACEHOLDER IMAGE]
    description:
      "A majestic temple-style long haram featuring Lakshmi pendants in antique-finished 22K gold with ruby and emerald accents.",
    karat: "22K",
    purity: "916 Hallmark",
    weight: "approx. 85g",
    priceOnRequest: true,
    featured: true,
  },
  {
    id: "a-002",
    name: "Nakshi Bangles",
    slug: "nakshi-bangles",
    category: "antique-temple",
    images: ["/images/category-antique.png"], // [PLACEHOLDER IMAGE]
    description:
      "Hand-carved nakshi work bangles in antique-finish 22K gold, depicting scenes from classical Indian art.",
    karat: "22K",
    purity: "916 Hallmark",
    priceOnRequest: true,
  },

  // Daily Wear
  {
    id: "dw-001",
    name: "Whisper Chain",
    slug: "whisper-chain",
    category: "daily-wear",
    images: ["/images/category-daily.png"], // [PLACEHOLDER IMAGE]
    description:
      "A fine 22K gold chain designed for those who prefer gold that speaks quietly — weightless, warm, and always appropriate.",
    karat: "22K",
    purity: "916 Hallmark",
    weight: "approx. 8g",
    priceOnRequest: true,
    featured: true,
  },
  {
    id: "dw-002",
    name: "Classic Gold Studs",
    slug: "classic-gold-studs",
    category: "daily-wear",
    images: ["/images/category-daily.png"], // [PLACEHOLDER IMAGE]
    description:
      "Simple, perfectly proportioned gold stud earrings in 22K — the foundation of any jewellery collection.",
    karat: "22K",
    purity: "916 Hallmark",
    weight: "approx. 3g",
    priceOnRequest: true,
  },
  {
    id: "dw-003",
    name: "Thin Gold Bangle",
    slug: "thin-gold-bangle",
    category: "daily-wear",
    images: ["/images/category-daily.png"], // [PLACEHOLDER IMAGE]
    description:
      "A single thin bangle in polished 22K gold — stack or wear alone. Considered restraint.",
    karat: "22K",
    purity: "916 Hallmark",
    weight: "approx. 12g",
    priceOnRequest: true,
  },
];

// ─── Stores ───────────────────────────────────────────────────
// [PLACEHOLDER CONTACT] — phone, email, and hours to be confirmed by client

export const stores: Store[] = [
  {
    id: "kallara-main",
    name: "Jaseena Gold — Kallara Main",
    address: "Main Road, Kallara Junction, Kallara",
    city: "Thiruvananthapuram",
    state: "Kerala, India",
    phone: "+91 XXXXX XXXXX", // [PLACEHOLDER CONTACT]
    email: "info@jaseenagold.com", // [PLACEHOLDER CONTACT]
    hours: "Mon–Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 6:00 PM",
    mapUrl: "", // [PLACEHOLDER — Google Maps embed to be added]
  },
  {
    id: "kallara-second",
    name: "Jaseena Gold — Kallara II",
    address: "Market Road, Kallara",
    city: "Thiruvananthapuram",
    state: "Kerala, India",
    phone: "+91 XXXXX XXXXX", // [PLACEHOLDER CONTACT]
    email: "store2@jaseenagold.com", // [PLACEHOLDER CONTACT]
    hours: "Mon–Sat: 10:00 AM – 8:00 PM | Sun: Closed",
    mapUrl: "", // [PLACEHOLDER — Google Maps embed to be added]
  },
];

// ─── Journal Articles ─────────────────────────────────────────

export const journalArticles: JournalArticle[] = [
  {
    id: "j-001",
    title: "The Art of Kerala Gold: A Tradition That Endures",
    slug: "the-art-of-kerala-gold",
    excerpt:
      "For centuries, Kerala's gold artisans have practised techniques that transform raw metal into wearable heritage. We trace the craft from furnace to finish.",
    image: "/images/craftsmanship-macro.png", // [PLACEHOLDER IMAGE]
    date: "2026-06-15",
    readTime: "6 min read",
    category: "Craftsmanship",
  },
  {
    id: "j-002",
    title: "Choosing Your Bridal Gold: A Considered Guide",
    slug: "choosing-your-bridal-gold",
    excerpt:
      "Your wedding jewellery should outlast the occasion. Here is how to choose pieces that become family heirlooms, not one-day ornaments.",
    image: "/images/category-bridal.png", // [PLACEHOLDER IMAGE]
    date: "2026-05-20",
    readTime: "8 min read",
    category: "Occasions",
  },
  {
    id: "j-003",
    title: "Understanding Gold Purity: 22K, 24K, and What It Means",
    slug: "understanding-gold-purity",
    excerpt:
      "Gold purity is not just a number — it determines colour, durability, and value. A plain-language guide to karats and hallmarks.",
    image: "/images/category-gold.png", // [PLACEHOLDER IMAGE]
    date: "2026-04-10",
    readTime: "5 min read",
    category: "Knowledge",
  },
  {
    id: "j-004",
    title: "Since 1975: The Jaseena Story",
    slug: "since-1975-the-jaseena-story",
    excerpt:
      "From a single family shop in Kallara to a name synonymous with trust — the quiet journey of Jaseena Gold & Diamonds.",
    image: "/images/heritage-craftsman.png", // [PLACEHOLDER IMAGE]
    date: "2026-03-01",
    readTime: "7 min read",
    category: "Heritage",
  },
];

// ─── Helper functions ─────────────────────────────────────────

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
