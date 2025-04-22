import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../utils/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredUser = localStorage.getItem("registeredUser");
    const registeredPass = localStorage.getItem("registeredPass");
    
    if (username === registeredUser && password === registeredPass) {
      login(username);
      navigate("/random");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username"
          value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>No account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
