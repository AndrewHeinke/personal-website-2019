import PropTypes from 'prop-types'
import React from 'react'
import Container from './container'
import './footer.scss'

const Footer = ({ children }) => (
  <footer>
    <Container>
      <p>© {new Date().getFullYear()}</p>
      {children}
    </Container>
  </footer>
)

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer
