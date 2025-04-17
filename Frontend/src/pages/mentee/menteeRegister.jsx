import '../../assets/css/mentee.css'
import { Link} from 'react-router-dom'
import {menteeSignup} from '../../hooks/menteeSignup'
import { useState } from 'react'

const MenteeReg= () => {

    const [email,setEmail] = useState('')
    const [password ,setPassword] = useState('')

    const clearInputs = () =>{
        setEmail('')
        setPassword('')
    }

    const {signup , error , isLoading } = menteeSignup()

    const handleSubmit = (e) =>{
        e.preventDefault()
        signup(email,password)
        
    }


    return ( 
        <div className="mentor-form">
            <div>
                <Link to="/landing" className='goBack'>Go Back</Link>
                <form  className='mentor Reg' onSubmit={handleSubmit}>
                <h1 className='h1'>Register as a mentee </h1>
                    <input type="email" placeholder='email' required /><br />
                    <input type="password" placeholder='your password...' required /><br />
                    <button className='submit'>Signup</button>
                    <Link to="/menteeLogin">Already have an account</Link>
                    {error && <div className='error'>{error}</div>}
                </form>
            </div>
        </div>
     );
}
 
export default MenteeReg;