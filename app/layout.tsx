import type { Metadata } from 'next'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
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
      <body className={font.className}>
        {children}
        <footer className="max-w-md px-5 pb-16 text-xs text-slate-500 sm:pb-0">
          <Image
            src="/logo.png"
            alt="Simon Achkar Logo"
            className="dark:invert pb-2 rotate-0 pl-1"
            width={43}
            height={43}
            priority
          />
          <p className='mt-1.5'>All content &copy; Simon Achkar</p>
          <p className='mt-1.5'>This site is built with Next.js and TailwindCSS. The source code can be found on Github.</p>
          <p className='mt-1.5'>Made with 	&hearts; and a lot of coffee.</p>
        </footer>
      </body>
    </html>
  )
}
