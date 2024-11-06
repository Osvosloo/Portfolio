// import React from "react";
import ".././styles/Hero.css";
// import heroImage from ".././assets/monkeHeadshot.jfif";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>I&apos;m Stephan, but you can call me Vossie!</h1>
        <p>
          I&apos;m a builder. I like tinkering with websites, games and building
          apps that make life a little easier.
        </p>
        <button className="hero-button">
          <Link to="contact-me" smooth={true} duration={400}>
            Let&apos;s chat
          </Link>{" "}
        </button>
      </div>
      {/* <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div> */}
    </section>
  );
}

export default Hero;
