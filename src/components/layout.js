import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import CustomNavbar from "./navBar"

const Layout = ({ children, gameCode, players }) => {
  return (
    <>
      <Container className="px-0 main">
        <CustomNavbar players={players} />
        <Row noGutters>
          <Col>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>

      <Container fluid className="px-0">
        <Row noGutters>
          <Col className="footer-col">
            <footer>
              <span>Game code: {gameCode}</span>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Layout
