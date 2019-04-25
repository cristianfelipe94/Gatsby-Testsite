import React from "react"
import Layout from "../components/layout"
import NavigationLayout from "../components/navigationComponent"

import SEO from "../components/seo"

import PalomaFirstWork from "../components/PalomaComponents/palomaImg2"
import PalomaSecondWork from "../components/PalomaComponents/palomaImg3"
import PalomaThirdWork from "../components/PalomaComponents/palomaImg4"

const PalomaContent = () => (
  <Layout>
    <SEO title="Paloma Rincón work" />
    <h1 style={{color: `white`}}>Paloma Rincón</h1>
    <p style={{color: `white`}}>Su trabajo se caracteriza por fotografías alocadas con gran variedad de colores.</p>
    <div style = {{maxWidth: `500px`, padding: `10px`, margin: `0 auto`}}>
      <div style={{margin: `5% 0`}}>
        <PalomaFirstWork />
      </div>
      <div style={{margin: `5% 0`}}>
        <PalomaSecondWork />
      </div>
      <div style={{margin: `5% 0`}}>
        <PalomaThirdWork/>
      </div>
    </div>
    <NavigationLayout previousPath="/alexWork" previousTo="Alex Trochut" homePath="/" homeTo="Volver al inicio" nextPath="/maxWork" nextTo="Max-O-Matic"/>
  </Layout>
)

export default PalomaContent
