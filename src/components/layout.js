import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import CustomNavbar from "./navBar"

const Layout = ({ children, pageInfo, gameCode }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container className="px-0 main">
          <CustomNavbar pageInfo={pageInfo} />
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
    )}
  />
)

export default Layout
