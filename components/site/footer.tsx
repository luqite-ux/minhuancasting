import Image from "next/image"
import Link from "next/link"
import { COMPANY, NAV_LINKS, copyrightLine } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-graphite text-surface-graphite-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" aria-label={`${COMPANY.brandName} home`} className="control-feedback inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <span className="relative h-24 w-24 overflow-hidden sm:h-28 sm:w-28">
              <Image
                src="/images/logo-minhuan-transparent.png"
                alt={`${COMPANY.brandName} logo`}
                width={1200}
                height={1200}
                className="absolute -left-[8%] top-0 h-32 w-[116%] max-w-none object-contain object-top [clip-path:inset(0_0_18%_0)] sm:h-36"
              />
            </span>
          </Link>
          <p className="mt-3 text-sm font-semibold tracking-wide">{COMPANY.brandName}</p>
          <p className="mt-1 text-sm text-surface-graphite-foreground/70">{COMPANY.legalNameEn}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-surface-graphite-foreground/70">
            {COMPANY.address.full}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Navigate</p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="control-feedback text-sm text-surface-graphite-foreground/70 hover:text-surface-graphite-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-surface-graphite-foreground/70">
            <li>
              <a href={`mailto:${COMPANY.email}`} className="control-feedback hover:text-surface-graphite-foreground">
                {COMPANY.email}
              </a>
            </li>
            {COMPANY.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="control-feedback hover:text-surface-graphite-foreground"
                >
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-surface-graphite-foreground/70 sm:px-6 lg:px-8">
          {copyrightLine()}
        </p>
      </div>
    </footer>
  )
}
