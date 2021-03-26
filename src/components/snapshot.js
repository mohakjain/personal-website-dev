import React from "react"
import Container from "react-bootstrap/Container"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.css"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/hero.css"

import Project from "../components/project"

const Snapshot = () => {
  return (
    <div className="proj">
      <Project />
      <Container> 
      <h2> OFF THE SHELF:</h2>

    <h4> BOOKS: </h4> <p> <i> Dune </i> by Frank Herbert, <i> The Secret History </i> by Donna Tartt, & <i>Love in the Time of Cholera </i> by Gabriel Garcia Marquez
      </p>
      </Container>
      
     
    </div>
  )
}

export default Snapshot