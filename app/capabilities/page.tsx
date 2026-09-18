import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle2, Cog, Factory, FileSearch, PackageCheck } from "lucide-react"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { PageHero } from "@/components/site/page-hero"
import { PageBreadcrumbs } from "@/components/site/page-breadcrumbs"
import { SectionReveal } from "@/components/motion/section-reveal"
import { COMPANY } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Capabilities",
  description: `Manufacturing process and capabilities at ${COMPANY.shortName}.`,
  alternates: { canonical: "/capabilities" },
}

const PROCESS_STAGES = [
  {
    icon: FileSearch,
    title: "Drawing Review",
    description: "Buyer-supplied drawings and technical requirements are reviewed prior to production planning.",
  },
  {
    icon: Factory,
    title: "Precision Casting",
    description: `Components are cast on the dedicated production line, running since ${COMPANY.foundedYear}.`,
  },
  {
    icon: Cog,
    title: "Machining",
    description: "As-cast blanks are machined to the dimensions and tolerances specified in the buyer's drawing.",
  },
  {
    icon: PackageCheck,
    title: "Inspection & Dispatch",
    description: "Finished components are checked against the drawing before packing and dispatch.",
  },
]

const CATALOGUE_AREAS = [
  {
    name: "Automotive Precision Castings",
    description: "Cast and machined components used in automotive window, door and body mechanisms.",
  },
  {
    name: "Machined Mechanical Components",
    description: "Precision-machined components for general mechanical assemblies and linkages.",
  },
  {
    name: "Casting Blanks & Semi-Finished Parts",
    description: "As-cast blanks and semi-finished parts supplied ahead of final machining.",
  },
]

export default function CapabilitiesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Capabilities"
          title="From drawing to finished component"
          description={`A single production line converts buyer drawings into cast and machined parts at an approximate output of ${COMPANY.monthlyCapacityTons} tons per month.`}
          breadcrumbs={<PageBreadcrumbs items={[{ label: "Capabilities" }]} />}
        />

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <SectionReveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Production Process</h2>
          </SectionReveal>
          <SectionReveal stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STAGES.map((stage, index) => {
              const Icon = stage.icon
              return (
                <div key={stage.title} className="relative h-full rounded-lg border border-border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent">Step {index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
                </div>
              )
            })}
          </SectionReveal>
        </section>

        <section className="border-t border-border bg-secondary/40 texture-technical">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8">
            <SectionReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
                <Image
                  src="/images/hero-precision-cnc.jpg"
                  alt="CNC machining of precision cast components"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </SectionReveal>

            <SectionReveal className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Catalogue Coverage</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                The working catalogue spans {COMPANY.catalogueSize} numbered references across three broad areas.
              </p>
              <ul className="space-y-4">
                {CATALOGUE_AREAS.map((area) => (
                  <li key={area.name} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{area.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
