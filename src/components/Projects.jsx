import "../styles/Projects.css";

const projects = [
  // {
  //   id: 1,
  //   title: "This Website",
  //   symbol: "💻",
  //   description: "Web Design and Architecture.",
  //   link: "https://example.com/project1",
  // },
  {
    id: 2,
    title: "Game Development",
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
    title: "Goal Tracking App",
    symbol: "🎯",
    description:
      "An app for managing daily goals with progress tracking and AI consistency review.",
    link: "https://example.com/goal-tracking-app",
  },
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
