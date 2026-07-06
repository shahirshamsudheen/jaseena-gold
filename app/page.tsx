import Image from "next/image";
import Link from "next/link";
import HeroBanner from "./_components/HeroBanner";
import CategoryGrid from "./_components/CategoryGrid";
import SectionDivider from "./_components/SectionDivider";
import AnimatedSection from "./_components/AnimatedSection";
import ProductCard from "./_components/ProductCard";
import { categories, getFeaturedProducts, journalArticles, stores } from "./_lib/data";

/**
 * HOME PAGE, Jaseena Gold & Diamonds
 *
 * Sections:
 * 1. Full-bleed hero with heritage tagline
 * 2. Brand story teaser
 * 3. Featured collections grid
 * 4. "The House of Trust" heritage strip (dark section)
 * 5. Featured products
 * 6. Store locator teaser
 * 7. Editorial/journal teaser
 * 8. CTA strip
 */
export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* ─── 1. Hero ──────────────────────────────────────────── */}
      <HeroBanner
        image="/images/hero-banner.png"
        kicker="Since 1975 · Kallara, Kerala"
        headline="Gold That Keeps Its Word"
        subline="Heritage jewellery crafted with care, entrusted by families across generations."
        ctaText="Explore Collections"
        ctaHref="/collections"
        accentCta
        size="full"
      />

      {/* ─── 2. Brand Story Teaser ────────────────────────────── */}
      <section className="section-ivory py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-kicker text-emerald mb-4">Our Story</p>
            <h2 className="font-display text-ink">
              A Family Jeweller Since 1975
            </h2>
            <SectionDivider />
            <p className="text-muted font-body text-lg leading-relaxed max-w-2xl mx-auto">
              Founded by Abdul Basheer in Kallara, Thiruvananthapuram, Jaseena Gold & Diamonds
              began as a single family shop built on a simple promise, that the gold you take home
              is worthy of the trust you place in us. Today, his son Abdul Raheem carries that
              promise forward.
            </p>
            <div className="mt-8">
              <Link href="/heritage" className="btn-outline">
                Discover Our Heritage
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 3. Collections Grid ──────────────────────────────── */}
      <section className="section-ivory py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-kicker text-emerald mb-4">Collections</p>
              <h2 className="font-display text-ink">
                Explore Our Craft
              </h2>
              <SectionDivider />
            </div>
          </AnimatedSection>
          <CategoryGrid categories={categories} />
        </div>
      </section>

      {/* ─── 4. House of Trust Strip ──────────────────────────── */}
      <section className="section-dark py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="/images/heritage-craftsman.png" // [PLACEHOLDER IMAGE]
                  alt="Master craftsman at work, heritage goldsmithing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-kicker text-warm-gold mb-4">The House of Trust</p>
                <h2 className="font-display text-ivory text-3xl lg:text-4xl font-medium leading-tight">
                  Every Piece Carries<br />a Promise
                </h2>
                <hr className="block h-px border-none bg-warm-gold w-16 my-6" aria-hidden="true" />
                <p className="text-ivory/70 font-body leading-relaxed mb-4">
                  For nearly fifty years, families in Kallara and across Thiruvananthapuram have
                  entrusted their most significant gold purchases to us. That trust is not given
                  lightly, and we do not take it lightly.
                </p>
                <p className="text-ivory/70 font-body leading-relaxed mb-8">
                  Every piece that leaves our workshop carries a promise of purity, craftsmanship,
                  and honest weight. It is a promise made by Abdul Basheer in 1975, and one that
                  Abdul Raheem keeps today.
                </p>

                {/* Values */}
                <div className="grid grid-cols-2 gap-4">
                  {["Trust First", "Craft", "Restraint", "Continuity"].map((value) => (
                    <div key={value} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-warm-gold shrink-0" />
                      <span className="text-ivory/60 text-sm font-body">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/heritage" className="btn-primary">
                    Our Heritage
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 5. Featured Products ─────────────────────────────── */}
      <section className="section-ivory py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-kicker text-emerald mb-4">Curated</p>
              <h2 className="font-display text-ink">
                Featured Pieces
              </h2>
              <SectionDivider />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/collections" className="btn-outline">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 6. Store Locator Teaser ──────────────────────────── */}
      <section className="section-ivory py-16 lg:py-24 border-t border-muted/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-kicker text-emerald mb-4">Visit Us</p>
                <h2 className="font-display text-ink">
                  Two Stores in Kallara
                </h2>
                <hr className="block h-px border-none bg-warm-gold w-16 my-6" aria-hidden="true" />
                <p className="text-muted font-body leading-relaxed mb-4">
                  Both our stores are in the heart of Kallara, Thiruvananthapuram, where it all
                  began. Walk in, take your time. There is no rush here.
                </p>
                {stores.map((store) => (
                  <div key={store.id} className="mb-4">
                    <p className="text-ink font-body font-medium text-sm">{store.name}</p>
                    <p className="text-muted text-sm font-body">{store.address}</p>
                    <p className="text-muted text-xs font-body">{store.hours}</p>
                  </div>
                ))}
                <div className="mt-6">
                  <Link href="/visit" className="btn-primary">
                    Find Our Stores
                  </Link>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative aspect-square bg-emerald/5 rounded-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0F5C43" strokeWidth="1" className="mx-auto mb-4 opacity-30">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-emerald/40 font-body text-sm">Kallara, Thiruvananthapuram</p>
                  <p className="text-emerald/30 font-body text-xs mt-1">Kerala, India</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 7. Journal Teaser ────────────────────────────────── */}
      <section className="section-ivory py-16 lg:py-24 border-t border-muted/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-kicker text-emerald mb-4">Journal</p>
              <h2 className="font-display text-ink">
                Stories of Craft & Heritage
              </h2>
              <SectionDivider />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journalArticles.slice(0, 3).map((article, i) => (
              <AnimatedSection key={article.id} delay={i * 0.1}>
                <Link href={`/journal#${article.slug}`} className="group block min-h-0">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
                    <Image
                      src={article.image} // [PLACEHOLDER IMAGE]
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-kicker text-warm-gold text-[0.6rem]">{article.category}</span>
                      <span className="text-muted text-xs font-body">{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg text-ink font-medium group-hover:text-emerald transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted text-sm font-body mt-1 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/journal" className="btn-outline">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 8. Final CTA Strip ───────────────────────────────── */}
      <section className="section-dark py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-kicker text-warm-gold mb-4">Book a Visit</p>
            <h2 className="font-display text-ivory text-3xl lg:text-4xl font-medium">
              We Would Love to Welcome You
            </h2>
            <hr className="block h-px border-none bg-warm-gold w-16 mx-auto my-6" aria-hidden="true" />
            <p className="text-ivory/70 font-body leading-relaxed mb-8">
              Whether you are choosing a piece for a special occasion or simply browsing,
              our doors, and our story, are open to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-accent">
                Book an Appointment
              </Link>
              <Link href="/visit" className="btn-outline !border-ivory/30 !text-ivory hover:!bg-ivory/10">
                Find Our Stores
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
