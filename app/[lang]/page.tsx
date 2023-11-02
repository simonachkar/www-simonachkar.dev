import { getDictionary } from '../../get-dictionaries'
import { Locale } from '../../i18n-config'
import LanguageSelector from "@/components/LanguageSelector";
import Socials from "@/components/Socials";
import ThemeSwitcher from "@/components/ThemeSwitcherBtn";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {

  const dictionary = await getDictionary(lang)
  
  return (
    <main className="dark:bg-slate-800 dark:text-slate-200" style={{ minHeight: '75vh' }}>
      <div className="px-6 py-12">
        <div className="px-2 mb-12 flex justify-end gap-5">
          <LanguageSelector />
          <ThemeSwitcher />
        </div>

        <div>
          <h1 className='text-4xl font-bold'>
       {dictionary['Index'].name}
          </h1>
          <h2 className='mt-3 text-lg font-medium'>
          {dictionary['Index'].title}
          </h2>
          <p className='mt-4'>
          {dictionary['Index'].tag}
          </p>
        </div>

        <Socials />
      </div>
    </main>
  )
}
