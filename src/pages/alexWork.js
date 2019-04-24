import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import AlexTrochutFirstWork from "../components/AlexComponents/alexImg2"
import AlexTrochutSecondWork from "../components/AlexComponents/alexImg3"
import AlexTrochutThirdWork from "../components/AlexComponents/alexImg4"

const AlexTrochutContent = () => (
  <Layout>
    <SEO title="Alex Trochut work" />
    <h1 style={{color: `white`}}>Alex Trochut</h1>
    <p style={{color: `white`}}>Su trabajo se caracteriza por composiciones de letras.</p>
    <div style = {{maxWidth: `500px`, padding: `10px`}}>
      <AlexTrochutFirstWork />
      <AlexTrochutSecondWork />
      <AlexTrochutThirdWork />
    </div>
    <Link to="/">Volver a la página de Inicio.</Link>
    <Link to="/maxWork">Volver al trabajo de Max-O-Matic.</Link>
    <Link to="/palomaWork">Avanzar al trabajo de Paloma Rincón.</Link>
  </Layout>
)

export default AlexTrochutContent
