import "../css/SkillsBox.css";
function SkillsBox({ title, languages }) {
  return (
    <div className="skills-box">
      <h3>{title}</h3>
      {languages.map((lang, index) => (
        <p key={index}>{lang}</p>
      ))}
    </div>
  );
}
export default SkillsBox;
