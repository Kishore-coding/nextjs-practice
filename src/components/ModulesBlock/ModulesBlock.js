import React from "react";
import { Container } from "react-bootstrap";
import ServicesComponent from "../ServicesComponent/ServicesComponent";
import StatisticsComponent from "../StatisticsComponent/StatisticsComponent";
import FaqComponent from "../FaqComponent/FaqComponent";

const ModulesBlock = ({ moduleData }) => {
  console.log(moduleData, "modddd");
  return (
    <div className="module-block-wrapper">
      {moduleData?.map((module) => {
        return (
          <div key={module.id}>
            {module.__component === "page-modules.service-block" && <ServicesComponent data={module} />}
            {module.__component === "page-modules.statistics" && <StatisticsComponent data={module} />}
            {module.__component === "page-modules.faq" && <FaqComponent data={module} />}
          </div>
        );
      })}
    </div>
  );
};

export default ModulesBlock;
