"use client"

import { useState, type FormEvent } from "react"
import { AlertCircle, CheckCircle2, FileUp } from "lucide-react"
import { InquiryCaptchaField } from "@/components/inquiry-captcha-field"

export function EnquiryForm() {
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [refreshKey, setRefreshKey] = useState(0)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!consent || status === "submitting") {
      setStatus("error")
      setMessage("Please confirm consent before submitting.")
      return
    }
    setStatus("submitting")
    setMessage("")
    const form = event.currentTarget
    const response = await fetch("/api/inquiries", { method: "POST", body: new FormData(form) }).catch(() => null)
    if (response?.ok) {
      form.reset()
      setConsent(false)
      setStatus("success")
      setMessage("Thank you. Your enquiry has been recorded for the Minhuan team.")
    } else {
      const body = response ? await response.json().catch(() => ({})) : {}
      setStatus("error")
      setMessage(body.error || "The enquiry could not be submitted. Please check the fields and try again.")
    }
    setRefreshKey((value) => value + 1)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-describedby="enquiry-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-foreground">
          Full name
          <input name="fullName" autoComplete="name" required className="h-11 w-full rounded-md border border-input bg-background px-3 font-normal" />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Work email
          <input name="email" type="email" autoComplete="email" required className="h-11 w-full rounded-md border border-input bg-background px-3 font-normal" />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Phone / WhatsApp
          <input name="phone" type="tel" autoComplete="tel" className="h-11 w-full rounded-md border border-input bg-background px-3 font-normal" />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Company
          <input name="company" autoComplete="organization" required className="h-11 w-full rounded-md border border-input bg-background px-3 font-normal" />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Country / region
          <input name="country" autoComplete="country-name" required className="h-11 w-full rounded-md border border-input bg-background px-3 font-normal" />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Estimated quantity
          <input name="quantity" placeholder="e.g. 500 pcs / month" className="h-11 w-full rounded-md border border-input bg-background px-3 font-normal" />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-foreground">
        Product or project
        <input name="subject" required className="h-11 w-full rounded-md border border-input bg-background px-3 font-normal" />
      </label>

      <label className="block space-y-2 text-sm font-medium text-foreground">
        Message
        <textarea name="message" rows={6} required className="w-full rounded-md border border-input bg-background px-3 py-3 font-normal" />
      </label>

      <div className="flex items-center gap-3 rounded-md border border-dashed border-border bg-secondary/40 px-4 py-4 text-sm text-muted-foreground">
        <FileUp className="h-5 w-5 shrink-0" aria-hidden="true" />
        <div><p className="font-medium text-foreground">Drawing / file</p><p>Attachment support is reserved for the connected enquiry service.</p></div>
      </div>

      <InquiryCaptchaField refreshKey={refreshKey} className="rounded-md border border-border bg-secondary/40 p-4" />

      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-1" />
        <span>I agree that Changzhou Minhuan Precision Casting Co., Ltd. may contact me about this enquiry.</span>
      </label>

      <div id="enquiry-status" role="status" aria-live="polite" className="min-h-6">
        {status === "error" && <p className="flex items-center gap-2 text-sm text-destructive"><AlertCircle className="h-4 w-4" />{message}</p>}
        {status === "success" && <p className="flex items-center gap-2 text-sm font-medium text-emerald-700"><CheckCircle2 className="h-4 w-4" />{message}</p>}
      </div>

      <button type="submit" disabled={status === "submitting"} className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">{status === "submitting" ? "Submitting…" : "Submit enquiry"}</button>
    </form>
  )
}
