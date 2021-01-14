import React from "react"
import { graphql } from "gatsby"
import warbler from "../../content/images/warbler.jpg"
import aracari from "../../content/images/aracari.webp"

function About({ data }) {
  console.log({ data })
  return (
    <div>
      this is the about page
      <img src={warbler} alt="bird" />
      <img src={aracari} alt="bird" />
    </div>
  )
}

export default About

export const pageQuery = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`
