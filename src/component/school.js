import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const School = () => {
  return ( 
    <React.Fragment>
      <Container>

        <Row>
          <Col sm={6}>
            <Form.Group controlId="formSchooltName">
              <small className="form-text text-muted">Name of the School</small>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Form.Group controlId="formOLYear">
              <small className="form-text text-muted">Year of O/L's</small>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group controlId="formOLType">
              <small className="form-text text-muted">Type of O/L's</small>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Form.Group controlId="formALYear">
              <small className="form-text text-muted">Year of A/L's</small>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group controlId="formALType">
              <small className="form-text text-muted">Type of A/L's</small>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Form.Group controlId="formALSpecilisation">
              <small className="form-text text-muted">A/L Specialisation</small>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
        </Row>

      </Container>
    </React.Fragment>
  );
}

export default School;