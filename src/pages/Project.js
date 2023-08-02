import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import Illustration4 from '../images/illustration4.png';



const Project = () => {
  return (
    <div>
    <div id="projects">
      <h1>PROJECTS</h1>
    </div>
    <div class="card_container">
    <div class="card_project">
      <div class="card2">
        <h1 id="app">Ecommerce Website App</h1>
        <img src={Illustration4} alt="Introduction" width="450" height="250"/>
        <h3 id="h3">Tools used:</h3>
        <Col id="tools_used">
        <button id="html">
            html
        </button>
        <button id="css">
            css
        </button>
        <button id="react">
            react js
        </button>
        <button id="node">
            node js
        </button>
        </Col>
        <div>
        <a href="https://tungcul-ralph-fullstack-s65-s71.vercel.app/" target="_blank">
        <button class="btn">
          View My App
        </button>
        </a>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Project;
