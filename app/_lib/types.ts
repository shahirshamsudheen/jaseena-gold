/**
 * Jaseena Gold & Diamonds — Type Definitions
 *
 * These types define the catalog schema for the brand showcase site.
 * Structured to support future e-commerce layer (phase 2) and i18n.
 */

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  images: string[];
  description: string;
  /** e.g. "22K", "24K", "18K" */
  karat?: string;
  /** e.g. "916 Hallmark", "750" */
  purity?: string;
  /** Weight description, e.g. "approx. 45g" */
  weight?: string;
  /** Always true for now — no pricing shown */
  priceOnRequest: boolean;
  /** Craftsmanship notes for detail page */
  craftsmanshipNotes?: string;
  /** Whether this product is featured on homepage */
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  /** Placeholder — to be confirmed by client */
  phone: string;
  /** Placeholder — to be confirmed by client */
  email: string;
  hours: string;
  /** Google Maps embed URL placeholder */
  mapUrl?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredStore: string;
  /** Optional — for product-specific enquiries */
  productId?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
