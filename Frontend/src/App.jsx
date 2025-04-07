import LandingPage from "./pages/landingPage"
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import MentorLogin from './pages/MentorLogin'



function App() {
  return (
    <>
    <Router>
    <header>
    </header>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/mentorForm" element={<MentorLogin />} />
      </Routes>
      <footer>
        
      </footer>
    </Router>
    </>
  )
}

export default App
