import React from 'react';
import logo from '../images/logo.png'
import logo2 from '../images/logo2.svg'
import '../stylesheets/header.scss'

const Header = () => {
    return (
        <header className='header'>
            <img src={logo2} className='header__logo' alt='studio ghibli logo' />
            <h1 className='header__text'>STUDIO GHIBLI PRESENTS</h1>

        </header>
    );
}

export default Header;