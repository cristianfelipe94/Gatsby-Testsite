import React from "react"
import Layout from "../components/layout"
import LayoutArt from "../components/artistComponent"
import PalomaPortrait from "../components/PalomaComponents/palomaImg1"
import SEO from "../components/seo"

const PalomaIndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{color: `white`}}>
      <h2>Bienvenido a este sitio de pruebas</h2>
      <p>
        El objetivo de este pequeño sitio es mostrar el trabajo artistico hecho por diversos artistas,
        y poner en practica las habilidades de desarrollo web con el framework Gatsby.
      </p>
    </div>
      <LayoutArt artistName="Paloma Rincón" artistNickname="Fotografía" imagePortrait={<PalomaPortrait />} linkPath={"/palomaWork"} linkTo="Ver más trabajos de Paloma Rincón">
        <p>
        Las jugadas y los juegos de Paloma son visuales. 
        Ha logrado crear universos en los que la fotografía se mezcla con la escultura, 
        el diseño, la instalación y la ilustración.
        </p>
        <p>
          Sus imágenes se caracterizan por los colores vivos, 
          las composiciones gráficas y las yuxtaposiciones inesperadas. 
          Su trabajo es el resultado de mucho entrenamiento y planeación, 
          los cuales resultan en la selección de los props correctos, así como en las texturas y las técnicas de iluminación, 
          buscando una armonía total de la imagen.
        </p>
        <p>
          Desde Coca-Cola hasta Absolut Vodka, pasando por Google e Ikea, 
          son muchas las grandes empresas que han tenido a Paloma entre sus filas.
        </p>
      </LayoutArt>
  </Layout>
)

export default PalomaIndexPage
