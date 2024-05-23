import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Media from "./routes/Media";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Media" element={<Media />} />
        <Route path="/About" element={<About />} />
        
      </Routes>
    </div>
  );
}
