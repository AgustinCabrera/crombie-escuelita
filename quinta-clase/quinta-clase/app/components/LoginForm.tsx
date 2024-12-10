"use client";
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Login successful!');
    } else {
      alert(data.message);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Email:
        <input className = "text-black" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input className = "text-black" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit">Login</button>
    </form>
    <p>Dont have account yet?</p>
    <a href="/register">Register</a>
    </>
  );
};

export default LoginForm;
