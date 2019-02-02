import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Container from './container'
import Footer from './footer'
import './layout.scss'

const FluidLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery2 {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="site-wrapper">
          <Header siteTitle={data.site.siteMetadata.title} />
          <main
            style={{
              paddingTop: `64px`,
              flex: `1`,
              display: `flex`,
              flexDirection: `column`
            }}
          >
            {children}
          </main>
          <Footer />
        </div>
      </>
    )}
  />
)

FluidLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FluidLayout
