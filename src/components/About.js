import React from 'react';
import { image } from '../data/user'; // Import the image from data/user.js file.

const About = () => {
  return (
    <div>
      <img src={image} alt="About" />
      <h1>About Me</h1>
      <p>This is the about section of the portfolio.</p>
    </div>
  );
};

export default About; // Default export
