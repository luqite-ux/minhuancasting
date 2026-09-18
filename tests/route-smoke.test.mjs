import assert from 'node:assert/strict'
import test from 'node:test'

const baseUrl = process.env.SITE_TEST_BASE_URL || 'http://127.0.0.1:3017'

test('contact route renders a buyer enquiry surface', async () => {
  const response = await fetch(`${baseUrl}/contact`)
  const html = await response.text()

  assert.equal(response.status, 200)
  assert.match(html, /Send Your Enquiry/i)
  assert.match(html, /yanweiwenlhzz@126\.com/i)
})

test('unknown route renders the branded not-found experience', async () => {
  const response = await fetch(`${baseUrl}/this-route-does-not-exist`)
  const html = await response.text()

  assert.equal(response.status, 404)
  assert.match(html, /MINHUAN JINGZHU/i)
  assert.match(html, /Browse Products/i)
})

test('product catalogue renders every verified product instead of truncating staggered children', async () => {
  const response = await fetch(`${baseUrl}/products`)
  const html = await response.text()
  const productLinks = html.match(/href="\/products\/mh-\d{3}"/g) || []

  assert.equal(response.status, 200)
  assert.equal(productLinks.length, 282)
  assert.match(html, /href="\/products\/mh-282"/)
})

test('homepage exposes three distinct banner stories and the catalogue path', async () => {
  const response = await fetch(`${baseUrl}/`)
  const html = await response.text()

  assert.equal(response.status, 200)
  assert.match(html, /Precision Casting, Manufactured to Drawing/i)
  assert.match(html, /Machining That Follows the Drawing/i)
  assert.match(html, /A Catalogue Built for Sourcing/i)
  assert.match(html, /aria-label="Show slide 1"/)
  assert.match(html, /aria-label="Show slide 2"/)
  assert.match(html, /aria-label="Show slide 3"/)
  assert.match(html, /href="\/products"/)
})
