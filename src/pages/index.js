import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <section className="section">
          <div className="container has-text-centered">
            <h1 className="title">
              Predict Iris Species using Linear Regression
            </h1>
            <h2 className="subtitle">
              Input values for the following attributes and hit submit. The
              application will predict the species of the Iris flower
              accordingly.
            </h2>
            <div className="my-6"></div>
            <Form />
          </div>
        </section>
      </Layout>
    )
  }
}
