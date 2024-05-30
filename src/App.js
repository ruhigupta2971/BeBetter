import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Media from "./routes/Media";
import Navbar from "./components/Navbar";
import LoginSignup from "./components/LoginSignup";
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
