import { useState } from "react"
import { UseUserContext} from './useUserContext'

export const menteeSignup = ()=>{
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const {dispatch} = UseUserContext()
    const signup = async (email,password) =>{
        setError(null)
        setIsLoading(true)
        try {
            const response = await fetch('http://api/user/register',{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({email,password})
            })
            if(!response.ok){
                throw error(response.error)
            }else{
                const user = await response.json()
                dispatch({type: "signup",payload:user})
            }
        } catch (error) {
            setError(error)
        }   
    }

    return { signup , error , isLoading}
}