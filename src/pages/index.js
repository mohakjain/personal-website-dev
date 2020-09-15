import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

import Project from "../components/project"
import Snapshot from "../components/snapshot"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <Snapshot />

  </Layout>
)

export default IndexPage
