import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"
import DixitIcon from "../images/dixit.png"
import PlayerCardsDeck from "./playerCardsDeck/playerCardsDeck"

const CustomNavbar = ({ players }) => {
  return (
    <>
      <Navbar
        sticky="top"
        variant="light"
        bg="light"
        expand="md"
        id="site-navbar"
        className="align-items-start"
      >
        <Link to="/" className="link-no-style">
          <Navbar.Brand>
            <img
              src={DixitIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="dixit game"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <PlayerCardsDeck players={players || []}></PlayerCardsDeck>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CustomNavbar
