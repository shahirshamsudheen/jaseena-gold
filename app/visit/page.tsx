import type { Metadata } from "next";
import AnimatedSection from "../_components/AnimatedSection";
import SectionDivider from "../_components/SectionDivider";
import StoreLocatorMap from "../_components/StoreLocatorMap";
import { stores } from "../_lib/data";

export const metadata: Metadata = {
  title: "Visit Us | Store Locator",
  description:
    "Find Jaseena Gold & Diamonds stores in Kallara, Thiruvananthapuram. View opening hours, contact details, and get directions.",
};

/**
 * VISIT US / STORE LOCATOR PAGE
 * - Store list with maps, hours, contact
 * - Future expansion note
 */
export default function VisitUsPage() {
  return (
    <>
      <section className="section-dark py-20 lg:py-28 -mt-20 lg:-mt-24 pt-32 lg:pt-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-kicker text-warm-gold mb-4">Visit Us</p>
            <h1 className="font-display text-ivory font-medium">
              Find Our Stores
            </h1>
            <hr className="block h-px border-none bg-warm-gold w-16 mx-auto mt-6 mb-6" aria-hidden="true" />
            <p className="text-ivory/70 font-body text-lg leading-relaxed max-w-2xl mx-auto">
              Our doors are always open to you. Visit us in Kallara to explore our collections in person, speak with our consultants, and experience the Jaseena promise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stores List */}
      <section className="section-ivory py-16 lg:py-24 bg-ivory/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {stores.map((store, index) => (
              <AnimatedSection key={store.id} delay={index * 0.1}>
                <StoreLocatorMap store={store} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Future Expansion Note */}
      <section className="section-ivory py-16 lg:py-24 border-t border-muted/10 text-center">
         <div className="max-w-3xl mx-auto px-6">
           <AnimatedSection>
              <p className="text-kicker text-emerald mb-4">Looking Ahead</p>
              <h2 className="font-display text-ink text-3xl">Growing With You</h2>
              <SectionDivider />
              <p className="text-muted font-body leading-relaxed max-w-xl mx-auto">
                While Kallara will always be our home, we are preparing to bring the Jaseena Gold & Diamonds experience to more cities across Kerala and beyond. Stay tuned for announcements on new locations.
              </p>
           </AnimatedSection>
         </div>
      </section>
    </>
  );
}
