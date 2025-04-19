import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserContextProvider } from './context/userContext.jsx'
import { MentorContextProvider } from './context/mentorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MentorContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
    </MentorContextProvider>
  </StrictMode>,
)
