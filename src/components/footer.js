import PropTypes from 'prop-types'
import React from 'react'
import Container from './container'
import './footer.scss'
import { Row, Col } from 'react-flexbox-grid';
import { FaCodepen, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaAngellist, FaLinkedin } from 'react-icons/fa'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

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
          <li>
            <Tippy content="Codepen">
              <a data-tippy="Tooltip" href="https://codepen.io/andrewheinke/"><FaCodepen size={40} color="#0DAB76" /></a>
            </Tippy>
          </li>
          <li>
            <Tippy content="GitHub">
              <a data-tippy="Tooltip" href="https://github.com/AndrewHeinke"><FaGithub size={40} color="#0DAB76" /></a>
            </Tippy>
          </li>
          <li>
            <Tippy content="Instagram">
              <a href="https://www.instagram.com/andrewheinke/"><FaInstagram size={40} color="#0DAB76" /></a>
            </Tippy>
          </li>
          <li>
            <Tippy content="Facebook">
              <a href="https://www.facebook.com/andrew.heinke"><FaFacebook size={40} color="#0DAB76" /></a>
            </Tippy>
          </li>
          <li>
            <Tippy content="AngelList">
              <a href="https://angel.co/andrew-heinke"><FaAngellist size={40} color="#0DAB76" /></a>
            </Tippy>
          </li>
          <li>
            <Tippy content="Twitter">
              <a href="https://twitter.com/andrewheinke"><FaTwitter size={40} color="#0DAB76" /></a>
            </Tippy>
          </li>
          <li>
            <Tippy content="LinkedIn">
              <a href="https://www.linkedin.com/in/andrewheinke/"><FaLinkedin size={40} color="#0DAB76" /></a>
            </Tippy>
          </li>
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
