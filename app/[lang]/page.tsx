import Socials from '@/components/Socials'
import Navbar from '@/components/navbar'
import { getDictionary } from '@/get-dictionaries'
import { Locale } from '@/i18n-config'

type PageProps = {
  params: { lang: Locale }
}

export default async function Home({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang)

  return (
    <main
      className='dark:bg-slate-800 dark:text-slate-200'
      style={{ minHeight: '75vh' }}
    >
      <div className='px-6 py-12'>
        <Navbar />

        <div>
          <h1 className='text-4xl font-bold'>{dictionary['Index'].name}</h1>
          <h2 className='mt-3 text-lg font-medium'>
            {dictionary['Index'].title}
          </h2>
          <p className='mt-4'>{dictionary['Index'].tag}</p>
        </div>

        <Socials />
      </div>
    </main>
  )
}
