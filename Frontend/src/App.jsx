import LandingPage from "./pages/landingPage"
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import MentorRegister from './pages/MentorRegister'
import MentorLog from "./pages/MentorLogin"
import MenteeReg from "./pages/menteeRegister"
import MenteeLog from "./pages/menteeLog"



function App() {
  return (
    <>
    <Router>
    <header>
    </header>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/mentorForm" element={<MentorRegister />} />
        <Route path="/mentorLogin" element={<MentorLog />} />
        <Route path="/menteeRegister" element={<MenteeReg />} />
        <Route path="/menteeLogin" element={<MenteeLog />} />
      </Routes>
      <footer>
        
      </footer>
    </Router>
    </>
  )
}

export default App
