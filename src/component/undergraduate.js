import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Undergraduate = () => {
  return ( 
    <React.Fragment>
    <Container>

      <Row>
        <Col sm={6}>
          <Form.Group controlId="formHigerEduProvider">
            <small className="form-text text-muted">Name of the higher education provider</small>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <Form.Group controlId="formQualification">
            <small className="form-text text-muted">Qualification you follow</small>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <Form.Group controlId="formDecipline">
            <small className="form-text text-muted">Specialized Decipline</small>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <Form.Group controlId="formYearComplete">
            <small className="form-text text-muted">Year that you expect to complete the programme </small>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
      </Row>
      
    </Container>
  </React.Fragment>
  );
}
 
export default Undergraduate;