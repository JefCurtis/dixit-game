import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import { Link, navigate } from "gatsby"
import api from "../services/api"

const NewPage = () => {
  const [playerName, setPlayerName] = useState("")
  const [deckVersion, setDeckVersion] = useState("")

  const handleNewGame = event => {
    event.preventDefault()
    api
      .createGame({ deckVersion, playerName })
      .then(id => navigate("/game", { state: { id } }))
  }

  return (
    <Layout pageInfo={{ pageName: "existing" }}>
      <Container className="mt-3">
        <Row>
          <Col>
            <h4 className="mb-4">Create a new game</h4>
            <Form onSubmit={handleNewGame}>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={playerName}
                  placeholder="Player name"
                  onChange={e => setPlayerName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  value={deckVersion}
                  placeholder="Game deck"
                  onChange={e => setDeckVersion(e.target.value)}
                />
                <Form.Text className="text-muted">
                  <a
                    href="https://boardgamegeek.com/geeklist/171700/dixit-product-guide"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-1"
                  >
                    Read more
                  </a>
                  about the different expansions.
                </Form.Text>
              </Form.Group>
              <Button block variant="primary" type="submit" className="mb-2">
                New game
              </Button>
              <div className="text-muted text-center">
                <span>or join an </span>
                <Link to="/existing" className="">
                  existing game
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default NewPage
