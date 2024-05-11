import React from 'react';
import anonymousImage from '../assets/anonymousImage.png';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';
import {Link} from 'react-router-dom'
import sendmessage from '../assets/sendmessage.png';

const Hero = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <div className='hero-text'>
              Send Secret Anonymous Message
            </div>

            <div className='hero-paragraph'>
              Speak freely, Stay Anonymous. No one can know who sent it!<br/>
              Send messages without revealing your identity.
            </div>

            <div>
        
<Link to='/signup'>
  <button className='hero-button'>
    Send a message
    <img src={sendmessage} alt="Send" className="send-icon" />
  </button>
</Link>


            </div>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <img src={anonymousImage} alt="anonymous-img" className='img-fluid w-100'/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;

