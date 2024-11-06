/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom"; // Import useParams
import "../styles/ProjectPage.css";
import projects from "./ProjectList";
const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id)); // Find the project by ID

  if (!project) {
    return <div>Project not found!</div>;
  }

  // const {
  //   title,
  //   symbol,
  //   description,
  //   link,
  //   images,
  //   // videoId,
  //   technologies,
  //   features,
  //   testimonials,
  // } = project;

  return (
    <div className="project-page">
      <h1>Coming Soon</h1>
      <p>Currently working on template design...</p>
      {/* <header className="project-header">
        <h1>
          {symbol} {title}
        </h1>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="cta-button">View on App Store</button>
        </a>
      </header>

      <section className="media-section">
        <h2>Media Showcase</h2>
        <div className="image-gallery">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Screenshot ${index + 1}`} />
          ))}
        </div>
        <div className="video-demo">
          <h3>Watch the Demo</h3>
          <div className="video-container"></div>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/DxnDcH2NS5c?si=1UUopsxb_Wxbo2Fw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <section className="technologies-used">
        <h2>Technologies Used</h2>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="testimonials-section">
        <h2>User Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <blockquote key={index}>"{testimonial}" - User Name</blockquote>
        ))}
      </section>

      <footer className="project-footer">
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default ProjectPage;
