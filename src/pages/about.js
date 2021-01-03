import React from "react"
import { graphql } from "gatsby"

function About({ data }) {
  console.log({ data })
  return <div>this is the about page</div>
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
