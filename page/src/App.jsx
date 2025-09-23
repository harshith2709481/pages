import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In clicked with:', { email, password });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!signUpEmail) newErrors.signUpEmail = 'Email is required';
    if (!signUpPassword) newErrors.signUpPassword = 'Password is required';
    if (signUpPassword !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Sign Up clicked with:', { signUpEmail, signUpPassword });
      setShowSignUp(false);
    }
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <span className="sign-up-link" onClick={() => setShowSignUp(true)}>Sign Up</span></p>
      {showSignUp && (
        <div className="popup">
          <div className="popup-content">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUpSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
              />
              {errors.signUpEmail && <div className="error">{errors.signUpEmail}</div>}
              <input
                type="password"
                placeholder="Password"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
              />
              {errors.signUpPassword && <div className="error">{errors.signUpPassword}</div>}
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
              <button type="submit">Sign Up</button>
              <button type="button" onClick={() => setShowSignUp(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;