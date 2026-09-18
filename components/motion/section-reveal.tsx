"use client"

import type { ReactNode } from "react"
import { Children, isValidElement, useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

type SectionRevealProps = {
  children: ReactNode
  className?: string
  as?: "div" | "section"
  /** Stagger every child while capping the delay after the first six items. */
  stagger?: boolean
}

function RevealItem({ children, index }: { children: ReactNode; index: number }) {
  const [motionReady, setMotionReady] = useState(false)
  const { ref, isInView } = useInView<HTMLDivElement>()

  useEffect(() => {
    setMotionReady(true)
  }, [])

  return (
    <div
      ref={ref}
      data-motion-ready={motionReady || undefined}
      className={`h-full${motionReady ? ` reveal${isInView ? " is-visible" : ""}` : ""}`}
      style={motionReady ? { transitionDelay: `${Math.min(index, 5) * 60}ms` } : undefined}
    >
      {children}
    </div>
  )
}

/**
 * MOT-MINHUAN-03 — Catalogue section reveal.
 *
 * Content is visible by default (no-JS / slow-load safe). Only after this
 * component mounts on the client does it add the `data-motion-ready` marker
 * and begin hiding content until its own IntersectionObserver entry fires.
 */
export function SectionReveal({ children, className, as = "div", stagger = false }: SectionRevealProps) {
  const [motionReady, setMotionReady] = useState(false)
  const { ref, isInView } = useInView<HTMLDivElement>()

  useEffect(() => {
    setMotionReady(true)
  }, [])

  const Tag = as
  const items = stagger ? Children.toArray(children) : null

  if (stagger && items) {
    return (
      <Tag className={className}>
        {items.map((child, index) => (
          <RevealItem key={isValidElement(child) && child.key != null ? child.key : index} index={index}>
            {child}
          </RevealItem>
        ))}
      </Tag>
    )
  }

  return (
    <Tag
      ref={ref as any}
      data-motion-ready={motionReady || undefined}
      className={`${motionReady ? `reveal${isInView ? " is-visible" : ""}` : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </Tag>
  )
}
