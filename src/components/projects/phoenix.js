import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/style.css"

import { AiFillCompass, AiFillTwitterCircle, AiFillMediumCircle } from "react-icons/ai"

import phx from "../../images/phoenix.png"

import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/hero.css"


const Phoenix = () => {
  return (
    <div className="proj">
      <Container>
        <Row>
          <Col>
            {" "}
            
            <h3>CONSULTING</h3>
            <p>
              As part of Phoenix Consulting Group, I have been part of teams conducting consulting projects for a number of clients across the healthcare industry.
              These include larger firms like
              {" "}
                <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://myriad.com/"
              >
                Myriad Genetics
              </a>
                , high-profile nonprofits like{" "}
                <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://www.mhanational.org/"
              >
                Mental Health America
              </a>
                , and cutting-edge startups like{" "}
                <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://www.linkedin.com/company/pinpointscience/"
              >
                Pinpoint Science
              </a> and{" "}
                <a
                target="_blank"
                rel="noreferrer"
                className="link link-click"
                href="https://missionbio.com/"
              >
                Mission Bio
              </a>.

              These projects have ranged from providing detailed consumer and competitor landscapes, product-to-market strategy, evaluation of strategic partnerships, and more. Each project consists of several high-quality slide deck deliverables presented to company executives.
            </p>
            <p>
            More from Phoenix:
             <a
                target="_blank"
                rel="noreferrer"
                className="icon icon-click"
                href="https://twitter.com/pcgberkeley"
              >
                <AiFillTwitterCircle size={40} style={{ marginLeft: ".5rem" }} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="icon icon-click"
                href="https://phoenix.berkeley.edu/"
              >
                <AiFillCompass size={40} style={{ marginLeft: ".5rem" }} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="icon icon-click"
                href="https://phoenixconsulting.medium.com/"
              >
                <AiFillMediumCircle size={40} style={{ marginLeft: ".5rem" }} />
              </a>
              </p>


          </Col>
          <Col md="auto">
            <Row style ={{textAlign: "center", display: "block"}}>
              <img src={phx} alt="" style={{marginTop: "3.3rem", width: "15rem" }} />
            </Row>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Phoenix