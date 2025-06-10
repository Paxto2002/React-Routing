import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1 className="neon-glow">📞 Contact Us Page</h1>
      <p>Get in touch with us for any queries or support.</p>
      <button className="button" onClick={handleClick}>Move to Home Page</button>
    </div>
  );
};

export default Contact;
