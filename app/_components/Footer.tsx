"use client";

import Link from "next/link";
import Image from "next/image";
import SectionDivider from "./SectionDivider";
import { navigation } from "../_lib/data";

/**
 * Footer, Global site footer.
 *
 * - Brand wordmark and tagline
 * - Navigation links
 * - Contact info (PLACEHOLDER)
 * - Social links (PLACEHOLDER, TBC)
 * - Newsletter signup (UI only, no backend)
 * - Thin gold rule separator
 *
 * Accessibility: Ivory text on Deep Emerald passes AA.
 */
export default function Footer() {
  return (
    <footer className="bg-deep-emerald text-ivory" role="contentinfo">
      <SectionDivider width="wide" className="!my-0 !mt-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-block min-h-0" aria-label="Jaseena Gold & Diamonds, Home">
              <Image 
                src="/images/logo.jpg" 
                alt="Jaseena Gold & Diamonds"
                width={120} 
                height={120}
                className="w-auto h-16 lg:h-20"
              />
            </Link>
            <p className="text-lead text-ivory/60 mt-6">
              Gold that keeps its word.
            </p>
            <hr className="block h-px border-none bg-warm-gold w-16 mt-6" aria-hidden="true" />
            <p className="text-ivory/50 text-sm mt-4 font-body leading-relaxed">
              Heritage jewellery house,<br />
              since 1975.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-kicker text-ivory/80 mb-6">Explore</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-ivory/60 hover:text-warm-gold transition-colors duration-300 text-sm font-body min-h-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-kicker text-ivory/80 mb-6">Visit Us</h3>
            <address className="not-italic text-ivory/60 text-sm font-body leading-relaxed space-y-4">
              <div>
                <p className="text-ivory/80 font-medium mb-1">Kallara Main Store</p>
                <p>Main Road, Kallara Junction</p>
                <p>Thiruvananthapuram, Kerala, India</p>
              </div>
              <div>
                {/* Contact Phone */}
                <p>
                  <span className="text-ivory/40 text-xs">Tel: </span>
                  <a href="tel:+919447452528" className="hover:text-warm-gold transition-colors min-h-0">
                    +91 94474 52528
                  </a>
                </p>
                {/* Contact Email */}
                <p>
                  <span className="text-ivory/40 text-xs">Email: </span>
                  <a href="mailto:jaseenagoldanddiamonds@gmail.com" className="hover:text-warm-gold transition-colors min-h-0">
                    jaseenagoldanddiamonds@gmail.com
                  </a>
                </p>
              </div>
            </address>
          </div>

          {/* Newsletter & Social Column */}
          <div>
            <h3 className="text-kicker text-ivory/80 mb-6">Stay Connected</h3>
            <p className="text-ivory/60 text-sm font-body mb-4">
              Receive curated updates on new collections and heritage stories.
            </p>
            {/* Newsletter signup, UI only, no backend */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-ivory/10 border border-ivory/20 rounded-sm text-ivory text-sm font-body placeholder:text-ivory/30 focus:outline-none focus:border-warm-gold transition-colors"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-emerald text-ivory text-xs font-body font-medium tracking-wider uppercase rounded-sm hover:bg-warm-gold transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Join
              </button>
            </form>

            {/* Social Links */}
            {/* [PLACEHOLDER], Social handles TBC. Update @jaseenagold when confirmed */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://instagram.com/jaseenagold"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/50 hover:text-warm-gold transition-colors min-h-0"
                aria-label="Follow us on Instagram (placeholder)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://facebook.com/jaseenagold"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/50 hover:text-warm-gold transition-colors min-h-0"
                aria-label="Follow us on Facebook (placeholder)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/919447452528"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/50 hover:text-warm-gold transition-colors min-h-0"
                aria-label="Contact us on WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ivory/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-ivory/40 text-xs font-body">
              © {new Date().getFullYear()} Jaseena Gold & Diamonds. All rights reserved.
            </p>
            <p className="text-lead text-ivory/30 text-xs">
              Kallara, Thiruvananthapuram · Since 1975
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
