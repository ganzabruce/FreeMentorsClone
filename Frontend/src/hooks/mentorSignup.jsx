import { useState } from "react"
import {UseMentorAuth} from './useMentorAuth'
import { useNavigate } from "react-router-dom"

export const mentorSignup = ()  => {
    const navigate = useNavigate() 
    const [error,setError] = useState(null)
    const [isLoading , setIsLoading ] = useState(false)
    const {dispatch} = UseMentorAuth()
    const signup = async (firstName, lastName,email,password,address,bio,occupation,expertise) =>{
        setError(null)
        setIsLoading(true)
        try {
            const inputs = {firstName,lastName,email,password,address,bio,occupation,expertise}
            const response = await fetch('http://localhost:3003/api/mentor/register',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputs)
            })
            const data = await response.json()
            if(!response.ok){
                throw new Error(data.error)
            }
            if(response.ok){    
                dispatch({type: "signup",payload: data})
                navigate('mentorHome')
                localStorage.setItem('mentor',JSON.stringify(data))
            }
        } catch (error) {
            setError(error.message)
        }finally{
            setIsLoading(false)
        }
    }

    return {signup , error ,isLoading}
}