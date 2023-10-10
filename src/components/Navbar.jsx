import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../styles/navbar.css'
const close = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>;
const menu = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!isOpen)
    }
    return (
        <div className='navbar'>
            <header>
                <nav>
                    <div className='nav-header'>
                        <Link className='logo' to="/"><h1>LOGO.</h1></Link>
                        <div onClick={handleClick} className='mobile'>
                            {isOpen ? close : menu}
                        </div>
                    </div>
                    <div className={isOpen ? 'nav-active' : 'nav'} id='links'>
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
                        <Link to="/">Restaurant</Link>
                        <Link to="/">Contact&nbsp;us</Link>
                        <Link to="/">Login</Link>
                        <Link to="/">SignUp</Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
