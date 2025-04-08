import { useEffect, useState } from 'react'
import '../assets/css/mentor.css'
import { Link, useNavigate} from 'react-router-dom'


const MentorLogin = () => {
    const  [firstName, setFirstName ] = useState('')
    const  [lastName,setLastName ] = useState('')
    const  [email ,setEmail] = useState('')
    const  [password, setPassword] = useState('')
    const  [address ,setAddress] = useState('')
    const [ bio ,setBio] = useState('')
    const  [occuption ,setOccupation] = useState('')
    const  [expertise , setExpertise ] = useState('')
    const [error ,setError] = useState(null)
    const navigate  = useNavigate()

    const handleMentorRegisteration = async(e)=>{
        e.preventDefault()
        const form = {firstName , lastName, email , password , address , bio, occuption , expertise}
        const response = await fetch('localhost:3003/mentor/register',{
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.Error)
            throw Error('failed to register a mentor')
        }
        if(response.ok){
            setAddress('')
            setFirstName('')
            setLastName('')
            setEmail('')
            setBio('')
            setPassword('')
            setExpertise('')
            setOccupation('')
            setError(null)
            console.log('new mentor added')
            navigate('/mentorHome')
        }
    }


    return ( 
        <div className="mentor-reg">
            <div>
                <Link to="/landing" className='goBack'>Go Back</Link>
                {error && <div>{error}</div>}
                <form  className='mentor Reg' onSubmit={handleMentorRegisteration}>
                <h1 className='h1'>Register as a mentor </h1>
                    <input type="text" placeholder='first name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} required /><br />
                    <input type="text" placeholder='last name' value={lastName} onChange={(e)=>setLastName(e.target.value)} required /><br />
                    <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} required /><br />
                    <input type="password" placeholder='your password...' value={password} onChange={(e)=>setPassword(e.target.value)} required /><br />
                    <input type="text" placeholder='your address' value={address} onChange={(e)=>setAddress(e.target.value)} /><br />
                    <textarea name="" id="bio" placeholder='a short bio...' value={bio} onChange={(e)=>setBio(e.target.value)}></textarea>
                    <input type="text" placeholder='occupation' value={occuption} onChange={(e)=>setOccupation(e.target.value)} /><br />
                    <input type="text" placeholder='expertise' value={expertise} onChange={(e)=>setExpertise(e.target.value)} /><br />
                    <button className='submit'>Register</button>
                    <Link to="/mentorLogin">already have an account?</Link>

                </form>
            </div>
        </div>
     );
}
export default MentorLogin;