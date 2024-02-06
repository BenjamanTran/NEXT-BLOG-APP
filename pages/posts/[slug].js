import PostContent from '@/components/posts/post-detail/post-content.js'
import { getPostData, getPostsFiles } from '@/lib/posts-util'

const PostDetailPage = (props) => {
  return <PostContent post={props.post} />
}

export function getStaticProps(context) {
  const { params } = context
  const { slug } = params

  const postData = getPostData(slug)

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles()
  const slug = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''))

  return {
    paths: slug.map(slug => ({ params: { slug: slug } })),
    fallback: false
  }
}

export default PostDetailPage
