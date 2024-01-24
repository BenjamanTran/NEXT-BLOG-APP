import FeaturedPosts from '@/components/home-page/featured-posts'
import Hero from '@/components/home-page/hero'
import { Fragment } from 'react'


const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'Nextjs is a the react framework for production',
    date: '2024-01-24'
  },
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'Nextjs is a the react framework for production',
    date: '2024-01-24'
  },
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'Nextjs is a the react framework for production',
    date: '2024-01-24'
  },
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'Nextjs is a the react framework for production',
    date: '2024-01-24'
  }
]
export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>)
}
