import React from "react"
import Container from "react-bootstrap/Container"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.css"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/hero.css"

import NumC from "./projects/numc"

const Project = () => {
  return (
    <div className="proj">
      <Container> 
      <h2>EXAMPLE WORK: </h2>
      </Container>
      
      {/* Projects go below in order of appearance: */}

      <NumC />
    </div>
  )
}

export default Project