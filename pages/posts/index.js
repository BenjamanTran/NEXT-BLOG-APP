import AllPosts from "@/components/posts/all-posts"
import { getAllPosts } from "@/lib/posts-util"

export function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts
    }
  }
}

const AllPostsPage = (props) => {
  return <AllPosts posts={props.posts} />
}

export default AllPostsPage
