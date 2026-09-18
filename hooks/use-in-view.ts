"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Marks an element as "played" the first time it enters the viewport, via its
 * own IntersectionObserver entry. Never uses a fixed/global timeout, so
 * off-screen content is never marked as played. Cleans up the observer on
 * unmount or once the element has played.
 */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") {
      // Fail-safe: no observer support, restore visibility immediately.
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.unobserve(entry.target)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px", ...options },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}
