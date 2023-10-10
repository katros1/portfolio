import { Link, ScrollLink } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kairos</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a Full Stack Developer with expertise in various programming
            languages and frameworks.
          </p>
        </div>
        <Link spy={true} smooth={true} offset={-70} duration={500} to="Contact">
          <button className="btn btn-primary">Get In Touch</button>
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/myPhoto1.png" alt="Hero Section" />
      </div>
    </section>
  );
}
