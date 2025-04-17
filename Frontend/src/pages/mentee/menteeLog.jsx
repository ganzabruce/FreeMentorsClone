import '../../assets/css/mentee.css'
import { Link} from 'react-router-dom'
import { menteeLogin } from '../../hooks/menteeLogin';
import { useState } from 'react';
 
const MenteeLog= () => {
    const [email,setEmail] = useState('')
        const [password ,setPassword] = useState('')
        const clearInputs = () =>{
            setEmail('')
            setPassword('')
        }
        const {login , error , isLoading } = menteeLogin()
    
        const handleSubmit = (e) =>{
            e.preventDefault()
            login(email,password)
            clearInputs()
        }
    return ( 
        <div className="mentor-form">
            <div>
                <Link to="/landing" className='goBack'>Go Back</Link>
                <form  className='mentor Reg' onSubmit={handleSubmit}>
                <h1 className='h1'>Login as a mentee </h1>
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
 
export default MenteeLog;