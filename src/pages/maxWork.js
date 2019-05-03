import React from "react"
import Layout from "../components/layout"
import NavigationLayout from "../components/navigationComponent"
import ArtistMaxGallery from "../components/galleryMaxComponent"

import SEO from "../components/seo"

const MaxOMaticContent = () => (
  <Layout>
    <SEO title="Max-O-Matic work" />
    <h1 style={{color: `white`}}>Max-O-Matic</h1>
    <p style={{color: `white`}}>Su trabajo se caracteriza por recortes que componen una obra.</p>
    <ArtistMaxGallery />
    <NavigationLayout previousPath="/palomaWork" previousTo="Paloma Rincón" homePath="/" homeTo="Volver al inicio" nextPath="/alexWork" nextTo="Alex Trochut"/>
  </Layout>
)

export default MaxOMaticContent
