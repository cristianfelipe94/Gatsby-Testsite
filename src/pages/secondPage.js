import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"


import SecondGatsbyImage from "../components/maxImg2"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hey this is a second Drawing from Max</h1>
    <p>Welcome to page 2</p>
    <div style = {{maxWidth: `500px`, padding: `10px`}}>
      <SecondGatsbyImage />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
