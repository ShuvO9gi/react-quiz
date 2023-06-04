import { Link } from "react-router-dom";

export default function Query({ text1, text2, href }) {
  return (
    <div className="info">
      {text1}
      <Link to={href}>{text2}</Link> instead.
    </div>
  );
}
