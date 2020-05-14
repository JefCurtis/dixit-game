import React from "react"
import styles from "./playerCard.module.scss"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import Badge from "react-bootstrap/Badge"
import PropTypes from "prop-types"

const PlayerCard = ({ state, name, score }) => {
  if (state === "storyteller") {
    return (
      <Col className={styles.playerCard}>
        <Card className={`${styles.storyteller} ${styles.card}`}>
          <Card.Body className={styles.body}>
            <div className={`${styles.title} text-break`}>{name}</div>
            <div>
              <span className={styles.score}>{score}</span>
              <span className={styles.points}>pts</span>
            </div>
            <Badge variant="primary">Storyteller</Badge>
          </Card.Body>
        </Card>
      </Col>
    )
  } else if (state === "selecting") {
    return (
      <Col className={styles.playerCard}>
        <Card className={`${styles.selecting} ${styles.card}`}>
          <Card.Body className={styles.body}>
            <div className={`${styles.title} text-break`}>{name}</div>
            <div>
              <span className={styles.score}>{score}</span>
              <span className={styles.points}>pts</span>
            </div>
            <Badge variant="success">Selecting</Badge>
          </Card.Body>
        </Card>
      </Col>
    )
  } else {
    return (
      <Col className={styles.playerCard}>
        <Card className={`${styles.waiting} ${styles.card}`}>
          <Card.Body className={styles.body}>
            <div className={`${styles.title} text-break`}>{name}</div>
            <div>
              <span className={styles.score}>{score}</span>
              <span className={styles.points}>pts</span>
            </div>
            <Badge variant="secondary">Waiting</Badge>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

PlayerCard.defaultProps = {
  name: "Player name",
  score: 0,
  state: `waiting`,
}

PlayerCard.propTypes = {
  name: PropTypes.string,
  state: PropTypes.string,
  score: PropTypes.number,
}

export default PlayerCard
