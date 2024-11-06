// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Change to HashRouter
import App from "./App.jsx";
import ProjectPage from "./components/ProjectPage"; // Import the new ProjectPage component
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:id" element={<ProjectPage />} />{" "}
        {/* Route for project details */}
      </Routes>
    </Router>
  </React.StrictMode>
);
