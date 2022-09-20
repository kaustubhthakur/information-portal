import React from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'
const Navbar = () => {
  return (
    <nav className="nav">

<ul>
  <li>
    <Link to="/" classname="site" >Home</Link>
  </li>
  <li>
      <Link to="/subject" >Subject</Link>
  </li>
  <li>
    <Link to="/overview" >Overview</Link>
  </li>
  <li>
    <Link 
    to="/about">About</Link>
  </li>
  <li>
    <Link to='/login' >
      Login
    </Link>
  </li>
</ul>
    </nav>
  )
}

export default Navbar