import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const source = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8")

test("homepage presents a broader, real-catalogue product selection", () => {
  assert.match(source, /selectRepresentativeProducts/)
  assert.match(source, /A wider view of the working catalogue/)
  assert.match(source, /Representative parts from the customer-supplied catalogue/)
})

test("homepage adds a factual company story without unsupported claims", () => {
  assert.match(source, /Precision casting in Changzhou since 2009/)
  assert.match(source, /Luoyang Town, Wujin District/)
  assert.match(source, /No stock promises\. No invented specifications\./)
})

test("catalogue story cards use a stable equal-column layout inside stagger wrappers", () => {
  assert.match(source, /className="grid gap-4 sm:grid-cols-3 sm:gap-5"/)
  assert.match(source, /className="group block h-full border border-border bg-card p-3 shadow-sm"/)
  assert.doesNotMatch(source, /index === 0 \? "col-span-2"/)
})
