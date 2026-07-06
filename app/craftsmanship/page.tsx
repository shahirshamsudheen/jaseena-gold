import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "../_components/AnimatedSection";
import SectionDivider from "../_components/SectionDivider";

export const metadata: Metadata = {
  title: "Craftsmanship",
  description:
    "The art of Kerala gold. We honour the hands that shape gold, carrying forward techniques refined over generations by master craftsmen.",
};

/**
 * CRAFTSMANSHIP PAGE
 * - Story of making process
 * - Family standards narrative
 * - Quality/purity promise
 * - Macro photography showcase
 */
export default function CraftsmanshipPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden -mt-20 lg:-mt-24">
        <Image
          src="/images/craftsmanship-macro.png" // [PLACEHOLDER IMAGE]
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/20" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
          <AnimatedSection>
            <p className="text-kicker text-warm-gold mb-4">The Art of Gold</p>
            <h1 className="font-display text-ivory font-medium">
              Craftsmanship
            </h1>
            <hr className="block h-px border-none bg-warm-gold w-16 mx-auto mt-6" aria-hidden="true" />
          </AnimatedSection>
        </div>
      </section>

      {/* Process & Standards */}
      <section className="section-ivory py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
              <div>
                <p className="text-kicker text-emerald mb-4">The Process</p>
                <h2 className="font-display text-ink text-3xl lg:text-4xl">
                  Time, the Ultimate Luxury
                </h2>
                <SectionDivider align="left" />
                <div className="space-y-4 text-muted font-body leading-relaxed">
                  <p>
                    True craftsmanship cannot be rushed. While modern technology allows for mass production,
                    we choose to rely on the skilled hands of our karigars (craftsmen) for our heritage pieces.
                  </p>
                  <p>
                    Techniques like Nakshi (intricate carving) and Kundan (stone setting) require weeks of
                    focused attention. The gold must be heated, drawn into impossibly thin wires, and
                    meticulously shaped into filigree, all by hand.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square rounded-sm overflow-hidden bg-emerald/5">
                <Image
                  src="/images/heritage-craftsman.png" // [PLACEHOLDER IMAGE]
                  alt="Goldsmith working on detailed jewellery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative aspect-square rounded-sm overflow-hidden bg-emerald/5 order-2 lg:order-1">
                <Image
                  src="/images/craftsmanship-macro.png" // [PLACEHOLDER IMAGE]
                  alt="Macro shot of gold filigree"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-kicker text-emerald mb-4">Our Standards</p>
                <h2 className="font-display text-ink text-3xl lg:text-4xl">
                  The Purity Promise
                </h2>
                <SectionDivider align="left" />
                <div className="space-y-4 text-muted font-body leading-relaxed">
                  <p>
                    Craftsmanship is meaningless without integrity. Every piece of gold jewellery at
                    Jaseena Gold is crafted in 22K or 18K gold and carries the BIS 916 or 750 hallmark,
                    the ultimate guarantee of purity.
                  </p>
                  <p>
                    Our diamonds are individually selected for cut, colour, and clarity, ensuring maximum
                    brilliance. We believe that what you cannot see—the underside of a setting, the
                    strength of a clasp—is just as important as the polished front.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Macro Showcase */}
      <section className="section-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-kicker text-warm-gold mb-4">Details</p>
            <h2 className="font-display text-ivory text-3xl lg:text-4xl font-medium">
              A Closer Look
            </h2>
            <SectionDivider />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
             {/* 3 Macro Image Placeholders */}
             <AnimatedSection delay={0.1}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ivory/5">
                  <Image src="/images/craftsmanship-macro.png" alt="Macro detail" fill className="object-cover" />
                </div>
             </AnimatedSection>
             <AnimatedSection delay={0.2}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ivory/5">
                  <Image src="/images/category-gold.png" alt="Macro detail" fill className="object-cover" />
                </div>
             </AnimatedSection>
             <AnimatedSection delay={0.3}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ivory/5">
                  <Image src="/images/antique_temple_category.png" alt="Macro detail" fill className="object-cover" />
                </div>
             </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-ivory py-16 lg:py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
           <AnimatedSection>
             <h2 className="font-display text-ink text-3xl mb-6">Experience the Craft</h2>
             <p className="text-muted font-body mb-8">
               Some details must be seen in person. We invite you to visit our stores and feel the weight, finish, and warmth of true craftsmanship.
             </p>
             <Link href="/collections" className="btn-primary">Explore Collections</Link>
           </AnimatedSection>
        </div>
      </section>
    </>
  );
}
