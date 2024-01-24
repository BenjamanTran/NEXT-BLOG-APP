import PostHeader from './post-header.js'
import classes from './post-content.module.css'

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting started with nextjs',
  image: 'getting-started-nextjs.png',
  excerpt: 'Nextjs is a the react framework for production',
  date: '2024-01-24',
  content: '# this is a first post'
}
export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
  return <article className={classes.content}>
    <PostHeader title={DUMMY_POST.title} image={imagePath} />
    {DUMMY_POST.content}
  </article>
}
