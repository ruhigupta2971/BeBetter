import React, { useState } from "react";
import "./LoginSignup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const navigate = useNavigate(); 

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      toast.error('All fields are required', {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error('Please enter a valid email address', {
        position: "top-center",
      });
    } else if (password !== confirmPassword) {
      toast.error('Passwords do not match', {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error('Password must be at least 5 characters long', {
        position: "top-center",
      });
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      toast.success('Registration successful', {
        position: "top-center",
      });
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      setIsLogin(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.error('All fields are required', {
        position: "top-center",
      });
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        localStorage.setItem("logged_in_user", JSON.stringify(user));
        toast.success('Login successful', {
          position: "top-center",
        });
        // Redirect to a protected page or home page
        navigate("/"); // Use navigate to redirect
      } else {
        toast.error('Invalid email or password', {
          position: "top-center",
        });
      }
    }
  };

  return (
    <div className="login-signup-container">
      <div className="form-container">
        {isLogin ? (
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Login</button>
            <p onClick={toggleForm}>Don't have an account? Sign up</p>
          </form>
        ) : (
          <form className="signup-form" onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Sign Up</button>
            <p onClick={toggleForm}>Already have an account? Login</p>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginSignup;