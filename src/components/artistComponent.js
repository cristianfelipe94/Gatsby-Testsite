import React from "react"
import styles from "../components/customeStyles.module.css"
import "./layout.css"
import { Link } from "gatsby"

const artistLayout = ({artistName, artistNickname, imagePortrait, children, linkTo, linkPath}) => (
    <div className={styles.actionOpenWidth} style={{color: `white`}}>
    <div style={{overflow: `hidden`, height: `65px`, position: `relative`, width: `632px`, margin: `0 auto`}}>
      <h2 style={{fontSize: `5em`, width: `632px`, margin: `0% auto`}}>{artistName}</h2>
    </div>
    <div className={styles.contentOpenWidth}>
      <h3 style={{width: `180px`, margin: `0 auto`, padding: `2% 0%`}}>{artistNickname}</h3>
      <div>
        <div style={{minWidth: `35%`, position: `absolute`, left: `0%`}}>
          {imagePortrait}
        </div>
        <div style={{maxWidth: `55%`, position: `absolute`, right: `0%`}}>
          {children}
          <Link to={linkPath}>{linkTo}</Link>
        </div>
      </div>
    </div>
    <div style={{overflow: `hidden`, height: `65px`, position: `relative`, width: `632px`, margin: `0 auto`}}>
      <h2 style={{fontSize: `5em`, width: `632px`, margin: `0% auto`, position: `absolute`, top: `-65px`}}>{artistName}</h2>
    </div>
  </div>
)

export default artistLayout