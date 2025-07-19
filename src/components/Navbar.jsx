import React, { useState, useEffect, useRef } from 'react';
import './css/Navbar.css';

function Navbar({ onViewChange }) {
    const handleClick = (anchor) => {
        onViewChange('home'); // Torna alla vista "home"
        setTimeout(() => {
            const element = document.querySelector(anchor);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0); // attende un tick per assicurarsi che 'home' sia renderizzata
    };

    return (
        <nav>
            <img className='logo' src='/personal_logo.png' alt='logo' />
            <ul>
                <li>
                    <button onClick={() => handleClick('#skills')}>
                        SKILLS <img src='/skills.ico' alt='skills' className='buttonImgIcon'/>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick('#experiences')}>
                        EXPERIENCES <img src='/experiences.ico' alt='experiences' className='buttonImgIcon'/>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick('#contacts')}>
                        CONTACTS <img src='/contacts.ico' alt='contacts' className='buttonImgIcon'/>
                    </button>
                </li>
            </ul>
        </nav>
    );
}


export default Navbar