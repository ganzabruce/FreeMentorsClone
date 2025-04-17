import { createContext, useReducer } from "react";

const userContext = createContext()

const userReducer (state,action) =>{
    switch(action.type){
        case 'login':
            return{
                user: action.payload
            }
        case 'logout':
            return{
                user: null
            }
    }
}

export const UseContextProvider = ({children})=>{

    const [user , dispatch] = useReducer(userReducer,{
        user: null
    })
    <userContext.Provider>
        {children}
    </userContext.Provider>
}