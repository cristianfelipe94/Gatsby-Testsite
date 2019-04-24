import React from "react"
import Layout from "../components/layout"
import LayoutArt from "../components/artistComponent"
import MaxOMaticPortrait from "../components/MaxComponents/maxImg1"
import { Link } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{color: `white`}}>
      <h2>Bienvenido a este sitio de pruebas</h2>
      <p>
        El objetivo de este pequeño sitio es mostrar el trabajo artistico hecho por diversos artistas,
        y poner en practica las habilidades de desarrollo web con el framework Gatsby.
      </p>
    </div>
      <LayoutArt artistName="Max-o-Matic" artistNickname="Collage Master" imagePortrait={<MaxOMaticPortrait />} linkPath={"/maxWork"} linkTo="Ver más trabajos de Max-o-Matic">
        <p>
          El mago de las tijeras. Máximo “Max-o-matic” Tuja, ha demostrado su talento frente a las marcas más importantes del mundo. The New York Times, The Washington Post, Wired Magazine, Electronic Arts, Universal Pictures, Tumblr, Billboard y Fast Company son sólo algunas de las empresas que han logrado contar con Max en su alineación titular.
        </p>
        <p>
          Su trabajo se expone en galerías y museos de varios países y es co-fundador de The Weird Show, desde donde comparte lo mejor del collage contemporáneo mundial.
        </p>
      </LayoutArt>
      <Link to="/alexIndex">Ver a Alex Trochut</Link>
  </Layout>
)

export default IndexPage
