import ProjectCard from "../components/ProjectCard";
function Works() {
  const CardData = [
    {
      id: 1,
      title: "Portfolio",
      description: "tells you about me",
      languages: "react,javascript,css,html",
      Image: <img src="/images/portfolio.png" className="project-pic" />,
      url: "https://3triple-c.github.io/base-convert/",
    },
    {
      id: 2,
      title: "binary",
      description: "helps you toconvert decimal to binary",
      languages: "react,javascript,css,html",
      Image: <img src="/images/binary.png" className="project-pic" />,
      url: "https://3triple-c.github.io/base-convert/",
    },
    {
      id: 3,
      title: "calculator",
      description: "calculate anything",
      languages: "react,javascript,css,html",
      Image: <img src="/images/calculator.png" className="project-pic" />,
      url: "https://3triple-c.github.io/base-convert/",
    },
    {
      id: 4,
      title: "quickSolveX",
      description: "calculate anything",
      languages: "javascript,css,html",
      Image: <img src="/images/quicksolve.png" className="project-pic" />,
      url: "https://3triple-c.github.io/base-convert/",
    },
    {
      id: 5,
      title: "binary",
      description: "helps you toconvert decimal to binary",
      languages: "react,javascript,css,html",
      Image: <img src="/images/image4.jpg" className="project-pic" />,
      url: "https://3triple-c.github.io/base-convert/",
    },
    {
      id: 6,
      title: "calculator",
      description: "calculate anything",
      languages: "react,javascript,css,html",
      Image: <img src="/images/image4.jpg" className="project-pic" />,
      url: "https://3triple-c.github.io/base-convert/",
    },
    {
      id: 7,
      title: "quickSolveX",
      description: "calculate anything",
      languages: "javascript,css,html",
      Image: <img src="/images/image2.jpg" className="project-pic" />,
      url: "https://3triple-c.github.io/base-convert/",
    },
  ];
  return (
    <>
      <div className="about-header">
        <h2>
          <span className="hash">/</span>Projects
        </h2>
        list of my projects
      </div>
      <div class="projects-grid">
        {CardData.map(cardData => (
          <ProjectCard cardData={cardData} key={cardData.id} />
        ))}
      </div>
    </>
  );
}
export default Works;
