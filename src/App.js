/*
   simple front end for instagram
*/


import React, { useState, useEffect, useReducer } from "react"
import Login from "./components/Login"
import Header from "./components/Header"
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"


export const UserContext = React.createContext()
const initialPostsState = { posts: [] }
export const PostContext = React.createContext()


const postReducer = (state, action) => {
  console.log("reducerState: ", state)
  switch (action.type) {
    case "ADD_POST": {
      return { posts: [...state.posts, action.payload.postObj] }
    }
    case "DELETE_POST": {
      console.log("state.posts::::: ", state.posts)
      const filteredArray = state.posts.filter(e => e.id !== action.payload.id) // change !== to =! and console log above will be wrong lol!!
      console.log(filteredArray)
      return { posts: [...filteredArray] }
    }
    default:
      return state
  }
}


function App() {

  const [state, dispatch] = useReducer(postReducer, initialPostsState)
  const [user, setUser] = useState('')
  console.log("<><>Appstate: ", state)

  useEffect(() => {
    document.title = user ? `${user}'s posts'` : `Please, log in.`
  }, [user])


  // show Log In when not logged in
  if (!user) return <Login setUser={setUser} />


  return (
    <PostContext.Provider value={{ state, dispatch }} >
      <UserContext.Provider value={user} >
        <div className="maindiv">
          <Header setUser={setUser} user={user} />
          <CreatePost user={user} posts={state.posts} />
          <PostList posts={state.posts} />
        </div>
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
