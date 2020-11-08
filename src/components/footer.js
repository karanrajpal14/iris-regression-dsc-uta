import React from "react"

const Footer = () => (
  <footer
    className="footer"
  >
    <div className="container has-text-centered">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  </footer>
)

export default Footer
