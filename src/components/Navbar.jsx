import React, { useState, useEffect, useRef } from 'react';
import Menu from './Menu.jsx';
import './css/Navbar.css';

function Navbar() {
    return (
        <nav>
            <img className='logo' src='/logo_orizzontale_trasparente.png' alt='logo' />
            <Menu/>
        </nav>
    )
}

export default Navbar