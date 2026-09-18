import Image from "next/image"
import Link from "next/link"
import { COMPANY, NAV_LINKS } from "@/lib/site-config"
import { MobileNav } from "@/components/site/mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="control-feedback flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" aria-label={`${COMPANY.brandName} home`}>
          <span className="relative h-14 w-14 shrink-0 overflow-hidden sm:h-16 sm:w-16">
            <Image
              src="/images/logo-minhuan-transparent.png"
              alt={`${COMPANY.brandName} logo`}
              width={1200}
              height={1200}
              className="absolute -left-[8%] top-0 h-[4.5rem] w-[116%] max-w-none object-contain object-top [clip-path:inset(0_0_18%_0)] sm:h-[5.1rem]"
              priority
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-semibold tracking-wide text-foreground">{COMPANY.brandName}</span>
            <span className="text-xs text-muted-foreground">{COMPANY.shortName}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="control-feedback text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="control-feedback inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Request a Quote
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  )
}
