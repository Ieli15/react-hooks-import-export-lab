import React from 'react';
import { username, city } from '../data/user'; 

const Home = () => {
  return (
    <div>
      <h1>Welcome to {username}'s Portfolio</h1>
      <p>City: {city}</p>
    </div>
  );
};

export default Home; 