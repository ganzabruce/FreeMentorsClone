import { useState } from 'react';  
import '../../assets/css/mentor.css';  
import { Link, useNavigate } from 'react-router-dom';  

const MentorLogin = () => {  
    const [firstName, setFirstName] = useState('');  
    const [lastName, setLastName] = useState('');  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  
    const [address, setAddress] = useState('');  
    const [bio, setBio] = useState('');  
    const [occupation, setOccupation] = useState('');
    const [expertise, setExpertise] = useState('');  
    const [error, setError] = useState(null);  
    const navigate = useNavigate();  

    const handleMentorRegistration = async (e) => {  
        e.preventDefault();  
        const form = { firstName, lastName, email, password, address, bio, occupation, expertise };  
        try {  
            const response = await fetch('http://localhost:3003/mentor/register', {  
                method: 'POST',  
                body: JSON.stringify(form),  
                headers: {  
                    "Content-Type": "application/json"  
                }  
            });  
            if (!response.ok) {  
                const json = await response.json();  
                console.log(json.error.message)
                setError(json.error || 'Failed to register a mentor');  
                return;  
            }  
            resetForm();  
            navigate('/mentorLogin');  
        } catch (error) {  
            setError('An unexpected error occurred');  
        }  
    };  

    const resetForm = () => {  
        setFirstName('');  
        setLastName('');  
        setEmail('');  
        setPassword('');  
        setAddress('');  
        setBio('');  
        setExpertise('');  
        setOccupation('');  
        setError(null);  
    };  

    return (  
        <div className="mentor-reg">  
            <div>  
                <Link to="/landing" className='goBack'>Go Back</Link>  
                {error && <div className="error">{error}</div>}  
                <form className='mentor Reg' onSubmit={handleMentorRegistration}>  
                    <h1 className='h1'>Register as a mentor</h1>  
                    <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required /><br />  
                    <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required /><br />  
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required /><br />  
                    <input type="password" placeholder='Your Password...' value={password} onChange={(e) => setPassword(e.target.value)} required /><br />  
                    <input type="text" placeholder='Your Address' value={address} onChange={(e) => setAddress(e.target.value)} /><br />  
                    <textarea placeholder='A short bio...' value={bio} onChange={(e) => setBio(e.target.value)} className='text'></textarea>  
                    <input type="text" placeholder='Occupation' value={occupation} onChange={(e) => setOccupation(e.target.value)} /><br />  
                    <input type="text" placeholder='Expertise' value={expertise} onChange={(e) => setExpertise(e.target.value)} /><br />  
                    <button className='submit'>Register</button>  
                    <Link to="/mentorLogin">Already have an account?</Link>  
                </form>  
            </div>  
        </div>  
    );  
}  

export default MentorLogin;  