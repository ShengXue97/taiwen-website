import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Fun from "./Messages/Fun";
import Serious from "./Messages/Serious";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Messages = () => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get('https://api.ipify.org/?format=json');
        setIpAddress(response.data.ip);
        console.log("IP address:", response.data.ip)
      } catch (error) {
        console.error('Error retrieving IP address:', error);
      }
    };

    fetchIpAddress();
  }, []);

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
                        <Serious ip={ipAddress} />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Fun ip={ipAddress} />
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
