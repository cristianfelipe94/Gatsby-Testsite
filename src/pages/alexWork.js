import React from "react"
import Layout from "../components/layout"
import NavigationLayout from "../components/navigationComponent"
import SEO from "../components/seo"

import AlexTrochutFirstWork from "../components/AlexComponents/alexImg2"
import AlexTrochutSecondWork from "../components/AlexComponents/alexImg3"
import AlexTrochutThirdWork from "../components/AlexComponents/alexImg4"

const AlexTrochutContent = () => (
  <Layout>
    <SEO title="Alex Trochut work" />
    <h1 style={{color: `white`}}>Alex Trochut</h1>
    <p style={{color: `white`}}>Su trabajo se caracteriza por composiciones de letras.</p>
    <div style = {{maxWidth: `500px`, padding: `10px`, margin: `0 auto`}}>
      <div style={{margin: `5% 0`}}>
        <AlexTrochutFirstWork />
      </div>
      <div style={{margin: `5% 0`}}>
        <AlexTrochutSecondWork />
      </div>
      <div style={{margin: `5% 0`}}>
        <AlexTrochutThirdWork />
      </div>
    </div>
    <NavigationLayout previousPath="/maxWork" previousTo="Max-O-Matic" homePath="/" homeTo="Volver al inicio" nextPath="/palomaWork" nextTo="Paloma Rincón"/>
  </Layout>
)

export default AlexTrochutContent
