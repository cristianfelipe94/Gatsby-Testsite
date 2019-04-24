import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MaxOMaticFirstWork from "../components/MaxComponents/maxImg2"
import MaxOMaticSecondWork from "../components/MaxComponents/maxImg3"
import MaxOMaticThirdWork from "../components/MaxComponents/maxImg4"

const MaxOMaticContent = () => (
  <Layout>
    <SEO title="Max-O-Matic work" />
    <h1 style={{color: `white`}}>Max-O-Matic</h1>
    <p style={{color: `white`}}>Su trabajo se caracteriza por recortes que componen una obra.</p>
    <div style = {{maxWidth: `500px`, padding: `10px`}}>
      <MaxOMaticFirstWork />
      <MaxOMaticSecondWork />
      <MaxOMaticThirdWork/>
    </div>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/alexWork">Avanzar al trabajo de Alex Trochut.</Link>
  </Layout>
)

export default MaxOMaticContent
