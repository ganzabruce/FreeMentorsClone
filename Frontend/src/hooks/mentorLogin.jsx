import { useState } from "react"
import { UseMentorAuth } from "./useMentorAuth"

export const mentorSignup = () =>{
    const [error ,setError] = useState(null)
    const {dispatch } = UseMentorAuth()
    const [isLoading , setIsLoading ]= useState(false)
    try {
        const login = async ({email,password})=>{
            setIsLoading(true)
            setError(null)
            const response = await fetch('http://localhost:3003/api/mentor/login',{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({email,password})
            })
            const data = await response.json()
            if(!response.ok){
                throw new Error(data.error)
            }
            if(response.ok){
                setIsLoading(false)
                localStorage.setItem('mentor',JSON.stringify(data))
                dispatch({type: "login",payload: data})
            }
        }
    } catch (error) {
        setError(error.message)
    }finally{
        setIsLoading(false)
    }

    return {login,error,isLoading}
}