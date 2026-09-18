import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Newspaper } from "lucide-react"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { PageHero } from "@/components/site/page-hero"
import { PageBreadcrumbs } from "@/components/site/page-breadcrumbs"
import { SectionReveal } from "@/components/motion/section-reveal"
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from "@/components/ui/empty"
import { COMPANY } from "@/lib/site-config"
import { getPublishedArticles } from "@/lib/articles-db"

export const revalidate = 60

export const metadata: Metadata = {
  title: "News",
  description: `Company news and updates from ${COMPANY.shortName}.`,
  alternates: { canonical: "/news" },
}

export default async function NewsPage() {
  const articles = await getPublishedArticles()

  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="News"
          title="Company news"
          description="Updates on production, capabilities and company developments."
          breadcrumbs={<PageBreadcrumbs items={[{ label: "News" }]} />}
        />

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          {articles.length === 0 ? (
            <SectionReveal>
              <Empty className="border border-dashed border-border">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <Newspaper aria-hidden="true" />
                  </EmptyMedia>
                  <EmptyTitle>No news articles yet</EmptyTitle>
                  <EmptyDescription>
                    There are no published updates at this time. Check back later, or contact us directly for
                    current information.
                  </EmptyDescription>
                </EmptyHeader>
                <Link
                  href="/contact"
                  className="control-feedback inline-flex h-10 items-center gap-1.5 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Empty>
            </SectionReveal>
          ) : (
            <SectionReveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="control-feedback card-lift block rounded-lg border border-border bg-card p-6 hover:border-accent/50"
                >
                  <time className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {new Date(article.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </time>
                  <h2 className="mt-2 text-lg font-semibold text-foreground">{article.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
                </Link>
              ))}
            </SectionReveal>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
