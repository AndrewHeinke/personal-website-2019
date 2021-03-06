import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

const Image = () => (
  <StaticQuery
    query={graphql`
      {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <GatsbyImage fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Image
