import { createClient } from "@supabase/supabase-js"
import { createSupabaseCaptchaContextFromEnv, verifyCaptchaSubmission } from "@/lib/inquiry-captcha"

export const dynamic = "force-dynamic"

function field(form: FormData, name: string) {
  return String(form.get(name) || "").trim()
}

export async function POST(request: Request) {
  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return Response.json({ error: "Invalid enquiry request." }, { status: 400 })
  }

  const secret = process.env.CAPTCHA_SECRET?.trim()
  if (!secret) return Response.json({ error: "Verification service is unavailable." }, { status: 503 })
  const context = createSupabaseCaptchaContextFromEnv()
  const captcha = await verifyCaptchaSubmission({
    secret,
    ...context,
    scope: field(form, "captchaScope"),
    token: field(form, "captchaToken"),
    answer: field(form, "captchaAnswer"),
  }).catch(() => ({ ok: false as const, code: "invalid" as const }))
  if (!captcha.ok) return Response.json({ error: "The verification code is incorrect or expired. Please try a new image." }, { status: 400 })

  const name = field(form, "fullName")
  const email = field(form, "email")
  const company = field(form, "company")
  const subject = field(form, "subject")
  const message = field(form, "message")
  if (!name || !email || !company || !subject || !message) return Response.json({ error: "Please complete all required fields." }, { status: 400 })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()
  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID?.trim()
  if (!supabaseUrl || !serviceRoleKey || !tenantId) return Response.json({ error: "Enquiry service is unavailable." }, { status: 503 })
  const db = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } })
  const { error } = await db.from("inquiries").insert({
    tenant_id: tenantId,
    name,
    email,
    phone: field(form, "phone"),
    company,
    subject,
    message: [message, field(form, "country") && `Country/region: ${field(form, "country")}`, field(form, "quantity") && `Estimated quantity: ${field(form, "quantity")}`].filter(Boolean).join("\n\n"),
    status: "new",
  })
  if (error) return Response.json({ error: "The enquiry could not be recorded. Please try again." }, { status: 500 })
  return Response.json({ ok: true }, { status: 201 })
}
