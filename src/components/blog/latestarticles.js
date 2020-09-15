import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/style.css"

import { AiFillGithub } from "react-icons/ai"

import code from "../../images/code.png"

import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/hero.css"


const LatestArticles = () => {
  return (
    <div className="proj">
      <Container>
        <Row>
          <Col>
            {" "}
            
            <h1>NumC</h1>
            <p>
            NumC is a recreation of the popular Python library NumPy,
                written in C and built with an emphasis on optimizing matrix
                operations. NumC is the {" "}
                <a
                target="_blank"
                className="link link-click"
                href="https://cs61c.org/su20/projects/proj4/"
              >
                final project
              </a>
                
                
  {" "} for {" "}
                <a
                target="_blank"
                className="link link-click"
                href="https://cs61c.org/"
              >
                CS61C, Computer
                Architecture
              </a>

                . My solution was ranked in the top 5 fastest
                solutions in the course.{" "}
            </p>
            {" "}
              <h4> Check it out here: <a
                target="_blank"
                className="icon icon-click"
                href="https://github.com/mohakjain/numc-Public-"
              >
                <AiFillGithub size={40} style={{ marginLeft: ".5rem" }} />
              </a> </h4>
              
          </Col>
          <Col md="auto">
            <Row>
              <img src={code} style={{ height: "10rem", marginTop: "1.3rem" }} />
            </Row>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LatestArticles