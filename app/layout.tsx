import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Holy Yatra',
  description: 'Tour and Travels',
  generator: 'holyatra',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
