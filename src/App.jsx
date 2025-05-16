import { useState } from 'react'
import './components/css/App.css'
import Particle from './components/Particle';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


function App() {

  return (
    <div className='app-container'>
      <Particle></Particle>
      <div className='components'>
        <Navbar></Navbar>
        <div className='content'>

        </div>
        <Footer></Footer>
      </div>     
    </div>
  )
}

export default App
