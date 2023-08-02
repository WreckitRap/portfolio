import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Remove NavLink import if you don't need it
import '../App.css';

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3" id="navbar">
      <Container fluid className="appNavBar" id="navContainer">
        <Link to="/" className="navbar-brand">
          PORTFOLIO
        </Link>
        <Nav className="ms-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}



/*import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';


export default function AppNavbar() {

	return (
		
		<Navbar expand="lg" className="bg-body-tertiary p-3" id="navbar">
			<Container fluid className="appNavBar" id="navContainer">
				<Navbar.Brand href="">
				PORTFOLIO
				</Navbar.Brand>
				<Nav className="ms-auto">
					<Nav.Link href="">
					Home
					</Nav.Link>
					<Nav.Link href="#projects">
					Projects
					</Nav.Link>
					<Nav.Link href="#resume">
					Resume
					</Nav.Link>
					<Nav.Link href="#contact">
					Contact
					</Nav.Link>
				</Nav>
				
			
			</Container>
		</Navbar>
		



	)
} */


