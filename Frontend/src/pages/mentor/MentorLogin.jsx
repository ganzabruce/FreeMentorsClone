import { useState } from 'react';
import '../../assets/css/mentorLogin.css'
import { Link, useNavigate} from 'react-router-dom'
import { UseMentorAuth } from '../../hooks/useMentorAuth';

const MentorLog = () => {
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const {login , error ,isLoading} = UseMentorAuth()
    
    const clearInputs = ()=> {
        setEmail('')
        setPassword('')
    }

    
    const handleLogin = async (e)=>{
        e.preventDefault()
        clearInputs()
    }  

    
    return ( 
        <div className="mentor-form">
            <div>
                <Link to="/landing" className='goBack'>Go Back</Link>
                <form  className='mentor Reg' onSubmit={handleLogin}>
                <h1 className='h1'>Login as a mentor </h1>
                    <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} required /><br />
                    <input type="password" placeholder='your password...' value={password} onChange={(e)=>setPassword(e.target.value)} required /><br />
                    <button className='submit'>Login</button>
                    <Link to="/mentorForm">create account</Link>
                </form>
                {error && window.alert(error)}
            </div>
        </div>
     );
}
 
export default MentorLog;