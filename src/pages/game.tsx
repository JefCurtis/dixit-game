import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Alert from "react-bootstrap/Alert"
import Layout from "../components/layout"
import Loading from "../components/loading/loading"
import { GiCardRandom } from "react-icons/gi"
import { Link } from "gatsby"
import api from "../services/api"
import { collectIdsAndDocs } from "../services/utilities"

// const players = [
//   {
//     name: "Jef C",
//     score: 12,
//     state: "waiting",
//   },
//   {
//     name: "John S",
//     score: 9,
//     state: "storyteller",
//   },
//   {
//     name: "Rosa D",
//     score: 20,
//     state: "selecting",
//   },
//   {
//     name: "Jeremy",
//     score: 21,
//     state: "waiting",
//   },
//   {
//     name: "Abigail",
//     score: 1,
//     state: "selecting",
//   },
//   {
//     name: "Pixel",
//     score: 17,
//     state: "waiting",
//   },
// ]

const GamePage = ({ location }) => {
  const [game, setGame] = useState({} as any)
  const [loading, setLoading] = useState(true)
  const gameId = location.state ? location.state.id : null

  useEffect(() => {
    api.subscribeToGame(gameId, game => {
      console.log("game: ", game)

      setGame(collectIdsAndDocs(game))
      setTimeout(() => setLoading(false), 500)
    })
  }, [])

  if (loading) {
    return <Loading></Loading>
  } else {
    if (game) {
      return (
        <Layout gameCode={game.code} players={game.players}>
          <Container className="mt-3">
            <Row>
              <Col>
                <h4 className="mb-4">New game screen</h4>
                <pre>game: {game.gameCode}</pre>
              </Col>
            </Row>
          </Container>
        </Layout>
      )
    } else {
      return (
        <Layout>
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
                    Try creating a <Link to="/">new one</Link>, or join an{" "}
                    <Link to="/existing">existing game</Link>.
                  </p>
                </Alert>
              </Col>
            </Row>
          </Container>
        </Layout>
      )
    }
  }
}

export default GamePage
