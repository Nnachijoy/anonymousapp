import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import feedback from '../assets/feedback.png';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons/faReply'; // Import the reply icon
import Dropdown from 'react-bootstrap/Dropdown';
import './adminpage.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

function AdminPage() {

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '5rem', maxWidth: '700px' }}>
            <MDBCardBody className=' d-flex flex-column align-items-center'>
              <img src={feedback} alt="feedback" className="img-fluid" style={{ maxWidth: "100px", maxHeight: "100px" }} />
              <div className="fw-bold mb-2 feedback-text">FEEDBACK</div>

               <Row>
                <Col md={6}>
                <Card style={{ width: '18rem', backgroundColor:'darksalmon' }}>
                <Card.Header>Response #1</Card.Header>
                <Card.Body>
                  <Card.Title>Responses</Card.Title>
                  <Card.Text className="d-flex justify-content-center align-items-center"> 
                    <button className='bg-dark text-white w-50 p-2 border-0'>
                      Reply
                      <span className="ms-1" style={{ verticalAlign: 'middle' }}>
                        <FontAwesomeIcon icon={faReply} />
                      </span>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
                </Col>

                <Col md={6}>
                <Card style={{ width: '18rem', backgroundColor:'darksalmon' }}>
                <Card.Header>Response #1</Card.Header>
                <Card.Body>
                  <Card.Title>Responses</Card.Title>
                  <Card.Text className="d-flex justify-content-center align-items-center"> 
                    <button className='bg-dark text-white w-50 p-2 border-0'>
                      Reply
                      <span className="ms-1" style={{ verticalAlign: 'middle' }}>
                        <FontAwesomeIcon icon={faReply} />
                      </span>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
                </Col>
               </Row>

               
               <Row className='mt-5'>
                <Col>
                <Card style={{ width: '18rem', backgroundColor:'darksalmon' }}>
                <Card.Header>Response #1</Card.Header>
                <Card.Body>
                  <Card.Title>Responses</Card.Title>
                  <Card.Text className="d-flex justify-content-center align-items-center"> 
                    <button className='bg-dark text-white w-50 p-2 border-0'>
                      Reply
                      <span className="ms-1" style={{ verticalAlign: 'middle' }}>
                        <FontAwesomeIcon icon={faReply} />
                      </span>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem', backgroundColor:'darksalmon' }}>
                <Card.Header>Response #1</Card.Header>
                <Card.Body>
                  <Card.Title>Responses</Card.Title>
                  <Card.Text className="d-flex justify-content-center align-items-center"> 
                    <button className='bg-dark text-white w-50 p-2 border-0'>
                      Reply
                      <span className="ms-1" style={{ verticalAlign: 'middle' }}>
                        <FontAwesomeIcon icon={faReply} />
                      </span>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
                </Col>
               </Row>

               
               <Row className='mt-5'>
                <Col>
                <Card style={{ width: '18rem', backgroundColor:'darksalmon' }}>
                <Card.Header>Response #1</Card.Header>
                <Card.Body>
                  <Card.Title>Responses</Card.Title>
                  <Card.Text className="d-flex justify-content-center align-items-center"> 
                    <button className='bg-dark text-white w-50 p-2 border-0'>
                      Reply
                      <span className="ms-1" style={{ verticalAlign: 'middle' }}>
                        <FontAwesomeIcon icon={faReply} />
                      </span>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem', backgroundColor:'darksalmon' }}>
                <Card.Header>Response #1</Card.Header>
                <Card.Body>
                  <Card.Title>Responses</Card.Title>
                  <Card.Text className="d-flex justify-content-center align-items-center"> 
                    <button className='bg-dark text-white w-50 p-2 border-0'>
                      Reply
                      <span className="ms-1" style={{ verticalAlign: 'middle' }}>
                        <FontAwesomeIcon icon={faReply} />
                      </span>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
                </Col>
               </Row>

              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AdminPage;
