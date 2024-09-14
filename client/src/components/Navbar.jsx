import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar' >
            <ul>
                <NavLink to='/' >Read</NavLink>
                <NavLink to='/create' >Create</NavLink>
            </ul>
        </div>
    )
}

export default Navbar
