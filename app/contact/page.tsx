import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import { EnquiryForm } from "@/components/enquiry-form"
import { SectionReveal } from "@/components/motion/section-reveal"
import { Footer } from "@/components/site/footer"
import { Header } from "@/components/site/header"
import { PageBreadcrumbs } from "@/components/site/page-breadcrumbs"
import { PageHero } from "@/components/site/page-hero"
import { COMPANY } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contact & RFQ",
  description: `Send a drawing-based casting or machining enquiry to ${COMPANY.legalNameEn}.`,
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero eyebrow="Contact & RFQ" title="Discuss Your Casting Project" description="Share the part, quantity and technical context your engineering team is working with." breadcrumbs={<PageBreadcrumbs items={[{ label: "Contact" }]} />} />
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Direct contact</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Reach the Minhuan team</h2>
            <div className="mt-7 space-y-5 text-sm text-muted-foreground">
              <p className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{COMPANY.address.full}</span></p>
              <p className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><a className="hover:text-foreground" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
              {COMPANY.phones.map((phone) => <p key={phone} className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><a className="hover:text-foreground" href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a></p>)}
            </div>
          </SectionReveal>
          <SectionReveal className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-foreground">Send Your Enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">Provide enough context for a focused technical follow-up.</p>
            <div className="mt-7"><EnquiryForm /></div>
          </SectionReveal>
        </section>
      </main>
      <Footer />
    </>
  )
}
