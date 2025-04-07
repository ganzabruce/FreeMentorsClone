const Nav = () => {
    return ( 
        <div className="nav">
            <div className="links">
            <a href="#footer">connect with us</a>
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
                <a href="#account">get Started</a>
            </div>
        </div>
     );
}
 
export default Nav;