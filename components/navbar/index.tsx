import LanguageSelector from './language-selector'
import ThemeSwitcher from './theme-switcher'

export default function Navbar() {
  return (
    <div className='px-2 mb-12 flex justify-end gap-5' dir='ltr'>
      <LanguageSelector />
      <ThemeSwitcher />
    </div>
  )
}
