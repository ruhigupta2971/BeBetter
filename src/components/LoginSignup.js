import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-container">
      <div className="form-container">
        {isLogin ? (
          <form className="login-form">
            <h2>Login</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p onClick={toggleForm}>Don't have an account? Sign up</p>
          </form>
        ) : (
          <form className="signup-form">
            <h2>Sign Up</h2>
            <input type="Name" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Sign Up</button>
            <p onClick={toggleForm}>Already have an account? Login</p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
