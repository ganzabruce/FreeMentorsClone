import '../assets/css/mentor.css'
import { Link} from 'react-router-dom'

const MentorLogin = () => {
    return ( 
        <div className="mentor-reg">
            <div>
                <Link to="/landing" className='goBack'>Go Back</Link>
                <form  className='mentor Reg'>
                <h1 className='h1'>Register as a mentor </h1>
                    <input type="text" placeholder='first name' required /><br />
                    <input type="text" placeholder='last name' required /><br />
                    <input type="email" placeholder='email' required /><br />
                    <input type="password" placeholder='your password...' required /><br />
                    <input type="text" placeholder='your address' /><br />
                    <textarea name="" id="bio" placeholder='a short bio...'></textarea>
                    <input type="text" placeholder='occupation' /><br />
                    <input type="text" placeholder='expertise' /><br />
                    <button className='submit'>Register</button>
                    <Link to="/mentorLogin">already have an account?</Link>
                </form>
            </div>
        </div>
     );
}
export default MentorLogin;