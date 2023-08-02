import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <div id="contact_me">
      <h1 id="me">CONTACT ME</h1>
      <Container>
        <Row className="container_card">
          <div className="card_contact">Let's Work Together!</div>
          <div className="card_contact">Call me: +639169326891</div>
          <div className="card_contact">Email me: tungculralph_15@gmail.com</div>
          <div className="card_contact">Have a good day!</div>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
