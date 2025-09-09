import parse from 'html-react-parser'
import Socials from '@/components/shared/social-icons'
import Navbar from '@/components/navbar'
import { getDictionary } from '@/get-dictionaries'

type PageProps = {
  params: Promise<{ lang: 'en' | 'fr' | 'ar' }>
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params
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

        <hr className='mt-8'></hr>

        <section className='mt-8'>
          <span className='block w-10 h-1.5 bg-[#39a265] dark:bf-[#4ad483] rounded mb-4'></span>
          <div className='prose dark:prose-invert max-w-none text-[14px]'>
            {parse(content.aboutText)}
          </div>
        </section>

        <hr className='mt-8'></hr>
      </div>
    </main>
  )
}
