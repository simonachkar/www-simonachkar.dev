import type { Metadata } from 'next'
import { Montserrat, Rubik } from 'next/font/google'
import Footer from '@/components/Footer'

import { i18n } from '../../i18n-config'
import './globals.css'
import { ThemeProvider } from './theme-provider'

const montserrat = Montserrat({ subsets: ['latin'] })
const rubik = Rubik({ weight: '400', subsets: ['arabic'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: 'Simon Achkar | Software Developer',
  description:
    'Simon Achkar is a Full-Stack Software Developer who builds digital solutions for the web',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const { lang } = params
  const isAr = lang === 'ar'
  return (
    <html lang={lang} dir={isAr ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body
        className={` dark:bg-slate-800 dark:text-slate-200 mx-auto max-w-screen-md 
        ${isAr ? rubik.className : montserrat.className} `}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Footer lang={lang} />
        </ThemeProvider>
      </body>
    </html>
  )
}
