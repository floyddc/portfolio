import { useState } from 'react'
import './components/css/App.css'
import Particle from './components/Particle';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Skills from './components/Skills.jsx';
import Timeline from './components/Timeline.jsx';
import Form from './components/Form.jsx';
import Contacts from './components/Contacts.jsx';
import Projects from './components/Projects.jsx';

function App() {

  return (
    <div className='app-container'>
      <Particle/>
      <div className='components'>
        <Navbar/>
        <div className='content'>
          <Projects/>
          <section id='skills'><Skills/></section>
          <section id='experiences'><Timeline/></section>
          <Form/>
          <section id='contacts'><Contacts/></section>
        </div>
        <Footer/>
      </div>     
    </div>
  )
}

export default App
