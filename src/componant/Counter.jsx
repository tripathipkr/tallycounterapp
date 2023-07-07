import React, { useState } from 'react'
import { handleAddActionObj, handleReduceActionObj,Resetbtn  } from '../Redux/action'
import { store } from '../Redux/store'
import { useSelector } from 'react-redux'

function Counter() {
    const[title,settitle]=useState("Tally Counter");
    const[t,st]=useState(true)
    const counter=  useSelector((state)=>{
        return state
    })
    const TitleChange=()=>{
           
        }
  return (
    <div style={{width:"100%"}}>
        <div>
            {title}
        </div>
        <div style={{width:"40%",margin:"auto" ,boxShadow:"0 0 10px black" ,padding:"40px"}}>
            <h1>Count:{counter.counter}</h1>
            <br />
            <button style={{height:"20px" ,width:"30%",backgroundColor:"red",color:"white"}}
             onClick={()=>{
                store.dispatch(handleAddActionObj())}}
            >+ </button>
            
            <button style={{height:"20px" ,width:"30%",backgroundColor:"red",color:"white"}} onClick={()=>{
                store.dispatch(handleReduceActionObj())}}>-</button>
         
         <div  style={{color:"white"}} >
            <button  onClick={()=>{
                store.dispatch(Resetbtn())}}>Reset</button>
        </div>
        <div  style={{color:"white"}} >
            <button  onClick={()=>{
                  TitleChange()}}>Counter Name</button>
        </div>
        </div>
        
    </div>
  )
}

export default Counter