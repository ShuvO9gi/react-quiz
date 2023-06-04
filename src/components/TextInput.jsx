import classes from "../styles/TextInput.module.css";

export default function TextInput({ icon, ...rest /* (type, placeholder) */ }) {
  return (
    <>
      <div class={classes.textInput}>
        <input {...rest} /* type={type} placeholder={placeholder} */ />
        <span class="material-icons-outlined">{icon}</span>
      </div>
    </>
  );
}
