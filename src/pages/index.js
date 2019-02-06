import React from 'react'
import lifecycle from 'react-pure-lifecycle';
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import './index.scss'

import designImage from '../images/designer.jpg'
import devImage from '../images/developer.jpg'
import happyCloud from '../images/cloud-happy.png'
import cloud1 from '../images/cloud-1.png'
import cloud5 from '../images/cloud-5.png'
import Anime from 'react-anime'

const IndexPage = ({ children }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`andrew`, `heinke`, `portfolio`]} />

      <div className="banner">
        <h1 className="banner-title"><div className="kerning">
          <span className="kern">H</span>e
          <span className="kern">l</span>l
          <span className="kern">o</span>,
        </div> welcome to the website of Andrew Heinke</h1>

        <Anime easing="easeInOutSine"
           loop={true}
           duration={4000}
           direction="alternate"
           delay={(el, index) => index * 500}
           translateY='3rem'
           scale={[.75, .9]}>
        <img id="cloud-1" src={cloud1} alt="Floating Cloud" />
        <img id="happy-cloud" src={happyCloud} alt="Happy Cloud Character" />
        </Anime>

        <Anime easing="linear"
           loop={true}
           duration={6000}
           direction="alternate"
           delay={(el, index) => index * 240}
           translateY='-1rem'
           scale={[.85, 1]}>
          <img id="cloud-5" src={cloud5} alt="Floating Cloud" />
          <img id="happy-cloud-2" src={happyCloud} alt="Happy Cloud Character" />
        </Anime>
      </div>

    </Layout>
  )
}

export default IndexPage
