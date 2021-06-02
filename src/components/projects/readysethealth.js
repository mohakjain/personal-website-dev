import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/style.css"

import { AiFillTwitterCircle, AiFillCompass } from "react-icons/ai"

import accelerator from "../../images/accelerator.png"

import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/hero.css"


const ReadySetHealth = () => {
  return (
    <div className="proj">
      <Container>
        <Row>
          <Col>
            {" "}
            
            <h3>READY, SET, HEALTH!</h3>
            <p>
            Ready, Set, Health! is the demo day event organized by the team I co-lead in Spring 2021 as a part of Berkeley's Phoenix Consulting Group.
            We set out with the goal of launching a healthcare accelerator for early stage projects in Berkeley and kicked things off with
            a virtual demo day event. The day consisted of twelve mainstage pitches and virtual networking booths for over 20 exciting health-tech startups. Over 30 investors were in attendance.
            
            The event was sponsored by SOMPO Digital Labs, who provided the winning startup (Rubitection) a $25,000 cash prize.   {" "}
              
            </p>
            Learn more:
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
                href="https://www.readysethealth.io/"
              >
                <AiFillCompass size={40} style={{ marginLeft: ".5rem" }} />
              </a>
              
          </Col>
          <Col md="auto">
            <Row style ={{textAlign: "center", display: "block"}}>
              <img src={accelerator} alt="" style={{ height: "10rem", marginTop: "1.3rem" }} />
            </Row>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ReadySetHealth