import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/style.css"

import { AiFillGithub } from "react-icons/ai"

import code from "../../images/code.png"

import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/hero.css"


const NumC = () => {
  return (
    <div className="proj">
      <Container>
        <Row>
          <Col>
            {" "}
            
            <h3>NumC</h3>
            <p>
            NumC is a recreation of the popular Python library NumPy,
                written in C and built with an emphasis on optimizing matrix
                operations. NumC is the {" "}
                <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://cs61c.org/su20/projects/proj4/"
              >
                final project
              </a>
                
                
  {" "} for {" "}
                <a
                target="_blank"
                rel="noreferrer"
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
              <p> Check it out here: <a
                target="_blank"
                rel="noreferrer"
                className="icon icon-click"
                href="https://github.com/mohakjain/numc-Public-"
              >
                <AiFillGithub size={40} style={{ marginLeft: ".5rem" }} />
              </a> </p>
              
          </Col>
          <Col md="auto">
            <Row>
              <img src={code} alt="" style={{ height: "10rem", marginTop: "1.3rem" }} />
            </Row>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NumC