import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Namma Kumata - Local Business Directory',
  description: 'Find local businesses in Kumata - Your trusted local business directory',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-50 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 