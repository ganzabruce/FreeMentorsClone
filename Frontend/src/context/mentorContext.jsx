import React, { createContext, useEffect, useReducer } from 'react'
export const mentorContext = createContext()
const mentorReducer = (state,action) =>{
    switch(action.type){
        case "login":
            return{
                mentor: action.payload
            }
        case "signup":
            return{
                mentor: action.payload
            }
        default:
            return {
                mentor: null
            }
    }
}
export const MentorContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(mentorReducer,{
        mentor: null
    })
    console.log(state)
    useEffect(()=>{
        const context = JSON.parse(localStorage.getItem('mentor'))
        dispatch({type : 'login' ,payload: context})
    },[])
  return (
    <mentorContext.Provider value={{...state,dispatch}}>
        {children}
    </mentorContext.Provider>
  )
}