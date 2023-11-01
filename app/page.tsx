"use client";

import LanguageSelector from "@/components/LanguageSelector";
import Socials from "@/components/Socials";
import ThemeSwitcherBtn from "@/components/ThemeSwitcherBtn";

export default function Home() {
  return (
    <main className="dark:bg-slate-800 dark:text-slate-200" style={{ minHeight: '75vh' }}>
      <div className="px-6 py-12">
        <div className="px-2 mb-12 flex justify-end gap-5">
          <LanguageSelector />
          <ThemeSwitcherBtn />
        </div>

        <div>
          <h1 className='text-4xl font-bold'>
            Simon Achkar
          </h1>
          <h2 className='mt-3 text-lg font-medium'>
            Senior Software Developer at REDspace
          </h2>
          <p className='mt-4'>
            I build digital solutions for the web
          </p>
        </div>

        <Socials />
      </div>
    </main>
  )
}
