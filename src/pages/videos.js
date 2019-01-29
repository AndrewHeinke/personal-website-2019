import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Row, Col } from 'react-grid-system'
import Iframe from 'react-iframe'

const VideosPage = ({}) => (
  <Layout>
    <SEO
      title="Videos | Andrew Heinke"
      keywords={[`videos`, `andrew`, `heinke`]}
    />
    <h1>Videos</h1>
    <p>
      Making videos has always been a passion of mine. Initially I began
      creating fun content that I could share with my friends and family. As I
      transitioned into the working world I wanted to figure out a way I could
      leverage the power of video in my everyday job. I began recording my
      screen and voice while I showcased our React infrastructure components and
      utilities. This lead to the creation of several video tutorial playlists
      that are now used to onboard new developers and give designers insights
      into the basics of how the infrastructure works. These videos are
      extremely valuable due to our teams limited developer resources. Videos
      allow me to multiply my time helping others without taking up my time.
      While I am unable to publicly share the videos I made for work, I can
      share some I made for fun below.
    </p>
    <Row>
      <Col md={6}>
        <h2>Painting</h2>
        <Iframe
          url="https://www.youtube.com/embed/videoseries?list=PLMPhsT8z1_A3ohmS9SQN1c8B1uEL8AX8o"
          display="initial"
          position="relative"
          width="100%"
          height="320px"
          allowFullScreen
        />
      </Col>
      <Col md={6}>
        <h2>Speed Coding</h2>
        <Iframe
          url="https://www.youtube.com/embed/videoseries?list=PLMPhsT8z1_A3bWO-_vhB3BZ35IPErcPs-"
          display="initial"
          position="relative"
          width="100%"
          height="320px"
          allowFullScreen
        />
      </Col>
    </Row>
  </Layout>
)

export default VideosPage
