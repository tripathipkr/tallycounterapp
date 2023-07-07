import { ADD,REDUCE, RESET } from "./actionTypes";

//Complete the reducer function logic inside the curly braces {}
const count={
counter:0
}
const reducer = (store=count,action) => {
    if(action.type===ADD){
       return {
        ...store,
        counter:store.counter+action.payload
       }
    }
   else if(action.type===REDUCE){
        return {
         ...store,
         counter:store.counter-action.payload
        }
     }
     else if(action.type===RESET){
      return{
         ...store,
         counter:0,
      }
     }
     return store
};

export { reducer };
