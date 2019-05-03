import React from "react"
import Layout from "../components/layout"
import NavigationLayout from "../components/navigationComponent"
import ArtistAlexGallery from "../components/galleryAlexComponent"

import SEO from "../components/seo"

const AlexTrochutContent = () => (
  <Layout>
    <SEO title="Alex Trochut work" />
    <h1 style={{color: `white`}}>Alex Trochut</h1>
    <p style={{color: `white`}}>Su trabajo se caracteriza por composiciones de letras.</p>
    <ArtistAlexGallery />
    <NavigationLayout previousPath="/maxWork" previousTo="Max-O-Matic" homePath="/" homeTo="Volver al inicio" nextPath="/palomaWork" nextTo="Paloma Rincón"/>
  </Layout>
)

export default AlexTrochutContent
