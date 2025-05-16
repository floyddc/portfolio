import { useState } from 'react'
import './components/css/App.css'
import { LanguageProvider } from './components/LanguageContext.jsx';
import Particle from './components/Particle';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


function App() {

  return (
    <div className='app-container'>
      <LanguageProvider>
        <Particle></Particle>
        <div className='content'>
          <Navbar></Navbar>
          <div className='main-content'>
            
          </div>
          <Footer></Footer>
        </div>     
      </LanguageProvider>
    </div>
  )
}

export default App
