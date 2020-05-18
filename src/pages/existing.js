import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import { Link, navigate } from "gatsby"
import api from "../services/api"

const LoginPage = () => {
  const [gameCode, setGameCode] = useState("")
  const [playerName, setPlayerName] = useState("")

  const handleJoinGame = event => {
    event.preventDefault()
    api.getGame(gameCode).then(game => {
      debugger
      api.addPlayer({ gameId: game.id, playerName }).then(() => {
        navigate("/game", { state: { id: game.id } })
      })
    })
  }

  return (
    <Layout pageInfo={{ pageName: "existing" }}>
      <Container className="mt-3">
        <Row>
          <Col>
            <h4 className="mb-4">Join an existing game</h4>
            <Form onSubmit={handleJoinGame}>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  placeholder="Player name"
                  value={playerName}
                  onChange={e => setPlayerName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="existingGame" className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Game code"
                  value={gameCode}
                  onChange={e => setGameCode(e.target.value)}
                />
                <Form.Text className="text-muted">
                  This code should look something like `B123`
                </Form.Text>
              </Form.Group>
              <Button block variant="primary" type="submit" className="mb-2">
                Join game
              </Button>
              <div className="text-muted text-center">
                <span>or create a </span>
                <Link to="/">new game</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default LoginPage
