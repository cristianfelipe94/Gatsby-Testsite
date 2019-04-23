import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import styles from "../components/customeStyles.module.css"
import MainGatsbyImage from "../components/maxImg1"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{color: `white`}}>
      <h2>Bienvenido a este sitio de pruebas</h2>
      <p>
        El objetivo de este pequeño sitio es mostrar el trabajo artistico hecho por Max-o-Matic,
        y poner en practica las habilidades de desarrollo web con el framework Gatsby.
      </p>
      <div className={styles.actionOpenWidth}>
        <div style={{overflow: `hidden`, height: `65px`, position: `relative`, width: `542px`, margin: `0 auto`}}>
          <h2 style={{fontSize: `5em`, width: `555px`, margin: `0% auto`}}>Max-o-Matic</h2>
        </div>
        <div className={styles.contentOpenWidth}>
          <h3 style={{width: `180px`, margin: `0 auto`, padding: `2% 0%`}}>Collage Master</h3>
          <div>
            <div style={{minWidth: `35%`, position: `absolute`, left: `0%`}}>
              <MainGatsbyImage />
            </div>
            <div style={{maxWidth: `55%`, position: `absolute`, right: `0%`}}>
              <p>
                El mago de las tijeras. Máximo “Max-o-matic” Tuja, ha demostrado su talento frente a las marcas más importantes del mundo. The New York Times, The Washington Post, Wired Magazine, Electronic Arts, Universal Pictures, Tumblr, Billboard y Fast Company son sólo algunas de las empresas que han logrado contar con Max en su alineación titular.
              </p>
              <p>
                Su trabajo se expone en galerías y museos de varios países y es co-fundador de The Weird Show, desde donde comparte lo mejor del collage contemporáneo mundial.
              </p>
              <Link to="/secondPage">Ver más trabajos de Max-o-Matic</Link>
            </div>
          </div>
        </div>
        <div style={{overflow: `hidden`, height: `65px`, position: `relative`, width: `542px`, margin: `0 auto`}}>
          <h2 style={{fontSize: `5em`, width: `555px`, margin: `0% auto`, position: `absolute`, top: `-65px`}}>Max-o-Matic</h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
