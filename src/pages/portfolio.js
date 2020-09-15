import React from "react"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.css"


const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />

    <div className="title">
    <Container>
    <h1> PORTFOLIO </h1>
    {/* Featured Article */}
    <p> I'm still in the process of moving my portfolio over to this new website. Please feel free to check out {" "}<a
                target="_blank"
                className="link link-click"
                rel="noreferrer"
                href="https://mohakjain.myportfolio.com/"
              >
               an older version of my portfolio.
              </a>  </p>
    {/* Recent Articles List */}
  
    </Container>
    </div>

    {/* Gallery */}
    
    {/* Journal */}

  </Layout>
)

export default Portfolio
