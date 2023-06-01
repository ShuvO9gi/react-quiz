export default function Query({ text1, text2, href }) {
  return (
    <div className="info">
      {text1}
      <a href={href}>{text2}</a> instead.
    </div>
  );
}
