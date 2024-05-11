// Displaymessage.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import blackbackarrow from '../assets/blackbackarrow.png';
import './displaymessage.css';
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

function Displaymessage() {
  const { message } = useParams();

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '5rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column w-100'>
              <p className="fw-bold mb-2 align-items-center mx-auto">Your anonymous messages...</p>
              <p>{decodeURIComponent(message)}</p>
              <Link to={`/viewmessage/${encodeURIComponent(message)}`}> 
                <button className="view-message-button mt-3">
                  <span>View Message</span>
                </button>
              </Link>
              <Link to="/">
                <button className="hero-button mt-3">
                  <span className='me-2'>Back to home</span>
                  <img src={blackbackarrow} alt="Go back" className="go-back-icon" />
                </button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Displaymessage;
