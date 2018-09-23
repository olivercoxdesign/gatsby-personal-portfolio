import React from 'react'
import Layout from '../components/layout'

import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const portfolioPage = ({ data }) => (
  <Layout>
    <div className="body--background">
      <div className="hero--container">
        <div className="hero--title">
          Development
        </div>
        <div className="hero--image">
          <Img  fluid={data.image1.childImageSharp.fluid}
                style={{
                  position: "relative",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "30vh",
                }} 
          />
        </div>
      </div>
      <div className="index__project-container">
          <div className="index__project-container-sec1">
            <div className="index__project-title">
              Project Title
            </div>
            <div className="index__project-tech">
              GatsbyJS, GraphQL
            </div>
            <div className="index__project-desc">
              The Description goes here. A couple of sentences to hook and drive clickthrough.
            </div>
            <div className="index__project-cta">
              Find out more
            </div>
          </div>
          <div className="index__project-container-sec2">
            <Img fluid={data.image1.childImageSharp.fluid} />
          </div>
        </div>
        <div className="index__project-container">
          <div className="index__project-container-sec1">
            <div className="index__project-title">
              Project Title
            </div>
            <div className="index__project-tech">
              GatsbyJS, GraphQL
            </div>
            <div className="index__project-desc">
              The Description goes here. A couple of sentences to hook and drive clickthrough.
            </div>
            <div className="index__project-cta">
              Find out more
            </div>
          </div>
          <div className="index__project-container-sec2">
            <Img fluid={data.image1.childImageSharp.fluid} />
          </div>
        </div>
      <div className="hero--container-divider">
        <div className="hero--title">
          Design
        </div>
        <div className="hero--image">
          <Img  fluid={data.image1.childImageSharp.fluid}
                style={{
                  position: "relative",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "30vh"
                }} 
          />
        </div>
      </div>
      <div className="index__project-container">
          <div className="index__project-container-sec1">
            <div className="index__project-title">
              Project Title
            </div>
            <div className="index__project-tech">
              GatsbyJS, GraphQL
            </div>
            <div className="index__project-desc">
              The Description goes here. A couple of sentences to hook and drive clickthrough.
            </div>
            <div className="index__project-cta">
              Find out more
            </div>
          </div>
          <div className="index__project-container-sec2">
            <Img fluid={data.image1.childImageSharp.fluid} />
          </div>
        </div>
        <div className="index__project-container">
          <div className="index__project-container-sec1">
            <div className="index__project-title">
              Project Title
            </div>
            <div className="index__project-tech">
              GatsbyJS, GraphQL
            </div>
            <div className="index__project-desc">
              The Description goes here. A couple of sentences to hook and drive clickthrough.
            </div>
            <div className="index__project-cta">
              Find out more
            </div>
          </div>
          <div className="index__project-container-sec2">
            <Img fluid={data.image1.childImageSharp.fluid} />
          </div>
        </div>
    </div>
  </Layout>
)

export default portfolioPage

export const query = graphql`
  query DesignQuery {
    image1: file(relativePath: { regex: "/4k-wallpaper-hello.jpg/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
