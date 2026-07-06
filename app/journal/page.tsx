import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "../_components/AnimatedSection";
import SectionDivider from "../_components/SectionDivider";
import { journalArticles } from "../_lib/data";

export const metadata: Metadata = {
  title: "Journal | Stories of Craft & Heritage",
  description:
    "Read stories about our heritage, craftsmanship features, and guides for occasions from Jaseena Gold & Diamonds.",
};

/**
 * JOURNAL / STORIES PAGE
 * Blog-style grid layout with articles.
 */
export default function JournalPage() {
  return (
    <>
      <section className="section-ivory py-20 lg:py-28 -mt-20 lg:-mt-24 pt-32 lg:pt-40 border-b border-muted/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-kicker text-emerald mb-4">Journal</p>
            <h1 className="font-display text-ink font-medium">
              Stories of Craft & Heritage
            </h1>
            <SectionDivider />
            <p className="text-muted font-body text-lg leading-relaxed max-w-2xl mx-auto">
              Delve into the traditions, techniques, and tales that shape our collections.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-ivory py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {journalArticles.map((article, i) => (
              <AnimatedSection key={article.id} delay={i * 0.1}>
                {/* 
                  Using a div with id for anchor linking from homepage.
                  In a real app, this would link to a full article page.
                */}
                <div id={article.slug} className="group block h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6">
                    <Image
                      src={article.image} // [PLACEHOLDER IMAGE]
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-kicker text-warm-gold text-[0.65rem]">{article.category}</span>
                      <span className="text-muted/40 font-body text-xs">•</span>
                      <span className="text-muted text-xs font-body">{article.readTime}</span>
                    </div>
                    <h2 className="font-display text-2xl text-ink font-medium leading-tight mb-3 group-hover:text-emerald transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted font-body text-sm leading-relaxed mb-6 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-muted/10">
                       <span className="text-emerald text-sm font-body font-medium flex items-center gap-2 group-hover:text-warm-gold transition-colors">
                          Read Story <span className="transform transition-transform group-hover:translate-x-1">→</span>
                       </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
