import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./FaqComponent.scss"

const FaqComponent = ({ data }) => {
  return (
    <div className="faq-wrapper spacing-sections">
      <Container>
        <div className="faq-section">
          <h2 className="heading">{data.heading}</h2>
          {data.faq_list?.map((list, index) => {
            let value = index?.toString();
            return (
              <div className="faq-item" key={list.id}>
                <Accordion>
                  <Accordion.Item eventKey={value}>
                    <Accordion.Header>{list.title}</Accordion.Header>
                    <Accordion.Body>{list.description}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default FaqComponent;
