import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            수복지용구
        </div>
      <ul className='navbar-menu'>
        <li><Link to="/">Log in/out</Link></li>
        <li><Link to="/posting">Posting</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </div>
  )
}