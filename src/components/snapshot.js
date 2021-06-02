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
      <h2> RECENT MEDIA:</h2>

    <h4> BOOKS: </h4> <p> <i> Dune </i> by Frank Herbert, <i> The Secret History </i> by Donna Tartt, & <i>The Dark Forest </i> by Liu Cixin
      </p>
    <h4> ALBUMS: </h4> <p> <i> Punisher </i> by Phoebe Bridgers, <i> Little Dark Age </i> by MGMT, & <i>Nurture </i> by Porter Robinson
      </p>
      </Container>
      
     
    </div>
  )
}

export default Snapshot