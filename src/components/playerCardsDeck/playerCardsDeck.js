import React from "react"
import Row from "react-bootstrap/Row"
import PlayerCard from "../playerCard/playerCard"
import PropTypes from "prop-types"
import styles from "./playerCardsDeck.module.scss"

const PlayerCardsDeck = ({ players }) => {
  return (
    <Row className={styles.playerCardsDeck} xs={3} sm={6}>
      {players.map(p => (
        <PlayerCard name={p.name} score={p.score} state={p.state}></PlayerCard>
      ))}
    </Row>
  )
}

PlayerCardsDeck.propTypes = {
  players: PropTypes.arrayOf(PlayerCard.propTypes),
}

export default PlayerCardsDeck
