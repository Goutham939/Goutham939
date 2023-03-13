import React, { useState } from 'react';
import { useCookies } from 'react-cookie';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [cookies, setCookie] = useCookies(['user']);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailIsValid(email) && password.length >= 8) {
      const user = cookies.user;
      if (user && user.email === email && user.password === password) {
        setLoggedIn(true);
      } else {
        alert('Invalid email address or password.');
      }
    } else {
      alert('Please enter a valid email address and a password of at least 8 characters.');
    }
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

 
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
