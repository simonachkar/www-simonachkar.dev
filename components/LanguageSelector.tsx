'use client'

import { usePathname, useRouter } from 'next/navigation'
import { i18n } from '@/i18n-config'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const router = useRouter()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale

    return router.push(segments.join('/'))
  }

  return (
    <select
      onChange={(e) => {
        redirectedPathName(e.target.value)
      }}
      id='languages'
      defaultValue={pathName.split('/')[1]}
      name='Languages'
      className='dark:bg-slate-800 dark:text-slate-200'
    >
      {i18n.locales.map((locale) => {
        return (
          <option key={locale} value={locale}>
            {locale.charAt(0).toUpperCase() + locale.slice(1)}
          </option>
        )
      })}
    </select>
  )
}
