import { useState } from "react";  
import { UseUserContext } from './useUserContext';
import { useNavigate } from "react-router-dom";

export const useMenteeSignup = () => {  
    const navigate = useNavigate()
    const [error, setError] = useState(null);  
    const [isLoading, setIsLoading] = useState(false);  
    const { dispatch } = UseUserContext(); 

    const signup = async (email, password) => {  
        setError(null);  
        setIsLoading(true);  
        try {  
            const response = await fetch('http://localhost:3003/api/user/register', {  
                method: "POST",  
                headers: {  
                    "Content-Type": "application/json",  
                },  
                body: JSON.stringify({ email, password }),  
            });  

            const user = await response.json(); 

            if (!response.ok) {  
                throw new Error(user.error || 'Something went wrong'); 
            }  
            if (user) {  
                localStorage.setItem('user', JSON.stringify(user));  
                dispatch({ type: "signup", payload: user });  
                navigate('/')
            }  
        } catch (error) {  
            setError(error.message);
        } finally {  
            setIsLoading(false);
        }  
    };  

    return { signup, error, isLoading };  
};  