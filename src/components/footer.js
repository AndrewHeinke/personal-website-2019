import PropTypes from 'prop-types'
import React from 'react'
import Container from './container'
import './footer.scss'
import { Row, Col } from 'react-grid-system'
import { FaCodepen, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaAngellist, FaLinkedin } from 'react-icons/fa'

const Footer = ({ children }) => (
  <footer>
    <Container>
    <Row>
      <Col lg={6}>
      <p>© {new Date().getFullYear()}</p>
      {children}
      </Col>
      <Col lg={6}>
        <ul className="footer-icon-list">
          <li><a href="https://codepen.io/andrewheinke/"><FaCodepen size={40} color="#0DAB76" /></a></li>
          <li><a href="https://github.com/AndrewHeinke"><FaGithub size={40} color="#0DAB76" /></a></li>
          <li><a href="https://www.instagram.com/andrewheinke/"><FaInstagram size={40} color="#0DAB76" /></a></li>
          <li><a href="https://www.facebook.com/andrew.heinke"><FaFacebook size={40} color="#0DAB76" /></a></li>
          <li><a href="https://angel.co/andrew-heinke"><FaAngellist size={40} color="#0DAB76" /></a></li>
          <li><a href="https://twitter.com/andrewheinke"><FaTwitter size={40} color="#0DAB76" /></a></li>
          <li><a href="https://www.linkedin.com/in/andrewheinke/"><FaLinkedin size={40} color="#0DAB76" /></a></li>

        </ul>
      </Col>

    </Row>


    </Container>
  </footer>
)

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer
