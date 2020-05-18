import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../layout"
import styles from "./loading.module.scss"
import { AiOutlineReload } from "react-icons/ai"

const Loading = () => (
  <Layout>
    <Container className="mt-3">
      <Row>
        <Col className="text-center">
          <AiOutlineReload
            className={`${styles.loadingIcon} mt-5`}
          ></AiOutlineReload>
          <p className="text-muted">Loading</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Loading
