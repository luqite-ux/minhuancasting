import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { PageBreadcrumbs } from "@/components/site/page-breadcrumbs"
import { ProductCard } from "@/components/site/product-card"
import { SectionReveal } from "@/components/motion/section-reveal"
import { getCategories, getProductBySlug, getRelatedProducts } from "@/lib/products-db"

export const revalidate = 60
export const dynamicParams = true

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    return { title: "Product Not Found" }
  }

  return {
    title: `${product.name} (${product.code})`,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const categories = await getCategories()
  const category = categories.find((item) => item.slug === product.categorySlug)
  const relatedProducts = await getRelatedProducts(product)

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="border-b border-border bg-secondary/40 texture-technical">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <PageBreadcrumbs
              items={[
                { label: "Products", href: "/products" },
                ...(category ? [{ label: category.name, href: "/products" }] : []),
                { label: product.name },
              ]}
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <SectionReveal className="grid gap-4">
              {product.images.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain p-4"
                    priority
                  />
                </div>
              ))}
            </SectionReveal>

            <SectionReveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-accent">{product.code}</span>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{product.name}</h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{product.summary}</p>

              <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-2">
                {product.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 space-y-4">
                {product.description.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              <Link
                href={`/contact?reference=${product.code}`}
                className="control-feedback mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Request a Quote for {product.code}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </SectionReveal>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="border-t border-border bg-secondary/40">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">Related Products</h2>
              <SectionReveal stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((related) => (
                  <ProductCard key={related.slug} product={related} />
                ))}
              </SectionReveal>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
