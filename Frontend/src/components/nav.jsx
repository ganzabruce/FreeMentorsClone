import {UseUserContext} from '../hooks/useUserContext'
import {Link, useNavigate} from 'react-router-dom'
const Nav = () => {
    const navigate = useNavigate('/landing')
    const {dispatch} = UseUserContext()
    const {user} = UseUserContext()
    const logoutUser = ()=>{
        localStorage.removeItem('user')
        dispatch({type: "logout"})
        navigate("/menteeLogin")
    }
    return ( 
        <div className="nav">
            <div className="links">
            {!user ? <a href="#footer">connect with us</a> : 
            <ul className='newLinks'>
                <li><Link>mentors</Link></li>
                <li><Link>session</Link></li>
            </ul>
            }
            <form >
                <input type="text" placeholder="search for mentors" id="search" />
            </form>
            </div>
            <div className="title">
                <a href="">
                <h1>FreeMentors</h1>
                </a>
            </div>
            <div className="auth">
                {!user ? <a href="#account">get Started</a>: <button className='logout' onClick={logoutUser}>Logout</button>}
            </div>
        </div>
     );
}
 
export default Nav;