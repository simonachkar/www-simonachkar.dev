import getFormattedDate from '@/lib/getFormattedDate'
import { getSortedPostsData, getPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'

export function generateStaticParams() {
  const posts = getSortedPostsData()

  return posts.map((post) => ({
    postId: post.id,
  }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData()
  const { postId } = params

  const post = posts.find((post) => post.id === postId)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
  }
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData()
  const { postId } = params

  if (!posts.find((post) => post.id === postId)) notFound()

  const { title, date, contentHtml, imgUrl } = await getPostData(postId)

  const pubDate = getFormattedDate(date)

  return (
    <main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
      <p className='py-5 px-2.5'>
        <Link href='/'>← Back to home</Link>
      </p>
      <div className='h-100'>
        <Image
          src={imgUrl}
          alt={title}
          className='pb-2 rotate-0 pl-1 mx-auto'
          width={800}
          height={250}
        />
      </div>
      <h1 className='text-3xl mt-4 mb-0 font-bold'>{title}</h1>
      <p className='mt-0'>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </main>
  )
}
