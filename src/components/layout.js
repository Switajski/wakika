/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          address
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        links={[
          { url: "/anfahrt/", name: "Kontakt & Anfahrt" },
          { url: "/termine/", name: "Termine" },
          { url: "/zeiten/", name: "Zeiten & Gebühren" },
          { url: "/downloads/", name: "Downloads" },
          { url: "/bilder/", name: "Bilder" },
          { url: "/ueberuns/", name: "Über uns" },
        ]}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <main>{children}</main>
          <Footer address={data.site.siteMetadata.address} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout