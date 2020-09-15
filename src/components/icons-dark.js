import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.css"

import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai"

const IconsDark = () => {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        className="icon-dark icon-click"
        href="https://www.linkedin.com/in/mohak-jain/"
      >
        <AiFillLinkedin size={40} />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        className="icon-dark icon-click"
        href="https://github.com/mohakjain"
      >
        <AiFillGithub size={40} style={{ marginLeft: "1.5rem" }} />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        className="icon-dark icon-click"
        href="mailto:mohakjain@berkeley.edu"
      >
        <AiFillMail size={40} style={{ marginLeft: "1.5rem" }} />
      </a>
    </div>
  )
}

export default IconsDark
