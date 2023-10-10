export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img" id="About--section">
        <img src="./img/myPhoto.png" alt="aboutMe" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section-description">
            As a dedicated full-stack developer, I orchestrate the entire web
            development symphony. Proficient in both frontend technologies and
            backend frameworks
          </p>
          <p className="hero--section-description">
            I harmonize seamless, interactive user interfaces with robust
            server-side functionalities. Passionate about crafting end-to-end
            solutions that redefine digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
