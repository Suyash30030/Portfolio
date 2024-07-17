import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import learning from "../assets/projects/Learning.png";
import todo from "../assets/projects/To_Do_List.webp";
import chatApp from "../assets/projects/ChatApp.jpg";
import porsche from "../assets/projects/Porsche.png";
import regis from "../assets/projects/Registration.png";
import landing from "../assets/projects/Landing-Page.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Nodejs ChatApp using Api"
              description="A Node.js ChatApp using APIs is a real-time messaging application built on the Node.js runtime environment. It leverages APIs to facilitate communication between users, allowing them to send and receive messages instantly. The application provides a seamless chat experience by utilizing asynchronous event-driven architecture, making it efficient and scalable for handling multiple users concurrently."
              ghLink="https://github.com/Suyash30030/Nodejs-Chat-App-using-Api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do List"
              description="A to-do list is a simple yet effective tool for organizing tasks and managing productivity. It typically consists of a list of items or tasks that need to be completed, often categorized by priority or deadline. Users can add, edit, mark as complete, and delete tasks as they progress through their work or personal projects. To-do lists help users stay focused, prioritize effectively, and track their progress toward achieving their goals."
              ghLink="https://github.com/Suyash30030/To-do-list"
              demoLink="https://suyash30030.github.io/To-do-list/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={regis}
              isBlog={false}
              title="Registration Panel"
              description="A registration page is a web form that allows users to sign up and create accounts for accessing a website or application. It typically collects essential information such as username, email address, password, and sometimes additional details like name, age, or interests. The registration process often includes validation to ensure that the information provided is accurate and secure. Upon successful registration, users are usually redirected to a confirmation page or directly logged into their new accounts, ready to explore the platform's features."
              demoLink="https://suyash30030.github.io/Registration-Form/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learning}
              isBlog={false}
              title="Learning Website"
              description=" Explore essential concepts from basic operations like concatenation to advanced techniques such as regular expressions. Our interactive tutorials and practical examples empower learners to master string manipulation and enhance their coding proficiency step by step."
              ghLink="https://github.com/Suyash30030/Learning-Website"
              demoLink="https://suyash30030.github.io/Learning-Website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={porsche}
              isBlog={false}
              title="Porsche Website-Clone"
              description="A Porsche website clone replicates the elegance and functionality of the original Porsche website, offering users a premium online experience synonymous with the luxury automotive brand."
              ghLink="https://github.com/Suyash30030/E-Commerce-Website"
              demoLink="https://suyash30030.github.io/E-Commerce-Website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landing}
              isBlog={false}
              title="Price-landing-page"
              description="The price landing page is designed to provide users with clear and detailed information about the pricing options available for integrating ChatGPT into their applications. It outlines different plans tailored to accommodate varying needs, whether for individual developers, small businesses, or large enterprises. "
              ghLink="https://github.com/Suyash30030/ChatGPTPricing"
              demoLink="https://suyash30030.github.io/ChatGPTPricing/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects