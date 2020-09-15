import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import Img from "gatsby-image"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext


let image = post.frontmatter.image.childImageSharp.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Post" />
      <div className="title">
      <Img fluid={image} style={{height:"22rem"}}/> 
        <Container>
          <article>
            <header>
              
              <h1
                style={{
                  marginBottom: 0,
                  fontSize: '400%',
                  paddingBottom: 0,
                }}
              >
                {post.frontmatter.title}
              </h1>
              
              <code
                className="small"
              >
                Written {post.frontmatter.date} by Mohak Jain
              </code>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr />
            <footer></footer>
          </article>
          <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev" className="link link-click">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next" className="link link-click">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
        </Container>
      </div>

      
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 12000) {
              ...GatsbyImageSharpFluid
            }
          }
      }
    }
    }
  }
`
