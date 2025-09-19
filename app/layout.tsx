import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aung Thu — Fullstack Developer',
  description: 'Fullstack developer building high‑performance web & mobile apps with React, React Native, Laravel, and Node.js.',
  openGraph: {
    title: 'Aung Thu — Fullstack Developer',
    description: 'Web & Mobile apps • React • Laravel • Node.js',
    images: ['/og-image.jpg'],
    type: 'website'
  },
  metadataBase: new URL('https://your-domain.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
