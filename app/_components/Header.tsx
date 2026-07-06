"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { navigation } from "../_lib/data";

/**
 * Header, Sticky navigation with text-based wordmark.
 *
 * - Text wordmark: "JASEENA" + "GOLD & DIAMONDS" in Cormorant Garamond
 *   [PLACEHOLDER], Replace with real logo when vector file is available
 * - Desktop: horizontal nav
 * - Mobile: hamburger with slide-out drawer
 * - Transparent → solid background on scroll
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-deep-emerald/95 backdrop-blur-sm shadow-lg"
            : "bg-deep-emerald"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Wordmark / Logo */}
            <Link href="/" className="flex flex-col items-start min-h-0" aria-label="Jaseena Gold & Diamonds, Home">
              <Image 
                src="/images/logo.jpg" 
                alt="Jaseena Gold & Diamonds"
                width={240} 
                height={240}
                className="w-auto h-24 lg:h-32"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-body text-sm tracking-widest uppercase min-h-0 transition-colors duration-300 ${
                    pathname === item.href
                      ? "text-warm-gold"
                      : "text-ivory/80 hover:text-warm-gold"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-11 h-11 gap-1.5"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <motion.span
                className="block w-6 h-px bg-ivory"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 4 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-px bg-ivory"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-px bg-ivory"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -4 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-ink/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-deep-emerald flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              aria-label="Mobile navigation"
            >
              {/* Close button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-11 h-11 flex items-center justify-center text-ivory"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="2" y1="2" x2="18" y2="18" />
                    <line x1="18" y1="2" x2="2" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col px-8 gap-1">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 font-display text-xl tracking-wide transition-colors duration-300 min-h-[44px] ${
                        pathname === item.href
                          ? "text-warm-gold"
                          : "text-ivory/80 hover:text-warm-gold"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom section */}
              <div className="mt-auto p-8 border-t border-ivory/10">
                <p className="text-lead text-ivory/50 text-sm">
                  Gold that keeps its word.
                </p>
                {/* [PLACEHOLDER CONTACT] */}
                <p className="text-ivory/40 text-xs mt-2 font-body">
                  Kallara, Thiruvananthapuram
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-20 lg:h-24" />
    </>
  );
}
