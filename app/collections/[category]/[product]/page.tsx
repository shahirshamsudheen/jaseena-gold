import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "../../../_components/AnimatedSection";
import SectionDivider from "../../../_components/SectionDivider";
import EnquiryForm from "../../../_components/EnquiryForm";
import ProductCard from "../../../_components/ProductCard";
import { getProductBySlug, getCategoryBySlug, getRelatedProducts } from "../../../_lib/data";

interface ProductPageProps {
  params: Promise<{
    category: string;
    product: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { product } = await params;
  const productData = getProductBySlug(product);

  if (!productData) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${productData.name} | Jaseena Gold & Diamonds`,
    description: productData.description,
  };
}

/**
 * PRODUCT DETAIL PAGE
 * Dynamic route: /collections/[category]/[product]
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { category, product } = await params;
  
  const productData = getProductBySlug(product);
  const categoryData = getCategoryBySlug(category);

  if (!productData || !categoryData) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(productData);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-ivory border-b border-muted/10 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs font-body tracking-wider uppercase text-muted flex items-center gap-2">
            <Link href="/" className="hover:text-emerald transition-colors">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-emerald transition-colors">Collections</Link>
            <span>/</span>
            <Link href={`/collections/${categoryData.slug}`} className="hover:text-emerald transition-colors">{categoryData.name}</Link>
            <span>/</span>
            <span className="text-ink">{productData.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details Section */}
      <section className="section-ivory py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Image Gallery */}
            <AnimatedSection direction="right">
              <div className="relative aspect-square rounded-sm overflow-hidden bg-white">
                <Image
                  src={productData.images[0]} // [PLACEHOLDER IMAGE]
                  alt={productData.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimatedSection>

            {/* Product Info & Enquiry */}
            <AnimatedSection direction="left" delay={0.2}>
              <div>
                <p className="text-kicker text-emerald mb-3">{categoryData.name}</p>
                <h1 className="font-display text-4xl lg:text-5xl text-ink font-medium leading-tight">
                  {productData.name}
                </h1>
                
                {/* Specs Strip */}
                <div className="flex flex-wrap items-center gap-4 mt-6 text-sm font-body text-ink">
                  {productData.karat && (
                    <div className="flex items-center gap-2 bg-emerald/5 px-3 py-1.5 rounded-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
                      {productData.karat}
                    </div>
                  )}
                  {productData.purity && (
                    <div className="flex items-center gap-2 bg-emerald/5 px-3 py-1.5 rounded-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
                      {productData.purity}
                    </div>
                  )}
                  {productData.weight && (
                    <div className="flex items-center gap-2 bg-emerald/5 px-3 py-1.5 rounded-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
                      {productData.weight}
                    </div>
                  )}
                </div>

                <SectionDivider align="left" className="!my-8" />

                <div className="prose prose-sm font-body text-muted leading-relaxed mb-8">
                  <p>{productData.description}</p>
                  {productData.craftsmanshipNotes && (
                    <p className="mt-4 border-l-2 border-warm-gold pl-4 italic text-ink/80">
                      {productData.craftsmanshipNotes}
                    </p>
                  )}
                </div>

                {/* Enquiry Form inside Accordion style container */}
                <div className="bg-white border border-muted/20 p-6 lg:p-8 rounded-sm shadow-sm">
                  <h2 className="font-display text-2xl text-ink mb-2">Enquire about this piece</h2>
                  <p className="text-muted text-sm font-body mb-6">
                    Leave your details below and a jewellery consultant will contact you with pricing and availability.
                  </p>
                  <EnquiryForm productId={productData.id} productName={productData.name} />
                </div>

              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-ivory py-16 lg:py-24 border-t border-muted/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <p className="text-kicker text-emerald mb-4">Discover More</p>
                <h2 className="font-display text-ink">Related Pieces</h2>
                <SectionDivider />
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
