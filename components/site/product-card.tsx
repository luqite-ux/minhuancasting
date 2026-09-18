import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/catalog-types"

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0]

  return (
    <Link
      href={`/products/${product.slug}`}
      className="card-lift control-feedback group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <div className="relative aspect-square overflow-hidden border-b border-border bg-white">
        <Image
          src={image?.src || "/placeholder.svg"}
          alt={image?.alt || product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="card-lift-image object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-accent">{product.code}</span>
        <h3 className="line-clamp-3 text-sm font-semibold leading-snug text-foreground">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.summary}</p>
        <span className="mt-auto pt-3 text-xs font-semibold uppercase tracking-wide text-primary">View component</span>
      </div>
    </Link>
  )
}
