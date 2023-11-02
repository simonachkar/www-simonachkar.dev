import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="w-full px-5 pb-16 text-xs sm:pb-0">
            <Image
                src="/logo.png"
                alt="Simon Achkar Logo"
                className="dark:invert pb-2 rotate-0 pl-1"
                width={43}
                height={43}
                priority
            />
            <p className='mt-1.5'>All content &copy; Simon Achkar</p>
            <p className='mt-1.5'>This site is built with Next.js and TailwindCSS. The source code can be found on Github.</p>
            <p className='mt-1.5'>Made with 	&hearts; and a lot of coffee.</p>
            <p className='mt-3 font-mono font-light text-[10px] md:text-[12px]'>v0.1.0</p>
        </footer>
    )
}
