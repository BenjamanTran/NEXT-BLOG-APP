import FeaturedPosts from '@/components/home-page/featured-posts'
import Hero from '@/components/home-page/hero'
import { Fragment } from 'react'
import { getFeaturedPosts } from '@/lib/posts-util'


export default function Home(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>)
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}
