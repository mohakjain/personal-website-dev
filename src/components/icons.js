import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.css"

import { AiFillLinkedin, AiFillGithub, } from "react-icons/ai"

const Icons = () => {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        className="icon icon-click"
        href="https://www.linkedin.com/in/mohak-jain/"
      >
        <AiFillLinkedin size={40} />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        className="icon icon-click"
        href="https://github.com/mohakjain"
      >
        <AiFillGithub size={40} style={{ marginLeft: "1.5rem" }} />
      </a>

    </div>
  )
}

export default Icons
