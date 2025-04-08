// import { createContext, useReducer } from "react";
// const userReducer = (state,action)=>{
//     switch(action.type){
//         case 'All__users':
//             return {users : action.payload}
//         case 'create_user':
//             return {users : [action.payload , ...state.payload]}
//         default: 
//             return users
//     }
// }
// const UseCreateContext = () =>{
//     const [state , dispatch ] = useReducer(userReducer , {
//         users : null
//     })
// }
 
// export default UseCreateContext;