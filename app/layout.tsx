import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '600', '700']
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'India Travel Experience',
  description: 'Premium journeys across India, curated by season, state, and local flavor.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  )
}
