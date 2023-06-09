import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Fun from "./Messages/Fun";
import Serious from "./Messages/Serious";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Messages = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Special messages</h2>
                  <p>Why I love you... both serious and fun points. Don't forget to check both serious and fun tabs!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Serious</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Fun</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Info</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Serious />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Fun />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>The first message is unlocked on 10th June 2023 8am. Every hour later, a new message is unlocked. Check back every hour for new messages.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
