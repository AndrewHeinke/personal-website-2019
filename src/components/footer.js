import PropTypes from 'prop-types'
import React from 'react'
import Container from './container'
import './footer.scss'
import { Row, Col } from 'react-flexbox-grid';
import { FaCodepen, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaAngellist, FaLinkedin } from 'react-icons/fa'
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'

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
            <Tooltip
              title="Codepen"
              position="top"
            >
              <a href="https://codepen.io/andrewheinke/"><FaCodepen size={40} color="#0DAB76" /></a>
            </Tooltip>
          </li>
          <li>
          <Tooltip
            title="GitHub"
            position="top"
          >
              <a href="https://github.com/AndrewHeinke"><FaGithub size={40} color="#0DAB76" /></a>
            </Tooltip>
          </li>
          <li>
          <Tooltip
            title="Instagram"
            position="top"
          >
              <a href="https://www.instagram.com/andrewheinke/"><FaInstagram size={40} color="#0DAB76" /></a>
            </Tooltip>
          </li>
          <li>
          <Tooltip
            title="Facebook"
            position="top"
          >
              <a href="https://www.facebook.com/andrew.heinke"><FaFacebook size={40} color="#0DAB76" /></a>
            </Tooltip>
          </li>
          <li>
          <Tooltip
            title="AngelList"
            position="top"
          >
              <a href="https://angel.co/andrew-heinke"><FaAngellist size={40} color="#0DAB76" /></a>
            </Tooltip>
          </li>
          <li>
          <Tooltip
            title="Twitter"
            position="top"
          >
              <a href="https://twitter.com/andrewheinke"><FaTwitter size={40} color="#0DAB76" /></a>
            </Tooltip>
          </li>
          <li>
          <Tooltip
            title="LinkedIn"
            position="top"
          >
              <a href="https://www.linkedin.com/in/andrewheinke/"><FaLinkedin size={40} color="#0DAB76" /></a>
            </Tooltip>
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
