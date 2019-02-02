import React from 'react'

import FluidLayout from '../components/fluid-layout'
import SEO from '../components/seo'
import { Grid, Row, Col } from 'react-flexbox-grid'
import clap from '../images/clap.png'
import './contact.scss'

const ContactPage = ({}) => (
  <FluidLayout>
    <SEO
      title="Contact | Andrew Heinke"
      keywords={[`contact`, `andrew`, `heinke`]}
    />
    <div className="contact-bg">
      <div className="contact-wrapper">
        <div className="contact">
          <img
            src={clap}
            className="contact-image"
            alt="Clapping hands 3d illustration characters"
          />
          <h1 className="contact-heading">Let's get in touch</h1>
          <Grid>
            <Row>
              <Col lg={4}>
                asdf
              </Col>
              <Col lg={4}>
                asdf
              </Col>
              <Col lg={4}>
                asdf
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  </FluidLayout>
)

export default ContactPage
