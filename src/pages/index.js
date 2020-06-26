import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledDocx } from "../components/StyledComponents/styleddocx"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    index: docx(name: {eq: "Index"}) {
      content
    }
  }
`)

return(
  <Layout>
    <SEO title="Waldkindergarten Plankenfels" />
    <StyledDocx htmlContent={data.index.content} />
  </Layout>
)}

export default IndexPage