import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <div className="navbar">
      <Link className="navlink" to="/" >Book <span className="strikethrough">Sirch</span> Search</Link>
      <Link className="navlink" to="/about">About</Link>
    </div>
  )

}

export default NavBar
