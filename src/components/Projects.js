import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import pro from "../assets/img/Pro.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "PiHome Connec",
      description:
        "Create a smart home ecosystem with a Raspberry Pi, NFC, and IoT integration for seamless automation, controlled by tapping NFC cards",
      imgUrl: projImg1,
    },
    {
      title: "EcoBin Tracker",
      description:
        "Zigbee based E-menu ordering system using ARM7 TDMI LPC2148",
      imgUrl: projImg2,
    },
    {
      title: "Gesture Mate",
      description:
        "FPGA based Industrial Application Monitoring & Controlling.",
      imgUrl: projImg3,
    },
    {
      title: "Industri Sync",
      description:
        "Real- Time Automation and Monitoring System for Modernized Agriculture using ARM7 TDMI LPC2148",
      imgUrl: projImg4,
    },
    {
      title: "Agri Sync",
      description:
        " Implement a cutting-edge Real-Time Automation and Monitoring System for Modernized Agriculture by leveraging the ARM7 TDMI LPC2148 microcontroller.",
      imgUrl: projImg5,
    },
    {
      title: "AgroPi",
      description:
        "Real- Time Automation and Monitoring System for Modernized Agriculture using ARM7 TDMI LPC2148",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
  <Row className="justify-content-center">
    <Col lg={20} className="text-center p-8 mx-auto">
      <ProjectCard
        title="Coming Soon!"
        description=".....!"
        imgUrl={pro}
      />
    </Col>
  </Row>
</Tab.Pane>

                              <Tab.Pane eventKey="third">
                        {" "}
                        <Row>
                          <Col sm={40}>
                            <ProjectCard
                              title="Comming Soon!"
                              description=".....!"
                              imgUrl={pro}
                            />
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
