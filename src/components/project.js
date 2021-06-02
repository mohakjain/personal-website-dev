import React from "react"
import Container from "react-bootstrap/Container"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.css"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/hero.css"

import NumC from "./projects/numc"
import ReadySetHealth from "./projects/readysethealth"
import Phoenix from "./projects/phoenix"

const Project = () => {
  return (
    <div className="proj">
      <Container> 
      <h2>PROJECTS: </h2>
      </Container>
      
      {/* Projects go below in order of appearance: */}

      <ReadySetHealth />
      <NumC />
      <Phoenix />
    </div>
  )
}

export default Project