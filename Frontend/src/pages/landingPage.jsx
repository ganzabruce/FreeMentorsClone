import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const LandingPage = () => {
    useEffect(()=>{
        AOS.init()
    })
    return ( 
        <div className="landing">
            <section className='welcome' id='welcome' data-aos='fade-up'>
                <div className="pict">
                    <div className="img1" data-aos='fade-down-right'>
                        <img src="/img/3.jpeg" alt="" />
                    </div>
                    <div className="img2" data-aos='fade-up-right'>
                    <img src="/img/2.jpeg" alt="" />
                    </div>
                </div>
                <div className="description" data-aos='fade-up'>
                    <h1 >Welcome to free mentors</h1>
                    <p>a wide range platform to connect and collaborate with your mentors</p>
                    <span>
                        <center><a href="#account">get Started</a></center>
                    </span>
                </div>
                <div className="pict">
                <div className="img3" data-aos='fade-down-left'>
                        <img src="/img/4.jpeg" alt="" />
                    </div>
                <div className="img4" data-aos='fade-up-left'>
                    <img src="/img/1.jpeg" alt="" />
                    </div>
                </div>
            </section>
            <section className='account' id='account' data-aos='fade-up'>
                <h1 style={{
                    color:'gray'
                }} data-aos='fade-up'>get started</h1>
                <h1 style={{
                    fontSize: "4em"
                }} data-aos='fade-up'>are you around to provide mentorship ?</h1>
                <div className="auth" style={{
                    marginTop: '30px'
                }} data-aos='fade-up'>
                    <a href="/mentorForm" >
                    continue as a mentor
                    </a>
                </div>

                    <h1 style={{
                    fontSize: "4em"
                }} data-aos='fade-up'>or</h1>
                <div className="auth" style={{
                    marginTop: '30px'
                }} data-aos='fade-up'>
                    <a href="/menteeRegister" >
                    continue as a mentee
                    </a>
                </div>
                <h1 style={{
                    color:'gray',
                    marginTop: '60px'
                }} data-aos='fade-up'>it's free and it wont take long</h1>
            </section>
            
        </div>
     );
}
 
export default LandingPage;