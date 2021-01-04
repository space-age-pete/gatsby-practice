import React from "react"
import { graphql, Link } from "gatsby"

function Post({ data }) {
  const post = data.markdownRemark

  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: post.html }}></section>
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query postQuery($path: String) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
