import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {IoMdNotifications} from 'react-icons/io'
import {BsFillBookmarkFill } from 'react-icons/bs'
import {FaUserAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='nav'>
      <div className="nd">
      <div className="logo">TravelMedia.in</div>
      <ul>
        <NavLink to='/' activeClassName="active"><li><AiFillHome/></li></NavLink>
        <li><IoMdNotifications/></li>
        <NavLink to='/item/:id' activeClassName="active"><li><BsFillBookmarkFill/></li></NavLink>
        <li><FaUserAlt/></li>
      </ul>
      </div>

    </nav>
  )
}

export default Navbar