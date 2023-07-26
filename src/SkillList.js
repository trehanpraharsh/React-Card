import "./styles.css";

export default function SkillList(props) {
  let { name, design } = props;
  let colorSkill = { backgroundColor: design.bg, color: design.cl };
  return (
    <div className="skill" style={colorSkill}>
      {name}
    </div>
  );
}

// function colorGenerator() {
//   let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   return "#" + randomColor;
// }
