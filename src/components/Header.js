

const Header = ({setUser,user}) => {
   return(
      <div>
         Welcome, {user}!
         <button type="button" onClick={()=>setUser("")} >Log Out</button>

      </div>
   )
}

export default Header