import React, { useState } from 'react';
import { logout } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const RandomNumber = () => {
  const [number, setNumber] = useState(null);
  const navigate = useNavigate();

  const generateRandom = () => {
    const num = Math.floor(Math.random() * 100) + 1;
    setNumber(num);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h2>Random Number Generator</h2>
      <button onClick={generateRandom}>Generate</button>
      {number !== null && <p>Generated Number: {number}</p>}
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default RandomNumber;
