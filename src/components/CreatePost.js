
import { useState, useRef, useContext } from "react"
import { PostContext } from "../App"


const CreatePost = ({ user }) => {
   const { dispatch } = useContext(PostContext)
   const [inputCatcher, setInputCatcher] = useState('')
   const [img, setImg] = useState(null)

   const inputRef = useRef()
   const fileRef = useRef()


   const submitHandler = (e) => {  
      e.preventDefault()
      const postObj = {
         img: img,
         title: inputCatcher,
         user: user,
         id: Date.now(),
      }

      dispatch( {type: "ADD_POST", payload: {postObj:postObj} })
 
      // resetting input fields
      fileRef.current.value = null
      setInputCatcher('')
      setImg(null)
      inputRef.current.focus()
   }


   return (
      <div>
         <h1>Create new post</h1>
         <form onSubmit={submitHandler} name="createpostform">
            <input type="text" placeholder="Add Post Content" onChange={e => setInputCatcher(e.target.value)} ref={inputRef} value={inputCatcher} />
            <input type="file" onChange={e => setImg(e.target.files[0])} ref={fileRef} />
            <button type="submit" >Submit</button>
         </form>


      </div>
   )
}

export default CreatePost