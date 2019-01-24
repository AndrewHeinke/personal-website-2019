import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.svg'
import nameLogo from '../images/logo2.svg'
import './header.scss'

const Header = () => (
  <header className="header">
    <Link className="header-logo-link" to="/">
      <img className="header-logo" src={logo} alt="Andrew Heinke Logo" />
      <img className="header-name-logo" src={nameLogo} alt="Andrew Heinke Developer and Designer" />
    </Link>
    <nav className="header-nav">
      <Link activeClassName="active-link" className="header-nav-link" to="/about">
        About
      </Link>
      <Link activeClassName="active-link" className="header-nav-link" to="/resume">
        Resume
      </Link>
      <Link activeClassName="active-link" className="header-nav-link" to="/portfolio">
        Portfolio
      </Link>
      <Link activeClassName="active-link" className="header-nav-link" to="/videos">
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
