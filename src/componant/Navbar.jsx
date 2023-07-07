import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
       <div style={{display:"flex" ,height:"40px",backgroundColor:"blue" ,justifyContent:"space-between"}}>
           <Link to="/"><div style={{color:"white",paddingLeft:"30px"}}>Home</div></Link>
           <Link to="/login"><div  style={{color:"white",paddingRight:"30px"}}>Login</div></Link>
           <Link to="/logout"><div  style={{color:"white",paddingRight:"30px"}}>Logout</div></Link>
       </div>
  )
}

export default Navbar