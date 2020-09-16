import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import DateTimePicker from './dateTimePicker';
import RoleSelector from './roleSelector';
//import './formStudent.css';

class StudentForm extends Component {
  state = { 
    title: [ "Mr", "Ms", "Dr" ],
    firstName: "",
    surname: "",
    mobileNo: "",
    whatsappNo: "",
    viberNo: "",
    email: "",
    dateofBirth: "",
    residingCity: "",
    residingDistrict: "",

  }

  rationButton = (event) => {
    console.log(event.target.id);
  }
  
  render() { 
    return ( 
      <div>
        <Container>            
          <Form>

            <Row>
              <Col sm={2}>
                <Form.Group controlId="formTitle">
                <small className="form-text text-muted">Title</small>
                  <Form.Control as="select" placeholder="">
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                  </Form.Control>                  
                </Form.Group>
              </Col>

              <Col sm={5}>
                <Form.Group controlId="formFirstName">
                  <small className="form-text text-muted">First Name</small>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
  
              <Col sm={5}>    
                <Form.Group controlId="formSurname">
                <small className="form-text text-muted">Surname</small>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                <Form.Group controlId="formMobileNo">
                  <small className="form-text text-muted">Mobile No</small>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>

              <Col sm={4}>
                <Form.Group controlId="formWhatsappNo">
                  <small className="form-text text-muted">Whatsapp No</small>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
  
              <Col sm={4}>    
                <Form.Group controlId="formViberNo">
                  <small className="form-text text-muted">Viber No</small>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm={8}>    
                <Form.Group controlId="formEmail">
                  <small className="form-text text-muted">E mail</small>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col sm={2}>
                <DateTimePicker />
              </Col>
            </Row>
            
            <Row>
              <Col>
                <Form.Group controlId="formEmail">
                  <small className="form-text text-muted">Residing District</small>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail">
                  <small className="form-text text-muted">Residing City</small>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
            </Row>
            {/* 
            <Row>
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" onChange={this.rationButton} />
                <label className="custom-control-label" htmlFor="customRadio1">I'm still schooling </label>
              </div>
            </Row>

            <Row>
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" onChange={this.rationButton} />
                <label className="custom-control-label" htmlFor="customRadio2">After completing my schooling now I m following my higher/ undergraduate studies</label>
              </div>
            </Row>

            <Row>
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" onChange={this.rationButton} />
                <label className="custom-control-label" htmlFor="customRadio3">After completing my higher/ undergraudate studies now I m looking for an employment/ postgraduate studies</label>
              </div>
            </Row>
            */}
            <Row>
              <Col>
                <RoleSelector />
              </Col>
            </Row>
            
          </Form>          
        </Container>

        
          
            
          
          
        

      </div>

    );
  }
}
 
export default StudentForm;