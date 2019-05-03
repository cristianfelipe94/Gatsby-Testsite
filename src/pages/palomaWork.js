import React from "react"
import Layout from "../components/layout"
import NavigationLayout from "../components/navigationComponent"
import ArtistPalomaGallery from "../components/galleryPalomaComponent"

import SEO from "../components/seo"

const PalomaContent = () => (
  <Layout>
    <SEO title="Paloma Rincón work" />
    <h1 style={{color: `white`}}>Paloma Rincón</h1>
    <p style={{color: `white`}}>Su trabajo se caracteriza por fotografías alocadas con gran variedad de colores.</p>
    <ArtistPalomaGallery />
    <NavigationLayout previousPath="/alexWork" previousTo="Alex Trochut" homePath="/" homeTo="Volver al inicio" nextPath="/maxWork" nextTo="Max-O-Matic"/>
  </Layout>
)

export default PalomaContent
