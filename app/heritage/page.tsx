import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "../_components/AnimatedSection";
import SectionDivider from "../_components/SectionDivider";

export const metadata: Metadata = {
  title: "Our Heritage",
  description:
    "The story of Jaseena Gold & Diamonds — founded by Abdul Basheer in 1975, now carried forward by Abdul Raheem. A heritage of trust from Kallara, Kerala.",
};

/**
 * HERITAGE / ABOUT PAGE
 *
 * - Founding story: Abdul Basheer, ~1975, Kallara
 * - Passed to Abdul Raheem
 * - Vision: Kerala → India → GCC → Global
 * - Core values
 *
 * [PLACEHOLDER IMAGE] — Founder and son portrait photos to be replaced
 */
export default function HeritagePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden -mt-20 lg:-mt-24">
        <Image
          src="/images/heritage-craftsman.png" // [PLACEHOLDER IMAGE]
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/40 to-ink/20" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
          <AnimatedSection>
            <p className="text-kicker text-warm-gold mb-4">Since 1975</p>
            <h1 className="font-display text-ivory font-medium">
              Our Heritage
            </h1>
            <hr className="block h-px border-none bg-warm-gold w-16 mx-auto mt-6" aria-hidden="true" />
          </AnimatedSection>
        </div>
      </section>

      {/* The Beginning */}
      <section className="section-ivory py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-kicker text-emerald mb-4">The Beginning</p>
                <h2 className="font-display text-ink">
                  A Single Family Shop in Kallara
                </h2>
                <SectionDivider align="left" />
                <div className="space-y-4 text-muted font-body leading-relaxed">
                  <p>
                    Around 1975, <strong className="text-ink font-medium">Abdul Basheer</strong> opened
                    a modest gold shop in Kallara, a quiet town in Thiruvananthapuram, Kerala. He had no
                    grand ambitions for a chain — only a conviction that if you gave people honest gold
                    and treated them like family, they would return.
                  </p>
                  <p>
                    They did. Word spread not through advertisements but through the women who wore
                    the jewellery, through the mothers who brought their daughters, through the grooms
                    who returned for their children&apos;s weddings.
                  </p>
                  <p>
                    What began as one man&apos;s promise became the most trusted name in Kallara.
                  </p>
                </div>
              </div>

              {/* Founder Portrait Placeholder */}
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-emerald/5">
                <Image
                  src="/images/heritage-craftsman.png" // [PLACEHOLDER IMAGE] — Replace with founder Abdul Basheer portrait
                  alt="Abdul Basheer, founder of Jaseena Gold & Diamonds (placeholder portrait)"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/50 to-transparent p-6">
                  <p className="text-ivory font-display text-lg">Abdul Basheer</p>
                  <p className="text-ivory/60 font-body text-sm">Founder · Since 1975</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Next Generation */}
      <section className="section-dark py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Son Portrait Placeholder */}
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-ivory/5 order-2 lg:order-1">
                <Image
                  src="/images/craftsmanship-macro.png" // [PLACEHOLDER IMAGE] — Replace with Abdul Raheem portrait
                  alt="Abdul Raheem, current lead of Jaseena Gold & Diamonds (placeholder portrait)"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/50 to-transparent p-6">
                  <p className="text-ivory font-display text-lg">Abdul Raheem</p>
                  <p className="text-ivory/60 font-body text-sm">Carrying the Legacy Forward</p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-kicker text-warm-gold mb-4">The Next Generation</p>
                <h2 className="font-display text-ivory text-3xl lg:text-4xl font-medium leading-tight">
                  Continuity, Not Change
                </h2>
                <hr className="block h-px border-none bg-warm-gold w-16 my-6" aria-hidden="true" />
                <div className="space-y-4 text-ivory/70 font-body leading-relaxed">
                  <p>
                    <strong className="text-ivory font-medium">Abdul Raheem</strong>, son of Abdul Basheer,
                    grew up watching his father weigh gold with the same precision he weighed his words.
                    When he took the helm, he did not rebrand or modernise for its own sake — he deepened
                    the roots.
                  </p>
                  <p>
                    A second store was opened in Kallara. The team grew, but the values did not dilute.
                    Every piece is still inspected with the same eye. Every customer is still greeted
                    by name.
                  </p>
                  <p>
                    Now, Jaseena Gold & Diamonds looks beyond Kallara — first to other cities in Kerala,
                    then across India, and eventually to the GCC and global markets — always carrying
                    the intimacy of the original shop.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-ivory py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-kicker text-emerald mb-4">What We Stand For</p>
              <h2 className="font-display text-ink">Our Values</h2>
              <SectionDivider />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Trust First",
                description:
                  "Trust is not a marketing word for us — it is the foundation of every transaction, every gram, every piece.",
              },
              {
                title: "Craft",
                description:
                  "We honour the hands that shape gold. Our craftsmen carry forward techniques refined over generations.",
              },
              {
                title: "Restraint",
                description:
                  "We do not shout. We do not chase trends. We make considered jewellery for considered people.",
              },
              {
                title: "Continuity",
                description:
                  "From father to son, from first customer to thousandth — we value the long relationship over the quick sale.",
              },
              {
                title: "Belonging",
                description:
                  "When you walk into Jaseena, you are not a customer. You are family. Your story becomes part of ours.",
              },
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="p-6 border border-muted/15 rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 rounded-full bg-warm-gold" />
                    <h3 className="font-display text-xl text-ink font-medium">{value.title}</h3>
                  </div>
                  <p className="text-muted font-body text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-dark py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-kicker text-warm-gold mb-4">Our Vision</p>
            <h2 className="font-display text-ivory text-3xl lg:text-4xl font-medium leading-tight">
              From Kallara to the World
            </h2>
            <hr className="block h-px border-none bg-warm-gold w-16 mx-auto my-6" aria-hidden="true" />
            <p className="text-ivory/70 font-body leading-relaxed mb-4">
              Our journey begins in Kerala and extends across India, the GCC, and beyond —
              but we will never lose the warmth of the original shop. Wherever Jaseena goes,
              the promise goes with it.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-ivory/50 font-body text-sm">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
                Kerala
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-gold/60" />
                Metro India
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-gold/40" />
                GCC & Dubai
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-gold/20" />
                Global
              </span>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
