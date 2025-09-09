import Image from 'next/image'
import parse from 'html-react-parser'
import { getDictionary } from '@/get-dictionaries'
import { Locale } from '@/i18n-config'

const REPO_URL = 'https://github.com/simonachkar/simonachkar.dev'

type FooterParams = {
  lang: Locale
}

export default async function Footer({ lang }: FooterParams) {
  const dictionary = await getDictionary(lang)
  const content = dictionary['Footer']

  return (
    <footer className='w-full px-5 pb-16 text-xs md:text-sm sm:pb-8 max-w-md md:max-w-lg'>
      <Image
        src='/logo.png'
        alt='Simon Achkar Logo'
        className='dark:invert pb-2 rotate-0 pl-1'
        width={43}
        height={43}
        priority
      />
      <p className='mt-1.5 text-xs'>{parse(content.copyright)}</p>
      <p className='mt-1.5 text-xs'>{parse(content.builtWith)}</p>
      <p className='mt-1.5 text-xs'>
        {parse(content.madeWith)}{' '}
        <span className='ml-0.5'>
          <a
            href={REPO_URL}
            target='_blank'
            rel='noreferrer'
            style={{ textDecoration: 'none' }}
          >
            &hearts;
          </a>
        </span>
      </p>

      <p className='mt-4 font-mono font-light text-xs'>
        v0.1.0
      </p>
    </footer>
  )
}
