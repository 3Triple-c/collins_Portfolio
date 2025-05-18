import "../css/Home.css";
import "../css/icon.css";
import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard";
import SkillsBox from "../components/skillsBox";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Home() {
  const CardData = [
    {
      id: 1,
      title: "Portfolio",
      description: "tells you about me",
      languages: "react,javascript,css,html",
      Image: <img src="./images/portfolio.png" className="project-pic" />,
      url: "",
    },
    {
      id: 2,
      title: "binary",
      description: "helps you toconvert decimal to binary",
      languages: "react,javascript,css,html",
      Image: <img src="./images/binary.png" className="project-pic" />,
      url: "https://3triple-c.github.io/base-convert/",
    },
    {
      id: 3,
      title: "calculator",
      description: "calculate anything",
      languages: "react,javascript,css,html",
      Image: <img src="./images/calculator.png" className="project-pic" />,
      url: "https://3triple-c.github.io/mini_calcula/",
    },
    {
      id: 4,
      title: "quickSolveX",
      description: "calculate anything",
      languages: "javascript,css,html",
      Image: <img src="./images/quicksolve.png" className="project-pic" />,
      url: "3triple-c.github.io/base-convert/",
    },
  ];
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
      languages: ["Git", "VS Code"],
    },
  ];
  return (
    <>
      <section className="wrapper">
        <div className="text-content">
          <h2>
            Collins is a<span className="highlight"> web designer</span> and
            <span className="highlight"> front-end developer</span>.
          </h2>
          <p className="about">
            He crafts responsive websites where technologies meet creativity.
          </p>
          <Link to="/contact">
            <button className="contact-btn">contact me !!</button>
          </Link>
        </div>

        <div>
          <img src="./images/image4.jpg" alt="profile" className="profile1" />
          <div className="current-status">
            <div className="smallbox"></div>
            currently working on<span className="current">Portiflio</span>
          </div>
        </div>
      </section>
      <div className="quote">
        <p>With great power comes great electricity bill</p>

        <div className="quoter">- Dr. Who</div>
      </div>
      <section class="projects-section">
        <div class="projects-top">
          <h2 class="projects-title">
            <span className="hash">#</span>projects
          </h2>
          <div class="projects-line"></div>
          <Link to="/works">
            <a href="#" class="view-all-link">
              View all
              <span class="arrow">→</span>
            </a>
          </Link>
        </div>

        <div class="projects-grid">
          {CardData.map(cardData => (
            <ProjectCard cardData={cardData} key={cardData.id} />
          ))}
        </div>
      </section>
      <section className="skills-section">
        <div class="skills-top">
          <h2 class="skills-title">
            <span className="hash">#</span>skills
          </h2>
          <div class="skills-line"></div>
        </div>
        <div className="skills-container">
          {skillData.map((item, idx) => (
            <SkillsBox
              key={idx}
              title={item.title}
              languages={item.languages}
            />
          ))}
        </div>
      </section>
      <section className="about-section">
        <div class="about-top">
          <h2 class="about-title">
            <span className="hash">#</span>about-me
          </h2>
          <div class="about-line"></div>
        </div>
        <div className="about-wrapper">
          <p className="about-me">
            <p>hello i am collins</p>
            I'm a passionate and self-driven Web Designer and Frontend Developer
            with a strong foundation in JavaScript and the React.js ecosystem.
            With a growing interest in crafting user-centric digital
            experiences, I have been focused on building clean, responsive, and
            functional web interfaces for startups, small businesses, and
            students.
            <p>
              {" "}
              Currently in my undergraduate studies, I am actively expanding my
              skill set beyond the frontend. I am committed to becoming a
              full-stack developer, and I’m steadily working toward mastering
              backend technologies to complement my frontend expertise.
            </p>
            <Link to="/about">
              <button className="readmore-btn">
                <span className="RMtext">
                  read more<span class="arrow">→</span>
                </span>
              </button>
            </Link>
          </p>

          <img src="./images/image3.jpg" alt="profile" className="about-pic" />
        </div>
      </section>
      <section className="contact-section">
        <div class="about-top">
          <h2 class="about-title">
            <span className="hash">#</span>contacts
          </h2>
          <div class="contact-line"></div>
        </div>
        <div className="contact-wrapper">
          <p className="contact-text">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me.
          </p>
          <div className="message">
            <p className="mes-me">Message me</p>
            <a
              href="https://wa.me/2348101582544?text=Hello%20there!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="whatsapp">
                <FaWhatsapp className="whatsapp-icon" /> +23408101582544
              </div>
            </a>
            <a
              href="mailto:collinchukss@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="gmail">
                <FaGoogle className="google-icon" /> collinchukss@gmail.com
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
