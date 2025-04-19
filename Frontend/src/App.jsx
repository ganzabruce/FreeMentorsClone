import LandingPage from "./pages/landingPage"
import { BrowserRouter as Router, Route , Routes, Navigate } from 'react-router-dom'
import MentorRegister from './pages/mentor/MentorRegister'
import MentorLog from "./pages/mentor/MentorLogin"
import MenteeReg from "./pages/mentee/menteeRegister"
import MenteeLog from "./pages/mentee/menteeLog"
import MentorHome from "./pages/mentor/mentorHome"
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './pages/mentee/home'
import { UseUserContext } from "./hooks/useUserContext"
import { UseMentorAuth } from "./hooks/useMentorAuth"

function App() {
  const {user} = UseUserContext()
  const {mentor } = UseMentorAuth()
  return (
    <>
    <Router>
    <header>
      <Nav />
    </header>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/"  element={user ? <Home /> : <Navigate to='/menteeLogin' /> } />
        <Route path="/mentorForm" element={<MentorRegister />} />
        <Route path="/mentorLogin" element={<MentorLog />} />
        <Route path="/menteeRegister" element={user ? <Navigate to='/' />:<MenteeReg />} />
        <Route path="/menteeLogin" element={user ? <Navigate to='/' />:<MenteeLog />} />
        <Route path="/mentorHome" element={mentor ? <MentorHome /> : <Navigate to='/mentorForm'></Navigate>} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </Router>
    </>
  )
}

export default App
