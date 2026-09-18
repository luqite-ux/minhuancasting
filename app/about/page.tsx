import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Phone, Mail, Calendar } from "lucide-react"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { PageHero } from "@/components/site/page-hero"
import { PageBreadcrumbs } from "@/components/site/page-breadcrumbs"
import { SectionReveal } from "@/components/motion/section-reveal"
import { COMPANY } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "About Us",
  description: `${COMPANY.legalNameEn} — company background, location and contact details.`,
  alternates: { canonical: "/about" },
}

const FACTS = [
  { icon: Calendar, label: "Founded", value: String(COMPANY.foundedYear) },
  { icon: MapPin, label: "Location", value: `${COMPANY.address.city}, ${COMPANY.address.province}, ${COMPANY.address.country}` },
  { icon: Phone, label: "Phone", value: COMPANY.phones[0] },
  { icon: Mail, label: "Email", value: COMPANY.email },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="About Us"
          title={COMPANY.legalNameEn}
          description={`Operating from ${COMPANY.address.city}, ${COMPANY.address.province}, since ${COMPANY.foundedYear}.`}
          breadcrumbs={<PageBreadcrumbs items={[{ label: "About" }]} />}
        />

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <SectionReveal className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Company Background</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {COMPANY.legalNameEn} ({COMPANY.brandName}) is a precision casting manufacturer based in{" "}
                {COMPANY.address.city}, {COMPANY.address.province}, China, operating since {COMPANY.foundedYear}.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The company runs {COMPANY.productionLines} dedicated precision casting production line with an
                approximate monthly output of {COMPANY.monthlyCapacityTons} tons, supplying cast and machined
                components against buyer-supplied drawings and technical requirements.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The working catalogue spans {COMPANY.catalogueSize} numbered product references, covering automotive
                precision castings, machined mechanical components, and casting blanks supplied ahead of final
                machining.
              </p>
            </SectionReveal>

            <SectionReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
                <Image
                  src="/images/hero-casting-line.jpg"
                  alt="Minhuan Precision Casting production line"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/40 texture-technical">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <SectionReveal>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Company Details</h2>
            </SectionReveal>
            <SectionReveal stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FACTS.map((fact) => {
                const Icon = fact.icon
                return (
                  <div key={fact.label} className="rounded-lg border border-border bg-card p-6">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="mt-1 break-words text-sm font-semibold text-foreground">{fact.value}</p>
                  </div>
                )
              })}
            </SectionReveal>
            <SectionReveal className="mt-6 rounded-lg border border-border bg-card p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Registered Address</p>
              <p className="mt-1 text-sm font-medium text-foreground">{COMPANY.address.full}</p>
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
