import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import { Link } from "gatsby"

const loginPage = () => {
  return (
    <Layout pageInfo={{ pageName: "existing" }}>
      <Container className="mt-3">
        <Row>
          <Col>
            <h4 className="mb-4">join an existing game</h4>
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Player name" />
              </Form.Group>
              <Form.Group controlId="existingGame" className="mb-4">
                <Form.Control type="text" placeholder="Game code" />
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

export default loginPage
