import type { ReactNode } from "react"

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow: string
  title: string
  description?: string
  breadcrumbs: ReactNode
}) {
  return (
    <section className="texture-technical border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-6">{breadcrumbs}</div>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">{eyebrow}</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>}
      </div>
    </section>
  )
}
