import LandingPage from "./pages/landingPage"
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import MentorRegister from './pages/mentor/MentorRegister'
import MentorLog from "./pages/mentor/MentorLogin"
import MenteeReg from "./pages/mentee/menteeRegister"
import MenteeLog from "./pages/mentee/menteeLog"
import MentorHome from "./pages/mentor/mentorHome"
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './pages/mentee/home'

function App() {
  return (
    <>
    <Router>
    <header>
      <Nav />
    </header>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/mentorForm" element={<MentorRegister />} />
        <Route path="/mentorLogin" element={<MentorLog />} />
        <Route path="/menteeRegister" element={<MenteeReg />} />
        <Route path="/menteeLogin" element={<MenteeLog />} />
        <Route path="/mentorHome" element={<MentorHome />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </Router>
    </>
  )
}

export default App
