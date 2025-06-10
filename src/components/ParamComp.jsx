import React from 'react';
import { useParams } from 'react-router-dom';

const ParamComp = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="neon-glow">🎓 Student Profile</h1>
      <p>Student ID: <span className="button">{id}</span></p>
    </div>
  );
};

export default ParamComp;
