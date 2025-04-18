import { useState } from "react"
import { UseMentorAuth } from "./useMentorAuth"
import { useNavigate } from "react-router-dom"

export const mentorLogin = () =>{
    const [error ,setError] = useState(null)
    const {dispatch } = UseMentorAuth()
    const navigate = useNavigate()
    const [isLoading , setIsLoading ]= useState(false)
    const login = async (email,password) =>{
        setIsLoading(true)
        setError(null)
        try {
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
                navigate('/mentorHome')
            }
        } catch (error) {
            setError(error.message)
        }finally{
            setIsLoading(false)
        }
    }
    
    return {login,error,isLoading}
}