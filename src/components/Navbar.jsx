import React, { useState, useEffect, useRef } from 'react';
import './css/Navbar.css';

function Navbar() {
    return (
        <nav>
            <img className='logo' src='/logo_orizzontale_trasparente.png' alt='logo' />
            <ul>
                <li>
                    <a href='#skills'><button>SKILLS<img src='/skills.ico'></img></button></a>
                </li>
                <li>
                    <a href='#experiences'><button>EXPERIENCES<img src='/experiences.ico'></img></button></a>
                </li>
                <li>
                    <a href='#contacts'><button>CONTACTS<img src='/contacts.ico'></img></button></a>
                </li>
        </ul>
        </nav>
    )
}

export default Navbar