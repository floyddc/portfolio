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
import BackButton from './components/BackButton.jsx';

function App() {
  const [view, setView] = useState('home');
  const [clicked, setClicked] = useState(null);

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className='app-container'>
      <Particle/>
      <div className='components'>
        <Navbar onViewChange={handleViewChange}/>
        <div className='content'>
            {
              view === 'home' && (
                <>
                  <Projects onViewChange={handleViewChange} setClicked={setClicked}/>
                  <section id='skills'><Skills/></section>
                  <section id='experiences'><Timeline/></section>
                  <section id='contacts'><Contacts/></section>
                </>
              )
            }

            {
              view === 'requestView' && clicked === 'REQUEST A SERVICE' && (
                <>
                  <BackButton onViewChange={handleViewChange} setClicked={() => setClicked(null)} />
                  <Form />
                </>
              )
            }
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
