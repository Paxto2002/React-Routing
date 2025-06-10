import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1 className="neon-glow">ℹ️ About Page</h1>
      <p>This page provides information about the application or team.</p>
      <button className="button" onClick={handleClick}>Move to Home Page</button>
    </div>
  );
};

export default About;
