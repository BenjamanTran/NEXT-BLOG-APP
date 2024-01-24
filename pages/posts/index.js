import AllPosts from "@/components/posts/all-posts"
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

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage
