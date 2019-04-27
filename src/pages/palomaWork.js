import React from "react"
import Layout from "../components/layout"
import NavigationLayout from "../components/navigationComponent"
import styles from "../components/customeStyles.module.css"

import SEO from "../components/seo"

import PalomaFirstWork from "../components/PalomaComponents/palomaImg2"
import PalomaSecondWork from "../components/PalomaComponents/palomaImg3"
import PalomaThirdWork from "../components/PalomaComponents/palomaImg4"

const PalomaContent = () => (
  <Layout>
    <SEO title="Paloma Rincón work" />
    <h1 style={{color: `white`}}>Paloma Rincón</h1>
    <p style={{color: `white`}}>Su trabajo se caracteriza por fotografías alocadas con gran variedad de colores.</p>
    <div style= {{position: `relative`, overflow: `hidden`, height: `550px`}}> 
      <div className={styles.portfolioBlocksDisplayFirstPage}>
        <div className={styles.polygonClipRhomboid}>
          <PalomaFirstWork />
        </div>
        <div className={styles.polygonClipRhomboid}>
          <PalomaSecondWork />
        </div>
        <div className={styles.polygonClipRhomboid}>
          <PalomaThirdWork />
        </div>
      </div>
    </div>
    <NavigationLayout previousPath="/alexWork" previousTo="Alex Trochut" homePath="/" homeTo="Volver al inicio" nextPath="/maxWork" nextTo="Max-O-Matic"/>
  </Layout>
)

export default PalomaContent
