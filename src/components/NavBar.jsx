import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navBar'>
      <ul className='navBar__ul'>
        <li className='navBar__ul__li'>
            <Link to="/standings" className='navBar__ul__li__link'>
                Clasificaciones
            </Link>
            <Link to="/teams" className='navBar__ul__li__link'>
                Equipos
            </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
