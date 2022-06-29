import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../res/img/Seat_Of_My_Pants_Inc_Logo_RGB.png'

export default function Navbar() {
    return (
        <nav>
            <ul className='nav--links'>
                <NavLink className={({ isActive }) => (isActive ? 'nav--active_link' : 'nav--home')} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'nav--active_link' : 'nav--projects')}  to='/Projects'>Projects</NavLink>
                <a className='nav--contact' href='#contact'>Contact Us</a>
            </ul>
            <img className='nav--logo' src={logo} alt='Seat of My Pants' />
            <div className='nav--eastlink_container'>
                <a className='nav--eastlink' href='https://www.eastlink.ca/' target='_blank' rel='noreferrer'>Support Local Film</a>
            </div>
        </nav>
    )
}