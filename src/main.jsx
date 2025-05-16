import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/css/index.css'
import App from './App.jsx'
import Particle from './components/Particle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
