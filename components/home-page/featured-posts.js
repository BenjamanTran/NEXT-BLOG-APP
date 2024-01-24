import classes from './featured-posts.module.css'
import PostGrid from '../posts/posts-grid'

export default function FeaturedPosts(props) {
  return <session className={classes.latest}>
    <h2>Featured Post</h2>
    <PostGrid posts={props.posts} />
  </session>
}
