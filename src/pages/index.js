import React from 'react'
import lifecycle from 'react-pure-lifecycle';
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import designImage from '../images/designer.jpg'
import devImage from '../images/developer.jpg'
import mobileImage from '../images/mobile-banner.jpg'

const IndexPage = ({ children }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`andrew`, `heinke`, `portfolio`]} />

      <div className="mobile-banner">
        <img src={mobileImage} alt="Andrew Heinke designer and developer" />
      </div>
      <div className="wrapper">
        <div className="before">
          <img className="content-image" src={devImage} draggable="false" />
        </div>
        <div className="after">
          <img className="content-image" src={designImage} draggable="false" />
        </div>
        <div className="scroller">
        </div>
      </div>

      <h1 id="foo">High-level explanation of core Typography.js concepts</h1>
      <p>
        The goal of Typography.js is to provide a high-level elegant API for
        expressing typographic design intent.
      </p>
      <p>
        The library then generates styles appropriate to the sytem (the Web or
        React Native are the two current targets) it’s running in.
      </p>
    </Layout>
  )
}

export default IndexPage
