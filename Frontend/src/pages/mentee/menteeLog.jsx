import '../../assets/css/mentee.css'
import { Link} from 'react-router-dom'

const MenteeLog= () => {
    return ( 
        <div className="mentor-form">
            <div>
                <Link to="/landing" className='goBack'>Go Back</Link>
                <form  className='mentor Reg'>
                <h1 className='h1'>Login as a mentee </h1>
                    <input type="email" placeholder='email' required /><br />
                    <input type="password" placeholder='your password...' required /><br />
                    
                    <button className='submit'>Login</button>
                    <Link to="/menteeRegister">create account</Link>
                </form>
            </div>
        </div>
     );
}
 
export default MenteeLog;