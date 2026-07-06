import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import AnimatedSection from "../../_components/AnimatedSection";
import ProductCard from "../../_components/ProductCard";
import SectionDivider from "../../_components/SectionDivider";
import { getCategoryBySlug, getProductsByCategory } from "../../_lib/data";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${categoryData.name} | Collections`,
    description: categoryData.description,
  };
}

/**
 * CATEGORY PAGE
 * Grid of products for a specific category.
 * Dynamic route: /collections/[category]
 */
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);
  
  if (!categoryData) {
    notFound();
  }

  const products = getProductsByCategory(category);

  return (
    <>
      {/* Header */}
      <section className="section-ivory py-16 lg:py-24 border-b border-muted/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="mb-6">
              <Link
                href="/collections"
                className="text-muted hover:text-emerald text-sm font-body uppercase tracking-widest transition-colors inline-flex items-center gap-2"
              >
                <span>←</span> Back to Collections
              </Link>
            </div>
            <h1 className="font-display text-ink font-medium">
              {categoryData.name}
            </h1>
            <SectionDivider />
            <p className="text-muted font-body text-lg max-w-2xl mx-auto leading-relaxed">
              {categoryData.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-ivory py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted font-body">
                No pieces are currently visible in this collection.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
