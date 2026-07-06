import type { Metadata } from "next";
import AnimatedSection from "../_components/AnimatedSection";
import CategoryGrid from "../_components/CategoryGrid";
import SectionDivider from "../_components/SectionDivider";
import { categories } from "../_lib/data";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore our jewellery collections — Gold, Diamond, Bridal, Antique & Temple, and Daily Wear. Crafted with heritage, designed with restraint.",
};

/**
 * COLLECTIONS LANDING PAGE
 * Category browsing grid — no e-commerce, catalog only.
 */
export default function CollectionsPage() {
  return (
    <>
      {/* Header Section */}
      <section className="section-dark py-20 lg:py-28 -mt-20 lg:-mt-24 pt-32 lg:pt-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-kicker text-warm-gold mb-4">Our Collections</p>
            <h1 className="font-display text-ivory font-medium">
              Jewellery, Considered
            </h1>
            <hr className="block h-px border-none bg-warm-gold w-16 mx-auto mt-6 mb-6" aria-hidden="true" />
            <p className="text-ivory/70 font-body text-lg leading-relaxed max-w-2xl mx-auto">
              Each collection is an expression of our heritage — gold and diamonds shaped by
              hands that understand tradition, crafted for those who value substance over spectacle.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-ivory py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CategoryGrid categories={categories} />
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="section-ivory py-12 lg:py-16 border-t border-muted/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-muted font-body mb-4">
              Looking for something specific? Our team can help you find the perfect piece.
            </p>
            <a href="/contact" className="btn-primary">
              Make an Enquiry
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
