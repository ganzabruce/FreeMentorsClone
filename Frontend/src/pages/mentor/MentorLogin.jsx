import { useState } from 'react';
import '../../assets/css/mentorLogin.css'
import { Link} from 'react-router-dom'
import { mentorLogin } from '../../hooks/mentorLogin';

const MentorLog = () => {
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const { login , error ,isLoading} = mentorLogin()
    
    const clearInputs = ()=> {
        setEmail('')
        setPassword('')
    }


    const handleLogin = (e)=>{
        e.preventDefault()
        login(email,password)
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
                    <button className='submit' disabled={isLoading}>Login</button>
                    {error && <div className='error'>{error}</div>}
                    <Link to="/mentorForm">create account</Link>
                </form>
            </div>
        </div>
     );
}
 
export default MentorLog;