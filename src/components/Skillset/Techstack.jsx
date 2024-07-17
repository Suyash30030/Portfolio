import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiJava,
  DiGit,
} from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiHtml5,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
