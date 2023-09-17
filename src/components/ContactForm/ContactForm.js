import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { isMobile } from "react-device-detect";

import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="form-wrapper spacing-sections">
      <Container>
        <h2>Get in Touch</h2>
        <div className="split-section">
          <div className="form-section">
            <Form>
              <Row className="mb-3">
                <Form.Group className={`mb-3 mobile-field`} as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3 mobile-field" as={Col} controlId="formGridNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Enter your number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                  <Form.Label>Your query here</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlButton">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Row>
            </Form>
          </div>
          <div className="contact-side-section">
            <div className="contact-list">
              <div className="list office-address">
                <h3>Office Address</h3>
                <p>513, Siddha Sabareesh Complex, Opp.Kovai Residency, 1st Street, Gandhipuram, Coimbatore - 12</p>
              </div>
              <div className="horizontal-line"></div>
              <div className="list contact-num">
                <h3>Office Number</h3>
                <a href={`tel:+91 9751427841`} target="_blank ">
                  +91 1234567890
                </a>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
              <div className="horizontal-line"></div>
              <div className="list support-mail">
                <h3>Mail us</h3>
                <p>support@colorlib.com</p>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
