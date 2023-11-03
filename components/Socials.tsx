import Email from '@/components/svg/Email'
import Github from '@/components/svg/Github'
import LinkedIn from '@/components/svg/LinkedIn'

type SocialLinkProps = {
  href: string
  svg: React.JSX.Element
  target?: '_blank' | ''
}

const SocialLink = ({ href, svg, target = '' }: SocialLinkProps) => {
  return (
    <li className='mr-5 text-xs'>
      <a
        className='block hover:text-black/50'
        href={href}
        target={target}
        rel='noreferrer'
      >
        {svg}
      </a>
    </li>
  )
}

export default function Socials() {
  return (
    <ul className='ml-1 mt-8 flex items-center' aria-label='socials'>
      <SocialLink
        svg={<Github />}
        href='https://github.com/simonachkar'
        target='_blank'
      />
      <SocialLink
        svg={<LinkedIn />}
        href='https://www.linkedin.com/in/simonachkar'
        target='_blank'
      />
      <SocialLink svg={<Email />} href='mailto:simon@simonachkar.com' />
    </ul>
  )
}
