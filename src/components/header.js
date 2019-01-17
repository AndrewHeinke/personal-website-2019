import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.svg'
import './header.scss'

const Header = () => (
  <header className="header">
    <Link className="header-logo-link" to="/">
      <img className="header-logo" src={logo} alt="Andrew Heinke Logo" />
    </Link>
    <nav className="header-nav">
      <Link className="header-nav-link" to="/about">
        About
      </Link>
      <Link className="header-nav-link" to="/resume">
        Resume
      </Link>
      <Link className="header-nav-link" to="/portfolio">
        Portfolio
      </Link>
      <Link className="header-nav-link" to="/videos">
        Videos
      </Link>

    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
