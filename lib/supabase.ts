import { createClient } from "@supabase/supabase-js"

export const TENANT_ID = process.env.NEXT_PUBLIC_TENANT_ID?.trim() || ""

export function getTenantId() {
  return TENANT_ID
}

export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
  if (!url || !key || !TENANT_ID) return null
  return createClient(url, key, { auth: { persistSession: false } })
}
