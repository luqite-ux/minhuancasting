export type ProductCategory = {
  slug: string
  name: string
  description: string
}

export type Product = {
  slug: string
  code: string
  name: string
  categorySlug: string
  images: { src: string; alt: string }[]
  summary: string
  facts: { label: string; value: string }[]
  description: string[]
  updatedAt?: string
}

export type NewsArticle = {
  slug: string
  title: string
  publishedAt: string
  updatedAt?: string
  excerpt: string
  contentHtml: string
  featuredImage?: string
}
