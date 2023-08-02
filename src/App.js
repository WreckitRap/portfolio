import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavBar';
import Home from './pages/Home';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;





/* import {Container} from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import AppNavbar from './components/AppNavBar';


function App() {
  return (
      
      <Router>
      <Container fluid className="appContainer">
          <div>
          <AppNavbar/>
          </div>
          <>
            <Home/>
          </>    
      </Container>
      </Router>
   
  );
}

export default App; */
