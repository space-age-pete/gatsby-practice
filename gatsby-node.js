const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const pageData = [
  { title: "page one", body: "this is page one", slug: "/pageOne" },
  { title: "page two", body: "this is page two", slug: "/pageTwo" },
]

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  pageData.forEach(page => {
    createPage({
      path: page.slug,
      component: path.resolve("src/templates/post.js"),
      context: {
        pageData: page,
      },
    })
  })
}
