import {Row, Col, Card} from 'react-bootstrap';
import '../App.css';


export default function Highlights() {

	return (

		<Row className="mt-3 mb-3">
			<Col xs={12} md={4}>
				<Card className="cardHighlights" id="cardOne">
				  <div class="card">
				    <div class="header">My Skills</div>
				    <div class="body">
				      <div class="skill">
				        <div class="skill-name">HTML</div>
				        <div class="skill-level">
				          <div class="skill-percent"></div>
				        </div>
				        <div class="skill-percent-number">90%</div>
				      </div>
				      <div class="skill">
				        <div class="skill-name">CSS</div>
				        <div class="skill-level">
				          <div class="skill-percent"></div>
				        </div>
				        <div class="skill-percent-number">93%</div>
				      </div>
				      <div class="skill">
				        <div class="skill-name">JavaScript</div>
				        <div class="skill-level">
				          <div class="skill-percent"></div>
				        </div>
				        <div class="skill-percent-number">95%</div>
				      </div>
				    </div>
				  </div>
				</Card>
			</Col>

			<Col xs={12} md={4}>
				<Card className="cardHighlight p-2" id="cardTwo">
				  <Card.Body>
				    <Card.Title>Quality Products</Card.Title>
				    <Card.Text>
				      Quality products, guaranteed. Elevate your standards and experience excellence with our handpicked selection. Shop with confidence, satisfaction awaits!
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>

			<Col xs={12} md={4}>
				<Card className="cardHighlight p-2" id="cardThree">
				  <Card.Body>
				    <Card.Title>Let's talk about your upgrades</Card.Title>
				    <Card.Text>
				      Ready for an upgrade? Let's talk! Discover the latest enhancements to elevate your life and experiences. Get started now!
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>
		</Row>
	)
}







