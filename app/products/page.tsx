import type { Metadata } from "next"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { PageHero } from "@/components/site/page-hero"
import { PageBreadcrumbs } from "@/components/site/page-breadcrumbs"
import { ProductCard } from "@/components/site/product-card"
import { SectionReveal } from "@/components/motion/section-reveal"
import { COMPANY } from "@/lib/site-config"
import { getAllProducts, getCategories } from "@/lib/products-db"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Product Catalogue",
  description: `Browse all ${COMPANY.catalogueSize} verified ${COMPANY.shortName} product references for precision castings and machined mechanical components.`,
}

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([getAllProducts(), getCategories()])

  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Product Catalogue"
          title="Precision castings and machined components"
          description={`Browse all ${COMPANY.catalogueSize} verified catalogue references. Contact us with your drawing and the relevant reference number.`}
          breadcrumbs={<PageBreadcrumbs items={[{ label: "Products" }]} />}
        />

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          {categories.map((category) => {
            const categoryProducts = products.filter((p) => p.categorySlug === category.slug)
            if (categoryProducts.length === 0) return null

            return (
              <div key={category.slug} className="mb-14 last:mb-0">
                <SectionReveal>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">{category.name}</h2>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </SectionReveal>
                <SectionReveal stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </SectionReveal>
              </div>
            )
          })}
        </section>
      </main>
      <Footer />
    </>
  )
}
