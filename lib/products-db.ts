import type { Product, ProductCategory } from "@/lib/catalog-types"
import { getSupabaseClient, TENANT_ID } from "@/lib/supabase"

type ProductRow = {
  slug: string
  model: string | null
  name: string | null
  name_i18n: Record<string, string> | null
  description: string | null
  description_i18n: Record<string, string> | null
  overview: string | null
  overview_i18n: Record<string, string> | null
  image_url: string | null
  category: string | null
  category_slug: string | null
  extra_data: { images?: string[] } | null
  updated_at: string | null
}

function localized(value: Record<string, string> | null, fallback = "") {
  return value?.en || Object.values(value || {}).find(Boolean) || fallback
}

function mapProduct(row: ProductRow): Product {
  const name = localized(row.name_i18n, row.name || "Catalogued component")
  const summary = localized(row.description_i18n, row.description || "")
  const overview = localized(row.overview_i18n, row.overview || summary)
  const images = [...new Set([row.image_url, ...(row.extra_data?.images || [])].filter((value): value is string => Boolean(value)))]
  return {
    slug: row.slug,
    code: row.model || row.slug.toUpperCase(),
    name,
    categorySlug: row.category_slug || "precision-cast-components",
    images: images.map((src, index) => ({ src, alt: `${name}${index ? ` — view ${index + 1}` : ""}` })),
    summary,
    facts: [
      { label: "Category", value: row.category || "Precision Cast Components" },
      { label: "Manufacturing", value: "Produced to buyer drawings and technical requirements" },
      { label: "Reference Code", value: row.model || row.slug.toUpperCase() },
    ],
    description: [overview],
    updatedAt: row.updated_at || undefined,
  }
}

export async function getAllProducts(): Promise<Product[]> {
  const client = getSupabaseClient()
  if (!client) return []
  const { data, error } = await client.from("products").select("slug,model,name,name_i18n,description,description_i18n,overview,overview_i18n,image_url,category,category_slug,extra_data,updated_at").eq("tenant_id", TENANT_ID).eq("is_active", true).order("sort_order")
  if (error) throw new Error(`Products query failed: ${error.message}`)
  return (data || []).map((row) => mapProduct(row as ProductRow))
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const client = getSupabaseClient()
  if (!client) return null
  const { data, error } = await client.from("products").select("slug,model,name,name_i18n,description,description_i18n,overview,overview_i18n,image_url,category,category_slug,extra_data,updated_at").eq("tenant_id", TENANT_ID).eq("slug", slug).eq("is_active", true).maybeSingle()
  if (error) throw new Error(`Product query failed: ${error.message}`)
  return data ? mapProduct(data as ProductRow) : null
}

export async function getCategories(): Promise<ProductCategory[]> {
  const client = getSupabaseClient()
  if (!client) return []
  const { data, error } = await client.from("product_categories").select("slug,name,name_i18n,description,description_i18n").eq("tenant_id", TENANT_ID).eq("is_active", true).order("sort_order")
  if (error) throw new Error(`Categories query failed: ${error.message}`)
  return (data || []).map((row) => ({ slug: row.slug, name: localized(row.name_i18n as Record<string, string> | null, row.name || "Products"), description: localized(row.description_i18n as Record<string, string> | null, row.description || "") }))
}

export async function getRelatedProducts(product: Product, limit = 3) {
  const products = await getAllProducts()
  return products.filter((candidate) => candidate.categorySlug === product.categorySlug && candidate.slug !== product.slug).slice(0, limit)
}
