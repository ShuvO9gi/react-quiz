export default function Checkbox({ className, /* l_for, */ text, ...rest }) {
  return (
    <label className={className} /* for={l_for} */>
      <input type="checkbox" {...rest} />
      <span> {text}</span>
    </label>
  );
}
