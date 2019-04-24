import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import LayoutArt from "../components/artistComponent"
import AlexTrochutPortrait from "../components/AlexComponents/alexImg1"
import SEO from "../components/seo"

const AlexIndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{color: `white`}}>
      <h2>Bienvenido a este sitio de pruebas</h2>
      <p>
        El objetivo de este pequeño sitio es mostrar el trabajo artistico hecho por diversos artistas,
        y poner en practica las habilidades de desarrollo web con el framework Gatsby.
      </p>
    </div>
      <LayoutArt artistName="Alex Trochut" artistNickname="Lettering" imagePortrait={<AlexTrochutPortrait />} linkPath={"/alexWork"} linkTo="Ver más trabajos de Alex Trochut">
        <p>
          Virtuoso de las letras, Alex nació en 1981 en Barcelona y, 
          luego de unos años de entrenamiento en Elisava, 
          decidió formar su propio estudio, antes de mudarse a la ciudad de Nueva York, 
          en donde ha sido convocado para demostrar su talento ante clientes de la talla de The Rolling Stones, 
          Arcade Fire, Nike, British Airways, The New York Times, The Guardian y Esquire, entre muchos otros.
        </p>
        <p>
          En la Copa Domestika se ubicará en la delantera del equipo de Europa.
        </p>
      </LayoutArt>
      <Link to="/palomaIndex">Ver a Paloma Rincón</Link>
  </Layout>
)

export default AlexIndexPage
