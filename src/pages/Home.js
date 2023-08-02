import React from "react";
import {Row, Col, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Illustration3 from '../images/illustration.png';
import Illustration2 from '../images/illustration2.png';
import Illustration1 from '../images/illustration3.gif';
//import Highlights from '../components/Highlights'

export default function Home() {

  return (

      <div>
        <div id="IntroText">
          <h1>FULL STACK WEB DEVELOPER</h1>
          <p>Think - Design - Code</p>
        </div>
        <div id="Intro">
        <div id="Introduction">
          <h1>ABOUT ME</h1>
          <p>Hi! I'm Ralph Tungcul. I'm currently working as a Web Developer at Tensei Philippines Inc. I'm passionate to learn new tools and explore new domains. Currently, I'm invested in developing projects using Java and MySQL. During my spare hours, I play around with HTML, CSS, Javascript, Node JS, React JS and MongoDB.</p>
        </div>

        <div id="photo-one">
          <img src={Illustration2} alt="Introduction"/>
        </div>
        <div id="languages-container">
          <h3>Languages/Frameworks:</h3>
          <div>
            <img src={Illustration1} alt="Introduction"/>
          </div>
          <div>
            <div id="languagesicons">
              <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
                            <img src="https://img.icons8.com/ultraviolet/40/000000/react--v2.png" />
                            <img src="https://img.icons8.com/color/48/000000/nodejs.png" />
                            <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" />
                            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />
                            <img src="https://img.icons8.com/color/48/000000/css3.png" />
                            <img src="https://img.icons8.com/ios-filled/50/000000/php-logo.png" />
                            <img src="https://img.icons8.com/color/48/000000/git.png" />
                            <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" />
                            <img src="https://img.icons8.com/color/48/000000/python--v1.png" />
                            <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />
                            <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png" />
            </div>
          </div>
        </div>
        </div>
        <div id="experience">
          <div id="heading">
            <h3>MY EXPERIENCE:</h3>
          </div>
          <div id="illustration3">
            <img src={Illustration3} alt="Introduction"/>
          </div>
          <Row className="mt-3 mb-3">
            <Col xs={12} md={4}>
              <Card className="cardHighlight p-3" id="card">
                <Card.Body>
                  <Card.Title id="pcm"><strong>PROJECT CONTROL MANAGER</strong></Card.Title>
                   <Card.Subtitle>Jezka Construction Corporation</Card.Subtitle>
                  <Card.Subtitle>(April 2019 to August 2020)</Card.Subtitle>
                  <Card.Text>
                    Formulated effective tactics to attain high-quality results, foster customer contentment, and optimize resource utilization.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="cardHighlight p-3" id="cardTwo">
                <Card.Body>
                  <Card.Title id="ps"><strong>PROJECT SUPERVISOR</strong></Card.Title>
                  <Card.Subtitle>Wuhan Fiberhome</Card.Subtitle>
                  <Card.Subtitle>(September 2020 to April 2022)</Card.Subtitle>
                  <Card.Text>
                   Ensure the prompt and efficient delivery of project deliverables, oversee team progress and provide regular updates to the immediate supervisor, and collaborate with partner stakeholders and the company as necessary.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="cardHighlight p-3" id="cardThree">
                <Card.Body>
                  <Card.Title id="wb"><strong>WEB DEVELOPER</strong></Card.Title>
                  <Card.Subtitle>Tensei Philippines Inc.</Card.Subtitle>
                   <Card.Subtitle>(August 2023 up to Present)</Card.Subtitle>
                  <Card.Text>
                    Building websites from scratch or using existing frameworks, languages, and content management systems (CMS).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <div id="contact">
              <h3>CONTACT ME:</h3>
              <h2>RALPH TUNGCUL</h2>
              <div id="quote">Learning Everyday ...</div>

              <div id="socialmedias">
                <a href="https://www.linkedin.com/in/ralph-tungcul-07907526b/" target="_new">
                  <FontAwesomeIcon icon={fab.faLinkedinIn} />
                </a>
                <a href="https://www.facebook.com/ralph.tungcul?mibextid=9R9pXO" target="_new">
                  <FontAwesomeIcon icon={fab.faFacebook} />
                </a>
                <a href="https://github.com/WreckitRap" target="_new">
                  <FontAwesomeIcon icon={fab.faGithub} />
                </a>
              </div>
              <div id="copyright">
                <p>&copy; {new Date().getFullYear()} PORTFOLIO</p>

              </div>
            </div>
      </div>

  )
}