import React, { useState } from 'react'
import Counter from './Counter'

function Home() {
   const[tallyNo,settallyNo] =useState(1)
   const tempGirls = Array(tallyNo).fill(0);
  return (
    <div >
        <div style={{display:"flex" , margin:"auto"}}> 
            <div><button onClick={()=>{
            settallyNo(tallyNo+1)
            }}>ADD COUNTER</button></div>

             <div><button  disabled={tallyNo==1}  onClick={()=>{
            settallyNo(tallyNo-1)
             }}>REMOVE COUNTER</button></div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:"1fr 1fr"}}>

        { tempGirls.map((e,i)=>{
            return <Counter/>
         })}
        </div>
       
    </div>
  )
}

export default Home