import { useContext } from "react"
import {userContext} from '../context/userContext'
export const UseUserContext = () =>{
    const context  = useContext(userContext)
    if(!context){
        return console.log("the children shout be in context provider")
    }
    return context
}