import "./CSS/button.css";

export function Button(props) {
  return (
    <a href={props.url}>
      <span className="mainbutton">{props.label}</span>
    </a>
  );
}
