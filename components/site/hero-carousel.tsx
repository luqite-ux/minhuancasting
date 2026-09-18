"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const SLIDES = [
  {
    image: "/images/hero-casting-line.jpg",
    alt: "Precision casting production scene with a finished machined component",
    eyebrow: "Precision Casting, Manufactured to Drawing",
    title: "Cast components shaped around your specification",
    description:
      "Changzhou Minhuan Precision Casting Co., Ltd. produces precision castings and machined mechanical components from buyer-supplied drawings.",
    align: "right",
    mobilePosition: "object-[32%_center]",
  },
  {
    image: "/images/hero-precision-cnc.jpg",
    alt: "Machined casting component shown beside precision machining equipment",
    eyebrow: "Machining That Follows the Drawing",
    title: "From casting blank to finished geometry",
    description:
      "Casting and machining are presented as one sourcing path, with the buyer's drawing remaining the reference throughout production.",
    align: "left",
    mobilePosition: "object-[66%_center]",
  },
  {
    image: "/images/hero-flanges.jpg",
    alt: "Selection of cast and machined flange-style components",
    eyebrow: "A Catalogue Built for Sourcing",
    title: "282 documented component references",
    description:
      "Browse representative automotive, mechanical and casting-blank parts, then send the matching drawing or technical requirement for quotation.",
    align: "right",
    mobilePosition: "object-[32%_center]",
  },
] as const

export function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const regionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = window.setInterval(() => setActive((current) => (current + 1) % SLIDES.length), 7000)
    return () => window.clearInterval(timer)
  }, [paused])

  const showPrevious = () => setActive((current) => (current - 1 + SLIDES.length) % SLIDES.length)
  const showNext = () => setActive((current) => (current + 1) % SLIDES.length)

  return (
    <section
      ref={regionRef}
      aria-roledescription="carousel"
      aria-label="Minhuan manufacturing highlights"
      className="relative overflow-hidden border-b border-border bg-surface-graphite"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!regionRef.current?.contains(event.relatedTarget as Node | null)) setPaused(false)
      }}
    >
      <div className="relative min-h-[780px] sm:min-h-[620px] lg:min-h-[650px]">
        {SLIDES.map((slide, index) => (
          <article
            key={slide.image}
            aria-hidden={index !== active}
            className={`hero-slide absolute inset-0 ${index === active ? "is-active" : ""}`}
          >
            <div className="absolute inset-x-0 top-0 h-[300px] overflow-hidden sm:inset-0 sm:h-auto">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover ${slide.mobilePosition} lg:object-center`}
              />
            </div>

            <div
              className={`relative mx-auto flex min-h-[780px] max-w-7xl items-end px-4 pb-24 pt-56 sm:min-h-[620px] sm:px-6 sm:pb-24 sm:pt-24 lg:min-h-[650px] lg:items-center lg:px-8 lg:py-24 ${
                slide.align === "right" ? "lg:justify-end" : "lg:justify-start"
              }`}
            >
              <div className="hero-copy-panel w-full max-w-xl border-l-4 border-accent bg-surface-teal-deep px-6 py-7 text-surface-graphite-foreground shadow-2xl sm:bg-surface-teal-deep/92 sm:px-8 sm:py-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
                  {slide.eyebrow}
                </p>
                {index === 0 ? (
                  <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{slide.title}</h1>
                ) : (
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{slide.title}</h2>
                )}
                <p className="mt-4 max-w-lg text-base leading-relaxed text-surface-graphite-foreground/80 sm:text-lg">
                  {slide.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="control-feedback inline-flex h-11 items-center gap-2 rounded-sm bg-accent px-5 text-sm font-semibold text-accent-foreground hover:-translate-y-0.5"
                  >
                    Request a Quote
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/products"
                    className="control-feedback inline-flex h-11 items-center gap-2 rounded-sm border border-white/40 bg-surface-teal-deep px-5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-white"
                  >
                    View Catalogue
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-surface-teal-deep/92 px-3 py-2 text-white shadow-lg">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous slide"
          className="control-feedback grid h-8 w-8 place-items-center rounded-full hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Banner slides">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActive(index)}
              className={`control-feedback h-2.5 rounded-full ${active === index ? "w-7 bg-accent" : "w-2.5 bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next slide"
          className="control-feedback grid h-8 w-8 place-items-center rounded-full hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
