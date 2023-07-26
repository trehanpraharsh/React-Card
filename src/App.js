import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";
import "./styles.css";

export default function App() {
  const skillsArr = [
    { name: "HTML 💪", rang: { bg: "orange", cl: "black" } },
    { name: "CSS 💪", rang: { bg: "#0083f5", cl: "white" } },
    { name: "JavaScript 🫳", rang: { bg: "#fadd02", cl: "black" } },
    { name: "React 🤝", rang: { bg: "#03b1fc", cl: "#07141f" } },
    { name: "Git & GitHub ✌️", rang: { bg: "black", cl: "white" } },
    { name: "Node.js 🤝", rang: { bg: "#77fc03", cl: "black" } },
  ];

  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
          for each web dev skill that you have,
          customized with props */}
        <div className="skill-list">
          {skillsArr.map(function (itm) {
            return <SkillList name={itm.name} design={itm.rang} />;
          })}
        </div>
        {/* <SkillList name="JavaScript 💪" />
        <SkillList name="HTML & CSS 💪" /> */}
      </div>
    </div>
  );
}
