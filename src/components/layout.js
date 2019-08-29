/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div style={{margin: `0 auto`, maxWidth: `960px`, padding: `5% 10%`}}>
          <main>{children}</main>
          <footer style={{padding: `2% 0`, color: `white`}}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            <p style={{display: `inline-block`, padding: `0 1%`}}>by</p>
            <a href= 'https://www.instagram.com/stoned_christ/' target='_blank'>Cristian Felipe.</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
