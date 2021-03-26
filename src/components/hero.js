import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/hero.css"

import me from "../images/me.png"
import Icons from "./icons"
import logo from "../assets/simple-logo.png"

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col>
            {" "}
            <h1>ABOUT</h1>
            <p>
              Hi! I'm Mohak, an undergraduate at{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://berkeley.edu/"
              >
                UC Berkeley
              </a>{" "}
               studying
              EECS and bioengineering.
            </p>
          
            <p>
              As of now, this summer I will be starting as a software engineering intern at{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://datavant.com/"
              >
                Datavant.
              </a>{" "}
              I'm a researcher at the{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://doudnalab.org/"
              >
                Doudna Lab
              </a>{" "}
              working on a project involving computational and wetlab processing of biological samples and NGS data to identify novel CRISPR systems.
              I am also concurrently a researcher at the{" "}
              
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://goodarzilab.ucsf.edu/"
              >
                Goodarzi Lab at UCSF
              </a>{" "}
              working on a project involving the application of graph convolutional neural networks & deep learning to predict 3D genome architecture, which is heavily implicated in cancer biology.
              I've also previously worked at{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://enevolv.com/about.htm"
              >
                enEvolv
              </a>
              , a synthetic biology startup where I worked on developing novel
              gene editing tools in yeast.
            </p>

            <p>
              At Berkeley, I'm a principal for{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://phoenix.berkeley.edu/"
              >
                Phoenix Consulting Group
              </a>
              , specialized in consulting for companies in the healthcare and
              life sciences space. I'm co-leading a team launching a healthcare accerator serving early-stage projects on campus. We're hosting a demo day this semester. For more information, check out{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://www.readysethealth.io/"
              >
                Ready, Set, Health!
              </a>

              
              </p>
              <p>
              
            </p>
            <p>
              I write about biotech startups and other things that make me
              excited on my{" "}
              <Link className="link link-click" to="/blog">
                blog
              </Link>
              . In my free time, I occasionally like to draw,{" "}
              {/* make{" "}
              <Link className="link link-click" to="/portfolio">
                art
              </Link>{" "} */}
               read fiction, and {" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://afx.dance/"
              >
                hip hop dance
              </a>
              . My principal interests lie in venture capital, synthetic
              biology, gene editing tools, and machine learning. If any of these
              excite you too, please feel free to contact me via email at mohakjain@berkeley.edu! I'd love to chat.
            </p>
            <p>
              You can also find me on {" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://www.linkedin.com/in/mohak-jain/"
                >
                LinkedIn
              </a>{" "}
               or{" "} <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://github.com/mohakjain"
                >
                GitHub
              </a>.
            
            </p>
          </Col>
          <Col md="auto" style={{textAlign: "center", display: "block", margin: "auto"}}>
            
              <img src={me} alt="" style={{ height: "20rem", }} />
           
          </Col>
        </Row>
        <Row style={{textAlign: "center", display: "block"}}> 
        <center> <img src={logo} alt="" style={{height: "5rem", marginTop: "1.3rem"}} /> </center>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
