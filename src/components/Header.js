import React from 'react'
import logo from '../assets/images/shhImage.png'
import '../styles/header.css'
function Header()
{
    return (
        <header className='headerComponent'>
            <h1 className='headerTitle'>
                EASY SSH<span className='shh'>hhhhhhh</span>
            </h1>

            <img className='logo'  src={logo} alt="Logo" />
        </header>
    )
}

export default Header
