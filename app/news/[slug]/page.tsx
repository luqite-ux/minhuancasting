import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { PageBreadcrumbs } from "@/components/site/page-breadcrumbs"
import { SectionReveal } from "@/components/motion/section-reveal"
import { getArticleBySlug } from "@/lib/articles-db"

export const revalidate = 60
export const dynamicParams = true

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return { title: "Article Not Found" }
  }

  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="border-b border-border bg-secondary/40 texture-technical">
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
            <PageBreadcrumbs items={[{ label: "News", href: "/news" }, { label: article.title }]} />
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <SectionReveal>
            <time className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {new Date(article.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
            </time>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{article.title}</h1>
            <div className="article-prose mt-8" dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
          </SectionReveal>
        </article>
      </main>
      <Footer />
    </>
  )
}
