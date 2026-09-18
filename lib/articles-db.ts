import type { NewsArticle } from "@/lib/catalog-types"
import { getSupabaseClient, TENANT_ID } from "@/lib/supabase"

function localized(value: Record<string, string> | null, fallback = "") {
  return value?.en || Object.values(value || {}).find(Boolean) || fallback
}

function mapArticle(row: Record<string, unknown>): NewsArticle {
  return {
    slug: String(row.slug),
    title: localized(row.title_i18n as Record<string, string> | null, String(row.title || "")),
    excerpt: localized(row.excerpt_i18n as Record<string, string> | null, String(row.excerpt || "")),
    contentHtml: localized(row.content_i18n as Record<string, string> | null, String(row.content || "")),
    publishedAt: String(row.published_at || row.created_at || ""),
    updatedAt: row.updated_at ? String(row.updated_at) : undefined,
    featuredImage: row.featured_image ? String(row.featured_image) : undefined,
  }
}

export async function getPublishedArticles(): Promise<NewsArticle[]> {
  const client = getSupabaseClient()
  if (!client) return []
  const { data, error } = await client.from("articles").select("slug,title,title_i18n,excerpt,excerpt_i18n,content,content_i18n,featured_image,published_at,created_at,updated_at").eq("tenant_id", TENANT_ID).eq("is_published", true).order("published_at", { ascending: false })
  if (error) throw new Error(`Articles query failed: ${error.message}`)
  return (data || []).map((row) => mapArticle(row))
}

export async function getArticleBySlug(slug: string): Promise<NewsArticle | null> {
  const client = getSupabaseClient()
  if (!client) return null
  const { data, error } = await client.from("articles").select("slug,title,title_i18n,excerpt,excerpt_i18n,content,content_i18n,featured_image,published_at,created_at,updated_at").eq("tenant_id", TENANT_ID).eq("slug", slug).eq("is_published", true).maybeSingle()
  if (error) throw new Error(`Article query failed: ${error.message}`)
  return data ? mapArticle(data) : null
}
