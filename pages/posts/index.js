import AllPosts from "@/components/posts/all-posts"
import { getAllPosts } from "@/lib/posts-util"
import Head from "next/head"
import { Fragment } from "react"

export function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts
    }
  }
}

const AllPostsPage = (props) => {
  return <Fragment>
    <Head>
      <title>All posts</title>
      <meta
        name='description'
        content='A list of all programming related tutorials and posts!'
      />
    </Head>
    <AllPosts posts={props.posts} />
  </Fragment>
}

export default AllPostsPage
