import React from "react"
import { graphql, Link } from "gatsby"

function Home({ data }) {
  const { allMarkdownRemark } = data
  return (
    <div>
      <h1>welcometo my webzome</h1>
      <ol>
        {allMarkdownRemark.nodes.map((node, i) => (
          <li key={i}>
            <Link to={node.frontmatter.slug}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Home

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
        }
        excerpt
      }
    }
  }
`
