//DO NOT change the function names

import { ADD, REDUCE, RESET } from "./actionTypes";
import { store } from "./store";

//function to return the add action object
const handleAddActionObj = () => {
   return {
     type:ADD,
     payload:1
    }

};
const Resetbtn=()=>{
    return{
        type:RESET,
        payload:0,
    }
};
//function to return the reduce action object
const handleReduceActionObj = () => {
 return{
    type:REDUCE,
    payload:1,
 }
};

export { handleAddActionObj, handleReduceActionObj,Resetbtn };
