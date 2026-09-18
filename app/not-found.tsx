import Link from "next/link"
import { Footer } from "@/components/site/footer"
import { Header } from "@/components/site/header"
import { COMPANY } from "@/lib/site-config"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[68vh] items-center bg-secondary/30 px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{COMPANY.brandName} · 404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">The requested page was not found.</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">Return to the company overview or continue into the product catalogue.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="inline-flex h-11 items-center rounded-md border border-border bg-background px-6 text-sm font-semibold text-foreground">Back to Home</Link>
            <Link href="/products" className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground">Browse Products</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
