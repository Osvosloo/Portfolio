import React from "react";
import "../styles/Projects.css"; // Update the path if needed

const projects = [
  {
    id: 1,
    title: "This website",
    symbol: "💻",
    description: "Web Design and Architecture.",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Game development",
    symbol: "🎮",
    description: "A multiplayer card game.",
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Big Data",
    symbol: "📊",
    description: "Machinery health reporting automation with SCADA.",
    link: "https://example.com/project3",
  },
  {
    id: 4,
    title: "Big Data",
    symbol: "📊",
    description: "Machinery health reporting automation with SCADA.",
    link: "https://example.com/project4",
  },
  {
    id: 5,
    title: "Big Data",
    symbol: "📊",
    description: "Machinery health reporting automation with SCADA.",
    link: "https://example.com/project5",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">{project.symbol}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
