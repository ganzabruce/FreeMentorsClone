import LandingPage from "./pages/landingPage"
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import MentorRegister from './pages/MentorRegister'
import MentorLog from "./pages/MentorLogin"
import MenteeReg from "./pages/menteeRegister"
import MenteeLog from "./pages/menteeLog"
import MentorHome from "./pages/mentor/mentorHome"
import Nav from './components/nav'
import Footer from './components/footer'

function App() {
  return (
    <>
    <Router>
    <header>
      <Nav />
    </header>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
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
