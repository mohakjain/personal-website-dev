import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"

import "../styles/style.css"

const NotFoundPage = () => (
  <Layout>
    <div className="bigheader">
     
          <Link to="/" className="link link-click">
            {" "}
            <center>  Error 404 </center>{" "}
          </Link>
       
    </div>
  </Layout>
)

export default NotFoundPage
