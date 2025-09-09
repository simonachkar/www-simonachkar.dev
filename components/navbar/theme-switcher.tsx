'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import ThemeLight from '@/components/svg/ThemeLight'
import ThemeDark from '@/components/svg/ThemeDark'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className='h-10 w-10'></div>
  }

  return (
    <>
      <button
        type='button'
        className='text-sm p-2 rounded'
        onClick={() => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        }}
      >
        {resolvedTheme === 'light' ? <ThemeLight /> : <ThemeDark />}
      </button>
    </>
  )
}

export default ThemeSwitcher
