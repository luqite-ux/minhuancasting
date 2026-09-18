"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV_LINKS } from "@/lib/site-config"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background px-4 pb-6 pt-4 shadow-lg"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="control-feedback rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="control-feedback mt-3 inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
