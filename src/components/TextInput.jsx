import classes from "../styles/TextInput.module.css";

export default function TextInput({ icon, ...rest /* (type, placeholder) */ }) {
  return (
    <>
      <div className={classes.textInput}>
        <input {...rest} /* type={type} placeholder={placeholder} */ />
        <span className="material-icons-outlined">{icon}</span>
      </div>
    </>
  );
}
