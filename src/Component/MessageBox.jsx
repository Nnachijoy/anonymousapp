import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sendmessage from '../assets/sendmessage.png';
import './MessageBox.css';
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

function MessageBox() {
  const [message, setMessage] = useState('');
  const [remainingChars, setRemainingChars] = useState(500);
  const [exceededLimit, setExceededLimit] = useState(false);

  const handleMessageChange = (event) => {
    const inputMessage = event.target.value;
    const messageLength = inputMessage.length;
    if (messageLength <= 500) {
      setMessage(inputMessage);
      setRemainingChars(500 - messageLength);
      setExceededLimit(false);
    } else {
      setExceededLimit(true);
    }
  };

  const handleMessageSend = () => {
    if (message.trim() !== '') {
      window.location.href = `/displaymessage/${encodeURIComponent(message)}`;
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '5rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column w-100'>
              <h2 className="fw-bold mb-2 align-items-center mx-auto">Say Something...</h2>
              <p className="text-white-50 mb-5">
                Unleash Your Thoughts, Safeguard Your Identity.
                Anonymously share messages without fear of exposure."
              </p>

              <div className='mb-5 mx-5 w-100' style={{ fontSize: '18px' }}>Leave a message here</div>

              <div className={`input-container ${exceededLimit ? 'exceeded-limit' : ''}`}>
        <input
          type="text"
          placeholder={`${remainingChars} characters remaining...`}
          style={{ width: '100%' }}
          value={message}
          onChange={handleMessageChange}
        />
        {exceededLimit && <p className="limit-warning text-danger">You have exceeded the character limit!</p>}
      </div>

      <button className="hero-button mt-3" onClick={handleMessageSend}>
        <span>Send Message</span>
        <img src={sendmessage} alt="Send" className="send-icon" />
      </button>


            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default MessageBox;
