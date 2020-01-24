import React from 'react';
import logo2 from '../images/logo2.svg'
import '../stylesheets/header.scss'

const Header = () => {
    return (
        <header className='header'>
            <img src={logo2} className='header__logo' alt='studio ghibli logo' />
        </header>
    );
}

export default Header;