import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { COMPANY, SITE_URL } from '@/lib/site-config'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'MINHUAN JINGZHU | Precision Casting and Machining', template: '%s | MINHUAN JINGZHU' },
  description: 'Precision cast and machined components manufactured to buyer drawings by Changzhou Minhuan Precision Casting Co., Ltd.',
  alternates: { canonical: '/' },
  openGraph: { title: 'MINHUAN JINGZHU | Precision Casting and Machining', description: 'Explore 282 documented precision-cast and machined component references.', type: 'website', url: SITE_URL, images: ['/images/hero-casting-line.jpg'] },
  twitter: { card: 'summary_large_image', images: ['/images/hero-casting-line.jpg'] },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [{ '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: COMPANY.legalNameEn, url: SITE_URL, logo: `${SITE_URL}/images/logo-minhuan.png`, email: COMPANY.email, telephone: COMPANY.phones[0], address: { '@type': 'PostalAddress', streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`, addressLocality: COMPANY.address.city, addressRegion: COMPANY.address.province, addressCountry: 'CN' } }, { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: COMPANY.brandName, publisher: { '@id': `${SITE_URL}/#organization` }, inLanguage: 'en' }] }).replace(/</g, '\\u003c') }} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
