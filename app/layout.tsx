import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

/**
 * Cormorant Garamond, Display / Headlines
 * Weights: 300 (italic leads), 500 (headlines)
 */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * Jost, Body / UI / Labels
 * Weight: 300 (body), 400, 500 (labels/kickers)
 */
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jaseena Gold & Diamonds, Gold That Keeps Its Word",
    template: "%s | Jaseena Gold & Diamonds",
  },
  description:
    "Heritage jewellery house since 1975 in Kallara, Thiruvananthapuram. Crafted gold and diamond jewellery, entrusted by families across Kerala.",
  keywords: [
    "Jaseena Gold",
    "Gold Jewellery Kerala",
    "Diamond Jewellery",
    "Kallara Jewellery",
    "Heritage Gold",
    "Thiruvananthapuram Jewellery",
    "22K Gold",
    "Bridal Jewellery Kerala",
  ],
  /* [PLACEHOLDER], Update with real domain when secured */
  metadataBase: new URL("https://jaseenagold.com"),
  openGraph: {
    title: "Jaseena Gold & Diamonds, Gold That Keeps Its Word",
    description:
      "Heritage jewellery house since 1975. Crafted gold and diamond collections from Kallara, Kerala.",
    type: "website",
    locale: "en_IN",
    /* [PLACEHOLDER], Update with real domain */
    url: "https://jaseenagold.com",
    siteName: "Jaseena Gold & Diamonds",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
