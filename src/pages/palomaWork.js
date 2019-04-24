import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import PalomaFirstWork from "../components/PalomaComponents/palomaImg2"
import PalomaSecondWork from "../components/PalomaComponents/palomaImg3"
import PalomaThirdWork from "../components/PalomaComponents/palomaImg4"

const PalomaContent = () => (
  <Layout>
    <SEO title="Paloma Rincón work" />
    <h1 style={{color: `white`}}>Paloma Rincón</h1>
    <p style={{color: `white`}}>Su trabajo se caracteriza por fotografías alocadas con gran variedad de colores.</p>
    <div style = {{maxWidth: `500px`, padding: `10px`}}>
      <PalomaFirstWork />
      <PalomaSecondWork />
      <PalomaThirdWork/>
    </div>
    <Link to="/">Volver a la página de Inicio.</Link>
    <Link to="/alexWork">Volver al trabajo de Alex Trochut.</Link>
  </Layout>
)

export default PalomaContent
