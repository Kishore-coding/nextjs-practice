import React from "react";
import { Container } from "react-bootstrap";
import "./ServicesComponent.scss";
import Image from "next/image";

const ServicesComponent = ({ data }) => {
  return (
    <div className="service-component-wrapper spacing-sections">
      <Container>
        <div className="service-blocks">
          <h2 className="heading">{data.heading}</h2>
          <p className="sub_heading">{data?.sub_heading}</p>
          <div className="service-list">
            {data.text_image_block?.map((item) => {
              const image = `http://localhost:1337${item?.image?.data?.attributes?.url}`;
              return (
                <div className="list" key={item.id}>
                  <Image src={image} alt="pop" width={40} height={40} />
                  <h3 className="service-name">{item.title}</h3>
                  <p className="service-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesComponent;
