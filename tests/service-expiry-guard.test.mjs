import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('../', import.meta.url)

test('service guard is fail-open and exempts operational paths', async () => {
  const source = await readFile(new URL('lib/service-status.ts', root), 'utf8')
  assert.match(source, /AbortSignal\.timeout\(2000\)/)
  assert.match(source, /payload\.version === 1/)
  assert.match(source, /payload\.available === false && payload\.status === 'expired'/)
  assert.match(source, /catch[\s\S]*return true/)
  for (const route of ['/admin', '/api', '/_next', '/favicon.ico']) assert.match(source, new RegExp(route.replace('/', '\\/')))
})

test('middleware rewrites expired public pages and keeps admin login available', async () => {
  const middleware = await readFile(new URL('middleware.ts', root), 'utf8')
  const integration = await readFile(new URL('lib/service-guard-middleware.ts', root), 'utf8')
  const page = await readFile(new URL('app/service-expired/page.tsx', root), 'utf8')
  assert.match(middleware, /applyServiceExpiryGuard/)
  assert.match(integration, /isWebsiteServiceAvailable/)
  assert.match(integration, /NextResponse\.rewrite/)
  assert.doesNotMatch(integration, /NextResponse\.redirect/)
  assert.match(page, /index:\s*false/)
  assert.match(page, /\/admin\/login/)
})
