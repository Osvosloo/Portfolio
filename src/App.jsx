import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero id="hero" />
      <Projects id="projects" />
      <ContactMe id="contact-me" />
      <Footer />
    </div>
  );
}

export default App;
