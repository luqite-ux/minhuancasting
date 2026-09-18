import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Factory, Gauge, Ruler, ShieldCheck } from "lucide-react"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { SectionHeading } from "@/components/site/section-heading"
import { ProductCard } from "@/components/site/product-card"
import { SectionReveal } from "@/components/motion/section-reveal"
import { COMPANY } from "@/lib/site-config"
import { getAllProducts } from "@/lib/products-db"

export const revalidate = 60

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

const HERO_IMAGES = [
  { src: "/images/hero-casting-line.jpg", alt: "Precision casting production line at Minhuan" },
  { src: "/images/hero-precision-cnc.jpg", alt: "CNC machining of precision cast components" },
  { src: "/images/hero-flanges.jpg", alt: "Finished cast flange components ready for inspection" },
]

const CAPABILITY_HIGHLIGHTS = [
  {
    icon: Factory,
    title: "Founded in production",
    description: `Operating since ${COMPANY.foundedYear} with a dedicated precision casting production line.`,
  },
  {
    icon: Gauge,
    title: "Monthly output",
    description: `Approximately ${COMPANY.monthlyCapacityTons} tons of cast output per month.`,
  },
  {
    icon: Ruler,
    title: "Drawing-based manufacturing",
    description: "Components are produced to buyer-supplied drawings and technical requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Catalogue depth",
    description: `A working catalogue spanning ${COMPANY.catalogueSize} numbered product references.`,
  },
]

export default async function HomePage() {
  const featuredProducts = (await getAllProducts()).slice(0, 4)

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden border-b border-border bg-surface-graphite text-surface-graphite-foreground">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGES[0].src || "/placeholder.svg"}
              alt={HERO_IMAGES[0].alt}
              fill
              priority
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-graphite via-surface-graphite/80 to-surface-graphite/40" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <SectionReveal>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                Precision Casting, Manufactured to Drawing
              </p>
              <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                {COMPANY.brandName}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-surface-graphite-foreground/80">
                {COMPANY.legalNameEn} manufactures precision castings and machined mechanical components for
                buyers who supply their own drawings and technical requirements.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="control-feedback inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground hover:opacity-90"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="control-feedback inline-flex h-12 items-center rounded-md border border-white/20 px-6 text-sm font-semibold text-surface-graphite-foreground hover:bg-white/10"
                >
                  View Product Catalogue
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionReveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Manufacturing built around the buyer's drawing"
              description="Every component in the catalogue is produced against buyer-supplied specification, from an as-cast blank through final machining."
            />
          </SectionReveal>

          <SectionReveal stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITY_HIGHLIGHTS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-lg border border-border bg-card p-6">
                  <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </SectionReveal>
        </section>

        <section className="border-y border-border bg-secondary/40 texture-technical">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
            {HERO_IMAGES.slice(1).map((image) => (
              <SectionReveal key={image.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionReveal className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Product Catalogue"
              title="Representative products from the catalogue"
              description="A sample of the automotive, mechanical and casting-blank components produced at Minhuan."
            />
            <Link
              href="/products"
              className="control-feedback inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80"
            >
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </SectionReveal>

          <SectionReveal stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </SectionReveal>
        </section>

        <section className="border-t border-border bg-primary text-primary-foreground">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Have a drawing ready for quotation?
              </h2>
              <p className="mt-2 max-w-xl text-primary-foreground/80">
                Send us your specification and we will respond with a manufacturing quotation.
              </p>
            </div>
            <Link
              href="/contact"
              className="control-feedback inline-flex h-12 shrink-0 items-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
