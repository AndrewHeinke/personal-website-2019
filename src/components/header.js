import { Link } from 'gatsby'
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from '../images/logo.svg'
import nameLogo from '../images/logo2.svg'
import './header.scss'
import ResponsiveMenu from 'react-responsive-navbar'
import styled from 'styled-components'
import { MdMenu, MdClose } from 'react-icons/md/'

const Menu = styled.div`
  li {
    list-style-type: none;
    display: inline;
  }

  @media (max-width: 800px) {
    height: 100%;
    position: absolute;
    left: 0;
    width: 100%;
    top: 64px;
    background: white;
    ul {
      background: white;
      margin:0;
      height: 100vh;
    }
    li {
      display: block;
      margin-left: 0;
      border-bottom: 1px solid $lightGray;
      margin: 0;
    }
    .header-nav-link {
      font-weight: 400;
      background-image: none;
      height: 100%;
      display: inline-block;
      position: relative;
      padding: 16px 0;
      font-size: 2rem;
      line-height: 1.5;
      width: 100%;
      margin: 0;
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
            menuOpenButton={<MdMenu size={40} color="#0DAB76" />}
            menuCloseButton={<MdClose size={40} color="#0DAB76" />}
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
