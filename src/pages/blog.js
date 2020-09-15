import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.css"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"


// import Featured from "../components/blog/featured"
// import LatestArticles from "../components/blog/latestarticles"

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="title">  {/* Here is where to add a background vector image to this page */}
        <Container>
          <h1> Blog </h1>
          <p>
            {" "}
            I write about biotechnology startups and other things that interest
            me.{" "}
          </p>
          <hr style={{ width: "1" }} />
          
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              let image = node.frontmatter.image.childImageSharp.fluid

              return (
                <>
                <Row style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                  <Col>
                  
                  <Link
                              className="link-title link-title-click"
                              style={{ boxShadow: `none` }}
                              to={node.fields.slug}
                            >
                                    <Img fluid={image} style={{height:"18rem"}}/> 

                            </Link></Col>

                  <Col>
                    <div className="leftBar">
                      <article key={node.fields.slug}>
                        <header>
                        <p className="tags"> {node.frontmatter.tags} </p>
                        <hr style={{ width: "75%", backgroundColor: "black", height: "5px" }} />
                        <code className="small">{node.frontmatter.date}</code>
                         
                          <h1>
                            <Link
                              className="link-title link-title-click"
                              style={{ boxShadow: `none` }}
                              to={node.fields.slug}
                            >
                              {title}
                            </Link>
                          </h1>
                          
                        </header>
                        <section>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                node.frontmatter.description || node.excerpt,
                            }}
                          />
                        </section>
                      </article>
                    </div>
                  </Col>
                  </Row>
                </>
              )
            })}
          
        </Container>
      </div>
    </Layout>
  )
}

export default Blog

// const Blog = () => (
//   <Layout>
//     <SEO title="Blog" />
//     <div className="title">
//     <Container>
//     <h1> <center> Blog </center> </h1>
//     {/* Featured Article */}
//     <Featured />
//     {/* Recent Articles List */}
//     <LatestArticles />
//     </Container>
//     </div>
//   </Layout>
// )

// export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 12000) {
                  ...GatsbyImageSharpFluid
                }
              }
          }
          tags
          }
        }
      }
    }
  }
`
