import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'
import Image from 'next/image'

type Props = {
  post: BlogPost
}

export default function ListItem({ post }: Props) {
  const { id, title, date, imgUrl } = post

  const formattedDate = getFormattedDate(date)

  return (
    <li className='mt-6 text-2xl dark:text-white/90 flex gap-4 align-middle'>
      <Image
        src={imgUrl}
        alt={id}
        className='pb-2 rotate-0 pl-1'
        width={80}
        height={25}
      />
      <div>
        <Link
          className='hover:text-black/70 dark:hover:text-white'
          href={`/posts/${id}`}
        >
          {title}
        </Link>

        <p className='text-sm mt-1'>{formattedDate}</p>
      </div>
    </li>
  )
}
