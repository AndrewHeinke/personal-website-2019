import { Link } from 'gatsby'
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from '../images/logo.svg'
import nameLogo from '../images/logo2.svg'
import './header.scss'
import ResponsiveMenu from 'react-responsive-navbar'
import styled from 'styled-components'
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Menu = styled.div`
  height: 100px;

  li {
    list-style-type: none;
    display: inline;
  }

  @media (max-width: 800px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link className="header-logo-link" to="/">
          <img className="header-logo" src={logo} alt="Andrew Heinke Logo" />
          <img
            className="header-name-logo"
            src={nameLogo}
            alt="Andrew Heinke Developer and Designer"
          />
        </Link>
        <nav className="header-nav">
          <ResponsiveMenu
            menuOpenButton={<IoIosMenu size={30} color="#0DAB76" />}
            menuCloseButton={<IoIosClose size={30} color="#0DAB76" />}
            changeMenuOn="800px"
            smallMenuClassName="mobile-menu"
            menu={
              <Menu>
                <ul>
                  <li>
                    <Link
                      activeClassName="active-link"
                      className="header-nav-link"
                      to="/about/"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClassName="active-link"
                      className="header-nav-link"
                      to="/resume/"
                    >
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClassName="active-link"
                      className="header-nav-link"
                      to="/portfolio/"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClassName="active-link"
                      className="header-nav-link"
                      to="/videos/"
                    >
                      Videos
                    </Link>
                  </li>
                </ul>
              </Menu>
            }
          />
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
