import React from "react"
import Layout from "../components/layout"
import NavigationLayout from "../components/navigationComponent"
import styles from "../components/customeStyles.module.css"

import SEO from "../components/seo"

import AlexTrochutFirstWork from "../components/AlexComponents/alexImg2"
import AlexTrochutSecondWork from "../components/AlexComponents/alexImg3"
import AlexTrochutThirdWork from "../components/AlexComponents/alexImg4"

const AlexTrochutContent = () => (
  <Layout>
    <SEO title="Alex Trochut work" />
    <h1 style={{color: `white`}}>Alex Trochut</h1>
    <p style={{color: `white`}}>Su trabajo se caracteriza por composiciones de letras.</p>
    <div className={styles.portfolioBlocksDisplay}>
      <div className={styles.polygonClipRhomboid}>
        <AlexTrochutFirstWork />
      </div>
      <div className={styles.polygonClipRhomboid}>
        <AlexTrochutSecondWork />
      </div>
      <div className={styles.polygonClipRhomboid}>
        <AlexTrochutThirdWork />
      </div>
    </div>
    <NavigationLayout previousPath="/maxWork" previousTo="Max-O-Matic" homePath="/" homeTo="Volver al inicio" nextPath="/palomaWork" nextTo="Paloma Rincón"/>
  </Layout>
)

export default AlexTrochutContent
