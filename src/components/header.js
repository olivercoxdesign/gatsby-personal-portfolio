import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/oc_logo.svg'

const Header = () => (

  <div className="header--wrapper">
    <nav className="header--nav">
      <ul>
        <li><img className="logo" src={logo} alt="oc logo" /></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  </div>

)

export default Header
