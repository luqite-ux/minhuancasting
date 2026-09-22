import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const source = readFileSync(new URL("../app/about/page.tsx", import.meta.url), "utf8")

test("about page uses the customer-supplied component range image instead of the repeated homepage hero", () => {
  assert.match(source, /src="\/images\/hero-flanges\.jpg"/)
  assert.match(source, /alt="Representative precision cast and machined components from the Minhuan catalogue"/)
  assert.doesNotMatch(source, /src="\/images\/hero-casting-line\.jpg"/)
})
