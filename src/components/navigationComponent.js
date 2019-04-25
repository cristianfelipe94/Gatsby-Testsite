import React from "react"
import styles from "../components/customeStyles.module.css"
import "./layout.css"
import { Link } from "gatsby"

const NavigationLayout = ({previousPath, previousTo, homePath, homeTo, nextPath, nextTo}) => (
  <div className={styles.navLayoutDisplay}>
    <Link to={previousPath}>{previousTo}</Link>
    <Link to={homePath}>{homeTo}</Link>
    <Link to={nextPath}>{nextTo}</Link>
  </div>
)

export default NavigationLayout