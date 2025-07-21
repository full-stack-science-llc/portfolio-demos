import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RealisticApp from './RealisticApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RealisticApp />
  </StrictMode>,
)
