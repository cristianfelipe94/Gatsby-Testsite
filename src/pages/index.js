import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainGatsbyImage from "../components/maxImg1"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{height: `100vh`, color: `white`}}>
      <h2>Bienvenido a este sitio de pruebas</h2>
      <p>
        El objetivo de este pequeño sitio es mostrar el trabajo artistico hecho por Max-o-Matic,
        y poner en practica las habilidades de desarrollo web con el framework Gatsby.
      </p>
      <div style={{overflow: `hidden`, height: `65px`}}>
        <h2 style={{fontSize: `5em`, width: `555px`, margin: `0% auto`}}>Max-o-Matic</h2>
      </div>
      <h3 style={{width: `180px`, margin: `0 auto`, padding: `2% 0% 5%`}}>Collage Master</h3>
      <div style={{position: `relative`, height: `70vh`, width: `100%`}}>
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
      <div style={{overflow: `hidden`, height: `65px`}}>
        <h2 style={{fontSize: `5em`, width: `555px`, margin: `0% auto`, top: `-65px`, right: `0px`, left: `0px`,position: `absolute`}}>Max-o-Matic</h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
