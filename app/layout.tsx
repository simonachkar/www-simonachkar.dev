import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'
import './globals.css'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simon Achkar | Software Developer',
  description: 'Simon Achkar is a Full-Stack Software Developer who builds digital solutions for the web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} dark:bg-slate-800 dark:text-slate-200 mx-auto max-w-screen-lg`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
