const path = require("path")
// const { createFilePath } = require("gatsby-source-filesystem")

const pageData = [
  { title: "page one", body: "this is page one", slug: "/pageOne" },
  { title: "page two", body: "this is page two", slug: "/pageTwo" },
]

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const results = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)

  console.log("--------------\n\n", { results })

  results.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: edge.node.frontmatter.slug,
      component: path.resolve("src/templates/post.js"),
      context: {
        pageData: edge.node,
      },
    })
  })
}
