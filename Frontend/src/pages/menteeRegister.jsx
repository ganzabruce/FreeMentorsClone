import '../assets/css/mentee.css'
import { Link} from 'react-router-dom'

const MenteeReg= () => {
    return ( 
        <div className="mentor-form">
            <div>
                <Link to="/landing" className='goBack'>Go Back</Link>
                <form  className='mentor Reg'>
                <h1 className='h1'>Register as a mentee </h1>
                    <input type="email" placeholder='email' required /><br />
                    <input type="password" placeholder='your password...' required /><br />
                    
                    <button className='submit'>Signup</button>
                    <Link to="/menteeLogin">Already have an account</Link>
                </form>
            </div>
        </div>
     );
}
 
export default MenteeReg;