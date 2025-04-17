import { createContext, useReducer } from "react";
export const userContext = createContext()
const userReducer = (state,action) =>{
    switch(action.type){
        case 'signup':
            return{
                user: action.payload
            }
        case 'login':
            return{
                user: action.payload
            }
        case 'logout':
            return{
                user: null
            }
        default:
            return state
    }
}
export const UserContextProvider = ({children})=>{
    const [state , dispatch] = useReducer(userReducer,{
        user: null
    })
    console.log({"userContext: ":state })
    return (
        <userContext.Provider value={{...state,dispatch}}>
            {children}
        </userContext.Provider>
    )
}