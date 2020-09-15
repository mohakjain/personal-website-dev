import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/nav-bar.css"

import resume from "../assets/resume.pdf"
import logo from "../assets/simple-logo.png"

const NavBar = ({}) => {
  return (
    <Container className="acontainer" fluid>
      <Navbar className="all">
        <Navbar.Brand  className="navbar-item">
          
          <Nav.Item className="all">
          <Link to="/" className="navbar-link nav-click">
            MOHAK JAIN 

  <img src={logo} alt="" style={{ height: "1.3rem",  }} />

          </Link>
          </Nav.Item>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navBarResponsive" />
        <Navbar.Collapse id="navBarResponsive">
          <Nav defaultActiveKey="/home" className="ml-auto">
            {/* <Nav.Item className="navbar-item">
              <Link
                to="/about"
                className="navbar-link nav-click"
                activeClassName="active"
              >
                About
              </Link>
            </Nav.Item>
             */}
            <Nav.Item className="navbar-item">
              <Link
                to="/blog"
                className="navbar-link nav-click"
                activeClassName="active"
              >
                BLOG
              </Link>
            </Nav.Item>

            <Nav.Item className="navbar-item">
              <Link
                to="/portfolio"
                className="navbar-link nav-click"
                activeClassName="active"
              >
                PORTFOLIO
              </Link>
            </Nav.Item>
            

            <Nav.Item className="navbar-item">
              <Link
                className="navbar-link nav-click"
                activeClassName="active"
              >
                <a className="navbar-link nav-click"
                activeClassName="active"
              href={resume}
              target="_blank"
              rel="nofollow noopener noreferrer"> 
                 Résumé (pdf) 
                </a>
              </Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default NavBar
