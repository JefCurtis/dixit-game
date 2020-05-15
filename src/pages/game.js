import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Alert from "react-bootstrap/Alert"
import Layout from "../components/layout"
import { GiCardRandom } from "react-icons/gi"
import { Link } from "gatsby"

const GamePage = ({ location }) => {
  const gameCode = location.state ? location.state.gameCode : null
  if (gameCode) {
    return (
      <Layout pageInfo={{ pageName: "game", gameCode }}>
        <Container className="mt-3">
          <Row>
            <Col>
              <h4 className="mb-4">New game screen</h4>
              <p>game code: {location.state.gameCode}</p>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
  return (
    <Layout pageInfo={{ pageName: "game", gameCode }}>
      <Container className="mt-5 text-center">
        <Row>
          <Col>
            <Alert className="mr-3 ml-3" variant={"info"}>
              <h4 className="mb-1">
                <GiCardRandom className="mr-1 mb-2" />
                Ack!
              </h4>
              <p className="mb-1">We can't find your game.</p>
              <p>
                Try creating a{" "}
                <Alert.Link>
                  <Link to="/">new one</Link>
                </Alert.Link>
                , or join an{" "}
                <Alert.Link>
                  <Link to="/existing">existing game</Link>
                </Alert.Link>
                .
              </p>
            </Alert>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default GamePage
