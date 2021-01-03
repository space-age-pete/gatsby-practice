import React from "react"

function Post({ pageContext: { pageData } }) {
  return (
    <>
      <h1>{pageData.title}</h1>
      <p>{pageData.body}</p>
    </>
  )
}

export default Post
