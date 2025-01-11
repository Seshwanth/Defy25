import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web3 Realty',
  description: 'Revolutionize Real Estate with Web3 Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/framer-motion@5.0.0/dist/framer-motion.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

