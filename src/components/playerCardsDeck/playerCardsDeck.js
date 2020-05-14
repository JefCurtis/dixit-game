import React from "react"
import Row from "react-bootstrap/Row"
import PlayerCard from "../playerCard/playerCard"
import { arrayOf, shape } from "prop-types"
import styles from "./playerCardsDeck.module.scss"

const PlayerCardsDeck = ({ players }) => {
  return (
    <Row className={styles.playerCardsDeck} xs={3} sm={6}>
      {players.map((p, i) => (
        <PlayerCard
          key={i}
          name={p.name}
          score={p.score}
          state={p.state}
        ></PlayerCard>
      ))}
    </Row>
  )
}

PlayerCardsDeck.propTypes = {
  players: arrayOf(shape({ ...PlayerCard.propTypes })),
}

export default PlayerCardsDeck
