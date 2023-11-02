// import Image from 'next/image'
import { getDictionary } from '../get-dictionaries'

export default async function Footer({ lang }: any) {

    const dictionary = await getDictionary(lang)

    return (
        <footer className="w-full px-5 pb-16 text-xs sm:pb-0 max-w-md">
             {/* <Image
               src="/logo.png"
               alt="Simon Achkar Logo"
             className="dark:invert pb-2 rotate-0 pl-1"
                 width={43}
                 height={43}
                 priority
             /> */}
            <p className='mt-1.5'>{dictionary['Footer'].copyright}</p>
            <p className='mt-1.5'>{dictionary['Footer'].builtWith}</p>
            <p className='mt-1.5'>{dictionary['Footer'].madeWith} <span className='ml-0.5'>&hearts;</span></p>

            <p className='mt-4 font-mono font-light text-[10px] md:text-[12px]'>v0.1.0</p>
        </footer>
    )
}
