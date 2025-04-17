import '../../assets/css/mentee.css'
import { Link} from 'react-router-dom'
import {useMenteeSignup} from '../../hooks/menteeSignup'
import { useState } from 'react'

const MenteeReg= () => {

    const [email,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const clearInputs = () =>{
        setEmail('')
        setPassword('')
    }
    const {signup , error , isLoading } = useMenteeSignup()

    const handleSubmit = (e) =>{
        e.preventDefault()
        signup(email,password)
        clearInputs()
    }
    return ( 
        <div className="mentor-form">
            <div>
                <Link to="/landing" className='goBack'>Go Back</Link>
                <form  className='mentor Reg' onSubmit={handleSubmit}>
                <h1 className='h1'>Register as a mentee </h1>
                    <input type="email" placeholder='email'
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        required 
                    /><br />
                    <input type="password" placeholder='your password...' 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        required 
                    /><br />
                    <button className='submit' disabled={isLoading}>Signup</button>
                    <Link to="/menteeLogin">Already have an account</Link>
                    {error && <div className='error'>{error}</div>}
                </form>
            </div>
        </div>
     );
}
 
export default MenteeReg;