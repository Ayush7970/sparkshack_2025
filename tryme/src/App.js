import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ExternalResources from "./Components/External";


const MeetTheTeam = () => <div>Meet the Team Page</div>;
const About = () => <div>About Us Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/external-resources" element={<ExternalResources />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
