import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';  

const Footer = () => {  
    return (   
        <div className="footer" id='footer'>  
            <div className="copy">  
                <h3>&copy; {new Date().getFullYear()} All rights reserved</h3><br />
                <h3>made with ❤️ by Ganza Bruce</h3>
            </div>  
            <div className="link">  
                <a href="/book-session">Book Session</a>  
                <a href="/our-mentors">Our Mentors</a>  
            </div>  
            <div className="socials">  
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">  
                    <FontAwesomeIcon icon={faInstagram} />  
                </a>  
                <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">  
                    <FontAwesomeIcon icon={faTwitter} />  
                </a>  
                <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">  
                    <FontAwesomeIcon icon={faLinkedin} />  
                </a>  
            </div>  
        </div>  
    );  
};  

export default Footer;  