import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const PostGraduate = () => {
  return (  
    <React.Fragment>
    <Container>

      <Row>
        <Col sm={6}>
          <Form.Group controlId="formQualificationPost">
            <small className="form-text text-muted">Qualification you follow</small>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <Form.Group controlId="formHigerEduProviderPost">
            <small className="form-text text-muted">Name of the higher education provider</small>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <Form.Group controlId="formDeciplinePost">
            <small className="form-text text-muted">Specialized Decipline</small>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <Form.Group controlId="formYearCompletePost">
            <small className="form-text text-muted">Year of completing the programme  </small>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
      </Row>
      
    </Container>
  </React.Fragment>
  );
}
 
export default PostGraduate;