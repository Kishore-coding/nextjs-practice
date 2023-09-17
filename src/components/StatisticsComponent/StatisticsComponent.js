import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import "./StatisticsComponent.scss";

const StatisticsComponent = ({ data }) => {
  return (
    <div className="statics-wrapper spacing-sections">
      <Container>
        <h2 className="heading">{data.heading}</h2>
        <div className="statistics-list">
          {data?.list_values?.map((list) => {
            const image = `http://localhost:1337${list?.image?.data?.attributes?.url}`;
            return (
              <div className="stat-list" key={list.id}>
                <Image src={image} alt="pop" width={40} height={40} />
                <h3 className="title">{list.title}</h3>
                <p className="sub_title">{list.sub_title}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default StatisticsComponent;
