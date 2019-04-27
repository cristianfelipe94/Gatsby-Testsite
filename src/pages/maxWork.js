import React from "react"
import Layout from "../components/layout"
import NavigationLayout from "../components/navigationComponent"
import ArtistGallery from "../components/galleryComponent"

import MaxOMaticFirstWork from "../components/MaxComponents/maxImg2"
import MaxOMaticSecondWork from "../components/MaxComponents/maxImg3"
import MaxOMaticThirdWork from "../components/MaxComponents/maxImg4"
import MaxOMaticFourthWork from "../components/MaxComponents/maxImg5"

import styles from "../components/customeStyles.module.css"

import SEO from "../components/seo"

const MaxOMaticContent = () => (
  <Layout>
    <SEO title="Max-O-Matic work" />
    <h1 style={{color: `white`}}>Max-O-Matic</h1>
    <p style={{color: `white`}}>Su trabajo se caracteriza por recortes que componen una obra.</p>
    <ArtistGallery artworkOne={<MaxOMaticFirstWork />} artworkTwo={<MaxOMaticSecondWork />} artworkThree={<MaxOMaticThirdWork />} artworkFour={<MaxOMaticFourthWork />}/>
    <NavigationLayout previousPath="/palomaWork" previousTo="Paloma Rincón" homePath="/" homeTo="Volver al inicio" nextPath="/alexWork" nextTo="Alex Trochut"/>
  </Layout>
)

export default MaxOMaticContent
