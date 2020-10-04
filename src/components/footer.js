import React from "react"

const Footer = () => (
  <footer
    style={{
      marginTop: `2rem`,
    }}
  >
    <div className="container">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  </footer>
)

export default Footer
