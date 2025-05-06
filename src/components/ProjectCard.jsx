import "../css/ProjectCard.css";
function ProjectCard({ cardData }) {
  // const CardData = {
  //   id: 1,
  //   image: {},
  //   languages: "react,javascript,css,html",
  //   title: "Portfolio",
  //   description: "tells you about me",
  // };
  return (
    <>
      <div className="project-card">
        <div className="pic-div">{cardData.Image}</div>
        <div className="languages">{cardData.languages} </div>
        <div className="card-body">
          <h2 className="title">{cardData.title}</h2>
          <p className="description"> {cardData.description}</p>
          <a href={cardData.url} target="_blank" rel="noopener noreferrer">
            <button className="live-btn">live ↔ </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default ProjectCard;
