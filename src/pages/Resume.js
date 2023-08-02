import React from 'react';
import resumePdf from '../files/resume.pdf'; // Import the resume PDF file

const Resume = () => {
  const openResumePdf = () => {
    // Open the resume PDF in a new tab when the button is clicked
    window.open(resumePdf, '_blank');
  };

  return (
    <div id="resume">
      <h1>RESUMÉ</h1>
      <p>
        <button onClick={openResumePdf} id="pdf">View my Resumé</button>
      </p>
    </div>
  );
};

export default Resume;

