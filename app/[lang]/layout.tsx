import type { Metadata } from 'next'
import { Montserrat, Rubik } from 'next/font/google'
import Footer from '@/components/shared/footer'
import { Locale, i18n } from '@/i18n-config'

import { ThemeProvider } from '@/app/theme-provider'
import '@/app/globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })
const rubik = Rubik({ weight: '400', subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'Simon Achkar | Software Developer',
  description:
    'Simon Achkar is a Full-Stack Software Developer who builds digital solutions for the web',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const isAr = lang === 'ar'
  const langLocale = lang as Locale

  return (
    <html lang={lang} dir={isAr ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body
        className={`dark:bg-slate-800 dark:text-slate-200 mx-auto max-w-screen-md
        ${isAr ? `${rubik.className} tracking-wider` : montserrat.className} `}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Footer lang={langLocale} />
        </ThemeProvider>
      </body>
    </html>
  )
}
