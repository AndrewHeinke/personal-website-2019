import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Container from './container'
import Footer from './footer'
import './layout.scss'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
            <Container>{children}</Container>
          </main>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
