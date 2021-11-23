

import React from "react"
import Post from "./Post"


const PostList = ({posts}) => {
  console.log(posts) // id logged correctly
   return(
      <>
        {posts.map(post => {
          return (

            <Post post={post} key={post.id} />
          )
        })}
      </>
   )
}
export default PostList