import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import AnimatedBackground from '@/app/components/AnimatedBackground'
import PageTransition from '@/app/components/PageTransition'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Romaisa Hanif - Portfolio',
  description: 'Frontend Developer, Python Developer, Graphics Designer, B2B Sales Expert',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-background text-text`}>
        <AnimatedBackground />
        <Header />
        <PageTransition>
          <main className="flex-grow">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}

