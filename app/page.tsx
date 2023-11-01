"use client";

import LanguageSelector from "@/components/LanguageSelector";
import Socials from "@/components/Socials";
import ThemeSwitcherBtn from "@/components/ThemeSwitcherBtn";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl px-6 py-12" style={{ minHeight: '75vh' }}>
      <div className="max-w-screen-sm">
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
