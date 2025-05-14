import parse from 'html-react-parser'
import Socials from '@/components/shared/social-icons'
import Navbar from '@/components/navbar'
import { getDictionary } from '@/get-dictionaries'
import { Locale } from '@/i18n-config'
import Posts from '@/components/posts'

type PageProps = {
  params: { lang: Locale }
}

export default async function Home({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang)
  const content = dictionary['Index']

  return (
    <main
      className='dark:bg-slate-800 dark:text-slate-200'
      style={{ minHeight: '75vh' }}
    >
      <div className='px-8 py-12'>
        <Navbar />

        <div>
          <h1 className='text-4xl font-bold'>{parse(content.name)}</h1>
          <h2 className='mt-3 text-lg font-medium'>{parse(content.title)}</h2>
          <p className='mt-4'>{parse(content.tag)}</p>
        </div>

        <Socials />

        <hr className='mt-7' />

        <Posts />
      </div>
    </main>
  )
}
