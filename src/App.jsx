import { useState } from 'react'
import data from './components/json/Cards.json';
import './components/css/App.css'
import Particle from './components/Particle';
import Navbar from './components/Navbar.jsx';
import BackButton from './components/BackButton.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import Skills from './components/Skills.jsx';
import Timeline from './components/Timeline.jsx';
import Form from './components/Form.jsx';

function App() {

  return (
    <div className='app-container'>
      <Particle/>
      <div className='components'>
        <Navbar/>
        <div className='content'>
          {
            data.map((item) => (
              <Card
                key = {item.id}
                title = {item.title}
                description = {item.description}
                image = {item.image}
                link = {item.link} 
                buttonImg = {item.buttonImg}
              ></Card>
            ))
          }
          <Skills/>
          <Timeline/>
          <Form/>
        </div>
        <Footer/>
      </div>     
    </div>
  )
}

export default App
