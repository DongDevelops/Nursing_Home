import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            Nursing_Home
        </div>
      <ul className='navbar-menu'>
        <li><Link to="/">Log in/out</Link></li>
        <li><Link to="/posting">Posting</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </div>
  )
}
