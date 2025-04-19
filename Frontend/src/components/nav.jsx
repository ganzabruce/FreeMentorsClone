import { UseMentorAuth } from '../hooks/useMentorAuth';  
import { UseUserContext } from '../hooks/useUserContext';  
import { Link, useNavigate } from 'react-router-dom';  
const Nav = () => {  
    const navigate = useNavigate();  
    const { dispatch: userDispatch } = UseUserContext();
    const {dispatch : mentorDispatch} = UseMentorAuth()
    const { user } = UseUserContext();  
    const { mentor } = UseMentorAuth();  
    const logoutUser = () => {
        localStorage.removeItem('user');  
        localStorage.removeItem('mentor');  
        userDispatch({ type: "logout" });  
        mentorDispatch({type: "logout"})
        navigate("/landing");  
    };  
    return (   
        <div className="nav">  
            <div className="links">  
                {!user && !mentor ? (  
                    <a href="#footer">Connect with us</a>  
                ) : (  
                    <ul className='newLinks'>  
                        <li><Link to="/mentors">Mentors</Link></li>  
                        <li><Link to="/session">Session</Link></li>  
                    </ul>  
                )}  
                <form>  
                    <input type="text" placeholder="Search for mentors" id="search" />  
                </form>  
            </div>  
            <div className="title">  
                <Link to="/">  
                    <h1>FreeMentors</h1>  
                </Link>  
            </div>  
            <div className="auth">  
                {!user && !mentor ? (  
                    <a href="#account">Get Started</a>  
                ) : (  
                    <button className='logout' onClick={logoutUser}>Logout</button>  
                )}  
            </div>  
        </div>  
    );  
};  
export default Nav;  