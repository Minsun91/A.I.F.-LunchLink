import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === 'konni') {
      navigate('/konni');
    } else {
      navigate('/selector');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <button onClick={() => handleLogin('konni')}>Login as Konni</button>
      <button onClick={() => handleLogin('selector')}>Login as Selector</button>
    </div>
  );
}

export default LoginPage;
