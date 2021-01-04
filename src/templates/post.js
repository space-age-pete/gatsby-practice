import React from "react"

function Post({ pageContext: { pageData } }) {
  return (
    <>
      <h1>{pageData.frontmatter.title}</h1>
      {/* <p>{pageData.body}</p> */}
    </>
  )
}

export default Post
