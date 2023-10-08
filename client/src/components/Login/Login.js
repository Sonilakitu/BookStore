import React, { useState } from 'react';
import './AuthStyles.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const userCredentials = {
        username: email,
        password,
      };

      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      if (response.ok) {
        console.log('Login successful');
      } else {
        // If the response status is not 200, handle the error
        // You can display an error message to the user or perform other actions
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
