import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.css"

import IconsDark from "./icons-dark"
import logo from "../assets/simple-logo-white.png"

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md="auto">
            <p style={{ fontFamily: "Unica", marginBottom: 0 }}>
              {" "}
              MOHAK JAIN {new Date().getFullYear()}
            </p>
            <p style={{ fontFamily: "Unica", marginTop: 0 }}>
              {" "}
              BUILT WITH{" "}
              <a
                target="_blank"
                className="link link-click"
                href="https://gatsbyjs.com"
                rel="noreferrer"
                style={{ fontFamily: "Unica", marginTop: 0 }}
              >
                {" "}
                GATSByJS{" "}
              </a>{" "}
            </p>
          </Col>
          <Col style ={{textAlign: "center"}}>
          <img src={logo} alt="" style={{ height: "3rem",  }} />
          </Col>
          <Col style={{ textAlign: "right" }} md="auto">
            <IconsDark />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
