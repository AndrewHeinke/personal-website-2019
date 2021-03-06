import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './index.scss'

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


        <img id="happy-cloud-2" src={happyCloud} alt="Happy Cloud Character" />

      </div>

    </Layout>
  )
}

export default IndexPage
