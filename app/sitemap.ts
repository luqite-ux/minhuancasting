import type { MetadataRoute } from 'next'
import { getPublishedArticles } from '@/lib/articles-db'
import { getAllProducts } from '@/lib/products-db'
import { SITE_URL } from '@/lib/site-config'

export const revalidate = 60

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, articles] = await Promise.all([getAllProducts(), getPublishedArticles()])
  const now = new Date()
  const staticPaths = ['', '/products', '/capabilities', '/about', '/news', '/contact']
  return [
    ...staticPaths.map((route) => ({ url: `${SITE_URL}${route}`, lastModified: now, changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : 0.8 })),
    ...products.map((product) => ({ url: `${SITE_URL}/products/${product.slug}`, lastModified: product.updatedAt ? new Date(product.updatedAt) : now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...articles.map((article) => ({ url: `${SITE_URL}/news/${article.slug}`, lastModified: new Date(article.updatedAt || article.publishedAt), changeFrequency: 'monthly' as const, priority: 0.6 })),
  ]
}
