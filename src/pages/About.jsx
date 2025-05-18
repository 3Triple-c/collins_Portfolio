import "../css/About.css";
import SkillsBox from "../components/skillsBox";
import FunF from "../components/FunF";
function About() {
  const skillData = [
    {
      title: "Frontend",
      languages: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      languages: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Dev Tools",
      languages: ["Git", "Webpack", "VS Code", "Git", "Webpack"],
    },
    {
      title: "Dev Tools",
      languages: ["Git", "Webpack", "VS Code", "Git", "Webpack"],
    },
    {
      title: "Dev Tools",
      languages: ["Git", "Webpack", "VS Code", "Git", "Webpack"],
    },
    {
      title: "Dev Tools",
      languages: ["Git", "Webpack", "VS Code", "Git", "Webpack"],
    },
  ];
  const Fun = [
    { String: "Bananas are berries; strawberries aren’t" },
    { String: "Octopuses have three hearts" },
    { String: "Sharks are older than trees" },
    { String: "You can't hum with your nose closed" },
    { String: "Honey never spoils" },
    { String: "Venus’s day is longer than its year" },
  ];
  return (
    <>
      <div className="about-header">
        <h2>
          <span className="hash">/</span>about-me
        </h2>
        who am i
      </div>
      <div className="about-wrapper">
        <p className="about-me">
          <p>hello i am collins</p>
          I'm a passionate and self-driven Web Designer and Frontend Developer
          with a strong foundation in JavaScript and the React.js ecosystem.
          With a growing interest in crafting user-centric digital experiences,
          I have been focused on building clean, responsive, and functional web
          interfaces for startups, small businesses, and students.
          <p>
            {" "}
            Currently in my undergraduate studies, I am actively expanding my
            skill set beyond the frontend. I am committed to becoming a
            full-stack developer, and I’m steadily working toward mastering
            backend technologies to complement my frontend expertise.
          </p>
        </p>

        <img src="./images/image3.jpg" alt="profile" className="about-pic" />
      </div>
      <div className="skills-section">
        <div class="skills-top">
          <h2 class="skills-title">
            <span className="hash">#</span>skills
          </h2>
          <div class="skills-line"></div>
        </div>
        <div className="skills-container--about">
          {skillData.map((item, idx) => (
            <SkillsBox
              key={idx}
              title={item.title}
              languages={item.languages}
            />
          ))}
        </div>
      </div>
      <div className="fun-facts-section">
        <h2 class="skills-title">
          <span className="hash">#</span>my-fun-facts
        </h2>
        <div className="fun-facts-container">
          {Fun.map((item, idx) => (
            <FunF key={idx} text={item.String} />
          ))}
        </div>
      </div>
    </>
  );
}
export default About;
