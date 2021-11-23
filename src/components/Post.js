import React, { useContext } from "react"
import { UserContext } from "../App.js"
import { PostContext } from "../App.js"

const Post = ({ post }) => {
   console.log("post: ",post)
   const user = useContext(UserContext)
   const { state, dispatch } = useContext(PostContext)

   const deleteHandler = (id) => {
      console.log("deleteid: ", id)
      dispatch({ type: "DELETE_POST", payload: { id } })
   }

   return (
      <React.Fragment>
         {post.img && <img style={{ height: 100, width: 200, objectFit: 'cover' }} src={URL.createObjectURL(post.img)} alt="uploaded file" />}
         <p>{post.title}</p>
         {post.user === user ? <button type="button" className="button--delete" onClick={() => deleteHandler(post.id)}> X</button> : null}
         <p style={post.user === user ? { color: "blue" } : null}>{post.user}</p>
         <br />
      </React.Fragment>
   )
}
export default Post
