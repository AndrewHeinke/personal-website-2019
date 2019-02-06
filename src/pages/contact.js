import React from 'react'

import FluidLayout from '../components/fluid-layout'
import SEO from '../components/seo'
import { Grid, Row, Col } from 'react-flexbox-grid'
import clap from '../images/clap.png'
import './contact.scss'
import Anime from 'react-anime'

const ContactPage = ({}) => (
  <FluidLayout>
    <SEO
      title="Contact | Andrew Heinke"
      keywords={[`contact`, `andrew`, `heinke`]}
    />
    <div className="contact-bg">
      <div className="contact-wrapper">
        <div className="contact">
        <Anime easing="easeInOutSine"
           loop={true}
           duration={4000}
           direction="alternate"
           delay={(el, index) => index * 500}
           translateY='-1rem'
           scale={[.9, 1]}>
          <img
            src={clap}
            className="contact-image"
            alt="Clapping hands 3d illustration characters"
          />
          </Anime>
          <h1 className="contact-heading">Let's get in touch</h1>
          <p>Want to know more about what I've been working on, shoot me an email and I would</p>
          <Grid>
            <Row>
              <Col lg={4}>
                <p>210.882.0062</p>
              </Col>
              <Col lg={4}>
                <p>andrew.j.heinke@gmail.com</p>
              </Col>
              <Col lg={4}>
                <p>github.com/AndrewHeinke</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  </FluidLayout>
)

export default ContactPage
