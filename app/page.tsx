import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Boxes, ClipboardCheck, Cog, Factory, FileSearch, Gauge, PackageCheck, Ruler } from "lucide-react"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { HeroCarousel } from "@/components/site/hero-carousel"
import { SectionHeading } from "@/components/site/section-heading"
import { ProductCard } from "@/components/site/product-card"
import { SectionReveal } from "@/components/motion/section-reveal"
import { COMPANY } from "@/lib/site-config"
import { getAllProducts } from "@/lib/products-db"

export const revalidate = 60

export const metadata: Metadata = { alternates: { canonical: "/" } }

const VERIFIED_FACTS = [
  { icon: Factory, value: String(COMPANY.foundedYear), label: "Operating since" },
  { icon: Gauge, value: `${COMPANY.monthlyCapacityTons} t`, label: "Approx. monthly cast output" },
  { icon: Boxes, value: String(COMPANY.catalogueSize), label: "Documented product references" },
  { icon: Ruler, value: "To drawing", label: "Manufacturing basis" },
]

const PROCESS_STAGES = [
  { icon: FileSearch, step: "01", title: "Drawing review", description: "The buyer's drawing and technical requirements establish the component scope before production." },
  { icon: Factory, step: "02", title: "Precision casting", description: "The component is produced as a casting against the confirmed part requirement." },
  { icon: Cog, step: "03", title: "Machining", description: "Where required, the casting is machined to the geometry defined by the supplied drawing." },
  { icon: PackageCheck, step: "04", title: "Inspection & dispatch", description: "Finished parts are checked against the agreed requirement before packing and dispatch." },
]

export default async function HomePage() {
  const featuredProducts = (await getAllProducts()).slice(0, 4)

  return (
    <>
      <Header />
      <main id="main-content">
        <HeroCarousel />

        <section aria-label="Verified manufacturing facts" className="border-b border-border bg-card">
          <SectionReveal stagger className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border px-4 sm:px-6 lg:grid-cols-4 lg:divide-y-0 lg:px-8">
            {VERIFIED_FACTS.map((fact) => {
              const Icon = fact.icon
              return (
                <div key={fact.label} className="flex min-h-36 items-center gap-4 px-4 py-7 sm:px-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xl font-semibold text-foreground sm:text-2xl">{fact.value}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{fact.label}</p>
                  </div>
                </div>
              )
            })}
          </SectionReveal>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionReveal className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading eyebrow="Product Catalogue" title="Representative cast and machined components" description="Start with a documented catalogue reference, then confirm the final requirement against your drawing and technical specification." />
            <Link href="/products" className="control-feedback inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-semibold text-primary hover:text-accent">
              View all {COMPANY.catalogueSize} products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </SectionReveal>

          <SectionReveal stagger className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
          </SectionReveal>
        </section>

        <section className="border-y border-border bg-secondary/45 texture-technical">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <SectionReveal>
              <SectionHeading eyebrow="Manufacturing Path" title="One drawing-led flow from review to dispatch" description="Each stage has a defined purpose in converting the buyer's requirement into a cast or machined component." />
            </SectionReveal>
            <SectionReveal stagger className="mt-10 grid auto-rows-fr gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STAGES.map((stage) => {
                const Icon = stage.icon
                return (
                  <article key={stage.step} className="relative h-full bg-card p-7 sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                      <span className="text-3xl font-semibold text-primary/15">{stage.step}</span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-foreground">{stage.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
                  </article>
                )
              })}
            </SectionReveal>
          </div>
        </section>

        <section className="bg-surface-teal-deep text-surface-graphite-foreground">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <SectionReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Built for Technical Sourcing</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">The catalogue starts the conversation. Your drawing defines the part.</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-surface-graphite-foreground/75">Minhuan's documented references help buyers identify relevant component types, while production remains tied to the supplied drawing and confirmed requirements.</p>
            </SectionReveal>
            <SectionReveal stagger className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: ClipboardCheck, title: "Clear starting point", text: `${COMPANY.catalogueSize} numbered references support faster product matching.` },
                { icon: Ruler, title: "Drawing-led scope", text: "Geometry and technical requirements remain anchored to buyer-supplied documentation." },
                { icon: Factory, title: "Casting foundation", text: `Production has operated since ${COMPANY.foundedYear} with an approximate monthly cast output of ${COMPANY.monthlyCapacityTons} tons.` },
                { icon: Cog, title: "Machining pathway", text: "Cast blanks can continue into machining when the confirmed component requirement calls for it." },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <article key={item.title} className="h-full border border-white/15 bg-white/[0.06] p-6">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                    <h3 className="mt-5 font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
                  </article>
                )
              })}
            </SectionReveal>
          </div>
        </section>

        <section className="border-t border-border bg-primary text-primary-foreground">
          <SectionReveal className="mx-auto flex max-w-7xl flex-col items-start gap-7 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">RFQ Ready</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Have a drawing ready for quotation?</h2>
              <p className="mt-2 max-w-xl text-primary-foreground/80">Send the drawing, required quantity and technical notes through the enquiry form.</p>
            </div>
            <Link href="/contact" className="control-feedback inline-flex h-12 shrink-0 items-center gap-2 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground hover:-translate-y-0.5">
              Request a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </SectionReveal>
        </section>
      </main>
      <Footer />
    </>
  )
}
