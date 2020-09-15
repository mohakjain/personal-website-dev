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
      <Container> 
      <h1> RECENTLY </h1>
      <h3> MEDIA I'VE BEEN CONSUMING LATELY:</h3>

    <h4> BOOKS: </h4> <p> <i> Dune </i> by Frank Herbert, <i> Kafka on the Shore </i> by Haruki Murakami, The {" "} 
    <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://www.deeplearningbook.org/"
              >
                 <i> Deep Learning Book </i>
              </a> by Ian Goodfellow, Yoshua Bengio, and Aaron Courville
    
      </p>
      <h4> PUBLICATIONS: </h4> <p>
                {" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://www.theatlantic.com/"
              >
                 The Atlantic,
              </a>
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://www.growbyginkgo.com/"
              >
                 Grow by Ginkgo,
              </a> {" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://www.technologyreview.com/"
              >
                 MIT Technology Review
              </a>
              
              </p>
              <h4> YOUTUBE CHANNELS: </h4>
    <p>
    <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw"
              >
                 3Blue1Brown,
              </a>{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://www.youtube.com/c/CrackingTheCryptic/"
              >
                 Cracking The Cryptic,
              </a>
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://www.youtube.com/channel/UCFhXFikryT4aFcLkLw2LBLA"
              >
                 NileRed
              </a> {" "}
              

    </p>
      </Container>
      
      <Project />
    </div>
  )
}

export default Snapshot