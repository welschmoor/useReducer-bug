
import { useState } from "react"


const Login = ({ setUser }) => {
   const [inputCatcher, setInputCatcher] = useState()

   const changeHandler = (e) => {
      setInputCatcher(e.target.value)
   }

   const submitHandler = (e) => {
      e.preventDefault()
      console.log(inputCatcher)
      setUser(inputCatcher);
   }


   return(
      <div className="maindiv">
         <h2>Login</h2>
         <form onSubmit={submitHandler}>
            <input type="text" placeholder="username here" onChange={changeHandler}  />
            <button type="submit">Log In</button> 
         </form>
      </div>
   )
}

export default Login